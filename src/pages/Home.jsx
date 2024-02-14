// import React from 'react'
import Navbar from '../components/Navbar'
import { bullet_point_arrow, Faucet, desc_orange , 
  faucets_card, toilet_card, shower_card, furniture_card, faucet2, product4, product3, product2, product1, priveleges, promo_section} from '../assets'
import { NavLink } from 'react-router-dom'
import Footer from '../components/Footer'

const Home = () => {

  return (
    <>
    {/* header section */}
    <section className="bg-[url('/src/assets/bg.png')] w-full h-[694px]">
      <Navbar/>
      <img src={Faucet} alt="faucet" className='absolute right-0 top-0 hidden min-[1400px]:block'/>
      <div className='text-white text-5xl leading-[60px] font-roboto mt-48 ml-80 left-0'> 
      Сантехника и мебель <br /> для ванной комнаты</div>


      {/* menu list div  */}
      <div className='flex flex-col w-[200px] font-light text-gray-400 font-PT_Sans ml-80 mt-[60px] '>
        <a href="#" className=" py-4 flex flex-row gap-1 items-center">
          <img src={bullet_point_arrow} alt="" />
          О компании</a>
        <hr className='hr_custom_fade'/>
        <a href="#" className=" py-4 flex flex-row gap-1 items-center">
          <img src={bullet_point_arrow} alt="" />
          О продукции</a>
        <hr className='hr_custom_fade'/>
        <a href="#" className=" py-4 flex flex-row gap-1 items-center">
          <img src={bullet_point_arrow} alt="" />
          Каталог товаров</a>
      </div>

    {/* company description section */}
    </section>
    <section className='h-[363px] bg-slate-100'>
      <div className='flex flex-row h-full '>
        <div className='flex flex-col ml-80 max-w-[570px] font-PT_Sans font-light text-gray-800'>
          <div className='flex flex-row   mt-[80px] gap-1  '>
            <span className='text-5xl text-orange-500'>O</span> <span className='text-orange-500'>range</span>
            – немецкая торговая марка. Главный офис и основное производство расположены в Германии. Производим смесители,  душевые кабины, 
          </div>
          <div className=''>ванны и мебель для ванных комнат.</div>
          <div className='mt-5 '>Мы предлагаем качественную продукцию немецкого производства, 
            которая <br /> полностью адаптирована к реалиям российскиого рынка.</div>
        </div>
        <img src={desc_orange} alt="desc_orange" className='h-[50%] w-[50%] mt-[80px]' />
      </div>
      </section> 

      <section className='h-[600px]'>
        <div className='mt-20 flex flex-col ml-80'>
          <h2 className='font-roboto text-4xl font-semibold'> Наша продукция</h2>
          <nav className="flex flex-row mt-7 h-[350px] object-contain">
          <NavLink to=''> 
            <img src={faucets_card} alt="" className=''/>
          </NavLink>

          <NavLink to=''> 
            <img src={furniture_card} alt="" />
          </NavLink>

          <NavLink to=''> 
            <img src={shower_card} alt="" />
          </NavLink>

          <NavLink to=''> 
            <img src={toilet_card} alt="" />
          </NavLink>
          
      </nav>
        </div>

      </section>
      
      <section className="bg-[url('/src/assets/bg.png')] w-full h-[665px] relative">
        
        <div className='ml-80 mt-20 flex flex-col'>
          <h1 className='text-white font-roboto text-4xl mt-20'>
            Коллекции
          </h1>
          <div className='font-light text-gray-400 font-PT_Sans w-[440px] '>
          Чувственность и элегантность, пуризм и эксклюзивность, а может уют и романтичность? Наши коллекции, <br /> разработанные лучшими дизайнерами отрасли, помогут создать вам именно ту атмосферу ванной комнаты, которую вы всегда искали.
          </div>
        </div>
        <img src={faucet2} alt="fauset pic" className='absolute right-0 top-0 hidden min-[1800px]:block'/>
        <a href="#" className="  flex flex-row ml-80 gap-1 items-center font-light text-gray-400 font-PT_Sans absolute bottom-5">
          <img src={bullet_point_arrow} alt="" />
          Все Коллекции</a>
      </section>

      <section className='h-[1948px] mt-20 relative'>
        <h1 className='ml-80 font-roboto text-4xl font-semibold'>Акционные товары</h1>
        <nav className="flex flex-wrap flex-row mt-7 ml-80 border-[1px] w-fit border-slate-200">
          <NavLink to=''> 
            <img src={product4} alt="" className=''/>
          </NavLink>

          <NavLink to=''> 
            <img src={product3} alt="" />
          </NavLink>

          <NavLink to=''> 
            <img src={product2} alt="" />
          </NavLink>

          <NavLink to=''> 
            <img src={product1} alt="" />
          </NavLink>
        </nav>
        <h2 className='flex items-center justify-center 
        font-roboto text-4xl font-semibold
        mt-20'>Наши преимущества</h2>
        <img src={priveleges} alt="" className='flex items-center justify-center mt-14 w-fit mx-auto' />
        <img src={promo_section} alt="" className='mt-20' />
        <Footer/>
      </section>
      
      </>
    
  )
}

export default Home