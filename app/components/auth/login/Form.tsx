export default function Form() {
    return(
        <>
        <form className="w-full mt-3 border rounded p-3 shadow-md">
                        <div className="mb-3">
                            <input
                                type="text"
                                placeholder="Enter email"
                                
                                className="form-control w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-600"
                            />
                            {/* <span className="text-red-500 text-sm mt-1">Invalid email</span> */}
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                placeholder="Enter password"
                                
                                className="form-control w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-600"
                            />
                            {/* <span className="text-red-500 text-sm mt-1">Invalid password</span> */}
                        </div>
                        <div className="mt-3">
                            <button
                                type="submit"
                                className="w-full bg-cyan-600 text-white font-bold py-2 rounded hover:bg-white hover:text-cyan-600 border-2 border-cyan-600"
                            >
                                LOGIN
                            </button>
                        </div>
                    </form>
        </>
    )
}