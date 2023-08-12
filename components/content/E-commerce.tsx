import NestLayoutE_commerce from "@/layout/NestedLayoutE_Commerce";
import Products from "./Products";

function Ecommerce() {
  return (
    <NestLayoutE_commerce>
      <Products />
    </NestLayoutE_commerce>
  );
}

export default Ecommerce;
