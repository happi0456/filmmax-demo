import React, { useState } from 'react';
import { ChevronDown, Shield } from 'lucide-react';
import { USER_ROLES } from '../data/mockData';

export function Header({ currentRole, onRoleChange, activePage, onPageChange }) {
  const [roleOpen, setRoleOpen] = useState(false);
  const activeRole = USER_ROLES.find((r) => r.id === currentRole) || USER_ROLES[0];

  return (
    <header className="border-b border-neutral-200 bg-white sticky top-0 z-30">
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-base tracking-tight text-neutral-900">
            FILM-MAX
          </span>
        </div>

        {/* 3 Separate Pages Navigation */}
        <nav className="flex items-center gap-1 text-xs">
          <button
            onClick={() => onPageChange('engine')}
            className={`px-3 py-1.5 rounded transition-colors cursor-pointer ${
              activePage === 'engine'
                ? 'bg-neutral-900 text-white font-medium shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
            }`}
          >
            Conflict Engine
          </button>
          <button
            onClick={() => onPageChange('departments')}
            className={`px-3 py-1.5 rounded transition-colors cursor-pointer ${
              activePage === 'departments'
                ? 'bg-neutral-900 text-white font-medium shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
            }`}
          >
            Departments
          </button>
          <button
            onClick={() => onPageChange('callsheet')}
            className={`px-3 py-1.5 rounded transition-colors cursor-pointer ${
              activePage === 'callsheet'
                ? 'bg-neutral-900 text-white font-medium shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
            }`}
          >
            Call Sheet & Stages
          </button>
        </nav>

        {/* Global Role Switcher */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setRoleOpen(!roleOpen)}
            className="flex items-center gap-1.5 text-xs text-neutral-700 bg-white hover:bg-neutral-50 border border-neutral-300 py-1.5 px-2.5 rounded transition-colors cursor-pointer"
          >
            <Shield className="w-3.5 h-3.5 text-neutral-500" />
            <span className="font-medium text-neutral-900 max-w-[130px] truncate">
              {activeRole.shortLabel}
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
          </button>

          {roleOpen && (
            <>
              <div className="fixed inset-0 z-20" onClick={() => setRoleOpen(false)} />
              <div className="absolute right-0 mt-1 w-64 bg-white border border-neutral-200 rounded-md shadow-lg z-30 py-1">
                <div className="px-3 py-1.5 border-b border-neutral-100 text-[11px] text-neutral-400 font-mono">
                  SELECT ROLE CLEARANCE:
                </div>
                {USER_ROLES.map((role) => (
                  <button
                    key={role.id}
                    onClick={() => {
                      onRoleChange(role.id);
                      setRoleOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between cursor-pointer ${
                      role.id === currentRole
                        ? 'bg-neutral-100 text-neutral-900 font-semibold'
                        : 'text-neutral-700 hover:bg-neutral-50'
                    }`}
                  >
                    <span>{role.label}</span>
                    {role.id === currentRole && (
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                    )}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
