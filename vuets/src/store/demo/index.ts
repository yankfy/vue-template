import { State } from './interface';

const states: State = {
  count: 0,
};

export default {
  // 带命名空间
  namespaced: true,
  state: states,
  // getters 运算状态修改 相当于computed
  getters: {
    count(state: State) {
      console.log(state.count, 'getters');
      return (state.count += 20);
    },
  },
  // 同步修改状态
  mutations: {
    increment(state: State, n?: number) {
      // console.log(n);
      if (n != null) {
        // state.count = n;
        // getters.count
        return state.count;
      } else {
        console.log(state.count);
        return state.count++;
      }
    },
  },
  // 异步修改状态
  actions: {
    increment(context: any, n?: number) {
      // console.log(context);
      // 执行mutations里的函数, // 如果getter实例化，则并会执行getter里的函数，如果不实例化，则不执行
      return context.commit('increment', n);
    },
  },
};
