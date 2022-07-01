import React, { useState } from 'react'

const ShoppingCart = () => {
    const [cart, setCart] = useState([
        {
          supplierName: 'supplie name 1',
          products: [
           {name: 'product name 1'}, 
           {name: 'product name 2'}
          ]
        },
        {
          supplierName: 'supplie name 2',
          products: [
           {name: 'product name 1'}, 
          {name: 'product name 2'}]
        }
      ])

    return(
        <div>
            <button>add new product</button>
            <button>remove selected product</button>
            <div style={{width: '100vw'}}>
                <span>product list:</span>
                <table>
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
                </table>
            </div>
        </div>
    )
}
export default ShoppingCart