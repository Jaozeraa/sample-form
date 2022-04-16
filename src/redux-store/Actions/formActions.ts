import { IAddress, IForm, IMapArea } from '../Reducers/formReducer';
import * as ActionTypes from './actionTypes';

interface sendDTO {
  form: IForm | null;
  bulletPoint: IAddress | null;
  mapAreas: IMapArea[];
}

export const send =
  ({ form, mapAreas, bulletPoint }: sendDTO) =>
  async (dispatch: any) => {
    dispatch({
      type: ActionTypes.INCREASE_LOADING,
    });
    try {
      alert(
        JSON.stringify({
          form,
          mapAreas,
          bulletPoint,
        }),
      );
    } catch (err) {
      dispatch({
        type: ActionTypes.SET_ERROR,
        payload: err as Error,
      });
    } finally {
      dispatch({
        type: ActionTypes.DECREASE_LOADING,
      });
    }
  };
