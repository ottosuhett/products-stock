"use client"
import {Container, Navbar, Nav } from "react-bootstrap"
import styles from "./ItemsLayout.module.scss"
import Link from "next/link"

export default function ItemLayout({ children }) {
    return (
      <div>
        <Container fluid className={`${styles.itemsMenu}`}>    
            <Link className={`${styles.navItemsLink} text-light`} href="/items">All Items</Link>
            <Link className={`${styles.navItemsLink} text-light`} href="/items/new">New Item</Link>       
        </Container>
            {children}
      </div> 
    )
  }