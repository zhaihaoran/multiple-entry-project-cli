<template>
    <div>
        <h1>{{msg}}</h1>
        <p>{{header}}</p>
        <p>{{count}}</p>
        <button @click="add">+</button>
        <button @click="reduce">-</button>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    name: 'Button',
    data() {
        return {
            msg: 'Hahahahaha',
            header: 'zhaihaoran'
        };
    },
    computed: mapState({
        count: state => state.count.count
    }),
    methods: {
        ...mapMutations(['add', 'reduce'])
    }
};
</script>

<style>
.box {
    color: red;
}
</style>
