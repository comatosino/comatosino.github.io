import traductora from "./images/traductora-demo.gif";
import consolelog from "./images/console-log-demo.gif";
import pantrimonium from "./images/pantrimonium-demo.gif";
import vedomy from "./images/vedomy-demo.gif";
import dadjokes from "./images/dad-jokes-demo.gif";

const projectData = [
  {
    name: "Traductora",
    desc: "Speak a phrase in one language and hear its translation in another.",
    role: "Sole Developer",
    tech: "React, React-Redux, MaterialUI, Node, Express, MongoDB",
    appURL: "https://traductora.herokuapp.com/",
    repoURL: "https://github.com/comatosino/Traductora",
    img: traductora,
  },
  {
    name: "Console Log",
    desc: "Create, store, and link to guides and walkthroughs for video games.",
    role: "Designed database, built REST API, and implemented voice search functionality using a React hook. Managed GitHub repository.",
    tech: "React, TailwindCSS, Node, Express, MongoDB",
    appURL: "https://sar-console-log.herokuapp.com/",
    repoURL: "https://github.com/comatosino/Console-Log",
    img: consolelog,
  },
  {
    name: "Pantrimonium",
    desc: "Manage food inventory, monitor expiration dates, and create a shopping list.",
    role: "Fulfilled project manager and GitHub repository master roles. Built server framework, devised client-side JavaScript CRUD functions, and added email component with Nodemailer.",
    tech: "Node, Express, MySQL, Handlebars, Bootstrap",
    appURL: "https://pantrimonium.herokuapp.com/",
    repoURL: "https://github.com/comatosino/Pantrimonium",
    img: pantrimonium,
  },
  {
    name: "Vedomý",
    desc: "Record thoughts and daily health habits with space for self-reflection and health suggestions.",
    role: "Created logic to populate recipe card with Spoonacular API content and wrote algorithm to perform fetch methods once daily.",
    tech: "JavaScript, HTML, CSS",
    appURL: "https://gushihiro.github.io/Vedomy",
    repoURL: "https://github.com/Gushihiro/Vedomy",
    img: vedomy,
  },
  {
    name: "Bearded Dad Jokes",
    desc: "Combine the gravitas of facial hair with the dry hilarity of fatherly humor!",
    role: "Sole Developer",
    tech: "React, MaterialUI",
    appURL: "https://comatosino.github.io/dad-jokes/",
    repoURL: "https://github.com/comatosino/dad-jokes",
    img: dadjokes,
  },
];

export default projectData;
