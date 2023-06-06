import { reactive } from "vue";

export const menu = reactive({
  californiaRolls: {
    item: "California Rolls",
    price: 22,
  },
  kungPaoChicken: {
    item: "Kung pao Chicken",
    price: "32",
  },
});

export const menuItems = reactive({
  menu: [
    {
      header: "hors d'ouvres",
      items: [
        {
          item: "ahi salmon nigiri",
          description:
            "Masterpiece that combines the delicate flavors of premium tuna, buttery avocado,",
          price: 48,
        },
        {
          item: "umi masu salad",
          description:
            "Fangy yuzu sauce, all wrapped in a velvety blanket of expertly seasoned rice",
          price: 21,
        },
        {
          item: "temaki with crab",
          description:
            "Ignite your taste buds with its bold fusion of flavors.",
          price: 32,
        },
        {
          item: "california rolls",
          description:
            "Elight in the buttery smoothness of our melt-in-your-mouth Toro",
          price: 22,
        },
      ],
    },
    {
      header: "Main Course",
      items: [
        {
          item: "braised abalone",
          description: "Traditional and rare sake varieties. From crisp",
          price: 52,
        },
        {
          item: "twice cooked pork",
          description:
            "Each bite is a testament to the unparalleled quality and precision that define our sushi",
          price: 21,
        },
        {
          item: "kung pao chicken",
          description:
            "Wrapped in a velvety blanket of expertly seasoned rice.",
          price: 32,
        },
        {
          item: "char siu & suchi",
          description:
            "Enhanced with a touch of tangy ponzu sauce and garnished with vibrant tobiko",
          price: 48,
        },
      ],
    },
    {
      header: "Desserts",
      items: [
        {
          item: "chocolate ball cake",
          description:
            "Topped with a drizzle of savory miso glaze and sprinkled with toasted sesame seeds",
          price: 13,
        },
        {
          item: "lime pie with chrust",
          description:
            "This bold and adventurous creation combines spicy tuna, tempura flakes, and creamy avocado",
          price: 21,
        },
        {
          item: "raspberry pear cake",
          description:
            "This tantalizing roll showcases a delightful combination of tempura-battered shrimp",
          price: 18,
        },
        {
          item: "café au lait",
          description:
            "Classic French coffee beverage that captures the essence of simplicity and elegance",
          price: 6,
        },
      ],
    },
  ],
});
