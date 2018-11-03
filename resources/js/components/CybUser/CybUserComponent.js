import CybUserModalComponent from './CybUserModal/CybUserModalComponent.vue'

export default {
	data() {
		return {
            cybUsers: [],

            cybUser: {
                username: '',
                email: '',
                url: ''
            }
		}
	},

    components: {
		'cyb-user-modal-component' : CybUserModalComponent
    }, 
    
	mounted() {
        this.loadCybUsers();
	},

	methods: {

		showImage() {
			this.buttonShow = !this.buttonShow;
		},

		guardar () {
			axios.post('api/CybUsers', this.cybUser)
				 .then((response) => {
					console.log('entro')
				 })
				 .catch((error) => {
				 	console.log(error);
				 });
		},

		loadCybUsers() {
			axios.get('api/CybUsers')
				 .then(response => {
					this.cybUsers = response.data;
				 })
				 .catch((error) => {
				 	console.log(error)
				 });
		}
	}
}
