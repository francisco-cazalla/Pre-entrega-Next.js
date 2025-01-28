export async function getProducts(categoria) {
  try {
    const url = categoria ? `http://localhost:3000/api/products?categoria=${categoria}` : "http://localhost:3000/api/products";
    console.log("url en getProducts")
    console.log(url)
    const data = await fetch(url)
    const { payload: products } = await data.json()
    console.log('🐮 products:', products);
    return {
        payload: products,

        message: "Se obtuvieron los productos",
        error: false
    }

} catch (error) {

    return {
        payload: null,
        message: "No se pudieron obtener los productos",
        error: true
    }
}

}