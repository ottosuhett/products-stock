"use client"
import ProductsContext from '@/context/products/ProductsContext';
import { useContext } from 'react';
import styles from "./ItemDetails.module.scss";
import  Link  from "next/link";
import { Container } from "react-bootstrap"

export default function ItemDetail({params}){
    const { products } = useContext(ProductsContext)
    const product = products.find(p => p.id === Number(params.id))
    if(!product){
        return(
            <p className="text-light" >Item Not Found</p>
        )
    }
    return(
        <Container fluid className={`${styles.itemDetailContainer}`}>
            <Link href="/items" className={`${styles.backButton}  btn-secondary`}>
                Back
            </Link>
            <div className={`${styles.detailsContainer} container-fluid`}>
                <p className={`${styles.detailTitle}`}>Product</p>
                <p className={`${styles.detailText}`}>{product.name}</p>
                <p className={`${styles.detailTitle}`}>Quantity</p>
                <p className={`${styles.detailText}`}>{product.quantity}</p>
                <p className={`${styles.detailTitle}`}>Category</p>
                <p className={`${styles.detailText} `}>{product.category}</p>
                <p className={`${styles.detailTitle} `}>Description</p>
                <p className={`${styles.detailText} `}>{product.description}</p>
                <p className={`${styles.detailTitle} `}>Price</p>
                <p className={`${styles.detailText} `}>${product.price}</p>
            </div>
        </Container>
    )
}