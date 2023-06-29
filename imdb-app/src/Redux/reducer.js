import * as types from "./actionTypes"

const initialState={
    movies:[],
    isLoading:false,
    isError:false,
}


const Reducer=(oldState=initialState,action)=>{
    const {type,payload} =action

  // console.log(payload+" "+"hii")
    switch(type){

        case types.GET_MOVIES_REQUEST:
             return{...oldState,isLoading:true}

        case types.GET_MOVIES_SUCCESS:
            return{...oldState,isLoading:false,movies:payload}

        case types.GET_MOVIES_ERROR:
            return {...oldState,isLoading:false,isError:true}

        default:
            return oldState
    }

}

export {Reducer}