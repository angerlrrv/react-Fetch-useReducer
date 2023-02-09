import { useEffect, useCallback, useReducer } from "react";
const useFetchGit = ({ url }) => {
  const initialState = {
    isLoading: true,
    isError: '',
    users: []
  }
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_INIT':
        return {
          ...state,
          isLoading: true,
          isError: false
        };
      case 'FETCH_SUCCESS':
        return {
          ...state,
          isLoading: false,
          isError: false,
          users: action.payload,
        };
      case 'FETCH_FAILURE':
        return {
          ...state,
          isLoading: false,
          isError: true,
        };

      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  const fetchData = useCallback(() => {
    try {
      dispatch({ type: 'FETCH_INIT' });
      const fetchData =  fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        dispatch({ type: "FETCH_SUCCESS", payload: responseData });
      });
      
    } catch (error) {
      dispatch({ type: 'FETCH_FAILURE' });
    } 
  }, []);
  useEffect(() => {
    let didCancel = false;
    if (!didCancel)fetchData();
    return () => {
      didCancel = true;
    };
  }, [url]);
  return {state};
}
export default useFetchGit;