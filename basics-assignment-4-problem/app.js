const app = Vue.createApp({
    data() {
        return{
            inputClass: "",
            bgColor: "",
            isVisible: true
        }
    },
    computed: {
        myClasses() {
            return {
                user1: this.inputClass === 'user1', 
                user2: this.inputClass === 'user2',
                visible: this.isVisible,
                hidden: !this.isVisible
            }
        }
    },
    methods: {
        setInputClass(e) {
            this.inputClass = e.target.value;
        },
        toggleVisibility(){
            this.isVisible = !this.isVisible;
        },
        setBg(e) {
           this.bgColor= e.target.value;
        }
    }
})

app.mount("#assignment")