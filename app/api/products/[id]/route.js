import { getProductById } from "@/actions/getProductById";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      
      const product = await getProductById(id);
      return res.status(200).json(product);
    } catch (error) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
  } else {
    return res.status(405).json({ error: "Método no permitido" });
  }
}