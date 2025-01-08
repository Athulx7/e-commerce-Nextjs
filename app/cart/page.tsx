import CartTable from "../components/cart/CartTable";
import GrandTotal from "../components/cart/GrandTotal";

export default function Cart() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h4 className="text-center text-cyan-600 font-thin text-3xl mb-8 ">
          Cart Summary
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <CartTable />
          </div>

          <GrandTotal />
        </div>
      </div>
    </>
  );
}
