<template>
    <vjuiHead></vjuiHead>
    <div class="vjui-docs-content">
        <vjuiMenu ></vjuiMenu>
        <div class="vjui-md-playground vjui-hideScrollBar">
            <Content />
        </div>
    </div>
</template>
<script>
import { ref, onMounted, provide } from 'vue';
import vjuiHead from './components/vJUIHead.vue';
import vjuiMenu from './components/vjuiMenu.vue';
export default {
    components: {
        vjuiHead,
        vjuiMenu
    },
    setup() {
        let winScreenWidth = ref(0);
        let asideMenuShow = ref(true);
        onMounted(() => {
            winScreenWidth.value = document.body.clientWidth;
            window.onresize = () => {
                setTimeout(() => {
                    winScreenWidth.value = document.body.clientWidth;
                }, 50);
            };
        })
        provide('winScreenW', winScreenWidth);
        provide('willShowAsideMenu', asideMenuShow);
        return {
            winScreenWidth
        }
    }
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
    overflow: hidden;
}
</style>