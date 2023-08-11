<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-08-11 11:46:25
 * @LastEditTime: 2023-08-11 11:51:50
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \base_nuxt3\components\com\local.vue
-->
<template>
    <div>
        <p>普通：{{ $t('language') }}</p>
        <p>传参：{{ $t('hello', { name: 'nickName' }) }}</p>
        <p>所有语言：{{ availableLocales }}</p>
        <p>切换：
        <select v-model="locale">
            <option value="en">en</option>
            <option value="zh-CN">zh-CN</option>
        </select>
        </p>
    </div>
</template>
<script setup>
const { locale, availableLocales } = useI18n()
</script>
