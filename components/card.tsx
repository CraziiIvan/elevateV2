import Image from "next/image";
import capacities from "../public/capacities.png";
import capacitiesLogo from "../public/capacitiesLogo.svg";

export default function Card() {
  return (
    <div className=" hover:bg-gray3 cursor-pointer transition-colors duration-300 ease-out p-1 rounded-[16px]">
      <div
        className="relative aspect-video w-full overflow-hidden rounded-xl border border-gray4"
      >
        <Image src={capacities} alt="capacities" fill />
      </div>
      <div className="flex p-2 items-start gap-x-2">
        <Image className=" mt-1" src={capacitiesLogo} alt="capacitiesLogo" width={20} />
        <div>
          <div className="font-medium">Capacities</div>
          <div className="text-gray11 text-sm">Note taking app</div>
        </div>
      </div>
    </div>
  );
}
