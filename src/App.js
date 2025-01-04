

import Navbar from './components/Navbar'

import SpecialTitle from './components/SpecialTitle'
import OrderForm from './components/Form/OrderForm'

const App = () => {
  return (
  <div className="mt-40">
   <SpecialTitle title ="jana" className="text-center"/>
  <Navbar/>
   <OrderForm/>
  </div>
  )
}

export default App 