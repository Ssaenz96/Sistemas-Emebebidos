<template>
	<div class="modal fade bd-example-modal-lg"
		 tabindex="-1"
		 role="dialog"
		 aria-labelledby="myLargeModalLabel"
		 aria-hidden="true">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">

				<div class="modal-header">
					<h5 class="modal-title">Agregar Cyb User</h5>
			        <button type="button"
			        		class="close" 
			        		data-dismiss="modal" 
			        		aria-label="Close">
			        	<span aria-hidden="true">&times;</span>
			        </button>
				</div>

				<div class="modal-body">
					<form>
                        <div class="row">
                            <div class="col-md-6
                                        form-group">
                                <label for="username">Username:</label>
                                <input type="text"
                                       class="form-control"
                                       v-model="cybUser.username">
                            </div>
                            <div class="col-md-6">
                                <label for="email">Email:</label>
                                <input type="email"
                                       class="form-control"
                                       v-model="cybUser.email">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <label for="url">Url:</label>
                                <input type="text"
                                       class="form-control"
                                       v-model="cybUser.url">
                            </div>
                        </div>
					</form>
				</div>

				<div class="modal-footer">
					<button type="submit"
							class="btn btn-success btn-sm"
							@click="guardar"
                            data-dismiss="modal">
							Agregar
					</button>
					<button type="button"
							class="btn btn-info btn-sm"
							data-dismiss="modal">
						Cerrar
					</button>
				</div>

			</div>
		</div>
	</div>
</template>

<script src="./CybUserModalComponent.js"></script>
