import { useDispatch, useSelector } from "react-redux";
import { onCloseDateModal, onOpenDateModal, onUnsetEvent } from "../store";

export const useUiStore = () => {
  const { isDateModalOpen } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const openDateModal = () => {
    dispatch(onOpenDateModal());
  };

  const closeDateModal = () => {
    dispatch(onCloseDateModal());
    dispatch(onUnsetEvent());
  };

  return {
    // Properties
    isDateModalOpen,

    // Methods
    openDateModal,
    closeDateModal,
  };
};
