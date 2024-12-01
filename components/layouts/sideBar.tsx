import Image from "next/image";
import logo from "@/public/elevate.svg";
import Nav from "@/components/layouts/nav";
import { Button } from "@/components/ui/button";
import SearchButton from "@/components/searchButton";
import { helvetica } from "@/lib/fonts";
import sidebarLogo from "@/public/1732386179891.png";
import { ArrowUpRight } from "lucide-react";

export default function Sidebar() {

  return (
    <aside className="m-4 hidden w-64 flex-col gap-y-2 sm:flex">
      <div className="flex flex-col gap-y-4 rounded-xl border border-gray4 shadow-sm bg-gray2 px-2 py-4">
        <div className="flex items-center pl-2.5 gap-x-2">
          <Image src={logo} alt="logo" height={20} />
          <div className={`${helvetica.className} text-2xl font-bold leading-6`}>Elevate</div>
        </div>
        <SearchButton/>
        <Nav />
      </div>
      <div className="flex flex-col gap-y-4 rounded-xl border border-gray4 shadow-sm bg-gray2 p-4">
        <div>
          <div className="text-lg font-medium">Any help?</div>
          <p className="text-gray11">
            Feel free to get in touch.
          </p>
        </div>
        <Button variant="secondary">Contact Me</Button>
      </div>
    </aside>
  );
}
// export default function Sidebar() {
//   return (
//     <aside className="flex h-full w-64 flex-col divide-y divide-sage2 border-r border-r-sage2">
//       <div className="relative h-40 w-full">
//         <Image src={sidebarLogo} alt="logo" fill />
//       </div>
//       <div className="relative flex h-12 w-full items-center justify-between px-5 text-sage10 hover:bg-sage1 cursor-pointer duration-75 ease-out hover:text-sage12">
//         Explore
//         <ArrowUpRight size={16} strokeWidth={1.5} />
//       </div>
//       <div className="relative flex h-12 w-full items-center justify-between border-b border-b-sage3 px-5 text-sage10 hover:bg-sage1 cursor-pointer duration-75 ease-out hover:text-sage12">
//         Ai
//         <ArrowUpRight size={16} strokeWidth={1.5} />
//       </div>
//     </aside>
//   );
// }
