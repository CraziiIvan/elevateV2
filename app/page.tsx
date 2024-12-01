import ItemsList from "@/components/itemsList";
import Image from "next/image";
import heroBg from "@/public/hero-bg.svg";
import Hero from "@/components/layouts/hero";

export default function Home() {

  return (
    <main id="main" className="px-8 grow pb-6 sm:mt-0 sm:p-8 sm:pl-4 overflow-x-hidden relative">
        <Hero/>
        <Image src={heroBg} alt="hero-bg" width={480} className=" absolute top-20 -right-[72px] sm:top-6 sm:right-0 rotate-12 -z-50" />
        <div className=" h-svh">
        <ItemsList/>
        </div>
    </main>
  );
}

// export default function Home() {
//   return (
//     <main>
//       Hello
//     </main>
//   )
// }
