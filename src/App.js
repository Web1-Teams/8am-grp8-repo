

import Navbar from './components/Navbar'
import OrderForm from './components/Form/OrderForm'
import SpecialTitle from './components/SpecialTitle'

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