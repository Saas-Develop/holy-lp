import Header from "../FirstContainer/Header"
import foto1 from '../../../public/foto1.png'
import foto2 from '../../../public/1.jpeg'
import foto3 from '../../../public/2.jpeg'
import foto4 from '../../../public/3.jpeg'
import Image from "next/image"

import { FaHeart } from "react-icons/fa";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { BiLineChart, BiDetail, BiSolidUser, BiChat  } from "react-icons/bi";
import { ImQuotesLeft } from "react-icons/im";
import { MdOutlineStar,MdOutlineStarBorder } from "react-icons/md";

export const FourthyContainer = () => {
    return(
        <div className="bg-[#FFFFFF] min-h-[65vh] w-full py-10 overflow-x-hidden overflow-y-hidden "> 
            <main>
                <h1 className="text-4xl md:text-4xl text-black text-center w-full md:w-[900px] mx-auto mt-14 md:mt-28 font-sans font-[500]" id="PlanoTop">Palavras de usuários satisfeitos</h1>
                <div className="flex lg:flex-row w-[70vw] mx-auto flex-col lg:justify-around">
                    <div className="rounded-[30px] bg-white w-[350px] h-[350px] mx-auto mt-10 flex flex-col shadow-md">
                        <div className="flex flex-col justify-between p-6">
                            <ImQuotesLeft  size={28} color="gray"/>
                            <h1 className="text-[18px] font-medium text-black w-[250px] mt-4">Facilitou a vida do pastor!</h1>
                        </div>
                        <p className="text-black font-light px-6 text-sm">"Nunca foi tão fácil gerenciar as finanças da igreja. Agora o pastor pode focar no que realmente importa!"</p>
                        <div className="px-6 flex flex-row items-center mt-4">
                            <MdOutlineStar size={18} color="#F2B823"/>
                            <MdOutlineStar size={18} color="#F2B823"/>
                            <MdOutlineStar size={18} color="#F2B823"/>
                            <MdOutlineStar size={18} color="#F2B823"/>
                            <MdOutlineStarBorder size={18} color="#F2B823"/>
                        </div>
                        <div className="flex flex-row p-6 items-center mt-6">
                            <Image width={44} src={foto3} className="rounded-full" alt="foto"/>
                            <h1 className="text-sm font-medium text-black ml-4">Leandro Cruz</h1>
                        </div>
                    </div>
                    <div className="rounded-[30px] bg-white w-[350px] h-[350px] mx-auto mt-10 flex flex-col shadow-md">
                        <div className="flex flex-col justify-between p-6">
                            <ImQuotesLeft  size={28} color="gray"/>
                            <h1 className="text-[18px] font-medium text-black w-[250px] mt-4">Comunidade mais unida</h1>
                        </div>
                        <p className="text-black font-light px-6 text-sm">"Com o app, conseguimos organizar melhor nossos membros e envolver mais pessoas. Nossa comunidade nunca esteve tão forte."</p>
                        <div className="px-6 flex flex-row items-center mt-4">
                            <MdOutlineStar size={18} color="#F2B823"/>
                            <MdOutlineStar size={18} color="#F2B823"/>
                            <MdOutlineStar size={18} color="#F2B823"/>
                            <MdOutlineStar size={18} color="#F2B823"/>
                            <MdOutlineStar size={18} color="#F2B823"/>
                        </div>
                        <div className="flex flex-row p-6 items-center mt-6">
                            <Image width={44} src={foto2} className="rounded-full" alt="foto"/>
                            <h1 className="text-sm font-medium text-black ml-4">Pr. Jorge Guimarães</h1>
                        </div>
                    </div>
                    <div className="rounded-[30px] bg-white w-[350px] h-[350px] mx-auto mt-10 flex flex-col shadow-md">
                        <div className="flex flex-col justify-between p-6">
                            <ImQuotesLeft  size={28} color="gray"/>
                            <h1 className="text-[18px] font-medium text-black w-[250px] mt-4">Simples e intuitivo</h1>
                        </div>
                        <p className="text-black font-light px-6 text-sm">"O app é super fácil de usar, até mesmo para aqueles que não têm muita afinidade com tecnologia. Recomendo!"</p>
                        <div className="px-6 flex flex-row items-center mt-4">
                            <MdOutlineStar size={18} color="#F2B823"/>
                            <MdOutlineStar size={18} color="#F2B823"/>
                            <MdOutlineStar size={18} color="#F2B823"/>
                            <MdOutlineStar size={18} color="#F2B823"/>
                            <MdOutlineStar size={18} color="#F2B823"/>
                        </div>
                        <div className="flex flex-row p-6 items-center mt-6">
                            <Image width={44} src={foto4} className="rounded-full" alt="foto"/>
                            <h1 className="text-sm font-medium text-black ml-4">Yasmim Bonelli</h1>
                        </div>
                    </div>
                </div>
               
            </main>
        </div>
    )
}