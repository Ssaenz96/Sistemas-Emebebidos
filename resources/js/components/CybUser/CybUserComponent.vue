<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">
                        Example Component
                        <button type="button"
                            class="btn btn-outline-success btn-sm float-right"
                            data-toggle="modal"
                            data-target=".bd-example-modal-lg">
                        <i class="fas fa-plus"></i>
                            Agregar
                        </button>
                    </div>

                    <div class="card-body">
                        <table class="table">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">URL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="cybUser in cybUsers"
                                    :key="cybUser.id">
                                    <th scope="row">
                                        {{ cybUser.id }}
                                    </th>
                                    <td>
                                        {{ cybUser.username }}
                                    </td>
                                    <td>
                                        {{ cybUser.email }}
                                    </td>
                                    <td>
                                        {{ cybUser.url }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <cyb-user-modal-component></cyb-user-modal-component>
    </div>
</template>

<script src="./CybUserComponent.js"></script>
