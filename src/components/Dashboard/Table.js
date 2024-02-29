import React from "react";
import Header from "./Header";

const Table = ({ dbProducts, handleDeleteProduct }) => {
  console.log("d products management", dbProducts);

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
                <td>{product.id}</td>
                <td>{product.productName}</td> {/* productName updated */}
                <td>{product.price}</td>
                <td>
                  {/* Show first image as main */}
                  {product.imageMain ? (
                    <img
                      src={product.imageMain}
                      alt={product.productName || "Product Image"}
                      style={{ width: "50px", height: "50px" }}
                    />
                  ) : (
                    <span>No image available</span>
                  )}
                </td>
                <td>{product.description}</td>
                <td>
                  {product.sizeDetails
                    ? Object.entries(product.sizeDetails).map(
                        ([sizeKey, sizeDetail], sizeIndex) => (
                          <div key={sizeKey} className="size-quantity">
                            {/* Key value */}
                            {`${sizeKey}: ${sizeDetail.quantity}`}
                            {/* Carousel start */}
                            {sizeDetail.images &&
                              sizeDetail.images.length > 0 && (
                                <div
                                  id={`carousel${sizeKey}-${sizeIndex}`}
                                  className="carousel slide"
                                  data-bs-ride="carousel"
                                  style={{ width: "100px" }} // Carousel'in genişliğini buradan ayarlayabilirsiniz
                                >
                                  <div className="carousel-indicators">
                                    {sizeDetail.images.map((_, index) => (
                                      <button
                                        key={index}
                                        type="button"
                                        data-bs-target={`#carousel${sizeKey}-${sizeIndex}`}
                                        data-bs-slide-to={index}
                                        className={index === 0 ? "active" : ""}
                                        aria-current={index === 0 ? "true" : ""}
                                        aria-label={`Slide ${index + 1}`}
                                      ></button>
                                    ))}
                                  </div>
                                  <div className="carousel-inner">
                                    {sizeDetail.images.map((image, index) => (
                                      <div
                                        key={index}
                                        className={`carousel-item ${
                                          index === 0 ? "active" : ""
                                        }`}
                                      >
                                        <img
                                          src={image}
                                          className="d-block w-100"
                                          alt={`${
                                            product.productName ||
                                            "Product Image"
                                          } - ${sizeKey}`}
                                        />
                                        {/* Slide sırasını ve toplam sayıyı göster */}
                                        <div className="carousel-caption d-none d-md-block">
                                          <h5>{`${index + 1} / ${
                                            sizeDetail.images.length
                                          }`}</h5>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                  <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target={`#carousel${sizeKey}-${sizeIndex}`}
                                    data-bs-slide="prev"
                                  >
                                    <span
                                      className="carousel-control-prev-icon"
                                      aria-hidden="true"
                                    ></span>
                                    <span className="visually-hidden">
                                      Previous
                                    </span>
                                  </button>
                                  <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target={`#carousel${sizeKey}-${sizeIndex}`}
                                    data-bs-slide="next"
                                  >
                                    <span
                                      className="carousel-control-next-icon"
                                      aria-hidden="true"
                                    ></span>
                                    <span className="visually-hidden">
                                      Next
                                    </span>
                                  </button>
                                </div>
                              )}
                            {/* Carousel end */}
                          </div>
                        )
                      )
                    : "No sizes"}
                </td>
                {/* <td>

                </td> */}
                <td>{product.inStock ? "Yes" : "No"}</td>
                <td>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button className="btn btn-primary">Edit</button>
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
