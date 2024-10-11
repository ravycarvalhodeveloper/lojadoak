import { motion } from "framer-motion"
import { Fade } from "react-awesome-reveal"

import image11 from '../../images/01.jpeg'
import image10 from '../../images/02.jpeg'
import image09 from '../../images/03.jpeg'
import image04 from '../../images/04.jpeg'
import image05 from '../../images/05.jpeg'
import image06 from '../../images/06.jpg'
import image07 from '../../images/07.jpg'
import image08 from '../../images/08.jpg'
import image03 from '../../images/09.jpg'
import image02 from '../../images/10.jpg'
import image01 from '../../images/11.jpg'

import { useRef, useState, useEffect } from "react"

const images = [
    image01,image02, image03, image04, image05, image06,image07,image08,image09,image10,image11
]


export default function Pagination() {
    const carrossel = useRef<any>() 
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
    }, [])
    

    return (
        <div className="w-full px-14 lg:max-w-5xl flexitems-center justify-center my-10">

            <Fade triggerOnce={true} direction="left" cascade damping={2.0}>
                <motion.div className="cursor-grab overflow-hidden rounded " whileTap={{ cursor: "grabbing"}}  >
                    <motion.div 
                        ref={carrossel} 
                            className="flex " 
                                drag="x" 
                                    dragConstraints={{ right:0, left: -width}}>

                    {images.map( (item) => (
                            <motion.div className="min-h-60 min-w-72 p-4 rounded" >
                                <img 
                                    className="w-full h-[100%] rounded pointer-events-none shadow-md" 
                                    key={item} src={item} alt="TextoAlt" />
                            </motion.div>
                    ))}     
                    
                    </motion.div>
                </motion.div>
            </Fade>
        </div>
    )
}