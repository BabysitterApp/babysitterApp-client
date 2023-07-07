import {Carousel, Image} from 'react-bootstrap';
function Slider() 
{
return(

        <Carousel>
      <Carousel.Item>
        <Image 
         className="d-block w-100"
         src="https://previews.123rf.com/images/asyaart/asyaart1805/asyaart180500080/102770635-signboard-or-logo-for-babysitter-with-kids-toys-handprints-baby-pacifier-and-pencils.jpg"
          alt="First slide"
          width="60%"
        />
        <Carousel.Caption>
          
          <p>If you are managing work and kids</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image 
         className="d-block w-100"
         src="https://newmom.at/files/taco/img/working-mom/Babysitter_panthermedia_AntonioGuillem_26549715_800x400_NM_3-22.jpg"
          alt="First slide"
          width="60%"
        />
        <Carousel.Caption>
        
          <p>If you are managing work and kids</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
        className="d-block w-100"
        src="https://st4.depositphotos.com/1177973/21200/i/600/depositphotos_212009696-stock-photo-cute-little-girl-young-nanny.jpg"
          alt="Second slide"
          width="60%"
        />

        <Carousel.Caption>
         
          <p>Here is a solution</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
        className="d-block w-100"
          src="https://media.istockphoto.com/id/1369591176/de/foto/s%C3%BC%C3%9Fer-kleiner-junge-der-mit-einem-professionellen-lehrer-spielt-zusammen-auf-dem-boden-im.jpg?s=612x612&w=0&k=20&c=DwI9KAz23Xzr040ZSnQVOiK-4mmNcld-NsP_-0wajUA="
          alt="Third slide"
          width="60%"
        />

        <Carousel.Caption>
     
          <p>
            Don't Worry. Book a babysitter
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
);
}
export default Slider;