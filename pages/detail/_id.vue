<template>
    <div>
        <nuxt-link to="/">首页</nuxt-link>
        <div>{{doc.title}}</div>
        <div v-html="doc.content"></div>
    </div>
</template>

<script>
import api from '~/api'
export default {
    data() {
        return {}
    },
    async asyncData(ctx) {
        const obj = await api.get(`/topic/${ctx.params.id}`, null)
        return {
            doc: obj.data
        }
    },
    components: {},

    computed: {},
    methods: {}
}
</script>
<style lscoped>

</style>