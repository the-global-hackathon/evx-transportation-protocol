import createDataContext from './createDataContext';
import axios from 'axios';

/* TrackContext is going to be all about saving tracks that we have ever recorded
and fetching them from opur backend API. */
const chargingReducer = (state, action) => {
  switch (action.type) {
    case 'search_api':
      return { ...state, search: action.payload };
    case 'get_directions':
      return { ...state, directions: action.payload };
    case 'get_details':
      return { ...state, details: action.payload };
    case 'get_places':
      return { ...state, places: action.payload };
    default:
      return state;

  }
}

const searchApi = dispatch => async () => {

    const response = await axios.get('https://places.cit.api.here.com/places/v1/browse', {
      params: {
        in: '34.0403207,-118.2717511;r=100500',
        q: 'charging station',
        app_id: 'ODTCWA5mVtf7qQ8cuAir',
        app_code: 'Bd6cPwZ06DL_15p_5NGBMw'
      }
    });

    dispatch({type: 'search_api', payload: response.data.results.items.map(res => res.position)});
}


const getDirections = dispatch => async ({ latitude, longitude }) => {
  const response = await axios.get('https://image.maps.api.here.com/mia/1.6/routing', {
    params: {
      app_id: 'ODTCWA5mVtf7qQ8cuAir',
      app_code: 'Bd6cPwZ06DL_15p_5NGBMw',
      waypoint0: '34.0403207,-118.2717511',
      waypoint1: `${latitude},${longitude}`,
      lc: '1652B4',
      lw: '6',
      t: '0',
      ppi: '320',
      w: '395',
      h: '350',
    }
  });

  dispatch({ type: 'get_directions', payload: response.request.responseURL });
};


const getDetails = dispatch => async ({ latitude, longitude }) => {
  const response = await axios.get('https://places.cit.api.here.com/places/v1/browse', {
    params: {
      in: `${latitude},${longitude};r=1`,
      q: 'charging station',
      app_id: 'ODTCWA5mVtf7qQ8cuAir',
      app_code: 'Bd6cPwZ06DL_15p_5NGBMw'
    }
  });

  dispatch({ type: 'get_details', payload: response.data.results.items[0] });
};

const getPlaces = dispatch => async () => {
  const response = await axios.get('https://places.cit.api.here.com/places/v1/browse', {

    params: {
      in: '34.0403207,-118.2717511;r=10500',
      q: 'charging station',
      app_id: 'ODTCWA5mVtf7qQ8cuAir',
      app_code: 'Bd6cPwZ06DL_15p_5NGBMw'
    }
  });
  dispatch({ type: 'get_places', payload: response.data.results.items });
};

export const { Provider, Context } = createDataContext(
  chargingReducer,
  { getDetails, getPlaces, searchApi, getDirections }, // object with all of our different action functions
  { details: [], places: [], search: [], directions: '' } // initialState
);
