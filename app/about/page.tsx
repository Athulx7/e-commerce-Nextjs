export default function About() {
  return (
    <>
      <div className="mt-12 px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-16">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl text-cyan-600 font-thin">
            About Us
          </h3>
        </div>

        <div className="flex justify-center items-center text-center">
          <p className="w-full sm:w-3/4 lg:w-2/3 text-lg sm:text-xl lg:text-2xl text-gray-400 font-light leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            minima, tempore debitis culpa aperiam, error inventore architecto
            blanditiis velit hic veritatis eveniet commodi unde eaque ut! Qui
            non eaque vero?
          </p>
        </div>

        <div className="flex justify-center items-center mt-8">
          <img
            src="https://static.wixstatic.com/media/21b326_3a31f377858e434d80f0244579062d2c~mv2_d_2574_3861_s_4_2.jpg/v1/crop/x_19,y_0,w_2549,h_3861/fill/w_516,h_786,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/21b326_3a31f377858e434d80f0244579062d2c~mv2_d_2574_3861_s_4_2.jpg"
            alt="About Us"
            className="w-full sm:w-3/4 lg:w-1/2 h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </>
  );
}
