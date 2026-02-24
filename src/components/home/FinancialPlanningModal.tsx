import { useState, useEffect } from "react";
import { X } from "lucide-react";
import FinancialPlanningSection from "./FinancialPlanningSection";

export const OPEN_FINANCIAL_PLANNING_EVENT = "open-financial-planning";

const FinancialPlanningModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener(OPEN_FINANCIAL_PLANNING_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_FINANCIAL_PLANNING_EVENT, handleOpen);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      {/* Floating calculator button with talking cloud (speech bubble) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-0">
        {/* Talking cloud / speech bubble - tail points down to button */}
        <div className="relative rounded-2xl bg-[#ffffff00] backdrop-blur border border-amber-200 shadow-lg px-4 py-2.5 text-sm font-medium text-black max-w-[200px] mb-1">
          Financial Planning Calculator
          <div
            className="absolute -bottom-2 right-6 w-4 h-4 rotate-45 border-r border-b border-amber-200 bg-white/95"
            aria-hidden
          />
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-white shadow-[0_10px_20px_rgba(245,158,11,0.4)] hover:from-amber-500 hover:to-amber-700 hover:scale-105 transition-all flex items-center justify-center border-2 border-amber-600/30"
          aria-label="Open Financial Planning Calculator"
          title="Financial Planning Calculator"
        >
          <i className="fas fa-calculator text-2xl" />
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-labelledby="financial-planning-modal-title"
        >
          <div
            className="bg-white rounded-2xl max-h-[90vh] w-full max-w-4xl overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-shrink-0 flex items-center justify-between px-6 py-4 border-b border-amber-100 bg-amber-50/50">
              <h2
                id="financial-planning-modal-title"
                className="text-xl font-extrabold text-gray-900"
              >
                Financial Planning
              </h2>
              <button
                type="button"
                onClick={close}
                className="w-10 h-10 rounded-full bg-amber-100 hover:bg-amber-200 text-gray-700 flex items-center justify-center transition"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="overflow-y-auto flex-1 min-h-0">
              <FinancialPlanningSection inModal />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FinancialPlanningModal;
