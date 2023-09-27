/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-08-25 16:48:06
 * @LastEditTime: 2023-08-28 14:04:42
 * @LastEditors: NMTuan
 * @Description: 鉴权
 * @source: https://github.com/unjs/nitro/discussions/338
 * @FilePath: \memo_local\server\utils\authenticatedHandler.ts
 */
import jwt from 'jsonwebtoken'
// import { JwtPayload } from '@types/jsonwebtoken'
import type { EventHandler } from 'h3'

export const defineAuthenticatedEventHandler = (handler: EventHandler) => {
    const config = useRuntimeConfig()
    const secretKey = config.JWT_SECRET // 从env中读取秘钥
    return defineEventHandler(async (event) => {
        const usersJWT = getHeader(event, 'Authorization') // 从请求中拿到 Authorization
        if (!usersJWT) {
            throw createError({
                statusCode: 401,
                statusMessage: 'Unauthorized',
                stack: ''
            })
        }

        //         const token = jwt.sign(
        //             {
        //                 exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
        //                 userId: '123'
        //             },
        //             secretKey
        //         )
        //         console.log('token', token)

        const hash = usersJWT.split(' ')[1]
        return jwt.verify(
            hash,
            secretKey,
            async (err: boolean, decoded: jwt.JwtPayload) => {
                if (err) {
                    throw createError({
                        statusCode: 401,
                        statusMessage: 'Unauthorized',
                        stack: ''
                    })
                } else {
                    // 把解密的 token 信息注入上下文的 user 中
                    event.context.user = decoded
                    return await handler(event)
                }
            }
        )
    })
}
