/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-08-22 10:41:13
 * @LastEditTime: 2023-08-25 17:04:33
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \memo_local\server\routes\api\test.get.ts
 */

export default defineEventHandler(async () => {
    const post = await prisma.user.findFirst({
        where: { id: 1 },
        include: { posts: true }
    })

    return post
})
