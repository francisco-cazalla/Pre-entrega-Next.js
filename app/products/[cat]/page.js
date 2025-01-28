
import { getProducts } from "@/actions/getProducts"
import ProductList from "@/components/ProductList"

export default async function ProductsByCategoryPage({ params }) {

  const { cat } = await params
  const { payload: products } = await getProducts(cat)
  console.log("categoria em getProducts")


  console.log('🏣 productsxxxxx:', products);
  return (
    <>
      
      <ProductList productos={products} />

    </>
    
  )
}