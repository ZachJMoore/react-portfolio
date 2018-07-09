import smartKilnHeader from "./images/software/smart-kiln/smart-kiln-header-min.jpg";
import smartKilnScreenshotLaptop from "./images/software/smart-kiln/screenshot-laptop.jpg";

import weatherAppHeader from "./images/software/weather-app/weather-app-header-min.jpg";
import neighborhoodRestaurantsHeader from "./images/software/neighborhood-restaurants/neighborhood-restaurants-macbook-min.png";
import memoryMatchHeader from "./images/software/memory-match/memory-match-header-min.jpg";
import pomodoroTimerHeader from "./images/software/pomodoro-timer/pomodoro-timer-ipad-min.png";
import crystallineCeramicsHeader from "./images/ceramics/crystalline-ceramics/crystalline-ceramics-header-min.jpg"
import marbledCeramicHeader from "./images/ceramics/marbled-ceramics/marbled-ceramics-header-min.jpg"
import PrintMoldingHeader from "./images/ceramics/3d-print-molding/3d-print-molding-header-min.jpg"

let projects = [
  {
    headerImgSrc: smartKilnHeader,
    title: "Smart Kiln",
    shortDescription: "Creating a computer controlled kiln that's accessible from anywhere in the world",
    pathname: "smart-kiln",
    links: {
        demo: null,
        source: "https://github.com/ZachJMoore/smart-kiln-web-interface"
    },
    technologiesUsed: [
        "React",
        "Node",
        "Express",
        "Firebase",
        "Raspberry Pi"
    ],
    projectBody: [
        {
            imgSrc: null,
            imgDesc: null,
            paragraphs: [
                "The purpose behind this ongoing project is to create a better, smarter, cheaper, and more accessible kiln controller. Whether that be for ceramics, glass, curing, or any other application, my aim is to lower the cost while bringing a better experience for beginners and experienced craftsmen alike.",
                "Using React, Node, Express, Firebase, and a Raspberry Pi, I was able to build a complete system for controlling, managing, and monitoring multiple kilns from a single webpage."
            ]
        },
        {
            imgSrc: smartKilnScreenshotLaptop,
            imgDesc: "Smart Kiln web interface",
            paragraphs: []
        }
    ]
  },
  {
    headerImgSrc: weatherAppHeader,
    title: "Weather App",
    shortDescription: "Utilizing the OpenWeatherMap API",
    pathname: "weather-app",
    links: {
        demo: "https://zachjmoore.github.io/weather-app/",
        source: "https://github.com/ZachJMoore/weather-app"
    },
    technologiesUsed: [
        "Javascript",
        "HTML",
        "CSS",
        "OpenWeatherMap API"
    ],
    projectBody: [
        {
            imgSrc: null,
            imgDesc: null,
            paragraphs: [
                "This project was built as way to familiarize myself and get a better understanding of using promises and API services. Everything was written in vanilla JavaScript, HTML, and CSS.",
                "Using data from OpenWeatherMap, this webpage will display the current and 5 day weather forecast for a given zip code."
            ]
        }
    ]
  },
  {
    headerImgSrc: neighborhoodRestaurantsHeader,
    title: "Neighborhood Restaurants",
    shortDescription: "Building a neighborhood restaurants app",
    pathname: "neighborhood-restaurants",
    links: {
        demo: "https://neighborhood-restaurants.firebaseapp.com/",
        source: "https://github.com/ZachJMoore/neighborhood-restaurants"
    },
    technologiesUsed: [
        "React",
        "Google Maps API",
        "Zomato API"
    ],
    projectBody: [
        {
            imgSrc: null,
            imgDesc: null,
            paragraphs: [
                "This project is the final assignment for the Udacity front-end web developer nanodegree program. The challenge was to create a single page React app that incorporates both google maps, and another 3rd party API, which in this case is Zomato.",
                "Neighborhood Restaurants allows you to search and filter through a list of restaurants, and get useful information in card format about each establishment. The restaurants are supplied by querying the Zomato API, which are then dynamically plotted onto google maps."
            ]
        }
    ]
  },
  {
    headerImgSrc: memoryMatchHeader,
    title: "Memory Match",
    shortDescription: "Matching game built with vanilla Javascript",
    pathname: "memory-match",
    links: {
        demo: "https://zachjmoore.github.io/memory-match/",
        source: "https://github.com/ZachJMoore/memory-match"
    },
    technologiesUsed: [
        "Javascript",
        "HTML",
        "CSS",
    ],
    projectBody: [
        {
            imgSrc: null,
            imgDesc: null,
            paragraphs: [
                "Memory match is a simple game build from vanilla Javascript, HTML, and CSS.",
                "This project was a way to start learning Javascript and build the logic behind comparing matches and keeping score."
            ]
        }
    ]
  },
  {
    headerImgSrc: pomodoroTimerHeader,
    title: "Pomodoro Timer",
    shortDescription: "Simple timer to help stay on task",
    pathname: "pomodoro-timer",
    links: {
        demo: "https://zachjmoore.github.io/pomodoro-timer/",
        source: "https://github.com/ZachJMoore/pomodoro-timer"
    },
    technologiesUsed: [
        "Javascript",
        "HTML",
        "CSS",
    ],
    projectBody: [
        {
            imgSrc: null,
            imgDesc: null,
            paragraphs: [
                "Pomodoro Timer was my answer to the lack of simple, clean, pomodoro timers for staying on task.",
                "Everything was build from scratch using vanilla JavaScript, HTML, and CSS."
            ]
        }
    ]
  },
//   {
//     headerImgSrc: crystallineCeramicsHeader,
//     title: "Crystalline",
//     shortDescription: "Growing Zinc Silicate crystals at 2225°F",
//     pathname: "crystalline-ceramics",
//     links: {
//         demo: null,
//         source: null
//     },
//     technologiesUsed: [],
//     projectBody: [
//         {
//             imgSrc: null,
//             imgDesc: null,
//             paragraphs: []
//         }
//     ]
//   },
//   {
//     headerImgSrc: marbledCeramicHeader,
//     title: "Marbled Ceramics",
//     shortDescription: "Visualizing the flow of black and white",
//     pathname: "marbled-ceramics",
//     links: {
//         demo: null,
//         source: null
//     },
//     technologiesUsed: [],
//     projectBody: [
//         {
//             imgSrc: null,
//             imgDesc: null,
//             paragraphs: []
//         }
//     ]
//   },
//   {
//     headerImgSrc: PrintMoldingHeader,
//     title: "3D Print Molding",
//     shortDescription: "Making precision molds from digital models",
//     pathname: "3d-print-molding",
//     links: {
//         demo: null,
//         source: null
//     },
//     technologiesUsed: [],
//     projectBody: [
//         {
//             imgSrc: null,
//             imgDesc: null,
//             paragraphs: []
//         }
//     ]
//   }
]

export default projects