
export default {
	data() {
		return {
            cybUser: {
                username: '',
                email: '',
                url: ''
            }
		}
	},

	mounted() {
        this.loadCybUsers();
	},
	created () {
		this.loadCybUsers()
	},

	methods: {

		showImage() {
			this.buttonShow = !this.buttonShow;
		},

		guardar () {
			axios.post('api/CybUsers', this.cybUser)
				 .then((response) => {
					this.cybUser = {
						username: '',
						email: '',
						url: ''
					};
					location.reload();
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
