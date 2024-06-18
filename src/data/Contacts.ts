import Contact from "../types/Contact";
import email from "../assets/icons/email.png";
import linkedin from "../assets/icons/linkedin.png";
import github from "../assets/icons/github.png";
import youtube from "../assets/icons/youtube.png";


const contacts: Contact[] = [
    {
        logo: email,
        name: "Email",
        link: "mailto:kumanikidd@gmail.com"
    },
    {
        logo: linkedin,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/kumani-kidd-168290249"
    },
    {
        logo: github,
        name: "GitHub",
        link: "https://github.com/amancalledkidd"
    },
    {
        logo: youtube,
        name: "YouTube",
        link: "https://www.youtube.com/channel/UCjaxOfCqPCo56f5lFZ-gz7A"
    }
]

export default contacts;