/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-08-25 16:58:43
 * @LastEditTime: 2023-08-25 17:47:25
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \memo_local\server\routes\api\auth.get.ts
 */
export default defineAuthenticatedEventHandler((event) => {
    return {
        a: 1,
        b: 2,
        user: event.context.user
    }
})
