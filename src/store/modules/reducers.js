import {DELETE_TO_DO} from './actions'
import {ADD_TO_DO} from './actions'

export const initialState = {
  toDos: [
    {
      task: "Do washing up",
      done: false,
      id: '123'
    },
    {
      task: "Mow the lawn",
      done: false,
      id: '924'
    },
    {
      task: "Fly to the moon",
      done: false,
      id: '625'
    },
    {
      task: "Go to the gym",
      done: false,
      id: '225'
    },
    {
      task: "Cook dinner",
      done: false,
      id: '728'
    },
  ]
}

export default (state=initialState, action) => {
  switch(action.type){
    case ADD_TO_DO: {
      return {
        ...state,
        toDos: [...state.toDos, action.payload]
      }
    }
    case DELETE_TO_DO: {
      return {
        ...state,
        toDos: state.toDos.filter(item => item.id !== action.payload)
      }
    }
    default: return state
  }
}
