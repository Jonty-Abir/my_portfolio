import NestLayoutEcommerce from "@/layout/NestedLayoutE_Commerce";
import Products from "./Products";

function Ecommerce() {
  return (
    <NestLayoutEcommerce>
      <Products />
    </NestLayoutEcommerce>
  );
}

export default Ecommerce;
