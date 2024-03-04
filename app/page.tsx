import Image from "next/image";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 4000))
  return (
    <h1 className="text-green-500">Home Page</h1>
  );
}
