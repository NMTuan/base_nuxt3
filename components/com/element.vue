<template>
    <div class="text-center text-4xl">Element Plus</div>
    <div class="flex justify-center">
        <el-button type="primary" @click="ElMessage('hello')">button</el-button>
        <ElButton :icon="ElIconEditPen" type="success">button</ElButton>
        <LazyElButton type="warning">lazy button</LazyElButton>
    </div>
</template>
