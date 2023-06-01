import { reactive } from "vue";

export const jumbotronHeaderStore = reactive({
  navItems: [
    {
      linkRef: "Home",
      destination: "",
    },
    {
      linkRef: "Culinary History",
      destination: "",
    },
    {
      linkRef: "Our Team",
      destination: "",
    },
    {
      linkRef: "Takeout",
      destination: "",
    },
    {
      linkRef: "Bulletin",
      destination: "",
    },
    {
      linkRef: "Reservation",
      destination: "",
    },
  ],
});
