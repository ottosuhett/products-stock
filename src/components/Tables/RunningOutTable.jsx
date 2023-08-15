"use client"
import styles from "./Tables.module.scss"
import { Table, Container  } from "react-bootstrap"
import ProductsContext from "@/context/products/ProductsContext";
import { useContext } from "react";

export default function RunningOutTable(props){
    const { runningOut } = useContext(ProductsContext)
    return (
        <Container fluid className={styles.tableRunningContainer}>
            <Table className=" table-dark ">
                <thead>
                    <tr>
                        <th scope="col" className={`${styles.colTitle} bg-dark text-light`}>
                            {props.columnTitle}
                        </th>
                        <th scope="col" className={`${styles.colTitle} bg-dark text-light`}>Qtd</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        runningOut.length>0 ? (
                            runningOut.map((item)=>{
                            return(
                                <tr className={styles.row} key={item.id}>
                                    <td className={styles.rowContent}>{item.name}</td>
                                    <td className={styles.rowContent}>{item.quantity}</td>
                                </tr>
                            )
                            })
                        ): (
                            <tr className={styles.row}>
                                <td className={styles.noItems}>No running out items</td>
                                <td className={styles.noItems}>-</td>
                            </tr>
                                
                        )
                    }
                </tbody>
            </Table>
        </Container>
    )
}