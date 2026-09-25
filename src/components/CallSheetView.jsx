import React from 'react';
import { Printer } from 'lucide-react';

export function CallSheetView() {
  return (
    <div className="bg-white border border-neutral-200 rounded text-xs shadow-2xs">
      {/* Header */}
      <div className="p-3.5 border-b border-neutral-200 flex items-center justify-between">
        <div>
          <span className="font-semibold text-neutral-900">
            Call Sheet · Day 14 of 32 (CHRONO-7)
          </span>
          <span className="text-neutral-500 ml-2">Call: 07:00 AM · Breakfast: 06:30 AM</span>
        </div>

        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-1 px-2.5 py-1 bg-neutral-900 hover:bg-neutral-800 text-white rounded transition-colors cursor-pointer"
        >
          <Printer className="w-3.5 h-3.5" />
          <span>Print</span>
        </button>
      </div>

      <div className="p-4 space-y-4">
        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pb-3 border-b border-neutral-100 text-[11px]">
          <div>
            <span className="text-neutral-400 block mb-0.5">KEY CREW</span>
            <p className="font-medium text-neutral-900">Director: Elena Rostova</p>
            <p className="text-neutral-600">Line Producer: David Chen</p>
          </div>
          <div>
            <span className="text-neutral-400 block mb-0.5">LOCATION / WEATHER</span>
            <p className="font-medium text-neutral-900">Financial District & Pier 14</p>
            <p className="text-neutral-600">Clear Skies · 74°F / 58°F</p>
          </div>
          <div>
            <span className="text-neutral-400 block mb-0.5">HOSPITAL EMERGENCY</span>
            <p className="font-medium text-neutral-900">Good Samaritan Hospital</p>
            <p className="text-neutral-600">Medic: Paul Alvarez</p>
          </div>
        </div>

        {/* Shooting Sequence */}
        <div>
          <div className="font-semibold text-neutral-900 mb-1.5 text-[11px] uppercase tracking-wide">
            Schedule
          </div>
          <table className="w-full text-left">
            <thead className="bg-neutral-50 text-neutral-500 text-[10px] border-b border-neutral-200">
              <tr>
                <th className="py-1.5 px-2">Scene</th>
                <th className="py-1.5 px-2">Setting</th>
                <th className="py-1.5 px-2">Pages</th>
                <th className="py-1.5 px-2">Cast</th>
                <th className="py-1.5 px-2">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              <tr>
                <td className="py-2 px-2 font-medium text-neutral-900">SC 01</td>
                <td className="py-2 px-2">EXT. FINANCIAL DISTRICT - DAY</td>
                <td className="py-2 px-2 font-mono text-neutral-500">2 3/8</td>
                <td className="py-2 px-2">Vance, Miller, Courier</td>
                <td className="py-2 px-2 font-mono text-neutral-700">08:30 – 12:30</td>
              </tr>
              <tr className="bg-neutral-50 text-[10px] text-neutral-500">
                <td colSpan={5} className="py-1 px-2">
                  LUNCH 12:30 – 13:30 · MOVE TO PIER 14 TERMINAL
                </td>
              </tr>
              <tr>
                <td className="py-2 px-2 font-medium text-neutral-900">SC 02</td>
                <td className="py-2 px-2">INT. WAREHOUSE - NIGHT</td>
                <td className="py-2 px-2 font-mono text-neutral-500">3 5/8</td>
                <td className="py-2 px-2">Vance, Chen, Briggs</td>
                <td className="py-2 px-2 font-mono text-neutral-700">19:30 – 23:45</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
