<template>
    <div class="vjui-aside-menu vjui-hideScrollBar" :style="willShowAsideMenu ? {} : {left: '-234px'}">
        <vjui-aside-link></vjui-aside-link>
        <div class="vjui-nav-group" v-for="item of nowActiveMenuNav" :key="item.text"
            >
            <span class="vjui-nav-heading">{{ item.text }}</span>
            <ul class="vjui-nav-group-item">
                <li v-for="jtem of item.children" :key="item.text + jtem.text" >
                    <a class="vjui-nav-item" :href="jtem.link"
                        :class="nowActiveNavItem === jtem.link ? 'vjui-nav-item-active' : ''"
                    > {{ jtem.text }} </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { useRoute, useSiteDataByRoute } from 'vitepress';
import { computed, inject, watch } from 'vue';
import vjuiAsideLink from './vjuiAsideLink.vue';
export default {
    components: {
        vjuiAsideLink
    },
    setup() {
        const route = useRoute();
        const siteRouteData = useSiteDataByRoute();
        const winScreenW = inject('winScreenW');
        const willShowAsideMenu = inject('willShowAsideMenu');
        
        const nowActiveNav = computed(() => {
            let reg = /^\/[\w]+/g;
            return reg.exec(route.path)[0];
        });
        const nowActiveNavItem = computed(() => {
            let reg = /^\/[\w-/]+/g;
            return reg.exec(route.path)[0];
        });
        const LinkInfo = computed(() => {
            const { nav } =  siteRouteData.value.themeConfig;
            return nav;
        });
        const nowActiveMenuNav = computed(() => {
            const { nav } = siteRouteData.value.themeConfig;
            for( let navItem of nav ) {
                if( navItem.link.includes(nowActiveNav.value) ) {
                    return navItem.navUnit;
                }
            }
        });
        watch(
            () => route.path,
            () => {
                willShowAsideMenu.value = !willShowAsideMenu.value;
            }
        )
        return {
            nowActiveMenuNav,
            nowActiveNav,
            nowActiveNavItem,
            winScreenW,
            willShowAsideMenu,
            LinkInfo
        }
    }
};
</script>
<style>
.vjui-aside-menu {
    width: 234px;
    height: 100%;
    flex-shrink: 0;
    overflow: auto;
    border-right: 1px solid #e9e9e9;
    margin-right: 1rem;
    padding: 1rem 0;
    transition: left 0.5s;
}

.vjui-nav-group {
    width: 100%;
    margin-bottom: 0.875rem;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
}
.vjui-nav-heading {
    color: #2c3e50;
    font-size: 1.2rem;
    font-weight: 700;
}
.vjui-nav-group-item {
    padding: 0;
    margin: 0;
    list-style-type: none;
    font-size: 0.95rem;
    overflow: hidden;
    padding-left: 1rem;
    margin-top: 0.3rem;
}
.vjui-nav-item {
    color: var(--basicColor);
    text-decoration: none;
    line-height: 1.8rem;
}
.vjui-nav-item-active {
    color: #3eaf7c;
}
.vjui-nav-item:hover {
    color: #3eaf7c;
    cursor: pointer;
}
@media screen and (max-width: 720px){
    .vjui-aside-menu {
        position: absolute;
        left: 0;
        background: #fcfcfc;
        padding: 0;
    }
    .vjui-nav-group {
        padding-left: 1rem;
    }
}
</style>
