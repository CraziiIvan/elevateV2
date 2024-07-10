"use client";

import Image from "next/image";
import logo from "@/public/elevate.svg";
import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Search } from "lucide-react";
import Nav from "@/components/layouts/nav";
import { useScroll } from "@/hooks/use-scroll";
import SearchButton from "@/components/searchButton";

export default function Header() {
  const [open, setOpen] = useState(false);
  const isScrolling = useScroll(1000);

  return (
    <motion.aside
      animate={{
        maxHeight: open ? 430 : 54,
        top: !open && isScrolling ? -56 : 16,
        scale: !open && isScrolling ? 0.95 : 1,
      }}
      transition={{ ease: [0.13, 0.43, 0.47, 0.93] }}
      className="fixed inset-x-4 z-50 flex max-h-0 flex-col gap-y-4 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 px-2 py-3.5 sm:hidden"
    >
      <div className="flex items-center justify-between pl-2.5 pr-2">
        <Image src={logo} alt="logo" height={18} />
        <motion.button
          animate={{ rotate: open ? 45 : 0 }}
          onClick={() => setOpen(!open)}
        >
          <Plus size={24} />
        </motion.button>
      </div>
      <SearchButton/>
      <Nav />
    </motion.aside>
  );
}
