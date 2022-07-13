/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common";

import { Product } from "./product.model";

@Injectable()
export class ProductsService {
    products: Product[] = [];

    insertProduct(title: string, description: string, price: number) {
        const prodId = Math.random().toString();
        const newProduct = new Product(prodId, title, description, price)
        return this.products.push(newProduct);
    }

    getAllProducts() {
        return [...this.products];
    }

    getSingleProduct(productId: string) {
        const product = this.findProduct(productId)[0];
        return { ...product };
    }

    updateAProduct(productId: string, title: string, description: string, price: number) {
        const [product, index] = this.findProduct(productId);
        const updatedProduct = {...product};
        if(title) {
            updatedProduct.title = title;
        }
        if(description) {
            updatedProduct.description = description;
        }
        if(price) {
            updatedProduct.price = price;
        }
        this.products[index] = updatedProduct;
    }

    deleteProduct(productId: string) {
        const index = this.findProduct(productId)[1];
        this.products.splice(index, 1)
    }

    private findProduct(id: string): [Product, number] {
        const productIndex = this.products.findIndex((prod) => prod.id == id);
        const product = this.products[productIndex];
        if(!product) {
            throw new NotFoundException('Alaye this product no dey here!') 
        }
        return [product, productIndex];
    }
}