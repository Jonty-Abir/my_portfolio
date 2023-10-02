import Image from "next/image";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsFillTrash3Fill } from "react-icons/bs";

const products = [
  {
    id: 1,
    name: "Nike Air Force 1 07 LV8",
    href: "#",
    price: "₹47,199",
    originalPrice: "₹48,900",
    discount: "5% Off",
    color: "Orange",
    size: "8 UK",
    imageSrc:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png",
  },
  {
    id: 2,
    name: "Nike Blazer Low 77 SE",
    href: "#",
    price: "₹1,549",
    originalPrice: "₹2,499",
    discount: "38% off",
    color: "White",
    leadTime: "3-4 weeks",
    size: "8 UK",
    imageSrc:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e48d6035-bd8a-4747-9fa1-04ea596bb074/blazer-low-77-se-shoes-0w2HHV.png",
  },
  {
    id: 3,
    name: "Nike Air Max 90",
    href: "#",
    price: "₹2219 ",
    originalPrice: "₹999",
    discount: "78% off",
    color: "Black",
    imageSrc:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-high-retro-shoe-DdRmMZ.png",
  },
];

function CartItem() {
  return (
    <ul role="list" className="divide-y divide-gray-200 mx-4 py-2">
      {products.map((product, productIdx) => (
        <div key={product.id} className="">
          <li className="flex py-6 sm:py-6 ">
            <div className="flex-shrink-0">
              <Image
                src={product.imageSrc}
                alt={product.name}
                className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                width={200}
                height={200}
              />
            </div>

            <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
              <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                <div>
                  <div className="flex justify-between">
                    <h3 className="text-sm">
                      <a
                        href={product.href}
                        className="font-semibold text-black"
                      >
                        {product.name}
                      </a>
                    </h3>
                  </div>
                  <div className="mt-1 flex text-sm">
                    <p className="text-sm text-gray-500">{product.color}</p>
                    {product.size ? (
                      <p className="ml-4 border-l border-gray-200 pl-4 text-sm text-gray-500">
                        {product.size}
                      </p>
                    ) : null}
                  </div>
                  <div className="mt-1 flex items-end">
                    <p className="text-xs font-medium text-gray-500 line-through">
                      {product.originalPrice}
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      &nbsp;&nbsp;{product.price}
                    </p>
                    &nbsp;&nbsp;
                    <p className="text-sm font-medium text-green-500">
                      {product.discount}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <div className="mb-2 flex">
            <div className="min-w-24 flex">
              <button type="button" className="h-7 w-7 text-black">
                <AiOutlineMinus />
              </button>
              <input
                type="text"
                className="mx-1 h-7 w-9 rounded-md border text-center"
                defaultValue={1}
              />
              <button
                type="button"
                className="flex h-7 w-7 items-center justify-center text-gray-900"
              >
                <AiOutlinePlus/>
              </button>
            </div>
            <div className="ml-6 flex text-sm">
              <button
                type="button"
                className="flex items-center space-x-1 px-2 py-1 pl-0"
              >
                <BsFillTrash3Fill size={12} className="text-red-500" />
                <span className="text-xs font-medium text-red-500">Remove</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </ul>
  );
}

export default CartItem;
