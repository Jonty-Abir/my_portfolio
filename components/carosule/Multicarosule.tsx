import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RelatedProduct from "../e_commerces/related-productCard/RelatedProduct";

function Multicarosule() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 664 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    lg_mobile: {
      breakpoint: { max: 663, min: 465 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="mt-[50px] md:mt-[100px] md:mb-0">
      <div className=" text-2xl font-bold mb-5">You Might Also Like</div>
      <Carousel
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        containerClass="-mx-[10px]"
        itemClass="px-2"
      >
        <RelatedProduct imgSrc={"/assets/ecommerce/product/p1.png"} />
        <RelatedProduct imgSrc={"/assets/ecommerce/product/p2.png"} />
        <RelatedProduct imgSrc={"/assets/ecommerce/product/p3.png"} />
        <RelatedProduct imgSrc={"/assets/ecommerce/product/p4.png"} />
        <RelatedProduct imgSrc={"/assets/ecommerce/product/p5.png"} />
        <RelatedProduct imgSrc={"/assets/ecommerce/product/p1.png"} />
        <RelatedProduct imgSrc={"/assets/ecommerce/product/p2.png"} />
        <RelatedProduct imgSrc={"/assets/ecommerce/product/p3.png"} />
        <RelatedProduct imgSrc={"/assets/ecommerce/product/p4.png"} />
        <RelatedProduct imgSrc={"/assets/ecommerce/product/p6.png"} />
        <RelatedProduct imgSrc={"/assets/ecommerce/product/p1.png"} />
        <RelatedProduct imgSrc={"/assets/ecommerce/product/p3.png"} />
      </Carousel>
    </div>
  );
}

export default Multicarosule;
