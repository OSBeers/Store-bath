
import { bullet_point_arrow, logo, questions, socials } from '../assets'

const Footer = () => {
  return (
    <section className='h-[382px] bg-[#202122]'>
      <div className=' flex flex-row gap-[86px]'>
        <div className='mt-[60px] ml-[22.5rem]'>
          <a href="#">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className='flex flex-col gap-4 w-fit font-light text-gray-400 font-PT_Sans mt-[60px] '>
          <a href="#" className=" flex flex-row gap-1 ">
            <img src={bullet_point_arrow} alt="" />
            О компании</a>
          
          <a href="#" className=" flex flex-row gap-1 ">
            <img src={bullet_point_arrow} alt="" />
            Сотрудничество</a>
          
          <a href="#" className=" flex flex-row gap-1 ">
            <img src={bullet_point_arrow} alt="" />
            Покупателям</a>
        </div>

        <div className='flex flex-col gap-4 w-fit font-light text-gray-400 font-PT_Sans mt-[60px] '>
          <a href="#" className=" flex flex-row gap-1">
            <img src={bullet_point_arrow} alt="" />
            Где купить</a>
          
          <a href="#" className="flex flex-row gap-1">
            <img src={bullet_point_arrow} alt="" />
            Сервисное обслуживание</a>
          
          <a href="#" className="flex flex-row gap-1 items-center">
            <img src={bullet_point_arrow} alt="" />
            Контакты</a>
        </div>
        <img src={questions} alt="" className='w-fit h-fit mt-[60px]'/>
        <img src={socials} alt="" className='h-fit w-fit mt-[60px]'/>
        
      </div>
      <hr className='hr_custom_fade_footer mt-[125px]'/>
      
    </section>
  )
}

export default Footer