import { DECREASE_COUNT, INCREASE_COUNT } from '../constants/count'

const initialCountState = {
  count: 0
}

const countReducer = (state = initialCountState, action) => {
  switch (action.type) {
  case INCREASE_COUNT:
    return {
      ...state,
      count: state.count + 1
    }
  case DECREASE_COUNT:
    return {
      ...state,
      count: state.count - 1
    }
  default: return state
  }
}

export default countReducer
