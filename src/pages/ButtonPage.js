import Button from "../componenets/Button";
import { HiAnnotation } from "react-icons/hi";
import { IoIosApps } from "react-icons/io";
import { IoIosBeer } from "react-icons/io";

import { IoIosCalendar } from "react-icons/io";
import { IoAdd } from "react-icons/io5";

const ButtonPage = ()=>{
  const handle = ()=>{
    console.log("Button clicked");
  }
    return (
        <>
        <div >
          <Button primary onClick ={handle}> 
          <HiAnnotation/>
          click me
          </Button>
          
        </div>
         <div>
         <Button secondary>
         <IoIosApps/>click me
          
         </Button>
      </div>
       <div>
       <Button success>
       <IoIosBeer />
       click me</Button>
    </div>
     <div >
     <Button danger>
      <IoIosCalendar/>click me</Button>
     
  </div>
  <div >
     <Button warning>
      <IoAdd/>click me</Button>
  </div>
  </>
    )
}
export default ButtonPage;