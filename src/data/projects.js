// import dtPic from '../assets/client-screens/dt.png';
// import emunahPic from '../assets/client-screens/emunah.png';
// import giliPic from '../assets/client-screens/gili-towing.png';
// import colorsPic from '../assets/client-screens/colors.png';
// import lordOfWarPic from '../assets/client-screens/lord-of-war.png';
// import aStarPic from '../assets/client-screens/a-star.png';
// import fancoPic from '../assets/client-screens/fanco-fan.png';


const clientProjects = [
  {
    name: 'Dank Tickets',
    description: `Ticketing event site for marijuana conventions. The first project where I incorporated a lot of CSS Grid on the front end. I also hooked up 'Nodemailer' as part of first time user validation flow.`,
    stack: 'AngularJS, mongodb, node, express',
    url: 'https://danktickets.herokuapp.com/home',
    imgKey: 'dtPic'
  },
  {
    name: 'Emunah',
    description: 'Community site for Rav Dror of Emunah. Hooks into youtube, twitter and soundcloud apis to bring all content to one place.',
    stack: 'angular, youtube, soundcloud apis',
    url: 'https://emunah.com/home',
    imgKey: 'emunahPic'
  },
  {
    name: 'Gili\'s Towing',
    description: 'Company landing page for local israeli towing service. First multilingual app. Had to conditonally render rtl or ltr content.',
    stack: 'React / GatsbyJS',
    url: 'https://gili-grar.surge.sh',
    imgKey: 'giliPic'
  },
  {
    name: 'Hebrew Vocabulary Game',
    description: 'Small Matching game done for Language Fountain. I wrote animations for slider on top of ng-animate and synced up audio callbacks from a single audio file using start/stop times.',
    stack: 'angularjs, angular material',
    url: 'https://katzy687.github.io/hebrew-colors-webpack-ts/#!/',
    imgKey: 'colorsPic'
  }
  
];

const personalProjects = [
  {
    name: 'Lord Of War',
    description: 'Small Angular4 project I made for an interview assignment and had a lot of fun with. My first interaction with \'observables\', needed to broadcast changes live across parallel components.',
    stack: 'Angular 4',
    url: 'https://katzy687.github.io/lord-of-war',
    imgKey: 'lordOfWarPic'
  },
  {
    name: 'A-Star-Angular',
    description: 'Small project incorporating the A* pathfinding algorithm into an angularjs UI. The task was an interview assignment, given without proposing an algorithm. I elected to use the A* algorithm over breadth-first-search (BFS) because there is a heuristic of direction that makes it more efficient.',
    stack: 'AngularJS, Angular Material, A-Star Pathfinding module',
    url: 'https://a-star-angular.herokuapp.com/#!/main',
    imgKey: 'aStarPic'
  },
  {
    name: 'Fanco-Fan',
    description: 'My final project from coding bootcamp, assigned by IBM. I used D3 to visualize seasonal weather data and correlate it with fan sales for a fictional company. Turns out people don\'t buy fans in the winter :).',
    stack: 'D3, AngularJS, Twilio, WeatherAPI',
    url: 'https://fancofan.herokuapp.com/#/home/totalSales',
    imgKey: 'fancoPic'
  },
];

const projects = {clientProjects, personalProjects};

export default projects;

