<template>
    <div class="vjui-docs-head">
        <div class="vjui-content-head">
            <p class="vjui-docs-title">VJUI</p>
            <div class="vjui-link-header">
                <a v-for="item of headLinkInfo" :key="item.text" 
                    class="vjui-link-unit hover" 
                    :class="item.link.includes(nowActiveNav) ? 'vjui-hover-nav' : ''" :href="item.link">
                    {{ item.text}}
                </a>
                <a class="vjui-link-unit hover" target="blank" href="https://github.com/Jayantxu/vJUI.git">GitHub仓库</a>
            </div>
        </div>
    </div>
</template>
<script>
import {
    useSiteDataByRoute,
    // usePageData, 
    // useSiteData,
    useRoute
} from "vitepress";
import { computed } from 'vue';
export default {
    setup() {
        const route = useRoute();
        const siteRouteData = useSiteDataByRoute();

        const nowActiveNav = computed(() => {
            let reg = /^\/[\w]+/g;
            return reg.exec(route.path)[0];
        });
        const headLinkInfo = computed(() => {
            const { nav } =  siteRouteData.value.themeConfig;
            return nav;
        })

        return {
            headLinkInfo,
            nowActiveNav
        }
    }
};
</script>
<style scoped >
.vjui-docs-head {
    width: 100%;
    height: 50px;
    flex-shrink: 0;
    position: sticky;
    top: 0;
    box-shadow: rgb(0 0 0 / 25%) 0 0 15px 0;
    z-index: 9999;
    background: white;
}
.vjui-content-head {
    width: 70rem;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.vjui-docs-title {
    font-size: 1.8rem;
    margin: 0
}
.vjui-link-unit {
    position: relative;
    display: inline-block;
    margin-left: 1.5rem;
    line-height: 2rem;
    font-size: 0.875rem;
    text-decoration: none;
    color: var(--basicColor);
}
.vjui-hover-nav {
    border-bottom: 2px solid #46bd87;
}
</style>
