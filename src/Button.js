import className from "classname";

function Button({
    
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
    

}){
    const classes = className(rest.className + "flex item-center my-2 mx-2 px-3 py-1.5",{
        "bg-blue-800  text-white  border-blue-500" : primary,
        "bg-gray-800  text-white  border-gray-500" : secondary,
        "bg-green-800  text-white  border-green-500" : success,
        "bg-yellow-800  text-white  border-yellow-500" : warning,
        "bg-red-800  text-white  border-red-500" : danger,
        "border" : outline,
        "rounded" : rounded
    })
    return(
        <button {...rest} className={classes}>{children}</button>
    )
}
Button.prototype ={
    checkVariationValue :({primary,secondary,warning,success,danger,outline,rounded}) =>{
        const count = Number(!!primary) + Number(!!secondary)+Number(!!warning)
        +Number(!!danger)+Number(!!success)+Number(!!outline)+Number(!!rounded)
        if(count > 1){
            console.log("any one should me true");
            
        }
    }
}
export default Button