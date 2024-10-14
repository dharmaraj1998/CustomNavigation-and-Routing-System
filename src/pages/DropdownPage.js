import { useState } from "react";
import Dropdown from "../componenets/Dropdown";




function DropdownPage(){
  const [selected,setSelected] = useState(null)

  const handleSelected =(option)=>{
    setSelected(option)
  }
  const options = [
    {label :"Red",value : "red"},
    {label :"Blue",value : "Blue"},
    {label :"Orange",value : "orange"}
  ]

  return(
    <div>
     
      <Dropdown options={options} selected = {selected} handleSelected ={handleSelected}/>
    
    </div>
  )
}
export default DropdownPage;