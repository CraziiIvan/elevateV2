import ItemsList from "@/components/itemsList";
import { Button } from "@/components/ui/button";
import { helvetica } from "@/lib/fonts";

export default function Home() {
  return (
    <main className="mt-16 grow px-4 py-4 sm:mt-0 sm:px-8">
      <div className="max-w-xl rounded-md">
        <h1 className={`${helvetica.className} text-3xl font-bold`}>
          Elevate Curated Tools Library
        </h1>
        <p className="mt-2 text-lg text-zinc-500">
          Streamline your workflow with curated tools for enhanced productivity.
        </p>
        <div className="mt-6 flex gap-x-4">
          <Button>Subscribe</Button>
          <Button variant="secondary">Submit</Button>
        </div>
      </div>
      <ItemsList/>
    </main>
  );
}
