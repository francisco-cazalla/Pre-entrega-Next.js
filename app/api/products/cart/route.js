import { NextResponse } from "next/server";
import { db } from "@/firebase/firebaseConfig"; 
import { collection, doc, getDocs,getDoc, setDoc, deleteDoc } from "firebase/firestore";


export async function getCartItems() {
  try {
    const productsCollection = collection(db, "products");
    const snapshot = await getDocs(productsCollection);
    
    const products = snapshot.docs.map((doc) => ({
      firebaseId: doc.id, 
      ...doc.data(),      
    }));
    
    return products.filter((product) => product.inCart === true);
  } catch (error) {
    console.error("Error obteniendo el carrito:", error);
    return [];
  }
}



