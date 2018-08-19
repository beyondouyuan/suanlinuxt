<template>
    <div class="submenu-container">
        <section class="submenu-wrapper">
            <ul class="submenu">
                <li class="submenu-item" :class="[$route.path.includes(item.name.toLocaleLowerCase()) ? 'active' : 'default']" v-for="(item, index) of SubMenu" :key="index">
                    <div class="menu-header arrow">
                        <nuxt-link :to="{name: item.name}">{{item.title}}</nuxt-link>
                    </div>
                </li>
            </ul>
        </section>
    </div>
</template>
<script>
export default {
    name: 'SubMenu',
    props: {
        SubMenu: {
            type: Array
        }
    },
    computed: {

    },
    methods: {
    }
}
</script>
<style lang="scss" scoped>
@import '../../assets/styles/submenu.scss';
</style>
