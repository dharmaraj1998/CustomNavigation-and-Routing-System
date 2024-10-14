import { useState } from "react"
import Model from "../components/Model"

function ModelPage(){
    const [isOpen,setIsOpen] = useState(false)

    const handleClick = ()=>{
        setIsOpen(true)
    }
    const closeModel =()=>{
        setIsOpen(false)
    }
    const actionBar = <button className="primary bg-blue-500 p-3 " onClick={closeModel}>I Accept</button>
    const model = <Model onClose={closeModel} actionBar={actionBar}>here is some information about the content for review</Model>
    return(
        <div>
        <button className="primary" onClick={handleClick}>Open Model</button>
        {isOpen && model } 
     </div>
    )
}
export default ModelPage