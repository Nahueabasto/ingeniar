import img from "../../img/ingeniar.png";
import im from "../../img/ing.png";


const ServicesData = [
  {
    id: 1,
    imgsrc: [img, im],
    title: "E-commerce: Organic products",
    text: "proye.",
    deploy: "fg", // Mantén solo una instancia de la clave deploy
    git: "",
    video: "videoEco",
    technological: "JavaScript, React, NodeJS, PostgresSQL, Express, Sequelize, Bootstrap, Git, GitHub, CSS, Trello.",
  },
      {
        id: 2,
        imgsrc: [im],
        title: "Olivia Chicken Shop",
        text: "proyecto.",
        git: "https://github.com/Nahueabasto/Polleria-Olivia",
        video: "videoPolleria",
        deploy: "https://polleria-olivia.vercel.app/",
        technological: "JavaScript, React, Git, CSS.",
      },
    {
    id: 3,
    imgsrc: [img],
    title: "Financial news",
    text: "I did this project purely self-taught, where from requests to an API, it allows us to bring the price of the dollar, euro and different cryptocurrencies.",
    git: "https://github.com/Nahueabasto/Economia",
    video: "videoEconomia",
    deploy: "https://economia-theta.vercel.app/",
    technological: "JavaScript, React, NodeJS, Express, Sequelize, Git, CSS.",
  },
  // {
  //   id: 4,
  //   imgsrc: noticias,
  //   title: "Financial news",
  //   text: "I did this project purely self-taught, where from requests to an API, it allows us to bring the price of the dollar, euro and different cryptocurrencies.",
  //   git: "https://github.com/Nahueabasto/Economia",
  //   video: videoEconomia,
  //   deploy: "https://economia-theta.vercel.app/",
  //   technological: "JavaScript, React, NodeJS, Express, Sequelize, Git, CSS.",
  // },
];

export default ServicesData;