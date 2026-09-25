import React, { useState } from 'react';
import { ChevronDown, Loader2, CheckCircle2, AlertTriangle, ArrowRight, Printer, Sparkles } from 'lucide-react';
import { SCENE_1_DATA, SCENE_2_DATA } from '../data/mockData';

export function ConflictDetector({ onOpenReceipt }) {
  const [sceneId, setSceneId] = useState('scene-1');
  const [activeScene, setActiveScene] = useState(SCENE_1_DATA);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSelectScene = (id) => {
    setSceneId(id);
    setActiveScene(id === 'scene-1' ? SCENE_1_DATA : SCENE_2_DATA);
    setStatus(null);
  };

  const handleRunCheck = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStatus(activeScene.hasConflict ? 'conflict' : 'clean');
    }, 450);
  };

  const handleResolveConflict = () => {
    const resolved = {
      ...SCENE_2_DATA,
      hasConflict: false,
      equipment: SCENE_2_DATA.equipment.map((eq) =>
        eq.conflict
          ? { name: 'RED V-Raptor 8K (Swapped Backup Body)', serial: 'SN-1190', status: 'Allocated', conflict: false }
          : eq
      ),
      cast: SCENE_2_DATA.cast.map((c) =>
        c.conflict ? { ...c, conflict: undefined } : c
      ),
    };
    setActiveScene(resolved);
    setStatus('clean');
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {/* Receipt Requisition Slip Container */}
      <div className="bg-white border border-neutral-300 rounded shadow-xs overflow-hidden">
        {/* Receipt Slip Header */}
        <div className="bg-neutral-50 px-5 py-4 border-b border-dashed border-neutral-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-neutral-900 tracking-wider">
                  REQUISITION SLIP #{activeScene.receiptNumber}
                </span>
                <span className="text-neutral-400">·</span>
                <span className="text-xs font-semibold text-neutral-700">CHRONO-7</span>
              </div>
              <p className="text-xs text-neutral-500 mt-0.5">
                {activeScene.slugline} ({activeScene.pages} · {activeScene.runtime})
              </p>
            </div>

            {/* Scene Selector Dropdown */}
            <div className="flex items-center gap-2">
              <label htmlFor="scene-select" className="text-xs font-medium text-neutral-600">Scene:</label>
              <div className="relative">
                <select
                  id="scene-select"
                  value={sceneId}
                  onChange={(e) => handleSelectScene(e.target.value)}
                  className="appearance-none bg-white border border-neutral-300 hover:border-neutral-400 text-xs font-semibold text-neutral-900 py-1.5 pl-3 pr-8 rounded transition-colors cursor-pointer focus:outline-none focus:ring-1 focus:ring-neutral-400"
                >
                  <option value="scene-1">Scene 1: EXT. STREET - DAY (No conflicts)</option>
                  <option value="scene-2">Scene 2: INT. WAREHOUSE - NIGHT (Simulated conflict)</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-500 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* 4-Quadrant Aggregated Manifest */}
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {/* Quadrant 1: Location & Time */}
          <div className="p-3.5 bg-neutral-50 border border-neutral-200 rounded">
            <span className="text-[11px] font-mono uppercase font-bold text-neutral-500 block mb-2">
              1. Location & Time
            </span>
            <div className="space-y-1.5 text-neutral-700">
              {activeScene.locationTime.map((item) => (
                <div key={item.label} className="flex justify-between">
                  <span className="text-neutral-500">{item.label}:</span>
                  <span className="font-medium text-neutral-900 text-right">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quadrant 2: Cast Assignments */}
          <div className="p-3.5 bg-neutral-50 border border-neutral-200 rounded">
            <span className="text-[11px] font-mono uppercase font-bold text-neutral-500 block mb-2">
              2. Cast Assignments
            </span>
            <div className="space-y-2">
              {activeScene.cast.map((actor) => (
                <div key={actor.name} className="flex items-center justify-between text-neutral-800">
                  <span>
                    <strong className="font-semibold text-neutral-900">{actor.name}</strong>{' '}
                    <span className="text-neutral-500">({actor.role})</span>
                  </span>
                  <span className={`font-mono text-[11px] ${actor.conflict ? 'text-red-700 font-semibold' : 'text-neutral-500'}`}>
                    {actor.conflict ? 'ADR Conflict' : actor.callTime}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quadrant 3: Allocated Equipment */}
          <div className="p-3.5 bg-neutral-50 border border-neutral-200 rounded">
            <span className="text-[11px] font-mono uppercase font-bold text-neutral-500 block mb-2">
              3. Allocated Equipment
            </span>
            <div className="space-y-2">
              {activeScene.equipment.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <span className="text-neutral-900 font-medium truncate mr-2">
                    {item.name}
                  </span>
                  {item.conflict ? (
                    <span className="text-[10px] font-mono font-bold text-red-700 bg-red-100 px-1.5 py-0.5 rounded shrink-0">
                      Double-Booked
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono text-neutral-500 shrink-0">
                      {item.serial}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quadrant 4: Costumes & Styling */}
          <div className="p-3.5 bg-neutral-50 border border-neutral-200 rounded">
            <span className="text-[11px] font-mono uppercase font-bold text-neutral-500 block mb-2">
              4. Costumes & Styling
            </span>
            <div className="space-y-2">
              {activeScene.costumes.map((c) => (
                <div key={c.character} className="flex items-center justify-between text-neutral-800">
                  <span>
                    <strong className="font-semibold text-neutral-900">{c.character}:</strong> {c.outfit}
                  </span>
                  <span className="font-mono text-[11px] text-neutral-500 shrink-0">
                    {c.rack}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Button & Verification Banners */}
        <div className="px-5 pb-5 pt-1 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleRunCheck}
              disabled={loading}
              className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold rounded transition-colors cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Cross-checking master schedule...</span>
                </>
              ) : (
                <span>Run Conflict Check & Validate Receipt</span>
              )}
            </button>

            <button
              type="button"
              onClick={() => onOpenReceipt(activeScene)}
              className="inline-flex items-center gap-1 text-xs text-neutral-600 hover:text-neutral-900 underline cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Slip</span>
            </button>
          </div>

          {/* Green Success Banner for Scene 1 */}
          {status === 'clean' && (
            <div className="p-3.5 rounded bg-emerald-50 border border-emerald-300 text-emerald-950 text-xs flex items-center justify-between gap-2 animate-in fade-in duration-150">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  <strong>All resources conflict-free.</strong> Master equipment ledger, cast call times, and permits verified for {activeScene.title}.
                </span>
              </div>
              <button
                onClick={() => onOpenReceipt(activeScene)}
                className="text-[11px] font-semibold text-emerald-900 underline shrink-0 cursor-pointer"
              >
                View Stamped Slip
              </button>
            </div>
          )}

          {/* Red Warning Banner for Scene 2 */}
          {status === 'conflict' && (
            <div className="p-3.5 rounded bg-red-50 border border-red-300 text-red-950 text-xs space-y-2 animate-in fade-in duration-150">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-red-900">DOUBLE-BOOKING CONFLICT DETECTED:</strong>
                  <span>Camera &apos;ARRI Alexa Mini&apos; is already reserved for the 2nd Unit night shoot.</span>
                </div>
              </div>
              <div className="pl-6 flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleResolveConflict}
                  className="inline-flex items-center gap-1 text-xs font-semibold bg-red-900 hover:bg-red-800 text-white px-3 py-1.5 rounded transition-colors cursor-pointer"
                >
                  <span>Auto-Swap to RED V-Raptor</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => onOpenReceipt(activeScene)}
                  className="text-xs text-red-900 underline cursor-pointer"
                >
                  Audit conflict slip
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Demo Tip (Placed below the receipt slip cleanly) */}
      <div className="bg-neutral-100/70 border border-neutral-200 rounded p-3 text-xs text-neutral-600 flex items-center justify-between">
        <span className="font-medium text-neutral-700">
          💡 Demo tip: Toggle between <strong>Scene 1</strong> and <strong>Scene 2</strong> above, then click &ldquo;Run Conflict Check&rdquo; to simulate live conflict detection.
        </span>
      </div>
    </div>
  );
}
