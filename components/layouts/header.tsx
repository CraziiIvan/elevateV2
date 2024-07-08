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
      transition={{ ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-4 top-4 flex flex-col gap-y-4 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 px-2 py-4 sm:hidden"
    >
      <div className="flex items-center justify-between pl-2.5 pr-2">
        <Image src={logo} alt="logo" height={20} />
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
