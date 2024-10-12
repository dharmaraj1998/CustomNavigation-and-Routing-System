
import { useState } from "react"
import { GoChevronRight,GoChevronDown } from "react-icons/go";


function Accordion({items}){
    const [expand,setExpand] = useState(-1)
    const handleClick =(index)=>{

        setExpand((currentIndex)=>{
            if(currentIndex === index){
                return -1;
            }else{
                return index
            }

        })
        // if(expand === index){
        //     setExpand(-1)
        // }else{
        //  setExpand(index)
        // }
    }
  const displayItems =  items.map((item,index)=>{
    
    const extentContent = expand === index;
  
  

    const icon = <span>
       {extentContent ? <GoChevronDown/> : <GoChevronRight/>}
    </span>
   
        return(
            <div key={item.id}>
                <h2 className="flex flex-col... px-8 bg-contain bg-center ..." onClick={()=>{handleClick(index)}}>{item.label}{icon}</h2>
                {extentContent && <p>{item.description}</p>}
            </div>
        )
    })
    return(
        <div>
         {displayItems}
        </div>
    )
}
export default Accordion