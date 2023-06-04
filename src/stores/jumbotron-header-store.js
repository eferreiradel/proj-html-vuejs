import { reactive } from "vue";

export const jumbotronHeaderStore = reactive({
  navItems: [
    {
      linkRef: "Home",
      destination: "",
    },
    {
      linkRef: "Culinary History",
      destination: "infoSection",
    },
    {
      linkRef: "Our Team",
      destination: "",
    },
    {
      linkRef: "Takeout",
      destination: "takeOut",
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
