<template>
    <div id="app" class="mb-o">
        <div class="row bg-secondary p-5">
            <div class="container">
                <div class="col-12 d-flex flex-column justify-content-center align-items-center">
                    <h1 class="text-success display-1">Minhas Tarefas</h1>
                    <form class="col-12" v-on:submit.prevent="createList(listTitle)">
                        <input aria-describedby="addon-right addon-left" placeholder="Regular" v-model="listTitle" class="form-control">
                    </form>
                </div>
            </div>

        </div>

            <div class="col-4">
                    <task-list v-for="taskList in taskLists" v-bind:key="taskList.id" v-bind:title="taskList.title"
                    ></task-list>
            </div>

    </div>
</template>

<script>
    import TaskList from "./components/TaskList";

    export default {
        name: 'App',
        components: {
            TaskList
        },
        data() {
            return {
                taskTitle: '',
                listTitle: '',
                taskLists: []
            }
        },
        methods: {
            createList(listTitle) {
                this.taskLists.push({id: this.taskLists.length + 1, title: listTitle});
                this.listTitle = '';
            }
        }
    }
</script>

<style lang="scss">
    #app {

    }
</style>
