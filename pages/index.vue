<template>
    <section class="container">
        <div>
            <logo/>
            <h1 class="title">
                nuxt-demo
            </h1>
            <h2 class="subtitle">
                Nuxt.js project
            </h2>
            <h2 class="subtitle">
                {{999 + data1}}
            </h2>
            <div class="links">
                <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
                <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
            </div>
        </div>
        <el-table :data="docs" style="width: 100%" @row-click="rowClick">
            <el-table-column prop="title" label="标题" width="180">
            </el-table-column>
            <el-table-column prop="author.loginname" label="作者" width="180">
            </el-table-column>
        </el-table>
        <el-button @click="randomColor">dssssss</el-button>
    </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import api from '~/api'
import '~/assets/theme.less'
export default {
    data() {
        return {}
    },
    async asyncData() {
        const obj = await api.get('/topics', {
            params: {
                limit: 10,
                page: 1
            }
        })
        const data1 = obj.success
        return {
            data1,
            docs: obj.data
        }
    },
    components: {
        Logo
    },
    methods: {
        rowClick(row) {
            this.$router.push(`/detail/${row.id}`)
        },
        randomColor() {
            document.body.className = 'style' + Math.floor(Math.random() * 3)
        }
    }
}
</script>

<style lang="less">
.container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
        BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
        sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>
