import { setPin } from '../redux/sliders/settings/slice';
import { useAppDispatch } from './store';
import { Pin } from '../@types/Setting';

export const useSettingsActions = () => {
  const dispatch = useAppDispatch();

  /* Store Expense  */
  const setHandlePin = async (password: Pin ) => {    
    await dispatch( setPin(password) )
  };

  return { setHandlePin }
}
