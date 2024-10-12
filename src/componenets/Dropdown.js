import { useEffect, useRef, useState } from "react"


const Dropdown = ({options,selected,handleSelected})=>{
  

    const[isOpen,setIsopen] = useState(false)
    const divEl = useRef()

    useEffect(()=>{
        const handle = (event)=>{
            if(!divEl.current){
                return
            }
            if(!divEl.current.contains(event.target)){
                setIsopen(false)
            }
           
        }
        return document.removeEventListener('click',handle,true)

    },[])

    const handleShow =()=>{
        setIsopen(!isOpen)
    }
    const handleOption = (label)=>{
        setIsopen(false)
        
        handleSelected(label)
        
        
    }

   
    const renderOptions = options.map((option)=>{

        return(
        <div ref={divEl} key={option.value}>
           <h1 onClick={() =>handleOption(option.label)}> {option.label}</h1>
            </div>
        )
    })

    // let content = "Selected..."
    // if(selected){
    //     content = selected
    // }
    return(
        <div>
            <h1 onClick={handleShow}>{selected || "Selected"}</h1>

          <div> {isOpen && renderOptions}</div>
        </div>
        
    )
}
export default Dropdown