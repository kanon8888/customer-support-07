import React from 'react';

const bannar = () => {
    return (
        <>


            <div className="bg-gray-100 w-full py-10">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                   
                    <div className="w-full h-[250px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] relative flex justify-center items-center gap-10">
                        <img src="image/vector1.png" alt="" className="object-cover w-[285px] h-[295px]" />
                        <img src="image/vector1.png" alt="" className="object-cover w-[285px] h-[295px] -scale-x-100" />
                        <div className="absolute flex flex-col items-center">
                            <h2 className="text-white text-3xl font-bold">In-Progress</h2>
                            <p className="text-white text-xl font-semibold">0</p>
                        </div>

                    </div>

                  
                    <div className="w-full h-[250px] bg-[#54CF68] to-[#00827A] relative flex justify-center items-center gap-10">

                        <img src="image/vector1.png" alt="" className="object-cover w-[285px] h-[295px]" />

                        <img src="image/vector1.png" alt="" className="object-cover w-[285px] h-[295px] -scale-x-100" />

                        <div className="absolute flex flex-col items-center">
                            <h2 className="text-white text-3xl font-normal">Resolved</h2>
                            <p className="text-white text-xl font-bold">0</p>
                        </div>


                    </div>
                </div>
            </div>



        </>
    );
};

export default bannar;
