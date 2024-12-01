"use client"

import { useAtom } from "jotai";
import { commandMeunOpen } from "@/store/atoms";
import { Command, Search } from "lucide-react";

export default function SearchButton() {

    const [open, setOpen] = useAtom(commandMeunOpen);

    return ( 
        <button onClick={() => setOpen(true)} className=" px-3 py-2 bg-gray1 rounded-xl border border-gray5 hover:bg-gray2 duration-150 ease-out">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2 text-gray9">
          <Search size={16}/>
          <div>Search</div>
          </div>
          <div className="text-xs hidden items-center gap-x-0.5 text-gray8 sm:flex">
            <Command size={11} fontWeight={1}/>
            <div>K</div>
          </div>
        </div>
      </button>
     )
}