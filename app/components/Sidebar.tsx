import React from "react"
import Button from "./Button";
function Sidebar() {
  return (
    <div className={`h-[100vh] w-[300px] bg-primary flex relative flex-col gap-2`}>
       <div className='flex flex-col gap-2 py-16'>
        <Button className="text-white">Ажилчид</Button>
        <Button className="text-white">Явц харах</Button>
       </div>
       <button className={`text-white font-bold text-lg absolute bottom-0 left-0 p-4`}>Гарах</button>
    </div>
  )
}
export default Sidebar;

