import { FormState } from '@/redux-store/Reducers/formReducer';
import { useSelector } from 'react-redux';

interface ReduxState {
  form: FormState;
}

const useReduxState = () => useSelector((state: ReduxState) => state);

export default useReduxState;
