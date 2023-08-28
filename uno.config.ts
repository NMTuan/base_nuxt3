/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-08-11 15:05:39
 * @LastEditTime: 2023-08-11 15:06:10
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \base_nuxt3\uno.config.ts
 */
import { defineConfig, presetAttributify, presetUno } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
    presets: [
        presetUno(), // default
        presetAttributify(), // attr mode: text="sm white"
        presetIcons() // icon: i-ri-home-fill
    ],
    transformers: [
        transformerDirectives(), // @apply or --at-apply
        transformerVariantGroup() // hover:(x x)
    ]
})
