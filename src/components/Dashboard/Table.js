import React from 'react';

import { useNavigate } from 'react-router-dom';
import './Table.css'

const Table = ({ dbProducts, handleDeleteProduct,handleEditProduct }) => {
  console.log("db products management", dbProducts);
  const navigate = useNavigate();

  return (
    <>
           <header className='mt-4 product-table-header'>
        <h1>Merch Product Managament</h1>
        <div className='d-flex ms-4' style={{ marginTop: '30px', marginBottom: '18px' }}>
          <button className='btn btn-primary' onClick={() => navigate('/addProduct')  }>Add Merch-product</button>
          <button className='btn btn-secondary ms-3' onClick={() => navigate('/dashboard')  }>Back to Dashboard</button>
        </div>
      </header>
      <div className="table-responsive ms-4 me-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Main Image</th>
              <th scope="col">Description</th>
              <th scope="col">Stock and selection images of each size</th>
              {/* <th scope="col">Selection Images</th> */}
             
              <th className="text-center" colSpan={2} scope="col">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {dbProducts.map((product, index) => (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.productName}</td>
                <td>{product.price}</td>
                <td>
                  {product.imageMain ? (
                    <img
                      src={product.imageMain}
                      alt={product.productName || "Product Image"}
                      style={{ width: "90px", height: "auto" }}
                    />
                  ) : (
                    <span>No image available</span>
                  )}
                </td>
                <td>{product.description}</td>
                <td className='d-flex'>
                  {product.sizeDetails
                    ? Object.entries(product.sizeDetails).map(
                        ([sizeKey, details]) => (
                          <div key={sizeKey} className="size-quantity">
                            <div>{`Size: ${sizeKey}`}</div>
                            {Array.isArray(details) ? (
                              details.map((detail, detailIndex) => (
                                <div key={detailIndex} className="mb-2">
                                  <img
                                    src={detail.url}
                                    alt={`${
                                      product.productName || "Product Image"
                                    } - ${sizeKey}`}
                                    style={{
                                      width: "35px",
                                      height: "auto",
                                      marginRight: "10px",
                                    }}
                                  />
                                  <span>{`${detail.fileName}: ${detail.quantity}`}</span>
                                </div>
                              ))
                            ) : (
                              <span>Details not available as an array</span>
                            )}
                          </div>
                        )
                      )
                    : "No sizes"}
                </td>
            
                <td>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        handleEditProduct(product.id);
                        navigate("/editProduct");
                       
                      }}
                    >
                      Edit
                    </button>
                  </div>
                </td>
                <td>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
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
  );
};

export default Table;
