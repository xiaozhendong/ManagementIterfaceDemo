import {IRootDispatch} from 'ice';


const delay = (time) => new Promise((resolve) => setTimeout(() => resolve(), time));
export default {
  state:{
    count: 1
  },
  reducers: {
    increment(state) {
      state.count += 1

    },
    decrement(preState) {
      preState.count -= 1
    }
  },
  effects: (dispatch: IRootDispatch) => ({
      async decrementAsync(){
        await delay(1000)
        dispatch.counter.decrement()
      }

  })

}
