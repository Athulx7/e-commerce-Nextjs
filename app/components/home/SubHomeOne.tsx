export default function SubHomeOne() {
  return (
    <>
      <div className="relative px-3 py-5 flex justify-center items-center">
        <img
          className="h-[1000px] object-cover w-full sm:w-auto"
          src="https://static.wixstatic.com/media/84770f_24595e0412cb42dfae6de1adbf5c73a1~mv2_d_1676_1980_s_2.png/v1/fill/w_909,h_1245,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/84770f_24595e0412cb42dfae6de1adbf5c73a1~mv2_d_1676_1980_s_2.png"
        />

        <img
          className="hidden sm:block h-[500px] mt-20 ms-64 object-cover"
          src="https://static.wixstatic.com/media/84770f_31b162dc5d2c487493fb435d6ddc9692~mv2.png/v1/crop/x_2,y_0,w_685,h_980/fill/w_428,h_611,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/84770f_31b162dc5d2c487493fb435d6ddc9692~mv2.png"
        />

        <div className="absolute text-center text-black px-5 sm:px-0">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            DISCOVER THE FUTURE OF SHOPPING
          </h1>
          <p className="text-sm sm:text-xl font-light">
            SHOP THE LATEST TRENDS WITH EASE AND CONFIDENCE
          </p>
          <button className="mt-4 px-6 sm:px-8 py-2 bg-black text-white rounded-sm hover:bg-white border-black border-2 hover:text-black border-solid">
            SHOP NOW
          </button>
        </div>
      </div>
    </>
  );
}
