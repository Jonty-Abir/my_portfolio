import { IProduct } from "@/interface/interface";
import axios from "axios";

export async function getAllProduct() {
  const { data, status } = await axios.get(
    "https://dummyjson.com/products?limit=100"
  );
  return data.products as IProduct[];
}

export async function getSingleProduct(id: any) {
  const { data, status } = await axios.get(
    `https://dummyjson.com/products/${id}`
  );
  return data as IProduct;
}