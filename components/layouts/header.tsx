"use client";

import Image from "next/image";
import logo from "../../public/elevate.svg";
import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import Nav from "./nav";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.aside
      animate={{ maxHeight: open ? 430 : 56 }}
      transition={{ ease: [0.13, 0.43, 0.47, 0.93] }}
      className="fixed inset-x-4 max-h-0 top-4 flex flex-col gap-y-4 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 px-2 py-4 sm:hidden z-50"
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
      <Nav />
    </motion.aside>
  );
}
