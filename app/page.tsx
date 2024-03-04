import Image from "next/image";
import Produto from "./components/Produto"
export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return (
    <h1 className="text-green-500">Home Page
    <h2>
      <Produto/>
    </h2>
    </h1>
  );
}
