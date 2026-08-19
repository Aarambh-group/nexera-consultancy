"use client";

import { useState } from "react";
import Preloader from "./layout/Preloader";
import SmoothScroll from "./SmoothScroll";

export default function AppClientWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      <div
        className={
          isLoading
            ? "fixed inset-0 h-0 overflow-hidden opacity-0 pointer-events-none"
            : "contents"
        }
      >
        <SmoothScroll>{children}</SmoothScroll>
      </div>
    </>
  );
}