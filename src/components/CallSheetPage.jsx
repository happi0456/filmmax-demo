import React from 'react';
import { Printer, CheckCircle2, Clock } from 'lucide-react';
import { PRODUCTION_STAGES } from '../data/mockData';

export function CallSheetPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 text-xs font-sans">
      {/* 1. Daily Call Sheet Card */}
      <div className="bg-white border border-neutral-200 rounded shadow-xs overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-neutral-50/50">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-neutral-900">
                Daily Call Sheet · Day 14 of 32
              </span>
              <span className="font-mono text-[10px] text-neutral-500 bg-neutral-100 px-1.5 py-0.5 rounded border border-neutral-200">
                CHRONO-7
              </span>
            </div>
            <p className="text-xs text-neutral-500 mt-0.5">
              General Crew Call: 07:00 AM · Breakfast: 06:30 AM · Catering Tent A
            </p>
          </div>

          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded transition-colors cursor-pointer shrink-0"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Official Call Sheet</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-5">
          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-4 border-b border-neutral-100 text-[11px]">
            <div>
              <span className="text-neutral-400 block mb-1 font-mono uppercase">Key Production Heads</span>
              <p className="font-semibold text-neutral-900">Director: Elena Rostova</p>
              <p className="text-neutral-600">Line Producer: David Chen</p>
              <p className="text-neutral-600">1st AD: Sarah Jenkins</p>
            </div>
            <div>
              <span className="text-neutral-400 block mb-1 font-mono uppercase">Location & Weather</span>
              <p className="font-semibold text-neutral-900">5th & Grand Plaza / Pier 14</p>
              <p className="text-neutral-600">Day High: 74°F · Night Low: 58°F</p>
              <p className="text-neutral-600">Sunrise: 06:42 AM · Sunset: 19:12 PM</p>
            </div>
            <div>
              <span className="text-neutral-400 block mb-1 font-mono uppercase">Nearest Hospital & Safety</span>
              <p className="font-semibold text-neutral-900">Good Samaritan Hospital</p>
              <p className="text-neutral-600">1225 Wilshire Blvd (1.4 mi)</p>
              <p className="text-emerald-700 font-medium">On-set Medic: Paul Alvarez</p>
            </div>
          </div>

          {/* Shooting Sequence Schedule */}
          <div>
            <div className="font-bold text-neutral-900 uppercase text-xs tracking-wide mb-2">
              Shooting Schedule Breakdown
            </div>
            <div className="border border-neutral-200 rounded overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-neutral-50 text-neutral-500 text-[10px] font-mono border-b border-neutral-200">
                  <tr>
                    <th className="py-2 px-3">Scene</th>
                    <th className="py-2 px-3">Setting</th>
                    <th className="py-2 px-3">Pages</th>
                    <th className="py-2 px-3">Cast Members</th>
                    <th className="py-2 px-3">Shoot Window</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 text-neutral-800">
                  <tr className="hover:bg-neutral-50/50">
                    <td className="py-2.5 px-3 font-mono font-bold text-neutral-900">SC 01</td>
                    <td className="py-2.5 px-3">EXT. FINANCIAL DISTRICT PLAZA - DAY</td>
                    <td className="py-2.5 px-3 font-mono text-neutral-500">2 3/8</td>
                    <td className="py-2.5 px-3">Vance, Miller, Courier</td>
                    <td className="py-2.5 px-3 font-mono text-neutral-700">08:30 – 12:30</td>
                  </tr>
                  <tr className="bg-neutral-50 text-[11px] font-mono text-neutral-500">
                    <td colSpan={5} className="py-1.5 px-3">
                      COMPANY LUNCH (12:30 – 13:30) · COMPANY MOVE TO PIER 14 TERMINAL (13:30 – 15:00)
                    </td>
                  </tr>
                  <tr className="hover:bg-neutral-50/50">
                    <td className="py-2.5 px-3 font-mono font-bold text-neutral-900">SC 02</td>
                    <td className="py-2.5 px-3">INT. DOCKLANDS WAREHOUSE - NIGHT</td>
                    <td className="py-2.5 px-3 font-mono text-neutral-500">3 5/8</td>
                    <td className="py-2.5 px-3">Vance, Chen, Briggs</td>
                    <td className="py-2.5 px-3 font-mono text-neutral-700">19:30 – 23:45</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Production Workflow & Stages */}
      <div className="bg-white border border-neutral-200 rounded p-5 shadow-xs">
        <div className="flex items-center justify-between pb-3 border-b border-neutral-100 mb-4">
          <div>
            <h3 className="font-bold text-neutral-900 text-sm">
              Production Lifecycle Stages
            </h3>
            <p className="text-xs text-neutral-500 mt-0.5">
              Current progress across the 3 primary film production milestones.
            </p>
          </div>
          <span className="font-mono text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            Phase 2: Principal Photography
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PRODUCTION_STAGES.map((st, i) => (
            <div key={st.name} className="p-3.5 border border-neutral-200 rounded bg-neutral-50/50">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-bold text-neutral-900 text-xs">
                  {i + 1}. {st.name}
                </span>
                <span
                  className={`font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                    st.status.includes('Active')
                      ? 'bg-emerald-100 text-emerald-800'
                      : st.status === 'Completed'
                      ? 'bg-neutral-200 text-neutral-800'
                      : 'bg-neutral-100 text-neutral-500'
                  }`}
                >
                  {st.status}
                </span>
              </div>
              <p className="text-[11px] text-neutral-600 leading-relaxed">
                {st.name === 'Pre-Production' && 'Script breakdown, casting sign-offs, and location permits cleared.'}
                {st.name === 'Filming' && 'Principal photography underway. 54 of 122 scheduled pages captured.'}
                {st.name === 'Post-Production' && 'Picture editing, sound design, ADR looping, and Dolby mix.'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
