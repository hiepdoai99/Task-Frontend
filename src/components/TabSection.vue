<script setup>
    import { provide,inject,defineProps } from "vue";
    defineProps(['title']);
    const selectedTitle = inject("selectedTitle");
    provide("selectedTitle");
</script>

<template>
	<div class="tab-content" v-show="title == selectedTitle">
        <slot></slot> 
	</div>
</template>


<style scoped>
    .tab-content{
        width: 100%;
    }
</style>