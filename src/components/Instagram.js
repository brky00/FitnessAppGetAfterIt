import { InstagramEmbed } from 'react-social-media-embed';
import './Instagram.css';


const Instagram = () => {
  return (
    <>
            <div className="d-flex justify-content-center mb-4">
          {" "}
          <h1 className="instagramTitle">Instagram</h1>
        </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <InstagramEmbed
          url="https://www.instagram.com/getafterit_official/"
          width={1300}
        />
      </div>
    </>
  );
};

export default Instagram;