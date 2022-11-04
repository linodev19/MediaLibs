import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonButton } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"dark-profond"}>
          <IonTitle color={"doree"}>MediaLibs</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonImg src='../../assets/Woman-king.jpg'></IonImg>
       
          <IonButton className='IonImg-intro' expand='full' color={"doree"}>
            Disponiblle au Cinéma
          </IonButton>
          
          
          <p className='box-title'>Top Films au Cinéma</p>
          
          {/* carousel  */}
          
          <Swiper
      spaceBetween={20}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><IonImg src='../../assets/black Adams.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/bros.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/enfer.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/Deinfluencer.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/terrifier.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/Smile.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/strangers-things.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/Sansflitre.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/exorcismos.jpg'></IonImg></SwiperSlide>
      
    </Swiper>    

    <p className='box-title'>Top livres  2022</p>
          
          {/* carousel  */}
          
          <Swiper
      spaceBetween={20}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><IonImg src='../../assets/Sous le visage dun ange.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/je pars.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      
    </Swiper>    
    <p className='box-title'>Mangas</p>
          
          {/* carousel  */}
          
          <Swiper
      spaceBetween={20}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/MV5BMjA5NzgxODE2NF5BMl5BanBnXkFtZTcwNTI1NTI0OQ@@._V1_UY209_CR0,0,140,209_AL_.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      
    </Swiper>    
    <p className='box-title'>Littérature Française</p>
          
          {/* carousel  */}
          
          <Swiper
      spaceBetween={20}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/MV5BMjA5NzgxODE2NF5BMl5BanBnXkFtZTcwNTI1NTI0OQ@@._V1_UY209_CR0,0,140,209_AL_.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      
    </Swiper>    

    <p className='box-title'>Livres Anglais</p>
          
          {/* carousel  */}
          
          <Swiper
      spaceBetween={20}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/MV5BMjA5NzgxODE2NF5BMl5BanBnXkFtZTcwNTI1NTI0OQ@@._V1_UY209_CR0,0,140,209_AL_.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      
    </Swiper>    

    <p className='box-title'>Sciences</p>
          
          {/* carousel  */}
          
          <Swiper
      spaceBetween={20}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/MV5BMjA5NzgxODE2NF5BMl5BanBnXkFtZTcwNTI1NTI0OQ@@._V1_UY209_CR0,0,140,209_AL_.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      
    </Swiper>    

    <p className='box-title'>Culture</p>
          
          {/* carousel  */}
          
          <Swiper
      spaceBetween={20}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/MV5BMjA5NzgxODE2NF5BMl5BanBnXkFtZTcwNTI1NTI0OQ@@._V1_UY209_CR0,0,140,209_AL_.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      
    </Swiper>    

    <p className='box-title'>Documentaires</p>
          
          {/* carousel  */}
          
          <Swiper
      spaceBetween={20}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/MV5BMjA5NzgxODE2NF5BMl5BanBnXkFtZTcwNTI1NTI0OQ@@._V1_UY209_CR0,0,140,209_AL_.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      <SwiperSlide><IonImg src='../../assets/1.jpg'></IonImg></SwiperSlide>
      
    </Swiper>    
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
