<template>
    <vjuiHead></vjuiHead>
    <div class="vjui-docs-content">
        <vjuiMenu></vjuiMenu>
        <div class="vjui-md-playground vjui-hideScrollBar">
            <Content />
        </div>
    </div>
</template>
<script>
import vjuiHead from './components/vJUIHead.vue';
import vjuiMenu from './components/vjuiMenu.vue';
export default {
    components: {
        vjuiHead,
        vjuiMenu
    },
};
</script>
<style>
@import url('./styles/mainContent.css');
#app {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
}
</style>