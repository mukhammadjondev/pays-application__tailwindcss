import { features } from '../util/constants'
import { layout, styles } from '../util/style'
import { Button, FeatureCard} from './'

const Business = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Biznies rivojlantiring, <br className='sm:block hidden' /> pulni hal qilamiz
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum vero debitis at eaque doloribus quisquam facere odit expedita, error quo!
        </p>
        <Button styles={'mt-10'} />
      </div>

      <div className={`${layout.sectionImage} flex-col`}>
        {features.map((feature, idx) => (
          <FeatureCard keys={feature.id} {...feature} idx={idx} />
        ))}
      </div>
    </section>
  )
}

export default Business