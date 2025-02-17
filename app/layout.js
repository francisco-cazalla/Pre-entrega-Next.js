import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartContext";
import { NotificationProvider } from "@/components/NotificationContext";

export const metadata = {
  title: "Tienda Tecnologica",
  description: "Una descripción de tu sitio",
  icons: {
    icon: "/icon.png", // Ruta al favicon
    },
};

function RootLayout({ children }) {


  return (
    <html lang="en">
      <body>
        <NotificationProvider>
        <Header/>        
        <CartProvider>{children}</CartProvider>
        <Footer/>
        </NotificationProvider>
      </body>
    </html>
  );
}

export default RootLayout
