const app = Vue.createApp({
    data() {
        return {
            goalInputValue: "",
            goals: [],
            isVisible: true,
        }
    },
    computed: {
        buttonLabel() {
            return this.isVisible ? "Hide list" : "Show list";
        }
    },
    methods: {
        addGoal() {
            if (this.goalInputValue) {
                this.goals.push(this.goalInputValue);
                this.goalInputValue = ""
            } 
        },
        removeGoal(idx){
            this.goals.splice(idx, 1)
        },
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        }
    }
})

app.mount("#assignment");