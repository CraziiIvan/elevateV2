import Image from "next/image";
import logo from "@/public/elevate.svg";
import Nav from "@/components/layouts/nav";
import { Button } from "@/components/ui/button";
import SearchButton from "@/components/searchButton";

export default function Sidebar() {
  

  return (
    <aside className="m-4 hidden w-64 flex-col gap-y-2 sm:flex">
      <div className="flex flex-col gap-y-4 rounded-2xl border border-zinc-200 bg-zinc-50 px-2 py-4">
        <div className="flex items-center justify-between pl-2.5 pr-2">
          <Image src={logo} alt="logo" height={20} />
        </div>
        <SearchButton/>
        <Nav />
      </div>
      <div className="flex flex-col gap-y-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
        <div>
          <div className="text-lg font-medium">Any help?</div>
          <p className="text-zinc-500 dark:text-zinc-400">
            Feel free to get in touch.
          </p>
        </div>
        <Button variant="secondary">Contact Me</Button>
      </div>
    </aside>
  );
}
