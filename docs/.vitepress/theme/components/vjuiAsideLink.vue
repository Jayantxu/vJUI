<template>
    <div v-if="winScreenW <= 720" class="vjui-aside-link">
        <ul class="vjui-aside-link-item">
            <li v-for="item of LinkInfo" :key="item.text">
                <a class="vjui-link-item" :href="item.link"
                    :class="item.link.includes(nowActiveNav) ? 'vjui-link-active-item' : ''">{{item.text}}</a>
            </li>
        </ul>
    </div>
</template>
<script>
import { useRoute, useSiteDataByRoute } from 'vitepress';
import { inject, computed } from 'vue';
export default {
    setup() {
        const route = useRoute();
        const siteRouteData = useSiteDataByRoute();
        const winScreenW = inject('winScreenW');
        const nowActiveNav = computed(() => {
            let reg = /^\/[\w]+/g;
            return reg.exec(route.path)[0];
        });
        const LinkInfo = computed(() => {
            const { nav } =  siteRouteData.value.themeConfig;
            return nav;
        })
        return {
            winScreenW,
            LinkInfo,
            nowActiveNav
        }
    }
};
</script>
<style scoped>
.vjui-aside-link {
    width: 100%;
    margin-bottom: 1rem;
    border-bottom: 1px solid #e9e9e9;
}
.vjui-link-item {
    font-weight: 600;
    font-size: 1.2rem;
    color: var(--basicColor);
    text-decoration: none;
    line-height: 2.2rem;
}
.vjui-aside-link-item {
    padding: 0;
    margin: 0;
    padding-left: 1rem;
    list-style-type: none;
}
.vjui-link-active-item {
    color: var(--fontColor)
}
</style>
