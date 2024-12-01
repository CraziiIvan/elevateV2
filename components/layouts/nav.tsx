"use client";

import { cn } from "@/lib/utils";
import { Code2, Compass, Palette, Plus, Rocket, Sparkle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion"

const links = [
  { name: "Discover", href: "/", icon: <Compass size={16} /> },
  { name: "Ai", href: "/ai", icon: <Sparkle size={16} /> },
  { name: "Productivity", href: "/productivity", icon: <Rocket size={16} /> },
  { name: "Design", href: "/design", icon: <Palette size={16} /> },
  { name: "Development", href: "/development", icon: <Code2 size={16} /> },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="rounded-2xl">
      <div className="flex flex-col">
        {links.map((link) => {
          const isActive = link.href === pathname;
          return (
            <Link
              href={link.href}
              key={link.name}
              className={cn(
                "relative px-3 py-2 transition-colors duration-150 ease-out hover:text-black",
                { "text-black": isActive, "text-gray9": !isActive },
              )}
            >
              <div className="relative z-10 flex items-center gap-x-3">
                {link.icon} {link.name}
              </div>
              {isActive && (
                <motion.div layoutId="navBackDrop" className="absolute inset-0 rounded-xl bg-gray3 border border-gray4" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
