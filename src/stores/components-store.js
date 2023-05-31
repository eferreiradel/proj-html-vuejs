import { reactive } from "vue";

export const criticsStore = reactive({
  author: "meggy stewart",
  mainCaption: "new york times",
  paragraph:
    "provides the perfect setting for indulgence. Impeccable service, led by our attentive and knowledgeable staff,",
  buttonText: "read full article",
});

export const cardLeftStore = reactive({
  author: "meggy stewart",
  mainCaption: "the guardian",
  paragraph:
    "provides the perfect setting for indulgence. Impeccable service, led by our attentive and knowledgeable staff,",
  buttonText: "read full article",
});
export const votes = reactive({
  newYorkTimes: 5,
  theGuardian: 5,
  globeAndMail: 5,
});
