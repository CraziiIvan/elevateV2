"use client";

import { useEffect, useState } from "react";
import SubmitModal from "@/components/modals/submitModal";
import SubscribeModal from "@/components/modals/subscribeModal";
import { helvetica } from "@/lib/fonts";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useScroll } from "@/hooks/use-scroll";

export default function Hero() {
  const { scrollValue } = useScroll();
  const scrollY = useMotionValue(scrollValue);

  const scale = useTransform(scrollY, [0, 50], [1, 0.8]);
  return (
    <motion.div
      style={{ scale }}
      className="relative z-40 mt-28 max-w-2xl rounded-md sm:mt-0"
    >
      <h1 className={`${helvetica.className} text-3xl font-bold`}>
        Curated Tools Library
      </h1>
      <p className="mt-2 text-lg text-gray11">
        Streamline your workflow with curated tools for enhanced productivity.
      </p>
      <div className="mt-6 flex gap-x-4">
        <SubscribeModal />
        <SubmitModal />
      </div>
    </motion.div>
  );
}
