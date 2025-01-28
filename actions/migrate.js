import { addDoc, collection } from "firebase/firestore"
import {db} from "@/firebase/firebaseConfig"
import { products } from "@/components/products"


export async function migrate() {
    //1. Obtener referencia de la DB (variable db)
    //2. Obtener referencia de la coleccion de productos (variable coleccion)
    //3. Hacer la consulta usando la coleccion
    const productsCollection = collection(db, "products")

    products.forEach((product) => {

        addDoc(productsCollection, product)
            .then(() => {
                console.log("Producto agregado ", product.id)
            })
            
    })
}