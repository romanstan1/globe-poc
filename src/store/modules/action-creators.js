import uuidv1 from 'uuid/v1'

import {ADD_TO_DO} from './actions'
import {DELETE_TO_DO} from './actions'

export const addToDo = (text) => {
  return dispatch => dispatch({
    type: ADD_TO_DO,
    payload: {
      id: uuidv1(),
      task: text.length? text: 'Default text',
      done: false
    }
  })
}

export const deleteToDo = id => dispatch => {

  console.log('deleteToDo')
  setTimeout(()=> {
    console.log('do sutin')
    return dispatch({
      type: DELETE_TO_DO,
      payload: id
    })
  }, 1000)

}
