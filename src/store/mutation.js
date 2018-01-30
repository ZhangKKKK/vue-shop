import * as types from './mutation-type'
export default {
    [types.SET_CARTS](state,carts){
        state.carts=carts
    },
    [types.DEL_CARTS](state,carts){
        state.carts=carts
    },
    [types.SET_LOGIN](state,info){
        state.loginInfo=info
    }
}
