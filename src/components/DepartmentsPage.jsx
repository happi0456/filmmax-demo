import React, { useState } from 'react';
import { Lock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { 
  USER_ROLES, 
  DEPARTMENT_CARDS, 
  MASTER_EQUIPMENT_INVENTORY, 
  MASTER_ACTOR_ROSTER, 
  MASTER_SCRIPT_BREAKDOWN 
} from '../data/mockData';

export function DepartmentsPage({ currentRole, onRoleChange }) {
  const [selectedDeptId, setSelectedDeptId] = useState('inventory');
  const roleConfig = USER_ROLES.find((r) => r.id === currentRole) || USER_ROLES[0];

  return (
    <div className="max-w-4xl mx-auto space-y-5 text-xs">
      {/* Top Banner with Role Selector */}
      <div className="bg-white border border-neutral-200 rounded p-4 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-sm font-bold text-neutral-900">
            Core Department Access (RBAC)
          </h2>
          <p className="text-xs text-neutral-500 mt-0.5">
            Switch your active role to observe dynamic department access locks and clearances.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-neutral-500 font-medium">Test Role:</span>
          <select
            value={currentRole}
            onChange={(e) => onRoleChange(e.target.value)}
            className="bg-neutral-50 border border-neutral-300 font-semibold text-neutral-900 py-1.5 px-3 rounded text-xs cursor-pointer focus:outline-none focus:ring-1 focus:ring-neutral-400"
          >
            {USER_ROLES.map((r) => (
              <option key={r.id} value={r.id}>
                {r.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 7 Department Cards Grid */}
      <div>
        <div className="text-[11px] font-mono uppercase font-semibold text-neutral-500 mb-2">
          Core Departments (Click to inspect)
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {DEPARTMENT_CARDS.map((dept) => {
            const isAccessible = roleConfig.accessibleDeptIds.includes(dept.id);
            const isSelected = selectedDeptId === dept.id;

            return (
              <button
                key={dept.id}
                type="button"
                onClick={() => {
                  if (isAccessible) setSelectedDeptId(dept.id);
                }}
                className={`p-3 rounded border text-left transition-all cursor-pointer ${
                  isAccessible
                    ? isSelected
                      ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                      : 'bg-white border-neutral-200 hover:border-neutral-400 text-neutral-900'
                    : 'bg-neutral-50 border-neutral-200 opacity-40 cursor-not-allowed text-neutral-500 select-none'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] mb-1">
                  <span className={`truncate font-medium ${isSelected ? 'text-neutral-200' : 'text-neutral-500'}`}>
                    {dept.title}
                  </span>
                  {!isAccessible && (
                    <Lock className="w-3 h-3 text-neutral-400 shrink-0" />
                  )}
                </div>
                <div className="text-sm font-bold font-mono">
                  {dept.metric}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Department Details Inspector */}
      <div className="bg-white border border-neutral-200 rounded p-4 shadow-xs">
        <div className="flex items-center justify-between pb-3 border-b border-neutral-100 mb-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-neutral-900 uppercase">
              {selectedDeptId} Department Roster
            </span>
            <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
              Clearance Verified
            </span>
          </div>
          <span className="text-[11px] text-neutral-400">
            Role: {roleConfig.shortLabel}
          </span>
        </div>

        {selectedDeptId === 'inventory' && (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-neutral-50 text-neutral-500 text-[10px] border-b border-neutral-200">
                <tr>
                  <th className="py-2 px-2.5">Gear Item</th>
                  <th className="py-2 px-2.5">Category</th>
                  <th className="py-2 px-2.5">Serial</th>
                  <th className="py-2 px-2.5">Assigned Operator</th>
                  <th className="py-2 px-2.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 text-neutral-800">
                {MASTER_EQUIPMENT_INVENTORY.map((item) => (
                  <tr key={item.serial} className="hover:bg-neutral-50/60">
                    <td className="py-2 px-2.5 font-medium text-neutral-900">{item.name}</td>
                    <td className="py-2 px-2.5 text-neutral-500">{item.category}</td>
                    <td className="py-2 px-2.5 font-mono text-neutral-600">{item.serial}</td>
                    <td className="py-2 px-2.5 text-neutral-700">{item.operator}</td>
                    <td className="py-2 px-2.5">
                      <span
                        className={`font-mono text-[10px] px-1.5 py-0.5 rounded ${
                          item.status === 'Double-Booked'
                            ? 'bg-red-50 text-red-700 font-bold'
                            : 'text-neutral-600'
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {selectedDeptId === 'casting' && (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-neutral-50 text-neutral-500 text-[10px] border-b border-neutral-200">
                <tr>
                  <th className="py-2 px-2.5">Actor</th>
                  <th className="py-2 px-2.5">Character</th>
                  <th className="py-2 px-2.5">Agency</th>
                  <th className="py-2 px-2.5">Call Time</th>
                  <th className="py-2 px-2.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 text-neutral-800">
                {MASTER_ACTOR_ROSTER.map((a) => (
                  <tr key={a.actor} className="hover:bg-neutral-50/60">
                    <td className="py-2 px-2.5 font-medium text-neutral-900">{a.actor}</td>
                    <td className="py-2 px-2.5 text-neutral-700">{a.character}</td>
                    <td className="py-2 px-2.5 text-neutral-500">{a.agency}</td>
                    <td className="py-2 px-2.5 font-mono text-neutral-600">{a.callTime}</td>
                    <td className="py-2 px-2.5 text-neutral-600">{a.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {selectedDeptId === 'scripting' && (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-neutral-50 text-neutral-500 text-[10px] border-b border-neutral-200">
                <tr>
                  <th className="py-2 px-2.5">Scene</th>
                  <th className="py-2 px-2.5">Slugline</th>
                  <th className="py-2 px-2.5">Pages</th>
                  <th className="py-2 px-2.5">Cast</th>
                  <th className="py-2 px-2.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 text-neutral-800">
                {MASTER_SCRIPT_BREAKDOWN.map((s) => (
                  <tr key={s.sceneNum} className="hover:bg-neutral-50/60">
                    <td className="py-2 px-2.5 font-mono font-medium text-neutral-900">SC {s.sceneNum}</td>
                    <td className="py-2 px-2.5 text-neutral-800">{s.slug}</td>
                    <td className="py-2 px-2.5 font-mono text-neutral-500">{s.pages}</td>
                    <td className="py-2 px-2.5 text-neutral-600">{s.cast}</td>
                    <td className="py-2 px-2.5 text-neutral-600">{s.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {['styling', 'direction', 'scene-mgmt', 'production-mgmt'].includes(selectedDeptId) && (
          <div className="p-4 text-center text-neutral-500 text-xs">
            <p className="font-semibold text-neutral-900 mb-1">
              {selectedDeptId.toUpperCase()} logs verified nominal.
            </p>
            <p className="text-[11px]">
              All department checklists and clearances are up to date for Day 14.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
