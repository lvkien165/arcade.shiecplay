"use client";

import { useEffect, useRef } from "react";

interface GPTAdProps {
  adUnitId: string;
  minWidth?: number;
  minHeight?: number;
  className?: string;
}

declare global {
  interface Window {
    googletag: any;
  }
}

export default function GPTAd({
  adUnitId,
  minWidth = 300,
  minHeight = 50,
  className = "",
}: GPTAdProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const isAdLoaded = useRef(false);

  useEffect(() => {
    // Chỉ load ad một lần duy nhất
    if (typeof window !== "undefined" && window.googletag && adRef.current && !isAdLoaded.current) {
      window.googletag.cmd.push(() => {
        window.googletag.display(adUnitId);
      });
      isAdLoaded.current = true;
    }

    // Cleanup khi component unmount
    return () => {
      if (typeof window !== "undefined" && window.googletag && isAdLoaded.current) {
        window.googletag.cmd.push(() => {
          window.googletag.destroySlots([adUnitId]);
        });
      }
    };
  }, [adUnitId]);

  return (
    <div
      ref={adRef}
      id={adUnitId}
      style={{ minWidth: `${minWidth}px`, minHeight: `${minHeight}px` }}
      className={`flex items-center justify-center ${className}`}
    />
  );
}
