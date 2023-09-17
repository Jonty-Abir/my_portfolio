import NestLayoutEcommerce from "@/layout/nestedLayout/ECommerceLayout";
import Products from "./Products";

function Ecommerce() {
  return (
    <NestLayoutEcommerce>
      <Products />
    </NestLayoutEcommerce>
  );
}

export default Ecommerce;
