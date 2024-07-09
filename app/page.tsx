import ItemsList from "@/components/itemsList";
import SubmitModal from "@/components/modals/submitModal";
import SubscribeModal from "@/components/modals/subscribeModal";
import { Button } from "@/components/ui/button";
import { helvetica } from "@/lib/fonts";

export default function Home() {
  return (
    <main className="px-8 grow pt-24 pb-6 sm:mt-0 sm:p-8 sm:pl-4 overflow-scroll">
      <div className="max-w-xl rounded-md">
        <h1 className={`${helvetica.className} text-3xl font-bold`}>
          Curated Tools Library
        </h1>
        <p className="mt-2 text-lg text-zinc-500">
          Streamline your workflow with curated tools for enhanced productivity.
        </p>
        <div className="mt-6 flex gap-x-4">
          <SubscribeModal/>
          <SubmitModal/>
        </div>
      </div>
      <ItemsList/>
    </main>
  );
}
