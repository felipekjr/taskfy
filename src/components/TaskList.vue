<template>
    <div class="card shadow">
        <div class="card-header bg-primary text-white d-flex justify-content-between">
            <h4 class="text-white font-weight-bold">{{title}}</h4>
            <div class="d-flex justify-content-between">
                <i class="fa fa-edit cursor-pointer" style="padding-right: 10px"></i>
                <i class="fa fa-remove cursor-pointer"></i>
            </div>
        </div>
        <div class="card-body" style="padding: 0">
            <ul class="list-group">
                <li class="list-group-item" v-for="task in tasks" :key="task.id">
                    <span>{{task.description}}</span>
                </li>
            </ul>

        </div>
        <div class="card-footer">
            <div class="row">
                <button type="button" class="btn  mb-3 btn-block btn-default">
                    Form
                </button>
                <form class="col-12 d-flex justify-content-between" v-on:submit.prevent="addTask(taskDescription)">
                    <div class="col-7 col-xs-4">
                        <input placeholder="Tarefa" v-model="taskDescription" class="form-control">
                    </div>
                    <div class="col-2 col-xs-4">
                        <b-dropdown id="dropdown-1" text="Labels">
                            <b-dropdown-item>
                                <div class="d-flex align-items-center">
                                    <div class="label-badge bg-info"></div>
                                    Em progresso
                                </div>
                            </b-dropdown-item>
                            <b-dropdown-item>
                                <div class="d-flex align-items-center">
                                    <div class="label-badge bg-success"></div>
                                    Pronto
                                </div>
                            </b-dropdown-item>
                            <b-dropdown-item>
                                <div class="d-flex align-items-center">
                                    <div class="label-badge bg-warning"></div>
                                    Em revisão
                                </div>
                            </b-dropdown-item>
                            <b-dropdown-item>
                                <div class="d-flex align-items-center">
                                    <div class="label-badge bg-danger"></div>
                                    Erro
                                </div>
                            </b-dropdown-item>
                        </b-dropdown>
                    </div>
                    <div class="col-3 col-xs-4">
                        <button type="submit" class="btn btn-1 btn-success">Nova tarefa</button>
                    </div>

                </form>

            </div>
        </div>
        <div tabindex="-1" role="dialog" class="modal fade show d-none"><div class="modal-dialog modal-dialog-centered"><div class="modal-content"><div class="modal-header"><h6 id="modal-title-default" class="modal-title">Type your modal title</h6><button type="button" data-dismiss="modal" aria-label="Close" class="close"><span>×</span></button></div><div class="modal-body"><p>Far far away, behind the word mountains, far from the countries Vokalia and
            Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
            right at the coast of the Semantics, a large language ocean.</p><p>A small river named Duden flows by their place and supplies it with the necessary
            regelialia. It is a paradisematic country, in which roasted parts of sentences
            fly into your mouth.</p></div><div class="modal-footer"><button type="button" class="btn btn-primary"><!----><!----><!---->Save changes</button><button type="button" class="btn ml-auto btn-link"><!----><!----><!---->Close
        </button></div></div></div></div>
    </div>


</template>

<script>
    export default {
        name: "task-list",
        props: {
            title: String,
            tasks: Array,
            author: Object
        },
        data() {
            return {
                taskDescription: ''
            }
        },
        methods: {
            addTask(taskDescription) {
                this.tasks.push({id: this.tasks.length + 1, description: taskDescription});
                this.taskDescription = '';
            }
        }
    }
</script>

<style scoped lang="scss">
    .card-footer {
        padding: 1.0rem 0.5rem 1.0rem 0.5rem;

        .label-badge {
            width: 1rem;
            height: 1rem;
            margin-right: 0.8rem;
            border-radius: 0.2rem;
        }
    }

</style>
