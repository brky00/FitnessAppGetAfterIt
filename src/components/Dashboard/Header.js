import { useNavigate } from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate();
    return (
      <header className='mt-4'>
        <h1>Merch Product Management Software</h1>
        <div className='d-flex ms-4' style={{ marginTop: '30px', marginBottom: '18px' }}>
          <button className='btn btn-primary' onClick={() => navigate('/addProduct')  }>Add Merch-product</button>
          <button className='btn btn-secondary ms-3' onClick={() => navigate('/dashboard')  }>tilbake til Dashboard</button>
        </div>
      </header>
    );
  };
  
  export default Header;
  