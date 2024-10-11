import { MdInventory } from "react-icons/md";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { IoBagCheckSharp } from "react-icons/io5";
import { LiaFacebookSquare } from "react-icons/lia";
import logo from './assets/doak.png'
import Container from './components/Container'
import Pagination from "./components/Pagination/Index";
import { motion } from "framer-motion"
import { Fade } from "react-awesome-reveal"

export default function App() {

  return (
    <Container>
      <Fade triggerOnce={true} direction="right" cascade damping={2.0}>
        <motion.div className='w-full flex flex-col justify-center items-center mt-9' >
          <img 
            className='w-64 hover:scale-105 duration-300'
            src={logo} alt="" 
          />
      </motion.div>
      </Fade>
     
     <Pagination />


    <Fade direction="up" triggerOnce={true} cascade damping={3.0} >
      <div className='w-full items-center flex flex-col gap-3 justify-center mt-5 lg:flex-row lg:gap-10 lg:mt-1'>
          <a 
              className='border-2 border-doak-white bg-doak-white h-30 w-full max-w-80 font-custom font-bold text-doak-black p-2 rounded flex items-center justify-center gap-2
              hover:scale-105 duration-300 hover:bg-doak-whiteff/60'
              href="https://wa.me/c/558896388210" target="_blank">
              <h3 className="text-xl">Catálogo</h3> <MdInventory  size={24}/>
          </a>

          <a 
              className='border-2 border-doak-white  bg-doak-white  h-30 w-full max-w-80 font-custom font-bold text-doak-black p-2 rounded flex items-center justify-center gap-2 hover:scale-105 duration-300  hover:bg-doak-whiteff/60'
              href="https://wa.me/message/RRLER6ZGDJVPB1" target="_blank">
              
              <h3 className="text-xl">Faça o seu pedido!</h3> <IoBagCheckSharp size={24} />
          </a>

      </div>
    </Fade>

    <Fade direction="right" triggerOnce={true} cascade damping={3.0}>
       <div className="w-full max-w-80 flex gap-4 items-center justify-center mt-9 mb-2  pb-5">
            <div className="hover:scale-125 duration-300 cursor-pointer">
              <a href="https://wa.me/message/RRLER6ZGDJVPB1" target="_blank"><FaWhatsapp className="hover:fill-doak-grey duration-200" size={37} color="#caced6" /></a>
            </div>

            <div className="hover:scale-125 duration-300 cursor-pointer">
                <a href="https://www.instagram.com/lojadoak/" target="_blank"><FaInstagram className="hover:fill-doak-grey duration-200" size={37} color="#caced6"/></a>
            </div>

            <div className="hover:scale-125 duration-300 cursor-pointer">
                <a href="https://www.instagram.com/lojadoak/" target="_blank"></a><LiaFacebookSquare className="hover:fill-doak-grey duration-200" size={43} color="#caced6"/>
            </div>
        </div>
    </Fade>

    <p className="text-doak-whiteff text-xs mt-1 ">© 2024 Agência Elevart. Todos os direitos reservados.</p>
    </Container>
  )
}

