import VideoSrc from "./videoSrc";
import './App.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1920 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 1920, min: 768 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1
  }
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="pbElement">
          <h1>Tuan Cherry</h1>
          <p>I blow emotions to footages</p>
        </div>
        <div className="pbElement">
          <div className="linkContainer">
            <a to="https://www.youtube.com/@cmonesports" href="https://www.youtube.com/@cmonesports" target="_blank" rel="noreferrer"><span>cmon.io</span></a>
            <a href="#"><span><FontAwesomeIcon icon={faEnvelope} /></span> twolfdota@gmail.com</a>
          </div>
        </div>
      </header>
      <div className="portSection">
        <div className="pbElement">
          <h1>From my undying passion for esports</h1>
        </div>
        <div className="sliderContainer">
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}

            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
         
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <VideoSrc url='https://youtu.be/YIMnHqPT98c?si=kxKdD61GGjAoG3mY'/>
            <VideoSrc url='https://www.youtube.com/shorts/XFUMG32AdK0' />
            <VideoSrc url='https://www.youtube.com/shorts/qTunDYwhz9c' />
            <VideoSrc url='https://youtu.be/wNj8AtlW_4k?si=zSaFy3GNLHqIGyTv' />

          </Carousel>
        </div>
      </div>

      <div className="portSection">
        <div className="pbElement">
          <h1>To every pieces of cake in life</h1>
        </div>
        <div className="sliderContainer">
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}

            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
       

            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <VideoSrc url='https://youtu.be/eFlu0evShSI?si=Hgm0bP6j9oVtzjBl'/>
            <VideoSrc url='https://youtu.be/UFGyc5qQ8A4?si=qO-yFpndmVoAYOfE'/>
          </Carousel>
        </div>
      </div>
      <footer>
          <div className="pbElement">
              <p>© Tuan Cherry. All rights reserved.</p>
          </div>
      </footer>
    </div>
  );
}

export default App;
