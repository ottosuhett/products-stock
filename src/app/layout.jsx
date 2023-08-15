"use client"
import './globals.css'
import Header from '@/components/Header/Header'
import { Poppins } from 'next/font/google'
import Footer from '@/components/Footer/Footer';
import ProductsContext from '@/context/products/ProductsContext';
import { useState, useEffect } from "react";
import styles from "./Lay.module.scss"
const poppins = Poppins({ subsets: ['latin'] , weight:["400", "700"]})

export default function RootLayout({ children }) {
  const [products, setProducts] = useState([])
    useEffect(()=>{
        const storedProductsJson = typeof window !== "undefined" ? window.localStorage.getItem("products") : false
      if (storedProductsJson) {
        const parsedProducts = JSON.parse(storedProductsJson);
          setProducts(parsedProducts);
      }else{
        return
      }
    },[])
  const [runningOut, setRunningOut] = useState([]);
  const [productCategories, setProductCategories] = useState(0);
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className={`${styles.mainLayContainer}`}>
          <Header />
          <ProductsContext.Provider value={{ products, setProducts, runningOut,setRunningOut,productCategories,setProductCategories}}>
            <div className={`${styles.mainContainer}`}>
              {children}
            </div>
          </ProductsContext.Provider>
          <Footer />
        </div>
      </body>
    </html>
  )
}
