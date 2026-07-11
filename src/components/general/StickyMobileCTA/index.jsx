"use client";
import { ShieldCheck } from "lucide-react";
import PayButton from "../Payment/PayButton";
import { useAppConfigStore } from "@/stores/app-config.store";

export default function StickyMobileCTA() {
  const plan = useAppConfigStore((state) => state.plan);

  return (
    <>
      <div
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden animate-in slide-in-from-bottom-full duration-500"
      >
        <div className="border-t border-green-100 bg-white/95 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80">
          <div className="mx-auto max-w-lg px-4 py-3 pb-[calc(env(safe-area-inset-bottom)+12px)]">
            <div className="flex items-center justify-center">
              <div className="w-full">
                <PayButton className="w-full text-sm h-12 shadow-lg shadow-green-500/25" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
