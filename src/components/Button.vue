<template>
    <div>
        <h1>{{msg}}</h1>
        <p>{{header}}</p>
    </div>
</template>

<script>
export default {
    name: 'Button',
    data() {
        return {
            msg: 'Hahahahaha',
            header: 'zhaihaoran'
        };
    }
};
</script>

<style>
.box {
    color: red;
}
</style>
