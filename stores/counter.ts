/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-08-11 15:14:42
 * @LastEditTime: 2023-08-11 15:17:06
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \base_nuxt3\stores\counter.ts
 */
import { defineStore } from 'pinia'
export const useCounterStore = defineStore('counter', () => {
    const count: Ref<number> = ref(0)
    const increment = () => {
        count.value = count.value + 1
    }

    return {
        count,
        increment
    }
})
