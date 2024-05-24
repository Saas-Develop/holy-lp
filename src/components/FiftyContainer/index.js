import Header from "../FirstContainer/Header"
import foto1 from '../../../public/pic.png'
import Image from "next/image"
import { MdOutlineArrowOutward  } from "react-icons/md";
import { BiCheckCircle } from "react-icons/bi";

export const FiftyContainer = () => {
    return(
        <div className="bg-[#ffff] w-full overflow-x-hidden overflow-y-hidden">
            <div className="bg-[#F8F9F8] min-h-[100vh] w-full py-10 overflow-x-hidden overflow-y-hidden rounded-t-[50px]">
                <div className="flex flex-col justify-center items-center w-full mx-auto mt-20">
                    <h1 className="text-4xl md:text-3xl text-black text-center font-[500] mt-14">
                        Planinhos que cabem no bolso! 💸
                    </h1>
                    <div className="flex flex-col md:flex-row justify-center items-center w-full mt-10 md:mt-20 lg:space-y-0 space-y-10 md:space-x-10">
                        <div className="flex flex-col bg-gray-900 p-8 w-[300px] md:w-[350px] lg:w-[330px] lg:h-[410px] rounded-[20px] shadow-lg transform transition-transform hover:scale-105">
                            <h2 className="text-sm text-gray-900 mx-auto px-8 rounded-[20px] font-[500] mb-6 bg-white">
                                por apenas
                            </h2>
                            <div className="flex flex-row text-white mx-auto items-center mb-8">
                                <p className="text-lg text-white text-center font-bold text-[32px]">R$ 59,90</p>
                                <p>/mês</p>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex flex-row items-center">
                                    <BiCheckCircle size={28} color="#4abd5d" />
                                    <p className="text-white font-light ml-2">
                                         Todas as funcionalidades.
                                    </p>
                                </li>
                                <li className="flex flex-row items-center">
                                    <BiCheckCircle size={28} color="#4abd5d" />
                                    <p className="text-white font-light ml-2">
                                        Suporte 24/7.
                                    </p>
                                </li>
                                <li className="flex flex-row items-center">
                                    <BiCheckCircle size={28} color="#4abd5d" />
                                    <p className="text-white font-light ml-2">
                                        Atualizações gratuitas.
                                    </p>
                                </li>
                                <li className="flex flex-row items-center">
                                    <BiCheckCircle size={28} color="#4abd5d" />
                                    <p className="text-white font-light ml-2">
                                        Relatórios detalhados.
                                    </p>
                                </li>
                                <li className="flex flex-row items-center">
                                    <BiCheckCircle size={28} color="#4abd5d" />
                                    <p className="text-white font-light ml-2">
                                        7 dias grátis.
                                    </p>
                                </li>
                            </ul>
                           
                        </div>
                        <div className="flex flex-col bg-white p-8 w-[300px] md:w-[350px] lg:w-[330px] lg:h-[410px] rounded-[20px] shadow-lg transform transition-transform hover:scale-105">
                            <h2 className="text-sm text-white mx-auto px-8 rounded-[20px] font-[500] mb-6 bg-gray-900">
                                R$ 192 de desconto
                            </h2>
                            <div className="flex flex-row text-black mx-auto items-center mb-8">
                                <p className="text-lg text-black text-center font-bold text-[32px]">R$ 527,90</p>
                                <p>/ano</p>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex flex-row items-center">
                                    <BiCheckCircle size={28} color="#4abd5d" />
                                    <p className="text-black font-light ml-2">
                                         Todas as funcionalidades.
                                    </p>
                                </li>
                                <li className="flex flex-row items-center">
                                    <BiCheckCircle size={28} color="#4abd5d" />
                                    <p className="text-black font-light ml-2">
                                        Suporte 24/7.
                                    </p>
                                </li>
                                <li className="flex flex-row items-center">
                                    <BiCheckCircle size={28} color="#4abd5d" />
                                    <p className="text-black font-light ml-2">
                                        Atualizações gratuitas.
                                    </p>
                                </li>
                                <li className="flex flex-row items-center">
                                    <BiCheckCircle size={28} color="#4abd5d" />
                                    <p className="text-black font-light ml-2">
                                        Relatórios detalhados.
                                    </p>
                                </li>
                                <li className="flex flex-row items-center">
                                    <BiCheckCircle size={28} color="#4abd5d" />
                                    <p className="text-black font-light ml-2">
                                        7 dias grátis.
                                    </p>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}