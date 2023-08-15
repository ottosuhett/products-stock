"use client"
import React, { useContext, useEffect } from "react";
import ProductsContext from "@/context/products/ProductsContext";
import Card from "@/components/Card/Card.jsx"
import styles from "./DashboardCards.module.scss";
import { FcBearish, FcBarChart, FcFilingCabinet} from "react-icons/fc";

export default function DashboardCards() {
    const { products,setProducts, runningOut, setRunningOut, productCategories, setProductCategories } = useContext(ProductsContext);
   
    function getCategoriesAmount(){
        const uniqueItems ={}
        products.map((item)=>{
            if(!uniqueItems[item.category]){
                uniqueItems[item.category] = true;
            }
        })
        setProductCategories(Object.keys(uniqueItems).length)
    }
    useEffect(() => {
        if (products.length > 0) {
            const runningOutItems = products.filter(product => product.quantity < 10);
            setRunningOut(runningOutItems);
            getCategoriesAmount()
        }
    },[products,setProducts]);
    return (
        <div className={`${styles.CardsContainer} container-fluid`}>
            <Card icon={<FcFilingCabinet />} cardTitle="Categories" amount={productCategories} />
            <Card icon = {<FcBarChart />}  cardTitle="Total Items" amount={products.length} />
            <Card icon= {<FcBearish />}  cardTitle="Running Out" amount={runningOut.length} />
        </div>
    );
}