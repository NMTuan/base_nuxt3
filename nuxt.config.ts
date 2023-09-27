/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-08-10 16:42:21
 * @LastEditTime: 2023-09-27 14:54:22
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \base_nuxt3\nuxt.config.ts
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        JWT_SECRET: ''
    },
    devtools: { enabled: false },
    css: ['@unocss/reset/normalize.css'],
    modules: [
        [
            '@nuxtjs/i18n',
            {
                vueI18n: './locales/i18n.config.ts'
            }
        ],
        '@unocss/nuxt',
        '@pinia/nuxt',
        '@element-plus/nuxt',
        '@nuxtjs/color-mode'
    ],
    imports: {
        dirs: ['stores']
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use "@/assets/scss/element/index.scss" as element;`
                }
            }
        }
    },
    elementPlus: {
        icon: 'ElIcon',
        importStyle: 'scss',
        themes: ['dark']
    },
    colorMode: {
        classSuffix: ''
    }
})
