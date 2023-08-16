import { google, apple, bill } from '../assets'
import { layout, styles } from '../util/style'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImageReverse}>
        <img src={bill} alt='bill' className='w-[100%] h-[100%] relative z-[5]' />

        <div className='absolute z-[3] w-[50%] h-[55%] -left-1/2 rounded-full top-0 white__gradient' />
        <div className='absolute z-[0] w-[50%] h-[50%] -left-1/2 rounded-full bottom-0 pink__gradient' />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Hisob-kitob va fakturial <br className='sm:block hidden' /> osongina boshqaring
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio iure obcaecati fuga asperiores eum accusamus quod corporis ipsam perferendis hic?
        </p>

        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={google} alt='google' className='w-[129px] h-[42px] object-contain mr-5 cursor-pointer' />
          <img src={apple} alt='apple' className='w-[129px] h-[42px] object-contain mr-5 cursor-pointer' />
        </div>
      </div>
    </section>
  )
}

export default Billing