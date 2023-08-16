import {Home, Navbar, Statistics, Contract, Billing, Business, CTA, Testimonials, Clients, Footer} from './components'
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
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App