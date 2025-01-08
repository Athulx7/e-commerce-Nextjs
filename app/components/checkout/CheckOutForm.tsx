export default function CheckForm() {
    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    <div className="flex justify-center">
                       
                        <img 
                            src="https://www.shutterstock.com/image-vector/food-delivery-man-riding-red-600nw-1327144634.jpg" 
                            width={600} 
                            height={300} 
                            alt="Food Delivery" 
                            className=""
                        />
                    </div>
                    <div className="flex justify-center mt-10">
                        <div className="w-full md:w-3/4 lg:w-2/3">
                            <h5 className="text-center text-cyan-600 font-thin text-xl">Delivery Form</h5>
                            <form className="rounded shadow p-6 mt-6 space-y-4">
                                <input 
                                    type="text" 
                                    placeholder="Please enter your name" 
                                    className="form-control mt-3 p-3 border border-gray-300 rounded w-full" 
                                />
                                <input 
                                    type="text" 
                                    placeholder="House/Flat name" 
                                    className="form-control mt-2 p-3 border border-gray-300 rounded w-full" 
                                />
                                <input 
                                    type="text" 
                                    placeholder="Place" 
                                    className="form-control mt-2 p-3 border border-gray-300 rounded w-full" 
                                />
                                <input 
                                    type="text" 
                                    placeholder="Landmark" 
                                    className="form-control mt-2 p-3 border border-gray-300 rounded w-full" 
                                />
                                <div className="flex justify-between mt-3">
                                    <button className="btn bg-red-500 text-white w-1/2 p-3 rounded font-bold">Cancel</button>
                                    <button className="btn bg-green-500 text-white w-1/2 p-3 ml-5 rounded font-bold">Proceed to pay</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        
        </>
    )
}