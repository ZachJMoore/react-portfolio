import React from "react"

import smartKilnHeader from "./images/software/smart-kiln/smart-kiln-header.jpg";
import smartKilnScreenshotLaptop from "./images/software/smart-kiln/screenshot-laptop.jpg";

import weatherAppHeader from "./images/software/weather-app/weather-app-header.jpg";
import neighborhoodRestaurantsHeader from "./images/software/neighborhood-restaurants/neighborhood-restaurants-macbook.png";
import memoryMatchHeader from "./images/software/memory-match/memory-match-header.jpg";
import pomodoroTimerHeader from "./images/software/pomodoro-timer/pomodoro-timer-ipad.png";
import crystallineCeramicsHeader from "./images/ceramics/crystalline-ceramics/crystalline-ceramics-header.jpg"
import marbledCeramicHeader from "./images/ceramics/marbled-ceramics/marbled-ceramics-header.jpg"
import PrintMoldingHeader from "./images/ceramics/3d-print-molding/3d-print-molding-header.jpg"

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
                "Using React, Node, Express, Firebase, and a Raspberry Pi, I was able to build a complete system for controlling, managing, and monitoring multiple kilns from a single webpage.",
                "Each user can also add all of their firing schedules in one easy place with Firebase to easily share firing schedules across multiple kilns without the need to manually enter the same schedule in multiple places. Add it once and use it everywhere!"
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
            paragraphs: []
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
            paragraphs: []
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
            paragraphs: []
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
            paragraphs: []
        }
    ]
  },
  {
    headerImgSrc: crystallineCeramicsHeader,
    title: "Crystalline",
    shortDescription: "Growing Zinc Silicate crystals at 2225°F",
    pathname: "crystalline-ceramics",
    links: {
        demo: null,
        source: null
    },
    technologiesUsed: [],
    projectBody: [
        {
            imgSrc: null,
            imgDesc: null,
            paragraphs: []
        }
    ]
  },
  {
    headerImgSrc: marbledCeramicHeader,
    title: "Marbled Ceramics",
    shortDescription: "Visualizing the flow of black and white",
    pathname: "marbled-ceramics",
    links: {
        demo: null,
        source: null
    },
    technologiesUsed: [],
    projectBody: [
        {
            imgSrc: null,
            imgDesc: null,
            paragraphs: []
        }
    ]
  },
  {
    headerImgSrc: PrintMoldingHeader,
    title: "3D Print Molding",
    shortDescription: "Making precision molds from digital models",
    pathname: "3d-print-molding",
    links: {
        demo: null,
        source: null
    },
    technologiesUsed: [],
    projectBody: [
        {
            imgSrc: null,
            imgDesc: null,
            paragraphs: []
        }
    ]
  }
]

export default projects