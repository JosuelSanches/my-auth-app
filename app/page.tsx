import Image from "next/image";
import Produto from "./components/Produto"
import Review from "./components/Review"

import { Suspense } from "react";
import ProdutoLoading from "./components/ProdutoLoading";
import ReviewLoading from "./components/ReviewLoading"

export default async function Home() {
  
  return (
    <>
      <h1 className="text-green-500">Home Page
      <h2>
        <Suspense fallback={<ProdutoLoading />}>
          <Produto />
        </Suspense>
        <br/>
        <Suspense fallback={<ReviewLoading />}>
          <Review />
        </Suspense>
      </h2>
      </h1>
    </>
  );
}
