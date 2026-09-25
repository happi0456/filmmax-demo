import React, { useState } from 'react';
import { Header } from './components/Header';
import { ConflictDetector } from './components/ConflictDetector';
import { DepartmentsPage } from './components/DepartmentsPage';
import { CallSheetPage } from './components/CallSheetPage';
import { ReceiptModal } from './components/ReceiptModal';

export default function App() {
  const [currentRole, setCurrentRole] = useState('director');
  const [activePage, setActivePage] = useState('engine');
  const [receiptScene, setReceiptScene] = useState(null);

  return (
    <div className="min-h-screen bg-[#fafafa] text-neutral-900 font-sans selection:bg-neutral-200">
      {/* 1. Header with Role Switcher & 3-Page Navigation */}
      <Header
        currentRole={currentRole}
        onRoleChange={setCurrentRole}
        activePage={activePage}
        onPageChange={setActivePage}
      />

      {/* Main Content: Dedicated Separate Pages */}
      <main className="max-w-5xl mx-auto px-4 py-6">
        {/* Page 1: Resource Requisition & Conflict Detector */}
        {activePage === 'engine' && (
          <section aria-label="Conflict Engine">
            <ConflictDetector onOpenReceipt={setReceiptScene} />
          </section>
        )}

        {/* Page 2: 7 Departments & Role-Based Access Control */}
        {activePage === 'departments' && (
          <section aria-label="Departments & RBAC">
            <DepartmentsPage
              currentRole={currentRole}
              onRoleChange={setCurrentRole}
            />
          </section>
        )}

        {/* Page 3: Daily Call Sheet & Production Stages */}
        {activePage === 'callsheet' && (
          <section aria-label="Daily Call Sheet & Stages">
            <CallSheetPage />
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white mt-12 py-4 text-xs text-neutral-400">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
          <span>FILM-MAX · Production Logistics Platform</span>
          <span className="font-mono text-[11px]">Clearance: {currentRole}</span>
        </div>
      </footer>

      {/* Digital Receipt Modal */}
      <ReceiptModal scene={receiptScene} onClose={() => setReceiptScene(null)} />
    </div>
  );
}
