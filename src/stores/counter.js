import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore(
  'counter',
  () => {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    function increment() {
      count.value++
    }

    return { count, doubleCount, increment }
  },
  {
    //自行选择是否开启
    persist: false
    // {
    //   //设置使用的storage，默认localStorage ，可选sessionStorage
    //   storage: sessionStorage,
    //   //自行对这个store进行命名
    //   key: 'my-name-counter',
    //   afterHydrate: (ctx) => {
    //     //触发反序列化操作时的钩子，钩子函数在解除冻结持久化状态后运行
    //     console.log('这个store对象', ctx.store)
    //   },
    //   //omit 字符串数组，忽略指定的属性,[] 或 undefined 表示整个状态持续存在（不遗漏任何内容）。
    //   omit: []
    //   //pick 字符串数组，只持久化指定的属性，[] 表示没有持久化状态，undefined 表示持久化整个状态。
    //   //优先级：pick>omit
    //   // pick: []
    //   // ['count']
    // }
  }
)
