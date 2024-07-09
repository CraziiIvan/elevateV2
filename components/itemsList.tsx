import Card from "./card";

export default function ItemsList() {
  return (
    <div className=" mt-12 grid grid-cols-1 -mx-2 md:mx-0 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-10">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}
