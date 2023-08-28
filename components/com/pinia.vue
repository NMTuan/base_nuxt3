<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-08-11 15:17:30
 * @LastEditTime: 2023-08-11 15:19:28
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \base_nuxt3\components\com\pinia.vue
-->
<template>
    <div>
        pinia：
        <button @click="counterStore.increment">click me ! {{ counterStore.count }}</button>
        {{ counterStore.count }}
    </div>
</template>
<script setup>
const counterStore = useCounterStore()

</script>
