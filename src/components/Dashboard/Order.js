import './Order.css'
import Header from './Header';

const Order = () => {
    
  
  
    return (
      <>
        <Header title={"Order info and managament"} />
      
        <div className="table-responsive ms-4 me-4">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Adress</th>
                <th scope="col">Date</th>
                <th scope="col">Price</th>
                <th scope="col">status</th>
              
             
                <th className="text-center" colSpan={2} scope="col">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
          
                <tr >
                  <td>1</td>
                  <td>Adrian</td>
                  <td>Hønengata Hønefoss 3513</td>
                  <td> 31 Januar 2024</td>
                  <td>NOK 3500</td>
                  <td>Sendt</td>
                 
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                    <i class="fa-solid fa-gear"></i>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                     <i class="fa-solid fa-bars"></i>
                    </div>
                  </td>
                </tr>
           
            </tbody>
          </table>
        </div>
      </>
    );
  };
  
  export default Order;