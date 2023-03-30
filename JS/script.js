const { createApp } = Vue;

createApp({
  data() {
    return {
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
  methods: {},
}).mount("#app");
