import Image from "next/image";
import logo from "../../public/elevate.svg";
import Nav from "./nav";

export default function DesktopSidebar() {
  return (
    <aside className="hidden flex-col gap-y-4 rounded-2xl border border-zinc-200 bg-zinc-50 px-2 py-4 sm:relative sm:inset-0 sm:flex sm:h-auto sm:w-64">
      <div className="flex items-center justify-between pl-2.5 pr-2">
        <Image src={logo} alt="logo" height={20} />
      </div>
      <Nav />
    </aside>
  );
}
