import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import Homepageslide1 from 'C:/Users/heena.shaik/React Projects/Retail/src/assets/HomePageSlide1.png'
import Homepageslide2 from 'C:/Users/heena.shaik/React Projects/Retail/src/assets/HomePageSlide2.png'
import Homepageslide3 from 'C:/Users/heena.shaik/React Projects/Retail/src/assets/HomePageSlide3.png'


function CarouselFade() {
  const nav = useNavigate();
  return (
    <div className='carouselitem'>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Homepageslide3}
          
          alt="First slide"
          style={{borderColor:'gray',height:"320px"}}
          onClick={e => nav('/login')}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Homepageslide2}
          alt="Second slide"
          style={{borderColor:'gray',height:"320px"}}
          onClick={e => nav('/login')}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Homepageslide1}
          alt="Third slide"
          style={{borderColor:'gray',height:"320px"}}
          onClick={e => nav('/login')}
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselFade;