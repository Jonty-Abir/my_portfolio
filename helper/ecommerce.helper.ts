import axios from "axios";

export async function getAllProduct() {
    try {
        const { data, status } = await axios.get("https://fakestoreapi.com/products");
        if (status !== 200) throw new Error("Faild To Get Products!");
        return Promise.resolve(data);
    } catch (error: any) {
        console.log(error);
        return Promise.reject(error?.message);
    }
}