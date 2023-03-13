import Drivers from './components/DriversSideBar';
import Map from './components/Map';
import Sidebar from './components/Sidebar';
export default function Home() {
  return (
    <div className='h-[100vh] w-[100vw] flex'>
      <Sidebar />
      <Drivers />
      <Map />
   </div>
  )
}
