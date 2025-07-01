import React from "react"
import { createPortal } from "react-dom"

interface ModalProps {
    isModalOpen: boolean;
    children: React.ReactNode;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const Modal: React.FC<ModalProps> = ({ isModalOpen, setIsModalOpen, children }) => {

    const clicksHandler = () => {
        setIsModalOpen(false);
    }
    return (
        createPortal( 
            <div onClick={clicksHandler} className={`fixed flex z-[99999] justify-center items-center bg-black/50 inset-0 h-full w-full text-white ${isModalOpen ? "" : "hidden"} `}>
                <div onClick={(e) => e.stopPropagation()} className=" block ">
                    {children}
                </div>
            </div>,

            document.getElementById("portal")!
        )
    )
}
export default Modal