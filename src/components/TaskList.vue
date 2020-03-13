<template>
        <div class="card shadow">
            <div class="card-body">
                <span>{{title}}</span>
            </div>
        </div>
</template>

<script>
    export default {
        name: "task-list",
        props: {
            title: String,
        },
    }
</script>

<style scoped>

</style>
