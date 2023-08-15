"use client"
import styles from "@/components/Tables/Tables.module.scss";
import ProductsContext from "@/context/products/ProductsContext";
import { useContext } from "react";
import { Table, Container, Button } from "react-bootstrap"
import { useRouter } from "next/navigation";

export default function ItemsTable(){
    const { products, setProducts, setProductCategories,setRunningOut } = useContext(ProductsContext)
    
    const router = useRouter(products)
    function deleteItem(id){
        const item = products.filter(p => p.id !== Number(id))
        if(item.length > 0){
            localStorage.removeItem("products")
            localStorage.setItem("products",JSON.stringify(item))
            setProducts(item)
        }else{
            localStorage.removeItem("products")
            setProducts([])
            setProductCategories(0)
            setRunningOut([])
        }
    }
    return (
        <Container fluid className={`${styles.tableContainer} table-responsive`} >
            <Table className=" table-dark ">
                <thead>
                    <tr>
                        <th scope="col" className={`${styles.colTitle} bg-dark text-light`}>ID</th>
                        <th scope="col" className={`${styles.colTitle} bg-dark text-light`}>Name</th>
                        <th scope="col" className={`${styles.colTitle} bg-dark text-light`}>inStock</th>
                        <th scope="col" className={`${styles.colTitle} bg-dark text-light`}>Category</th>
                        <th scope="col" className={`${styles.colTitle} bg-dark text-light`}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                { products.length > 0 ? (
                        products.map((item) =>{
                            
                            return(
                            <tr className={styles.row} key={item.id}>
                                <td className={styles.rowContent}>{item.id}</td>
                                <td className={styles.rowContent}>{item.name}</td>
                                <td className={styles.rowContent}>{item.quantity}</td>
                                <td className={styles.rowContent}>{item.category}</td>
                                <td className={styles.rowContent}>
                                    <div className={styles.btnContainer}>
                                        <div className={`${styles.btn}`}>
                                            <Button onClick={ ()=> router.push(`items/${item.id}`)} className={`${styles.tableBtn} btn btn-primary`}> Details</Button>
                                        </div>
                                        <div className={`${styles.btn}`}>
                                            <Button className={`${styles.tableBtn} btn btn-danger`} onClick={()=>deleteItem(item.id)}>Delete</Button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            )
                        })
                    ):(
                        <tr className={styles.row}>
                                <td className={styles.noItems}>No items</td>
                                <td className={styles.noItems}>-</td>
                                <td className={styles.noItems}>-</td>
                                <td className={styles.noItems}>-</td>
                                <td className={styles.noItems}>-</td>
                        </tr>
                    )
                }
                </tbody>
            </Table>
        </Container>
    )
}