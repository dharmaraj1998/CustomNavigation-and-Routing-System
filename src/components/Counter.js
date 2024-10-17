import { Fragment, useState } from "react"

const useIncrement = ()=>{
    
    const [count,setCount] = useState(0)

    const increaseCount = ()=>{
        setCount(count+1)
    }
    return{
        count,
        increaseCount
    }


}

const Counter = ()=>{
    const {count,increaseCount} = useIncrement()

    return(
        <Fragment>
            <div>counter is  {count}</div>
            <button className="bg-gray-400 p-3" onClick={increaseCount}>increase</button>

        </Fragment>
        

    )
}
export default Counter