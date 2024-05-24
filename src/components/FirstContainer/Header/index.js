import Link from "next/link";
import { BiSolidUserCircle} from "react-icons/bi";
import logotype from '../../../../public/holy_header.png'
import Image from "next/image";

export default function Header() {
    return (
      <>
        <header className='w-[75vw] h-24 mx-auto items-center'>
          <nav className='mx-auto flex flex-row items-center justify-between p-5'>
                <Image src={logotype} width={80} alt='logotype'/>
                <div className='flex flex-row items-center'>
                    <Link href='#' target="_blank" className='py-1 px-5 flex flex-row items-center justify-center mr-10 bg-gray-900 rounded-full border-none no-underline'>
                        <h5 className="text-white text-center text-base font-normal">Baixar</h5>
                    </Link>
                </div>
          </nav>
        </header>
      </> 
    )
  }