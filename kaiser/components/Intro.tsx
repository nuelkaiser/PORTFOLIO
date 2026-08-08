"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";

type IntroContextValue = {
  ready: boolean;
};

const IntroContext = createContext<IntroContextValue>({ ready: false });

export function useIntro() {
  return useContext(IntroContext);
}

const slideEase = [0.76, 0, 0.24, 1] as const;
const easeOut = [0.16, 1, 0.3, 1] as const;

function subscribeReducedMotion(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function IntroProvider({ children }: { children: ReactNode }) {
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  const [ready, setReady] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;

    document.documentElement.style.overflow = "hidden";

    let frame = 0;
    let start: number | null = null;
    const duration = 2600;

    const tick = (now: number) => {
      if (start === null) start = now;
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setProgress(100);
        window.setTimeout(() => setShowOverlay(false), 900);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      document.documentElement.style.overflow = "";
    };
  }, [reducedMotion]);

  const onExitComplete = useCallback(() => {
    setReady(true);
    document.documentElement.style.overflow = "";
  }, []);

  const value = useMemo(
    () => ({ ready: reducedMotion || ready }),
    [reducedMotion, ready],
  );

  const overlayVisible = !reducedMotion && showOverlay;
  const displayProgress = reducedMotion ? 100 : progress;

  return (
    <IntroContext.Provider value={value}>
      {children}
      <AnimatePresence onExitComplete={onExitComplete}>
        {overlayVisible && (
          <motion.div
            key="intro-overlay"
            className="fixed inset-0 z-[100] flex items-end justify-between px-[var(--gutter)] pb-10 md:pb-14"
            style={{ backgroundColor: "#0a0a0a" }}
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: "-101%" }}
            transition={{ duration: 1.35, ease: slideEase }}
            aria-hidden
          >
            <div className="relative z-10 flex w-full items-end justify-between gap-6">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: easeOut }}
                className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-white/55 md:text-xs"
              >
                Majekodunmi Immanuel
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="display tabular-nums text-[clamp(3.5rem,12vw,7rem)] leading-none text-white"
              >
                {String(displayProgress).padStart(2, "0")}
                <span className="text-[0.45em] align-top">%</span>
              </motion.p>
            </div>

            <motion.div
              className="absolute bottom-0 left-0 h-px w-full origin-left bg-white/40"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: displayProgress / 100 }}
              transition={{ duration: 0.08, ease: "linear" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </IntroContext.Provider>
  );
}
