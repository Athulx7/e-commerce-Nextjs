import CheckForm from "../components/checkout/CheckOutForm";

export default function CheckOut() {
    return (
        <>
            <div className="container mx-auto flex justify-center items-center mt-5 flex-col px-4">
                <h3 className="text-danger text-2xl font-bold mb-4">Delivery Items</h3>



                <CheckForm />

                
            </div>
        </>
    )
}
