/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-08-25 11:09:38
 * @LastEditTime: 2023-08-25 17:04:57
 * @LastEditors: NMTuan
 * @Description: 全局暴露 prisma
 * @FilePath: \memo_local\server\utils\prisma.ts
 */
import { PrismaClient, Prisma } from '@prisma/client'

// const config = useRuntimeConfig()
// console.log('config', config)

let client

const log: (Prisma.LogLevel | Prisma.LogDefinition)[] =
    process.env.NODE_ENV === 'development'
        ? ['error', 'info', 'query', 'warn']
        : []

if (!client) {
    client = new PrismaClient({ log })
}

/**
 * prisma client 实例
 * @returns
 */
export const prisma = client
