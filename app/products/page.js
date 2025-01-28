import { getProducts } from "@/actions/getProducts";

import ProductList from "@/components/ProductList";
import ProductListContainer from "@/components/ProductListContainer";
import { Suspense } from "react";
import ProductsLoader from "@/components/ProductLoader";
import Loading from "./loading";

//Suspense

export default async function ProductPage() {





    return (
        <>
        
            <section >
            <Suspense fallback={<ProductsLoader/>}>
                    <ProductListContainer />
                </Suspense>
                
            </section>
            
            

        </>
    );
}