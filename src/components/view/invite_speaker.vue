<template>
    <div>
        <SearchInput />
    </div>
</template>
<script>
import SearchInput from '@layout/search.vue';
export default {
    data() {
        return {
            search: 'left',
            input: 'zhaihaoran'
        };
    },
    components: { SearchInput },
    methods: {}
};
</script>
<style>
.admin-step {
    height: 200px;
}
</style>


