import { Outlet } from "react-router-dom";


const Event = () => {
  return (
    <div className="d-flex justify-content-center my-5">
      <Outlet/>
    </div>
  )
}

export default  Event;