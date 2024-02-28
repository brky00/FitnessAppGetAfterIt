import React, { useState } from 'react';
import './Style.css';
import img1 from "./images/instagramIMGs/thumbnail_1.png"
import img2 from "./images/instagramIMGs/thumb_2.png"
import img3 from "./images/instagramIMGs/thumb_3.png"
import img4 from "./images/instagramIMGs/thumb_4.png"
import img5 from "./images/instagramIMGs/thumb_5.png"
import img6 from "./images/instagramIMGs/thumb_6.png"
import img7 from "./images/instagramIMGs/thumb_7.png"
import img8 from "./images/instagramIMGs/thumb_8.png"
import img9 from "./images/instagramIMGs/thumb_9.png"
import img10 from "./images/instagramIMGs/thumb_10.png"
import img11 from "./images/instagramIMGs/thumb_11.png"
import img12 from "./images/instagramIMGs/thumb_12.png"
import img13 from "./images/instagramIMGs/thumb_13.png"
import img14 from "./images/instagramIMGs/thumb_14.png"
import img15 from "./images/instagramIMGs/thumb_15.png"
import img16 from "./images/instagramIMGs/thumb_16.png"
import img17 from "./images/instagramIMGs/thumb_17.png"
import img18 from "./images/instagramIMGs/thumb_18.png"
import img19 from "./images/instagramIMGs/thumb_19.png"
import img20 from "./images/instagramIMGs/thumb_20.png"
import instaIcon from "./images/instagramIMGs/insta_icon.png"
import GaiLogo from "./images/lionGetAfterIt.png"


const Instagram = () => {
  const instagramVideos = [
    { link: "https://www.instagram.com/p/C2HkAvDNjLD/", thumbnail: img1, alt: "Get After It smaker Proteinbar" },
    { link: "https://www.instagram.com/p/C1_5GzHNGtz/", thumbnail: img2, alt: "Get After It lav kalori vs høy kalori snacks" },
    { link: "https://www.instagram.com/p/C16_xtxNV1P/", thumbnail: img3, alt: "pizza" },
    { link: "https://www.instagram.com/p/C11le4Atrnw/", thumbnail: img4, alt: "desk stretches" },
    { link: "https://www.instagram.com/p/C11le4Atrnw/", thumbnail: img5, alt: "proteinbar" },
    { link: "https://www.instagram.com/p/C1jm9rstuNZ/", thumbnail: img6, alt: "hvordan starte 2024 rett!" },
    { link: "https://www.instagram.com/p/C0tbO24tp5S/", thumbnail: img7, alt: "tips and tricks" },
    { link: "https://www.instagram.com/p/C0L-i06tESq/", thumbnail: img8, alt: "chicken tacos" },
    { link: "https://www.instagram.com/p/CzTVyKttJqN/", thumbnail: img9, alt: "snacks during cut" },
    { link: "https://www.instagram.com/p/CyvH8L7t6_V/", thumbnail: img10, alt: "lost 100 punds" },
    { link: "https://www.instagram.com/p/CyVfehjN3Nl/", thumbnail: img11, alt: "cheat meal dirty fries" },
    { link: "https://www.instagram.com/p/CxVToHdNObN", thumbnail: img12, alt: "back extensions" },
    { link: "https://www.instagram.com/p/C2rlfFLNjgU/", thumbnail: img13, alt: "preworkout meal" },
    { link: "https://www.instagram.com/p/C2j8mhUPAtR/", thumbnail: img14, alt: "benchpress recipe" },
    { link: "https://www.instagram.com/p/C2e_7tityd0/", thumbnail: img15, alt: "grenade protein bar" },
    { link: "https://www.instagram.com/p/C2UggVttE7V/", thumbnail: img16, alt: "late night snack" },
    { link: "https://www.instagram.com/p/C2Zm4T4tTeh/", thumbnail: img17, alt: "3 week break" },
    { link: "https://www.instagram.com/p/CzyS9pXtC88/", thumbnail: img18, alt: "our new partner" },
    { link: "https://www.instagram.com/p/CyA0lzhNg5L/", thumbnail: img19, alt: "protein powder" },
    { link: "https://www.instagram.com/p/CuWjUyWAvI9/", thumbnail: img20, alt: "bigger traps" }
  ];

  const [videosToShow, setVideosToShow] = useState(5);

  const loadVideos = () => {
    setVideosToShow(prevVideosToShow => prevVideosToShow + 5);
  };

  return (
    <div>
      <main>
        <section id="instagram-section">
          <header className="instagram-header">
            <div>
              <img src={GaiLogo} alt="Logo" className="logo"/>
              <p className='logo-subtext'>Get After It</p>
            </div>
            <h2>INSTAGRAM</h2>
            <a href="https://www.instagram.com/getafterit_official/" className="insta-follow-btn" target='_blank' rel="noopener noreferrer">
              <img src={instaIcon} alt="Instagram logo" className="instagram-icon"/>
              Follow
            </a>
          </header>

          <div className="instagram-feed">
            {instagramVideos.slice(0, videosToShow).map((video, index) => (
              <a key={index} href={video.link} target="_blank" rel="noopener noreferrer" className="instagram-video">
                <img src={video.thumbnail} alt={video.alt} />
              </a>
            ))}
          </div>
          {videosToShow < instagramVideos.length && (
            <button onClick={loadVideos} id="load-more">Load More</button>
          )}
        </section>
      </main>
    </div>
  );
};

export default Instagram;
