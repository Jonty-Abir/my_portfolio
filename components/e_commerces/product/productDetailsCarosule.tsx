/* eslint-disable @next/next/no-img-element */
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function ProductDetailsCarousel({ imgAr }: { imgAr: string[]  }) {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={true}
        showStatus={false}
        thumbWidth={65}
        showThumbs={true}
        autoPlay={true}
        className="productCarousel"
      >
        {imgAr.map((str, i) => (
          <div key={i}>
            <img alt="product" width={400} height={400} src={str} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ProductDetailsCarousel;
