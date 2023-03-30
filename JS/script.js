const { createApp } = Vue;

createApp({
  data() {
    return {
      modelInput: "",
      todos: [
        {
          text: "Perdere peso",
          done: false,
        },
        {
          text: "Smettere di fumare",
          done: false,
        },
        {
          text: "Iscrivermi a Boolean",
          done: true,
        },
        {
          text: "Fare più sport",
          done: true,
        },
      ],
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        text: this.modelInput,
        done: false,
      });
      this.modelInput = "";
    },
  },
}).mount("#app");
