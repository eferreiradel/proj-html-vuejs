import { reactive } from "vue";

export const dataStore = {
  // header-jumbotron
  headerMainCaption: "the best table in town",
  headerTitle: "fine dining experience",
  hederMainText:
    "Immerse yourself in an ambiance of sophistication and luxury as our attentive and knowledgeable staff cater to your every need.",
  // explore the menu

  //price
  headerSliderTagPrice: 39,

  // components
  headerMainBtn: "explore the menu",
};

export const exploreTheMenuStore = reactive({
  mainCaption: "the best table in town",
  paragraph:
    "Immerse yourself in an ambiance of sophistication and luxury as our attentive and knowledgeable staff cater to your every need",
  buttonText: "Explore the menu",
});

export const menu = reactive({
  californiaRolls: {
    name: "Caifornia Rolls",
    price: 23,
  },
});
