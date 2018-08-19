<template>
    <section :class="menuClass.wrapper">
        <aside :class="menuClass.aside">
            <ul :class="menuClass.menu">
                <li :class="[menuClass.item, $route.path.includes(item.name.toLocaleLowerCase()) ? 'active' : 'default', activeIndex == index ? 'open' : '']" v-for="(item, index) of asideList" :key="index" @click="toggleSidebard(index)">
                    <span class="menu-header arrow">{{item.title}}</span>
                    <ul class="drop-down" v-if="item.children && item.children.length > '0'">
                        <nuxt-link v-for="(child, index) of item.children" :key="index" tag="li" :to="{name: child.name}">{{child.title}}</nuxt-link>
                    </ul>
                </li>
            </ul>
        </aside>
    </section>
</template>
<script>
const asideList = [{
    title: '个人中心',
    name: 'user',
    children: [{
        title: '个人信息',
        name: 'user-profile'
    }, {
        title: '安全设置',
        name: 'user-setting'
    }, {
        title: '推荐奖励',
        name: 'user-award'
    }]
}, {
    title: '资产管理',
    name: 'property',
    children: [{
            title: '订单记录',
            name: 'property-orders'
        },
        {
            title: '收益查看',
            name: 'property-income'
        }, {
            title: '资产总览',
            name: 'property-preview'
        }
    ]
}, {
    title: '消息中心',
    name: 'message',
    children: [{
        title: '站内消息',
        name: 'message-pm'
    }]
}]
const menuClass = {
    wrapper: 'asidebar-wrapper',
    aside: 'aside-bar',
    menu: 'menu',
    item: 'menu-item',
}
export default {
    name: 'Sidebar',
    data() {
        return {
            asideList,
            menuClass,
            activeIndex: this.defaultActive
        }
    },
    props: {
        defaultActive: {
            type: Number,
            default: 0
        }
    },
    watch: { // 监听路由 手动触发侧边栏
        '$route' (to, from) {
            // console.log(to)
            this.asideList.forEach((item, index) => {
                if (item.children) {
                    item.children.forEach((child, i) => {
                        if (to.name == child.name) {
                            console.log(index)
                            this.activeIndex = index
                        } else {
                        }
                    })
                } else {
                    // console.log(item)
                    if (to.name == item.name) {
                        this.activeIndex = index
                    }
                }
            })
        }
    },
    beforeRouteEnter (to, from, next) {
        console.log('in')
        // next()
    },
    methods: {
        toggleSidebard(index) {
            this.activeIndex = index
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../assets/styles/sidebar.scss';
</style>
