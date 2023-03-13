import React,{ createContext, useContext } from "react";

type ContextType = {
    isShowingModal?: boolean;
    setIsShowingModal?: React.Dispatch<React.SetStateAction<boolean>>;
    closeModal?: () => void
  }
export const ModalContext = createContext<ContextType>({
    isShowingModal: false,
    setIsShowingModal: () => {},
});

export const useModalContext = () => useContext(ModalContext);