import { logo } from '../assets'
import { footerLinks, socialMedia } from '../util/constants'
import { styles } from '../util/style'

const Footer = () => {
  return (
    <div className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img src={logo} alt='logo' className='w-[250px] h-[72px] object-contain' />
          <p className={`${styles.paragraph} mt-4 max-w-[350px]`}>
            To'lovlarni oson, ishonchli va xavfsiz qilishning yangi usuli.
          </p>
        </div>

        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map(item => (
            <div key={item.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className='font-montserrat font-medium text-[18px] leading-[27px] text-white'>{item.title}</h4>
              <ul className='list-none mt-4'>
                {item.links.map(link => (
                  <li key={link.name} className={`font-montserrat font-normal text-[16px] leading-[24px] text-lightWhite hover:text-secondary cursor-pointer`}>
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={`${styles.flexBetween} w-full md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]`}>
        <p className='font-montserrat font-normal text-center text-[18px] leading-[27px] text-white'>
          Copyright © 2023 MuhsPay. All Right Reserved
        </p>

        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((social, idx) => (
            <a key={social.id} href={social.link} target='_blank'>
              <img src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${idx !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer