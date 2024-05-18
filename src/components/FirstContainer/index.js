'use client'

import Header from "./Header"
import couple from '../../../public/foto1.png'
import Image from "next/image"
import { IoMdArrowForward } from "react-icons/io";
import { MdOutlineArrowOutward, MdStars  } from "react-icons/md";

export const FirstContainer = () => {
    const handleClick = () => {
        const targetElement = document.getElementById("PlanoTop");
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return(
        <div
            className="bg-white min-h-screen overflow-x-hidden overflow-y-hidden"
            style={{
                backgroundImage: "url('/Background_2.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Header />
            <main className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32">
                <h1 className="text-4xl md:text-6xl text-white text-center w-full md:w-[900px] mx-auto mt-14 md:mt-28 font-sans font-[500]">O jeito fácil de organizar as finanças da igreja e frutificar</h1>
                <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center md:items-start w-full md:w-[70vw] mx-auto mt-10 md:mt-20">
                    <div className="flex flex-col md:w-[600px] md:ml-10">
                        <h2 className="text-white font-normal text-bg text-center md:text-center md:w-[600px] mx-auto">Com o <b>Holy</b>, organize facilmente as finanças da igreja, gerencie membros e promova o crescimento da comunidade, permitindo que você foque no fortalecimento da fé e na união das pessoas.</h2>
                        <div className="flex flex-col md:flex-row mt-10 md:mt-20">
                            <div className="flex flex-row bg-gray-900 hover:bg-gray-800 py-5 mr-10 px-6 w-full md:w-[270px] rounded-full cursor-pointer justify-between shadow-lg mb-4 md:mb-0" onClick={handleClick}>
                                <p className="text-white">Nossas funcionalidades</p>
                                <IoMdArrowForward size={28} color="white"/>
                            </div>
                            <div className="flex flex-row bg-white py-5 px-6 w-full md:w-[270px] rounded-full cursor-pointer justify-between shadow-lg">
                                <p className="text-black">Baixar o app</p>
                                <MdOutlineArrowOutward size={28} color="black"/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
