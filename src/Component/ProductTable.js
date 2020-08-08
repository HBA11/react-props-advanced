import React from 'react'

function ProductTable(props) {
    return (
        <div className="product-style">
        
        <table>

            <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            </tr>
            {props.products.map(product => 
            <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>
            </tr>
            )}
            </table>

        </div>
    )
}
export default ProductTable