import Image from "next/image";
import Produto from "./components/Produto"
import Review from "./components/Review"

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return (
    <h1 className="text-green-500">Home Page
    <h2>
      <Produto/>
      <br/>
      <Review/>
    </h2>
    </h1>
  );
}
