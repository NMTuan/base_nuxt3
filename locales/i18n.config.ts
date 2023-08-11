/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-08-11 10:35:44
 * @LastEditTime: 2023-08-11 11:42:15
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \base_nuxt3\locales\i18n.config.ts
 */

interface Message {
    [key: string]: any
}

export default defineI18nConfig(() => {
    const files: Record<string, { default: object }> = import.meta.glob(
        '@/locales/*.json',
        {
            eager: true
        }
    )

    const messages = Object.keys(files).reduce((total: Message, key) => {
        const fileName = key.replace(/^\/locales\/(.*)\.json$/, '$1')
        total[fileName] = files[key].default
        return total
    }, {})
    return {
        legacy: false,
        locale: 'en',
        defaultLocale: 'en',
        messages
    }
})
