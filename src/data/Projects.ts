import Project from "../types/Project";
import flavourfinder from "../assets/images/flavourFinder.png";
import shootingarray from "../assets/images/ShootingArray.png";
import punkbeer from '../assets/images/PunkBeer.png'
// import tickettracker from '../assets/images/TicketTracker.png'
import calculator from '../assets/images/Calculator.png'
import verdeClientProject from '../assets/images/Screenshot 2024-01-20 at 15.14.38.png'
import greedyGoblins from '../assets/images/GreedyGoblins.png'

const Projects: Project[] = [
    {
        id: 1,
        name: "Resource Management System",
        description: "A Resource Management System prototype for a skincare company.",
        image: verdeClientProject,
        github_url: "https://github.com/nology-tech/verde-client-project",
        live_url: "https://verde-client-project.web.app/",
        tech_stack: ['React','TypeScript','Sass']
    },
    {
        id: 2,
        name: "FlavourFinder",
        description: "A recipe generator using the power of AI.",
        image: flavourfinder,
        github_url: "https://github.com/amancalledkidd/FlavourFinders",
        live_url: "https://flavour-finder.onrender.com/",
        tech_stack: ['React','JavaScript','Node.js', 'Express', 'MongoDB']
    },
    {
        id: 3,
        name: "Shooting Array",
        description: "A game based on the classic fairground game, Shooting Gallery.",
        image: shootingarray,
        github_url: "https://github.com/amancalledkidd/fairground-shooting-gallery",
        live_url: "https://amancalledkidd.github.io/fairground-shooting-gallery/",
        tech_stack: ['HTML','CSS','JavaScript']
    },
    {
        id: 4,
        name: "Punk Beer Catalogue",
        description: "A Web Application for browsing Punk's beer catalogue.",
        image: punkbeer,
        github_url: "https://github.com/amancalledkidd/punk-beer-catalogue",
        live_url: "https://amancalledkidd.github.io/punk-beer-catalogue/",
        tech_stack: ['React','TypeScript','Sass']
    },
    // {
    //     id: 5,
    //     name: "Ticket Tracker",
    //     description: "This is a web application for tracking job tickets.",
    //     image: tickettracker,
    //     github_url: "https://github.com/amancalledkidd/ticket-tracker",
    //     live_url: "https://amancalledkidd.github.io/ticket-tracker/",
    //     tech_stack: ['React','TypeScript','Sass']
    // },
    {
        id: 6,
        name: "Greedy Goblins",
        description: "A landing page for an NFT project.",
        image: greedyGoblins,
        github_url: "https://github.com/amancalledkidd/greedy-goblins",
        live_url: "https://goblinsgreed.com/",
        tech_stack: ['React','TypeScript','Sass']
    },
    {
        id: 7,
        name: "Calculator",
        description: "A calculator made using vanilla JavaScript.",
        image: calculator,
        github_url: "https://github.com/amancalledkidd/ts-calculator",
        live_url: "https://amancalledkidd.github.io/ts-calculator/",
        tech_stack: ['HTML','CSS','JavaScript']
    }

];

export default Projects;