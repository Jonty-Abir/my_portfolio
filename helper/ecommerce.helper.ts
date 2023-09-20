import axios from "axios";

export async function getAllProduct() {
  try {
    const { data, status } = await axios.get(
      "https://fakestoreapi.com/products?limit=10"
    );
    if (status !== 200) throw new Error("Faild To Get Products!");
    return Promise.resolve(data);
  } catch (error: any) {
    console.log(error?.message);
    return Promise.reject(null);
  }
}
