"use client"
import { Navbar, Container, Nav} from "react-bootstrap";
import styles from "@/components/Header/Header.module.scss"
import Link from "next/link"

export default function Header(){
    return(
        <Navbar className={`${styles.navBarContainer} `} expand="sm">
            <Container fluid className={`${styles.containerNav}`}>
                <Navbar.Brand className="text-light" size="lg">
                    <h4 className={`${styles.brand}`}>Product Stock</h4>
                </Navbar.Brand>
                <Nav className={`${styles.itemsContainer}`}>
                    <Nav.Item>
                        <Link href="/" className={`${styles.link}`}>Home</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link href="/items" className={`${styles.link}`}>Items</Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    )
}