import { InstagramEmbed } from 'react-social-media-embed';
import './Instagram.css';


const Instagram = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
       <InstagramEmbed url="https://www.instagram.com/getafterit_official/" width={1300} />
    </div>
  
  );
 
};

export default Instagram;