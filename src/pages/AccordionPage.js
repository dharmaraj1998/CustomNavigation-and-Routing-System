import Accordion from "../componenets/Accordion";

function AccordionPage(){

  const items = [
    {
      id : "23ji",
      label :"enter your name",
      description :"we should take your address"
    },{
      id : "78kd",
      label :"enter your name",
      description :"we should take your address"
    },{
      id : "45k",
      label :"enter your name",
      description :"we should take your address"
    }
  ]
  return(
    <div>
      <Accordion items = {items}/>
    </div>
  )
}
export default AccordionPage;