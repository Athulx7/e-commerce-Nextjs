export default function HomeProduct() {
    return (
      <>
        <div className="py-16">
        
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-cyan-600 font-thin">
              Explore the Collection
            </h2>
          </div>
  
         
          <div className="pt-16 px-4 sm:px-8 lg:px-16">
           
            <div className="flex flex-wrap justify-center gap-8">
             
              <div className="border-2 rounded-sm border-gray-400 w-72 h-96 flex flex-col items-center justify-between p-4">
                
                <div className="flex items-center justify-center w-full h-[80%] overflow-hidden">
                  <img
                    src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                    className="h-full max-h-full object-contain transform transition-transform duration-300 hover:scale-110"
                    alt="Product"
                  />
                </div>
                
                <div className="text-center w-full">
                  <h3 className="font-bold text-gray-600">Product Name</h3>
                  <h3 className="text-gray-600 text-lg">₹ Price</h3>
                </div>
              </div>
  
              
              <div className="border-2 rounded-sm border-gray-400 w-72 h-96 flex flex-col items-center justify-between p-4">
                <div className="flex items-center justify-center w-full h-[80%] overflow-hidden">
                  <img
                    src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                    className="h-full max-h-full object-contain transform transition-transform duration-300 hover:scale-110"
                    alt="Product"
                  />
                </div>
                <div className="text-center w-full">
                  <h3 className="font-bold text-gray-600">Product Name</h3>
                  <h3 className="text-gray-600 text-lg">₹ Price</h3>
                </div>
              </div>

              

            </div>
          </div>
        </div>
      </>
    );
  }
  