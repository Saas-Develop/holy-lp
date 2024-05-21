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

export const SecondContainer = () => {
    return(
        <div className="bg-[#FFFFFF] min-h-[65vh] w-full py-10 overflow-x-hidden overflow-y-hidden "> 
            <main>
                <h1 className="text-4xl md:text-4xl text-black text-center w-full md:w-[900px] mx-auto mt-14 md:mt-28 font-sans font-[500]" id="PlanoTop">Nossas funcionalidades</h1>
                <div className="flex lg:flex-row w-[75vw] mx-auto flex-col lg:justify-around">
                    <div className="rounded-[30px] bg-white w-[250px] h-[250px] mx-auto mt-10 flex flex-col ">
                        <div className="flex flex-row justify-between p-6 items-center">
                            <h1 className="text-xl font-medium text-black w-[200px]">Gestão Financeira Simplificada</h1>
                            <div className="p-[10px] rounded-[10px] bg-[#E9D4FE]">
                                <BiLineChart size={28} color="#842DDA"/>
                            </div>
                        </div>
                        <p className="text-black px-6 text-sm">Monitore doações, despesas e receitas de forma prática e segura. Relatórios detalhados para uma visão clara e precisa das finanças da igreja.</p>
                    </div>
                    <div className="rounded-[30px] bg-white w-[250px] h-[250px] mx-auto mt-10 flex flex-col shadow-md">
                        <div className="flex flex-row justify-between p-6 items-center">
                            <h1 className="text-xl font-medium text-black w-[200px]">Relatórios Personalizados</h1>
                            <div className="p-[10px] rounded-[10px] bg-[#C1F0DC]">
                                <BiDetail size={28} color="#0EB15C"/>
                            </div>
                        </div>
                        <p className="text-black px-6 text-sm">Gere relatórios financeiros e de membros conforme a necessidade, garantindo transparência e eficiência na gestão.</p>
                    </div>
                    <div className="rounded-[30px] bg-white w-[250px] h-[250px] mx-auto mt-10 flex flex-col ">
                        <div className="flex flex-row justify-between p-6 items-center">
                            <h1 className="text-xl font-medium text-black w-[200px]">Gerenciamento de Membros</h1>
                            <div className="p-[10px] rounded-[10px] bg-[#DCF7FF]">
                                <BiSolidUser size={28} color="#2DA7CD"/>
                            </div>
                        </div>
                        <p className="text-black px-6 text-sm">Mantenha um registro atualizado de todos os membros da igreja, suas informações de contato, participação em eventos e muito mais.</p>
                    </div>
                    <div className="rounded-[30px] bg-white w-[250px] h-[250px] mx-auto mt-10 flex flex-col ">
                        <div className="flex flex-row justify-between p-6 items-center">
                            <h1 className="text-xl font-medium text-black w-[200px]">Comunicação Facilitada</h1>
                            <div className="p-[10px] rounded-[10px] bg-[#FDFFBC]">
                                <BiChat size={28} color="#b88432"/>
                            </div>
                        </div>
                        <p className="text-black px-6 text-sm">Envie mensagens para grupos ou membros individuais, organize eventos e mantenha a comunidade informada e engajada.</p>
                    </div>
                </div>
               
            </main>
        </div>
    )
}