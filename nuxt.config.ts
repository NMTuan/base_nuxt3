/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-08-10 16:42:21
 * @LastEditTime: 2023-08-10 17:53:31
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \base_nuxt3\nuxt.config.ts
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        [
            '@nuxtjs/i18n',
            {
                vueI18n: './locales/i18n.config.ts'
            }
        ],
        '@unocss/nuxt'
    ]
})
