import Card from "./card";

export default function ItemsList() {
  return (
    <div className=" mt-6 grid grid-cols-1 -mx-2 md:mx-0 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}
