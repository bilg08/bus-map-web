import Drivers from './components/Drivers';
import Map from './components/Map';
import Sidebar from './components/Sidebar';
// import {Map} from './components';
export default function Home() {
  return (
    <div className='h-[100vh] w-[100vw] flex'>
      <Sidebar />
      <Drivers />
      <Map />
   </div>
  )
}
