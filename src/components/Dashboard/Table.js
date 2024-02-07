import React from 'react'
import Header from './Header'

const Table = ({productItems}) => {
  return (
    <>
    <Header/>
           <div className="table-responsive ms-4 me-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Image</th>
              <th scope="col">Description</th>
              <th scope="col">Sizes</th>
              <th scope="col">Selection Images</th>
              <th scope="col">In Stock</th>
              <th className='text-center' colSpan={2} scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {productItems.map((product, index) => (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><img src={product.image} alt={product.name} style={{ width: '50px', height: '50px' }}/></td>
                <td>{product.description}</td>
                <td>{product.sizes.join(', ')}</td>
                <td>
                  {product.selectionImages.map((image, imgIndex) => (
                    <img key={imgIndex} src={image} alt={`Selection ${imgIndex}`} style={{ width: '30px', height: '30px', marginRight: '5px' }}/>
                  ))}
                </td>
                <td>{product.inStock ? 'Yes' : 'No'}</td>
                <td>
                <div  style={{ display: 'flex', justifyContent: 'center' }}>
             <button
                 
                 className="btn btn-primary"
               >
                 Edit
               </button>
             </div>
                </td>
                <td >
             <div  style={{ display: 'flex', justifyContent: 'center' }}>
             <button
                 
                 className="btn btn-primary"
               >
                 Delete
               </button>
             </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Table