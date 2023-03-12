'use client';
import React, { useState, createContext } from 'react';
import { createPortal } from 'react-dom';
import Button from '../components/Button';
import Whitebox from './Whitebox';
import colors from '../../utils/colors';
import {PlusIcon} from '@heroicons/react/24/solid';
import AddDriverModal from './AddDriverModal';
type ContextType = {
  isShowingModal?: boolean;
  setIsShowingModal?: React.Dispatch<React.SetStateAction<boolean>>;
  closeModal?: () => void
}
export const ModalContext = createContext<ContextType>({
  isShowingModal: false,
  setIsShowingModal: () => {},
});
function Drivers() {
  const [isShowingModal,setIsShowingModal] = useState(false);
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
      <ModalContext.Provider value={{closeModal}}>
        {/* showing modal */}
      {isShowingModal &&
        createPortal(
          <div className='absolute flex justify-center items-center backdrop-blur-sm bg-white/20 w-[50vw] h-[100vh] top-0 left-0'>
            <AddDriverModal />
          </div>,
          document.body
        )}
      </ModalContext.Provider>
    </div>
  )
}
export default Drivers;