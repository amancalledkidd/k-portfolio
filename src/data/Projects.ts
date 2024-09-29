import Project from "../types/Project";
// import flavourfinder from "../assets/images/flavourFinder.png";
// import shootingarray from "../assets/images/ShootingArray 1.png";
// import punkbeer from '../assets/images/PunkBeer.png'
// import tickettracker from '../assets/images/TicketTracker.png'
// import calculator from '../assets/images/Calculator.png'
import verdeClientProject from '../assets/images/SkincareRMS 1.png'
import pythonfilmmanager from '../assets/images/python film manger1.png'
import javaHangman from '../assets/images/java hangman 1.png'
// import javaSnap from '../assets/images/Javasnap 1.png'
// import fullStackFilmManager from '../assets/images/javafilm 1.png'
import greedyGoblins from '../assets/images/Goblin.png'
import bvb from '../assets/images/BVB DISTRESSED LOGO.png'

const Projects: Project[] = [
    {
        id:9,
        name: "British Vintage Boxing",
        description: "A Shopify website for a clothing company",
        image: bvb,
        github_url: "https://github.com/amancalledkidd/hangman",
        live_url: "https://www.britishvintageboxing.com/",
        tech_stack: ['shopify'],
        type: "Frontend"
    },
    {
        id: 8,
        name: "Greedy Goblins",
        description: "A landing page for an NFT project.",
        image: greedyGoblins,
        github_url: "https://github.com/amancalledkidd/greedy-goblins",
        live_url: "https://jovial-gumdrop-2da6b5.netlify.app",
        tech_stack: ['React','TypeScript','Sass'],
        type: "Frontend"
    },
    {
        id: 1,
        name: "Resource Management System",
        description: "An RMS prototype for a skincare company.",
        image: verdeClientProject,
        github_url: "https://github.com/nology-tech/verde-client-project",
        live_url: "https://verde-client-project.web.app/",
        tech_stack: ['React','TypeScript','Sass'],
        type: "Frontend"
    },
    // {
    //     id: 2,
    //     name: "FlavourFinder",
    //     description: "A recipe generator using the power of AI.",
    //     image: flavourfinder,
    //     github_url: "https://github.com/amancalledkidd/FlavourFinders",
    //     live_url: "https://flavour-finder.onrender.com/",
    //     tech_stack: ['React','JavaScript','Node.js', 'Express', 'MongoDB'],
    //     type: "Full Stack"
    // },
    {
        id: 3,
        name: "Python Film Manager",
        description: "A Python application for managing a film library.",
        image: pythonfilmmanager,
        github_url: "https://github.com/amancalledkidd/Python-Film-Manager",
        live_url: "https://www.youtube.com/watch?v=SsVoAMPXLeI",
        tech_stack: ['Python', 'SQLite'],
        type: "Backend"
    },
    // {
    //     id: 4,
    //     name: "Shooting Array",
    //     description: "A game based on the classic fairground game, Shooting Gallery.",
    //     image: shootingarray,
    //     github_url: "https://github.com/amancalledkidd/fairground-shooting-gallery",
    //     live_url: "https://amancalledkidd.github.io/fairground-shooting-gallery/",
    //     tech_stack: ['HTML','CSS','JavaScript'],
    //     type: "Frontend"
    // },
    {
        id:5,
        name: "Java Hangman",
        description: "A Java application of the classic game Hangman.",
        image: javaHangman,
        github_url: "https://github.com/amancalledkidd/hangman",
        live_url: "https://www.youtube.com/watch?v=Vnn86Niq7eY&feature=youtu.be",
        tech_stack: ['Java'],
        type: "Backend"
    },
    // {
    //     id:6,
    //     name: "Java Snap",
    //     description: "A Java application of the card game Snap.",
    //     image: javaSnap,
    //     github_url: "https://github.com/amancalledkidd/snap",
    //     live_url:  "https://github.com/amancalledkidd/snap",
    //     tech_stack: ['Java'],
    //     type: "Backend"
    // },
    // {
    //     id: 7,
    //     name: "Full Stack Film Manager",
    //     description: "A full stack application for managing a film library.",
    //     image: fullStackFilmManager,
    //     github_url: "https://github.com/amancalledkidd/movie-manager",
    //     live_url: "https://github.com/amancalledkidd/movie-manager",
    //     tech_stack: ['React','Java','Spring Boot', 'typeScript', 'Sass', 'SQL'],
    //     type: "Full Stack"
    // },
    // {
    //     id: 5,
    //     name: "Punk Beer Catalogue",
    //     description: "A Web Application for browsing Punk's beer catalogue.",
    //     image: punkbeer,
    //     github_url: "https://github.com/amancalledkidd/punk-beer-catalogue",
    //     live_url: "https://amancalledkidd.github.io/punk-beer-catalogue/",
    //     tech_stack: ['React','TypeScript','Sass'],
    //     type: "Frontend"
    // },
    // {
    //     id: 6,
    //     name: "Ticket Tracker",
    //     description: "This is a web application for tracking job tickets.",
    //     image: tickettracker,
    //     github_url: "https://github.com/amancalledkidd/ticket-tracker",
    //     live_url: "https://amancalledkidd.github.io/ticket-tracker/",
    //     tech_stack: ['React','TypeScript','Sass'],
    //     type: "Frontend"
    // },
    
    // {
    //     id: 8,
    //     name: "Calculator",
    //     description: "A calculator made using vanilla JavaScript.",
    //     image: calculator,
    //     github_url: "https://github.com/amancalledkidd/ts-calculator",
    //     live_url: "https://amancalledkidd.github.io/ts-calculator/",
    //     tech_stack: ['HTML','CSS','JavaScript'],
    //     type: "Frontend"
    // },
    

];

export default Projects;