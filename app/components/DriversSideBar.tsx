'use client';
import React, { useState, createContext } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button';
import Whitebox from './Whitebox';
import colors from '../../utils/colors';
import {PlusIcon} from '@heroicons/react/24/solid';
import AddDriverModal from './AddDriverModal';
import Drivers from './Drivers';
import useCollection from '../../hooks/getCollection';
type ContextType = {
  isShowingModal?: boolean;
  setIsShowingModal?: React.Dispatch<React.SetStateAction<boolean>>;
  closeModal?: () => void
}
export const ModalContext = createContext<ContextType>({
  isShowingModal: false,
  setIsShowingModal: () => {},
});
function DriversSideBar() {
  const [isShowingModal,setIsShowingModal] = useState(false);
  const drivers = useCollection('driver');
  function openModal() {
    setIsShowingModal(true);
  }
  function closeModal() {
    setIsShowingModal(false);
  }
  return (
    <div className={`h-[100vh] w-[400px] bg-silver flex relative flex-col gap-2`}>
    {/* add driver  */}
      <Whitebox className='justify-between px-6 mt-4'>
        <h1>Жолооч нэмэх</h1>
        <Button className='bg-silver' onClick={openModal}>
          <PlusIcon color={colors.primary} width={24} height={24}/>
        </Button>
      </Whitebox>
      {/* show drivers */}
      <Drivers active={true} drivers={drivers} />
      <Drivers active={false} drivers={drivers} />

      <ModalContext.Provider value={{closeModal}}>
      {isShowingModal &&
        createPortal(
          <div className='absolute flex z-40 justify-center items-center backdrop-blur-sm bg-white/20 w-[100vw] h-[100vh] top-0 left-0'>
            <AddDriverModal />
          </div>,
          document.body
        )}
      </ModalContext.Provider>
    </div>
  )
}
export default DriversSideBar;