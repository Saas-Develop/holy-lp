import Header from "../FirstContainer/Header"
import foto1 from '../../../public/pic.png'
import Image from "next/image"
import { MdOutlineArrowOutward  } from "react-icons/md";
import { BiCheckCircle } from "react-icons/bi";
import DuvidasFrequentes from "../FrequentlyQuestions";

export const SixtyContainer = () => {
    return(
        <div className="bg-[#ffff] w-full overflow-x-hidden overflow-y-hidden">
            <div className="bg-[#fff] min-h-[80vh] w-full py-10 overflow-x-hidden overflow-y-hidden rounded-t-[50px]">
                <div className="flex flex-col justify-center items-center w-full mx-auto mt-20">
                    <h1 className="text-4xl md:text-3xl text-black text-center font-[500] mt-14">
                        Para sanar suas dúvidas! 😁
                    </h1>
                    <div className="flex flex-col md:flex-row justify-center items-center w-full mt-10 md:mt-20 lg:space-y-0 space-y-10 md:space-x-10">
                        <DuvidasFrequentes/>
                    </div>
                </div>
            </div>
        </div>
    )
}