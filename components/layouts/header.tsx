"use client";

import Image from "next/image";
import logo from "@/public/elevate.svg";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import Nav from "@/components/layouts/nav";
import { useScroll } from "@/hooks/use-scroll";
import SearchButton from "@/components/searchButton";
import useOutsideClick from "@/hooks/use-outside-click";

export default function Header() {

  const headerRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const {isScrolling} = useScroll(1000);

  useOutsideClick(headerRef, () => setOpen(false));

  return (
    <motion.header
    ref={headerRef}
      animate={{
        maxHeight: open ? 430 : 54,
        top: !open && isScrolling ? -56 : 16,
        scale: !open && isScrolling ? 0.95 : 1,
      }}
      transition={{ ease: "easeOut" }}
      className="fixed top-2 inset-x-4 z-50 flex max-h-[54px] flex-col gap-y-4 overflow-hidden rounded-xl border border-gray4 bg-gray2  px-2 py-3.5 sm:hidden"
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
    </motion.header>
  );
}
