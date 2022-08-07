<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-29 16:05:46
 * @LastEditTime: 2022-07-29 16:08:38
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezBookmarks_web\layouts\default.vue
-->
<template>
    <div>
        <NuxtLink to="/">[index]</NuxtLink>
        <NuxtLink to="/page">[page]</NuxtLink>
        <slot />
    </div>
</template>
