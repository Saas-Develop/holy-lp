import Header from "../FirstContainer/Header"
import foto1 from '../../../public/pic.png'
import Image from "next/image"
import { MdOutlineArrowOutward  } from "react-icons/md";
import { BiCheckCircle } from "react-icons/bi";

export const ThirdContainer = () => {
    return(
        <div className="bg-[#ffff] w-full overflow-x-hidden overflow-y-hidden"> 
            <div className="bg-[#F8F9F8] min-h-[100vh] w-full py-10 overflow-x-hidden overflow-y-hidden rounded-t-[50px]"> 
                    <div className="flex lg:flex-row flex-col justify-evenly items-center w-[75vw] mx-auto">
                        <div className="flex-col flex">
                            <h1 className="lg:text-6xl text-3xl lg:text-left w-[350px] text-center text-black text-left lg:w-[700px] mx-auto font-[500] mt-20">Financie, organize e gerencie</h1>
                                <ul className="flex flex-col mt-20">
                                    <li className="flex flex-row items-center">
                                        <BiCheckCircle  size={28} color="#4abd5d"/>                                        
                                        <h2 className="text-black font-light mt-3 lg:text-lg text-left ml-2 w-[300px] lg:w-[550px]">
                                            Gerencie as finanças da sua igreja com facilidade e transparência.
                                        </h2>
                                    </li>
                                    <li className="flex flex-row items-center">
                                        <BiCheckCircle  size={28} color="#4abd5d"/>                                        
                                        <h2 className="text-black font-light mt-3 lg:text-lg text-left ml-2 w-[300px] lg:w-[550px]">
                                            Mantenha um registro atualizado dos membros e acompanhe o envolvimento.
                                        </h2>
                                    </li>
                                    <li className="flex flex-row items-center">
                                        <BiCheckCircle  size={28} color="#4abd5d"/>                                        
                                        <h2 className="text-black font-light mt-3 lg:text-lg text-left ml-2 w-[300px] lg:w-[550px]">
                                            Promova o crescimento e a união da sua comunidade.
                                        </h2>
                                    </li>
                                </ul>
                                    <div className="flex flex-row mt-20 ">
                                        <div className="flex flex-row mx-auto mb-20 lg:ml-20 bg-gray-900 py-5 px-6 w-[270px] rounded-full cursor-pointer justify-between shadow-lg">
                                            <p className="text-white">
                                                Baixar o app
                                            </p>
                                            <MdOutlineArrowOutward size={28} color="white"/>
                                        </div>
                                    </div>
                        </div>
                        <Image src={foto1} className="float-animation" alt="couple" width={600}/>
                    </div>
            </div>
        </div>
    )
}