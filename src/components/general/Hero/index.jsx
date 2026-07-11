import { cn } from "@/lib/utils";
import { Highlighter } from "@/components/ui/highlighter";
import { GridPattern } from "@/components/ui/grid-pattern";
import PayButton from "../Payment/PayButton";

export const Hero = () => {
  return (
    <div className="relative w-full px-4 sm:px-6 lg:px-8 text-center pt-20 md:pt-32 pb-8 md:pb-12 overflow-hidden flex flex-col items-center">
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "absolute inset-0 h-full w-full stroke-emerald-600/30 fill-emerald-600/30 dark:stroke-emerald-400/30 dark:fill-emerald-400/30 z-0",
          "[mask-image:linear-gradient(to_bottom,white,transparent_90%)]",
        )}
      />
      <h1
        className="relative z-10 w-full mx-auto pb-4 animate-in fade-in slide-in-from-top-4 duration-700"
      >
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center rounded-full bg-emerald-100/80 dark:bg-emerald-900/30 px-4 py-1.5 text-sm font-medium text-emerald-800 dark:text-emerald-300 ring-1 ring-inset ring-emerald-600/20 shadow-sm">
            🚀 Trusted by 1,000+ Restaurants
          </span>
        </div>

        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.2] md:leading-[1.1] text-gray-900 dark:text-white flex flex-col items-center gap-y-2 md:gap-y-4">
          <div className="flex flex-wrap justify-center items-center gap-2">
            <span className="inline-block relative">
              <Highlighter action="highlight" color="#ff5736ff">
                <span className="text-white relative z-10 px-2 md:px-4 py-1 rounded-lg">
                  DoorDash
                </span>
              </Highlighter>
            </span>
            <span>Approved</span>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-x-3 md:gap-x-4 gap-y-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600 drop-shadow-sm">
              Food Photos
            </span>
            <span>In</span>
            <span className="inline-block -rotate-2 transform transition-transform hover:rotate-0 duration-300">
              <Highlighter action="highlight" color="#22c55e">
                <span className="text-white relative z-10 px-4 py-1 rounded-md">
                  1 Click
                </span>
              </Highlighter>
            </span>
          </div>
        </div>
      </h1>

      <p
        className="relative z-10 mt-6 text-sm md:text-lg lg:text-xl text-gray-500 dark:text-gray-400 max-w-3xl font-normal leading-relaxed mx-auto px-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-both"
      >
        Boost your delivery sales with high-quality, pre-approved food images.
        Get your menus approved instantly on{" "}
        <span className="text-red-500 font-semibold">DoorDash</span>,{" "}
        <span className="text-green-500 font-semibold">Uber Eats</span> &{" "}
        <span className="text-orange-500 font-semibold">Grubhub</span>{" "}.
      </p>

      <div
        className="relative z-10 mt-10 hidden md:flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both"
      >
        <div className="w-full sm:w-auto shadow-lg shadow-emerald-500/20 rounded-xl transition-all hover:scale-105 duration-300">
          <PayButton />
        </div>
      </div>

      {/* <div
        className="relative hidden z-10 md:flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 mb-12 text-sm font-medium text-gray-500 dark:text-gray-400 animate-in fade-in duration-700 delay-500 fill-mode-both"
      >
        <span className="flex items-center gap-1.5"><span className="text-emerald-500 bg-emerald-100 dark:bg-emerald-900/40 rounded-full p-0.5">✓</span> High-Res Professional Shots</span>
        <span className="flex items-center gap-1.5"><span className="text-emerald-500 bg-emerald-100 dark:bg-emerald-900/40 rounded-full p-0.5">✓</span> Pre-Approved Formats</span>
        <span className="flex items-center gap-1.5"><span className="text-emerald-500 bg-emerald-100 dark:bg-emerald-900/40 rounded-full p-0.5">✓</span> Instant Download</span>
      </div> */}
    </div>
  );
};
