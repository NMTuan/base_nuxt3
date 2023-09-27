/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-08-25 11:32:22
 * @LastEditTime: 2023-08-25 11:46:00
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \memo_local\server\utils\sleep.ts
 */

/**
 * 休眠函数
 *
 * 使用方法：await sleep(3000)
 * @param delay 休眠时长 单位 ms
 * @returns Primise
 */
export const sleep = (delay: number) => {
    return new Promise((resolve) => setTimeout(resolve, delay))
}
