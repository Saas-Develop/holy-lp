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
                    <h1 className="text-4xl md:text-4xl text-black text-center font-[500] mt-14">
                        Planos de Assinatura
                    </h1>
                    <div className="flex flex-col md:flex-row justify-center items-center w-full mt-10 md:mt-20 space-y-10 md:space-y-0 md:space-x-10">
                        <div className="flex flex-col bg-white p-8 w-[300px] md:w-[350px] lg:w-[400px] rounded-lg shadow-lg transform transition-transform hover:scale-105">
                            <h2 className="text-3xl text-black text-center font-[500] mb-6">
                                Plano Mensal
                            </h2>
                            <p className="text-lg text-black text-center font-light mb-6">
                                R$ 59,90/mês
                            </p>
                            <ul className="space-y-4">
                                <li className="flex flex-row items-center">
                                    <BiCheckCircle size={28} color="#4abd5d" />
                                    <p className="text-black font-light ml-2">
                                        Acesso a todas as funcionalidades.
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
                            </ul>
                            <div className="flex justify-center mt-8">
                                <button className="flex flex-row items-center bg-gray-900 hover:bg-gray-800 py-3 px-6 rounded-full cursor-pointer justify-between shadow-lg">
                                    <p className="text-white">
                                        Escolher Plano
                                    </p>
                                    <MdOutlineArrowOutward size={28} color="white" />
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col bg-white p-8 w-[300px] md:w-[350px] lg:w-[400px] rounded-lg shadow-lg transform transition-transform hover:scale-105">
                            <h2 className="text-3xl text-black text-center font-[500] mb-6">
                                Plano Anual
                            </h2>
                            <p className="text-lg text-black text-center font-light mb-6">
                                R$ 657,90/ano
                            </p>
                            <ul className="space-y-4">
                                <li className="flex flex-row items-center">
                                    <BiCheckCircle size={28} color="#4abd5d" />
                                    <p className="text-black font-light ml-2">
                                        Acesso a todas as funcionalidades.
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
                                        2 meses grátis.
                                    </p>
                                </li>
                            </ul>
                            <div className="flex justify-center mt-8">
                                <button className="flex flex-row items-center bg-gray-900 hover:bg-gray-800 py-3 px-6 rounded-full cursor-pointer justify-between shadow-lg">
                                    <p className="text-white">
                                        Escolher Plano
                                    </p>
                                    <MdOutlineArrowOutward size={28} color="white" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}