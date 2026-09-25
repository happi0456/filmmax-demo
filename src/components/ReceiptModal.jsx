import React from 'react';
import { X, Printer, CheckCircle2, AlertTriangle } from 'lucide-react';

export function ReceiptModal({ scene, onClose }) {
  if (!scene) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-2xs">
      <div className="bg-white border border-neutral-300 rounded max-w-md w-full overflow-hidden shadow-lg font-sans text-xs">
        {/* Header */}
        <div className="p-3.5 bg-neutral-50 border-b border-dashed border-neutral-300 flex items-center justify-between">
          <div>
            <div className="font-mono text-xs font-bold text-neutral-900">
              REQUISITION SLIP #{scene.receiptNumber}
            </div>
            <div className="text-[11px] text-neutral-500">{scene.slugline}</div>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-neutral-700 p-1 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <div
            className={`p-2.5 rounded border text-xs ${
              scene.hasConflict
                ? 'bg-red-50 border-red-200 text-red-950'
                : 'bg-emerald-50 border-emerald-200 text-emerald-950'
            }`}
          >
            <div className="flex items-center gap-1.5 font-semibold">
              {scene.hasConflict ? (
                <AlertTriangle className="w-4 h-4 text-red-600" />
              ) : (
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              )}
              <span>{scene.hasConflict ? 'Double-Booking Collision' : 'Validated & Cleared'}</span>
            </div>
            <p className="text-[11px] mt-1 text-neutral-700 leading-normal">
              {scene.hasConflict
                ? "ARRI Alexa Mini (Body #01) is booked concurrently by 2nd Unit night shoot."
                : "All equipment serials, actor call times, and permits on this slip are verified."}
            </p>
          </div>

          <div className="border border-neutral-200 rounded divide-y divide-neutral-100 font-mono text-[11px]">
            <div className="p-2 flex justify-between">
              <span className="text-neutral-500">Scene:</span>
              <span className="text-neutral-900 font-sans font-medium">{scene.title}</span>
            </div>
            <div className="p-2 flex justify-between">
              <span className="text-neutral-500">Actors:</span>
              <span className="text-neutral-900">{scene.cast.length} Talent</span>
            </div>
            <div className="p-2 flex justify-between">
              <span className="text-neutral-500">Equipment:</span>
              <span className="text-neutral-900">{scene.equipment.length} Units</span>
            </div>
            <div className="p-2 flex justify-between">
              <span className="text-neutral-500">Costumes:</span>
              <span className="text-neutral-900">{scene.costumes.length} Outfits</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="p-3 border-t border-neutral-200 bg-neutral-50 flex items-center justify-between">
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-3 py-1 border border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-800 text-xs font-medium rounded transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium rounded transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
