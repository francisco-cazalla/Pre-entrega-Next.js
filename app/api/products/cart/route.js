import { NextResponse } from "next/server";
import { db } from "@/firebase/firebaseConfig"; 
import { collection, doc, getDocs,getDoc, setDoc, deleteDoc } from "firebase/firestore";


export async function getCartItems() {
    try {
        const cartRef = collection(db, "cart");
        const querySnapshot = await getDocs(cartRef);
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      } catch (error) {
        console.error("Error obteniendo el carrito:", error);
        return [];
      }
    }

    export async function removeCartItem(id) {
      
        if (!id || typeof id !== "string") {
          throw new Error("El ID del producto no es válido");
        }
        try {
          const productRef = doc(db, "products", id); 
          const productSnap = await getDoc(productRef);
      
          if (productSnap.exists()) {
            return { id: productSnap.id, ...productSnap.data() };
          } else {
            console.error("No se encontró el producto.");
            return null;
          }
        } catch (error) {
          console.error("Error al obtener el producto:", error);
          return null;
        }
      }
    



