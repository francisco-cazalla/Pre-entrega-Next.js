export async function getProducts(categoria,products) {
  try {
    const url = categoria ? `https://pre-entrega-next-js.vercel.app/api/products?categoria=${categoria}` : `https://pre-entrega-next-js.vercel.app/api/products`;
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