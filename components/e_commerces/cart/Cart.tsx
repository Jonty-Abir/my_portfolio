import Wrapper from "@/components/Wrapper";
import CartItem from "./CartItem";
function Cart() {
  return (
    <div className="w-full md:py-20 bg-slate-300">
      <Wrapper>
        <>
          {/* HEADING AND PARAGRAPH START */}
          <div className="text-center max-w-[800px] mx-auto mt-0 pt-12 md:mt-0 lg:pt-0">
            <div className="text-[28px] md:text-[34px] mb-5 leading-tight text-gray-800 font-bold">
              Shopping Cart
            </div>
          </div>
          {/* HEADING AND PARAGRAPH END */}
          {/* CART CONTENT START */}
          <div className="flex flex-col lg:flex-row gap-12 pb-10">
            {/* CART ITEMS START */}
            <div className="mx-auto max-w-7xl px-2  lg:px-0">
              <div className="mx-auto max-w-2xl py-8 pt-0 lg:max-w-7xl">
                <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                  <section
                    aria-labelledby="cart-heading"
                    className="rounded-lg lg:col-span-8"
                  >
                    <h2 id="cart-heading" className="sr-only">
                      Items in your shopping cart
                    </h2>
                    <CartItem />
                  </section>
                  {/* Order Details Start */}
                  <section
                    aria-labelledby="summary-heading"
                    className="mt-16 rounded-md bg-slate-300 font-semibold px-4 lg:col-span-4 lg:mt-0 lg:p-0"
                  >
                    <h2
                      id="summary-heading"
                      className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
                    >
                      Price Details
                    </h2>
                    <div>
                      <dl className=" space-y-1 px-2 py-4">
                        <div className="flex items-center justify-between">
                          <dt className="text-sm text-gray-800">
                            Price (3 item)
                          </dt>
                          <dd className="text-sm font-medium text-gray-900">
                            ₹ 52,398
                          </dd>
                        </div>
                        <div className="flex items-center justify-between pt-4">
                          <dt className="flex items-center text-sm text-gray-800">
                            <span>Discount</span>
                          </dt>
                          <dd className="text-sm font-medium text-green-700">
                            - ₹ 3,431
                          </dd>
                        </div>
                        <div className="flex items-center justify-between py-4">
                          <dt className="flex text-sm text-gray-800">
                            <span>Delivery Charges</span>
                          </dt>
                          <dd className="text-sm font-medium text-green-700">
                            Free
                          </dd>
                        </div>
                        <div className="flex items-center justify-between border-y border-dashed py-4 ">
                          <dt className="text-base font-semibold text-gray-900">
                            Total Amount
                          </dt>
                          <dd className="text-base font-semibold text-gray-900">
                            ₹ 48,967
                          </dd>
                        </div>
                      </dl>
                      <div className="px-2 pb-4 font-semibold text-green-700">
                        You will save ₹ 3,431 on this order
                      </div>
                    </div>
                  </section>
                  {/* Order Details End */}
                </form>
              </div>
            </div>
            {/* CART ITEMS END */}
          </div>
          {/* CART CONTENT END */}
        </>
      </Wrapper>
    </div>
  );
}

export default Cart;
