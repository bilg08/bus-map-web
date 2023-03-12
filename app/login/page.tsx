'use client'
import { Input } from '../components';

export default function Login() {
return (
    <div className="w-full bg-red-500 h-[100vh] flex justify-center items-center">
      <form className="flex w-5/6 md:w-[450px] md:h-96 rounded-md p-4 gap-2 flex-col bg-white" onSubmit={e => e.preventDefault()}>
        <h1 className="font-bold text-xl mt-4">Тавтай морил!</h1>
        <div className="flex flex-col gap-4 mt-2">
        <Input placeholder={'И-майл'}/>
        <Input placeholder={'Нууц үг'}/>
        </div>
        <button className="p-3 mt-2 border rounded-md bg-[#0C1219] text-white font-bold text-md">Нэвтрэх</button>
       </form>
    </div>
  )
}