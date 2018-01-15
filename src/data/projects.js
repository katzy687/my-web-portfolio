import dtPic from '../assets/client-screens/dt-Optimized.png';
import emunahPic from '../assets/client-screens/emunah-Optimized.png';
import giliPic from '../assets/client-screens/gili-Optimized.png';
import colorsPic from '../assets/client-screens/colors-Optimized.png';
import lordOfWarPic from '../assets/client-screens/lordofwar-Optimized.png';
import aStarPic from '../assets/client-screens/astar-Optimized.png';
import fancoPic from '../assets/client-screens/fancofan-Optimized.png';
import newoldroadPic from '../assets/client-screens/newoldroad-Optimized.png';

const clientProjects = [
  {
    name: 'Emunah',
    description: 'Community site for Rav Dror of Emunah. Hooks into youtube, twitter and soundcloud apis to bring all content to one place.',
    stack: 'angular, youtube, soundcloud apis',
    url: 'https://emunah.com/home',
    github: 'https://github.com/mbreslow56/Emunah',
    img: emunahPic
  },
  {
    name: 'Dank Tickets',
    description: `Ticketing event site for marijuana conventions. The first project where I incorporated a lot of CSS Grid on the front end. I also hooked up 'Nodemailer' as part of first time user validation flow.`,
    stack: 'AngularJS, mongodb, node, express',
    url: 'https://danktickets.herokuapp.com/home',
    github: 'https://github.com/mbreslow56/danktickets2.0',
    img: dtPic
  },
  {
    name: 'Gili\'s Towing',
    description: 'Company landing page for local israeli towing service. First multilingual app. Had to conditonally render rtl or ltr content.',
    stack: 'React / GatsbyJS',
    url: 'http://giligrartelaviv.co.il',
    github: 'https://github.com/mbreslow56/Gili-Towing',
    img: giliPic
  },
  {
    name: 'New Old Road',
    description: 'Company landing for Web Dev Studio. Responsive design integrating the ParticlesJS library.',
    stack: 'AngularJS, ParticlesJS',
    url: 'http://www.newoldroad.com',
    github: 'https://github.com/mbreslow56/newoldroad',
    img: newoldroadPic
  },
  {
    name: 'Hebrew Vocabulary Game',
    description: 'Small Matching game done for Language Fountain. I wrote animations for slider on top of ng-animate and synced up audio callbacks from a single audio file using start/stop times.',
    stack: 'angularjs, angular material',
    url: 'https://katzy687.github.io/hebrew-colors-webpack-ts/#!/',
    github: '',
    img: colorsPic
  }
  
];

const personalProjects = [
  {
    name: 'Lord Of War',
    description: 'Small Angular4 project I made for an interview assignment and had a lot of fun with. My first interaction with \'observables\', needed to broadcast changes live across parallel components.',
    stack: 'Angular 4',
    url: 'https://katzy687.github.io/lord-of-war',
    github: '',
    img: lordOfWarPic
  },
  {
    name: 'A-Star-Angular',
    description: 'Small project incorporating the A* pathfinding algorithm into an angularjs UI. The task was an interview assignment, given without proposing an algorithm. I elected to use the A* algorithm over breadth-first-search (BFS) because there is a heuristic of direction that makes it more efficient.',
    stack: 'AngularJS, Angular Material, A-Star Pathfinding module',
    url: 'https://a-star-angular.herokuapp.com/#!/main',
    github: '',
    img: aStarPic
  },
  {
    name: 'Fanco-Fan',
    description: 'My final project from coding bootcamp, assigned by IBM. I used D3 to visualize seasonal weather data and correlate it with fan sales for a fictional company. Turns out people don\'t buy fans in the winter :).',
    stack: 'D3, AngularJS, Twilio, WeatherAPI',
    url: 'https://fancofan.herokuapp.com/#/home/totalSales',
    github: '',
    img: fancoPic
  },
];

const projects = {clientProjects, personalProjects};

export default projects;

