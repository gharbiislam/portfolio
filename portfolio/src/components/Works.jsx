import Work1 from "../assets/goats.png"
import Work2 from '../assets/safepulse.png'
import Work4 from "../assets/bzurelamal.png"
import Work3 from "../assets/rayensport.png"
import Work5 from '../assets/elmdina.png'

const Works = [
    {
        id: 1,
        image: Work1,
        title: "Goat's",
        category: ["dev", "ui/ux","branding"],
        links: [
            { label: "GitHub", url: "https://github.com/gharbiislam/goat-s/tree/master" },
            { label: "Figma", url: "https://www.figma.com/design/1ztJcXXEfKE2kw3StJbBem/PFE?node-id=0-1&p=f&t=x6uKHQVMygB5W5FT-0" },
            { label: "Behance", url: "https://www.behance.net/gallery/229651443/GOATS-Branding" }
        ]
    },
    {
        id: 2,
        image: Work2,
        title: "SafePulse",
        category: ["ui/ux"],
        links: [
            { label: "Figma", url: "https://www.figma.com/design/xamMmeeuutVJm1mTx1qw7r/safepulse-App?node-id=0-1&p=f&t=VeKPuojaWeE1h5Rk-0" }
           , { label: "Behance", url: "https://www.behance.net/gallery/187939465/SafePulseb-App" }
        ]
    },
    {
        id: 3,
        image: Work3,
        title: "Rayen Sport",
        category: ["branding"],
        links: [
            { label: "Behance", url: "https://www.behance.net/gallery/187937605/Rayen-Sport-Branding" }
        ]
    },
    {
        id: 4,
        image: Work4,
        title: "Bzure El Amal",
        category: ["dev"], 
        links: [
            { label: "GitHub", url: "https://github.com/gharbiislam/Bzur-el-amal" }
        ]
    },
    {
        id: 5,
        image: Work5,
        title: "elmdina",
        category: ["dev"],
        links: [
            { label: "GitHub", url: "https://github.com/gharbiislam/Restaurant-" },
            { label: "Live Demo", url: "https://gharbiislam.github.io/Restaurant-/" } 
        ]
    }
]

export default Works