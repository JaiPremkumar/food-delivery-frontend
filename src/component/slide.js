import Slider, {} from 'react-slick'

export default function Slide(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    return(
        <>
         <div className="slider-container">
         <Slider {...settings}>
          <div>
         <img className="d-block w-100"
          src={require('./slideImg/png1.webp') }
          style={{ height: '12rem',width:'5rem' }}/>
           </div>

           <div>
         <img className="d-block w-100"
          src={require('./slideImg/png2.png') }
          style={{ height: '12rem',width:'5rem' }}/>
          </div>

         <div>
          <img className="d-block w-100"
          src={require('./slideImg/png3.png') }
          style={{ height: '12rem',width:'5rem' }}/>
          </div>

          <div><img className="d-block w-100"
          src={require('./slideImg/png4.webp') }
          style={{ height: '12rem',width:'5rem' }}/>
          </div>

         <div><img className="d-block w-100"
          src={require('./slideImg/png5.jpg') }
          style={{ height: '12rem',width:'5rem' }}/>
          </div>
          </Slider>
         </div>
        </>
    )
}