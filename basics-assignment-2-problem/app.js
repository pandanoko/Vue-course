const app = Vue.createApp({
    data() {
        return{
            text: "",
            textOnEnter: ""
        }
    },
    methods: {
        showAlert() {
            alert("BOOO")
        },
        setText(event){
            this.text = event.target.value
        },
        setTextOnEnter() {
            this.textOnEnter = this.text
        }
    }
})

app.mount("#assignment");