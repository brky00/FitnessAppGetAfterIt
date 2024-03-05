import React from 'react'
import Header from './Header'

const Table = ({dbProducts,handleDeleteProduct}) => {
  console.log("d products management",dbProducts);

  return (
    <>
      <Header />
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
              <th scope="col">In Stock</th>
              <th className="text-center" colSpan={2} scope="col">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
          {dbProducts.map((product, index) => (
  <tr key={index}>
    {/* ... diğer TD'ler */}
    <td>
      {/* Her size için size detaylarını göster */}
      {product.sizeDetails
        ? Object.entries(product.sizeDetails).map(([sizeKey, details]) => (
            <div key={sizeKey} className="size-quantity">
              {/* Size adı ve toplam miktarı göster */}
              <div>{`${sizeKey}: Total Quantity`}</div>
              {/* Bu size'a ait resimleri ve miktarları listele */}
              {details.map((detail, detailIndex) => (
                <div key={detailIndex} className="mb-2">
                  <img
                    src={detail.url}
                    alt={`${product.productName || "Product Image"} - ${sizeKey}`}
                    style={{ width: "50px", height: "50px", marginRight: "10px" }}
                  />
                  {/* Resim adı ve miktarı */}
                  <span>{`${detail.fileName}: ${detail.quantity}`}</span>
                </div>
              ))}
            </div>
          ))
        : "No sizes"}
    </td>
    {/* ... diğer TD'ler */}
  </tr>
))}

          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table
