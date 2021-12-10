import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_FAIL = "FETCH_FAIL";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const ADD_NEW_SMURF = "ADD_SMURF";
export const ADD_ERROR = "ADD_ERROR";

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.


export const fetchStart = () => {
    return({type: FETCH_START})
}

export const fetchSuccess = smurfs => {
    return({type:FETCH_SUCCESS, payload: smurfs })
}

export const fetchFail = error => {
    return({type: FETCH_FAIL, payload: error})
}

export const addError = err => {
    return({type: ADD_ERROR, payload: err})
}

export const addNewSmurf = newSmurf => {
    return({type: ADD_NEW_SMURF, payload: newSmurf})
}

export const getSmurfs = () => dispatch => {
    dispatch(fetchStart());
    axios.get(`http://localhost:3333/smurfs`)
        .then(res => {
            console.log(res.data)
            const smurfs = res.data
            dispatch(fetchSuccess(smurfs))
        })
        .catch(err => {
            console.error(err)
            dispatch(fetchFail(err))
        })

}

export const addSmurf = newSmurf => dispatch => {
    dispatch(fetchStart());
    axios.post("http://localhost:3333/smurfs", newSmurf)
        .then(res => {
            console.log(res)
            dispatch(addNewSmurf(newSmurf));
        })
        .catch(err => {
            dispatch(fetchFail(err));
        })
}































