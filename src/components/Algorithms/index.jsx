import React, { useState } from 'react'
// writing custom sort by hand
const ShoppingCart = () => {
    const [array, setArray] = useState([7,1,5,3])

    const handleCallReorderFunction = () => {
        let tempArray = Array.from(array)
   
        for(let i = 0; i < tempArray.length; i++){
            for(let j = 0; j < i; j++) {
                if(tempArray[i] < tempArray[j]) {
                    let x = tempArray[i]
                    tempArray[i] = tempArray[j]
                    tempArray[j] = x
                }
            }
        }
        console.log(tempArray);
    }
    
    return(
        <div>
            <ol>
                {array.map((item, index) => 
                    <li key={item}>
                        {item}
                    </li>
                )}
            </ol>
            <button onClick={handleCallReorderFunction}>call reorder</button>
        </div>
    )
}
export default ShoppingCart