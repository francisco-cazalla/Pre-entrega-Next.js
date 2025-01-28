import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartContext";



function RootLayout({ children }) {


  return (
    <html lang="en">
      <body>
        <Header/>        
        <CartProvider>{children}</CartProvider>
        <Footer/>
      </body>
    </html>
  );
}

export default RootLayout
