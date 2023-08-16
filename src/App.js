import {Home, Navbar, Statistics, Contract, Billing, Business, CTA, Testimonials} from './components'
import {styles} from './util/style'

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Navbar />
          <Home />
          <Statistics />
          <Contract />
          <Billing />
          <Business />
          <Testimonials />
          <CTA />
        </div>
      </div>
    </div>
  )
}

export default App