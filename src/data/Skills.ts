import Skill from "../types/Skill";
import git from "../assets/icons/git.png";
import python from "../assets/icons/python.png"
import javascript from "../assets/icons/javascript.png"
import typescript from "../assets/icons/typescript.png"
import mongodb from "../assets/icons/MongoDB.png"
import postgresql from "../assets/icons/postgresql.png"
import react from "../assets/icons/react.png"
import html from "../assets/icons/html.png"
import css from "../assets/icons/css.png"
import scss from "../assets/icons/sass.png"
import java from "../assets/icons/java.png"
// import c from "../assets/icons/C.png"
// import ruby from "../assets/icons/ruby.png"


const Skills: Skill[] = [
    {
        id: 1,
        name: "Git",
        description: "Version control system",
        image: git,
        url: "https://github.com/",
    },
    {
        id: 2,
        name: "Python",
        description: "Python is an interpreted, high-level and general-purpose programming language.",
        image: python,
        url: "https://www.python.org/",
    },
    {
        id: 3,
        name: "JavaScript",
        description: "JavaScript is a programming language that conforms to the ECMAScript specification.",
        image: javascript,
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        id: 4,
        name: "TypeScript",
        description: "TypeScript is a programming language developed and maintained by Microsoft.",
        image: typescript,
        url: "https://www.typescriptlang.org/",
    },
    {
        id: 5,
        name: "MongoDB",
        description: "MongoDB is a source-available cross-platform document-oriented database program.",
        image: mongodb,
        url: "https://www.mongodb.com/",
    },
    {
        id: 6,
        name: "PostgreSQL",
        description: "MySQL is an open-source relational database management system.",
        image: postgresql,
        url: "https://www.postgresql.org/",
    },
    {
        id: 7,
        name: "React",
        description: "React is an open-source front-end JavaScript library for building user interfaces or UI components.",
        image: react,
        url: "https://react.dev/",
    },
    {
        id: 8,
        name: "HTML",
        description: "HTML is the standard markup language for Web pages.",
        image: html,
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
        id: 9,
        name: "CSS",
        description: "CSS is the language we use to style an HTML document.",
        image: css,
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
        id: 10,
        name: "SCSS",
        description: "SCSS is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets.",
        image: scss,
        url: "https://sass-lang.com/",
    },
    {
        id: 11,
        name: "Java",
        description: "Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
        image: java,
        url: "https://www.java.com/en/",
    },
    // {
    //     id: 12,
    //     name: "C",
    //     description: "C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system.",
    //     image: c,
    //     url: "https://devdocs.io/c/",
    // },
    // {
    //     id: 13,
    //     name: "Ruby",
    //     description: "Ruby is an interpreted, high-level, general-purpose programming language.",
    //     image: ruby,
    //     url: "https://www.ruby-lang.org/en/",
    // }
    


];

export default Skills;