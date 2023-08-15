"use client"
import ProductsContext from "@/context/products/ProductsContext";
import styles from "./NewItemForm.module.scss";
import { useContext  } from "react";
import { Form, Button } from "react-bootstrap"
import { useRouter } from "next/navigation";

export default function NewItemForm(){
    const { products, setProducts } = useContext(ProductsContext);

    const router = useRouter()

    const handleSubmit = (e) =>{
        e.preventDefault()
        const newProduct = {
            id:Math.floor(Math.random() * 50000),
            name: (e.target.name.value).trim(),
            quantity:parseInt(e.target.inputQtd.value),
            category: e.target.inputCategory.value,
            description: e.target.description.value,
            price:parseInt(e.target.inputPrice.value),
            date: new Date()
        }
        const updatedProducts = [...products, newProduct];
        setProducts(updatedProducts);
        localStorage.setItem("products", JSON.stringify(updatedProducts));
        e.target.reset();
        router.push("/")

    }
    return(
        <div className = {`${styles.formContainer} container-fluid`}>
            <Form className={`${styles.form}`} onSubmit={handleSubmit}>
                <div className={`${styles.formItem}`}>
                    <Form.Label className = {`${styles.input} text-light`} htmlFor="name">Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        className={`${styles.inputText} form-control`}  
                        id="name" 
                        required
                        autoComplete="off"
                    />
                </div>
                <Form.Group className={`${styles.formItem}`}>
                    <Form.Label  className = {`${styles.input} text-light`} htmlFor="inputQtd">Qtd</Form.Label>
                    <div>
                        <Form.Control 
                            type="number" 
                            className={`${styles.inputText} form-control`} 
                            id="inputQtd" 
                            required 
                            autoComplete="off"
                        />
                    </div>
                </Form.Group>
                <Form.Group className={`${styles.formItem}`}>
                    <Form.Label  className = {`${styles.input} text-light`} htmlFor="inputPrice">Price</Form.Label>
                    <div>
                        <Form.Control 
                            type="number" 
                            className={`${styles.inputText} form-control`}  
                            id="inputPrice" 
                            required 
                            autoComplete="off"
                        />
                    </div>
                </Form.Group>
                <Form.Group className={`${styles.formItem}`}>
                    <Form.Label className = {`${styles.input} text-light`}  htmlFor="inputCategory">Category</Form.Label>
                    <Form.Select className={`${styles.inputText} form-select`} id="inputCategory" required>
                        <option selected>Select a Category</option>
                        <option value="Console">Console</option>
                        <option value="Games">Games</option>
                        <option value="Acessories">Accessories</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className={`${styles.formDescription}`}>
                    <Form.Label className = {`${styles.input} text-light`} htmlFor="description">Description</Form.Label>
                    <Form.Control as="textarea" 
                        className={`${styles.inputText} form-control`} 
                        id="description" 
                        name="description" 
                        rows={8} 
                        required
                    ></Form.Control>
                </Form.Group>
                <Form.Group className={`${styles.formSubmit}`}>
                    <Button 
                        type="submit" 
                        className={`${styles.btnSubmit} btn btn-primary`}
                    >
                        Submit
                    </Button>
                </Form.Group>
            </Form>
        </div>
    )
}