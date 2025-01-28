import { getProducts } from "@/actions/getProducts"
import ProductList from "./ProductList"

async function ProductListContainer() {

    const { payload: products, error, message } = await getProducts()

    if (error) {
        return (
            <>
                
                <p>{message}</p>
            </>
        )
    }
    console.log('🈂 productsxxxxxx:', products);
    return (
        <ProductList productos={products} />

    )
}
export default ProductListContainer