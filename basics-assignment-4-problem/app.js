const app = Vue.createApp({
    data() {
        return{
            val: "",
            bgColor: "",
            isVisible: true
        }
    },
    methods: {
        setVal(e) {
            this.val = e.target.value;
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