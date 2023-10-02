import NestLayoutEcommerce from "@/layout/nestedLayout/ECommerceLayout";
import Products from "./Products";

function Ecommerce() {
  return (
    <NestLayoutEcommerce e_slider={true}>
      <Products />
    </NestLayoutEcommerce>
  );
}

export default Ecommerce;
