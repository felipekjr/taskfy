<template>
    <div id="app">
        <div class="row bg-secondary p-5 mb-5">
            <div class="container">
                <div class="col-12 d-flex flex-column justify-content-center align-items-center">
                    <h1 class="text-primary display-1">Minhas Tarefas</h1>
                    <form class="col-12" v-on:submit.prevent="createList(boardTitle)">
                        <input aria-describedby="addon-right addon-left" placeholder="Título da prancheta" v-model="boardTitle" class="form-control">
                    </form>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-4 mb-4" style="padding-left: 30px; padding-right: 30px" v-for="(board, index) in boards" :key="index">
                <task-list
                        :title="board.title"
                        :tasks="board.tasks"
                        :author="board.author"
                ></task-list>
            </div>
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
                boardTitle: '',
                boards: []
            }
        },
        methods: {
            createList(boardTitle) {
                this.boards.push(
                    {
                        title: boardTitle,
                        tasks: [],
                        author: {id: 1, name: 'Felipe Rodrigues'}
                    }
                );
                this.boardTitle = '';
            }
        }
    }
</script>

<style lang="scss">
    @import "assets/vendor/nucleo/css/nucleo.css";
    #app {
        overflow-x: hidden;
    }
    .cursor-pointer{
        cursor: pointer;
    }
</style>
