import DT from '../assets/client-screens/dank-tickets.png';



const clientProjects = [
  {
    name: 'Dank Tickets',
    description: `Ticketing event site for marijuana conventions. The first project where I incorporated a lot of CSS Grid on the front end. I also hooked up 'Nodemailer' as part of first time user validation flow.`,
    stack: 'AngularJS, mongodb, node, express',
    img: DT,
    url: 'https://www.danktickets.herokuapp.com'
  },
  {
    name: 'Emunah',
    description: 'Community site for Rav Dror of Emunah. Hooks into youtube, twitter and soundcloud apis to bring all content to one place.',
    stack: 'angular, youtube, soundcloud apis',
    url: 'https://emunah.herokuapp.com/home'
  },
  {
    name: 'Gili\'s Towing',
    description: 'Company landing page for local israeli towing service. First multilingual app. Had to conditonally render rtl or ltr content.',
    stack: 'React / gatsbyJS',
    url: 'https://gili-grar.surge.sh'
  },
  {
    name: 'Hebrew Vocabulary Game',
    description: 'Small Matching game done for Language Fountain. I wrote animations for slider on top of ng-animate and synced up audio callbacks from a single audio file using start/stop times.',
    stack: 'angularjs, angular material',
    url: 'https://katzy687.github.io/hebrew-colors-webpack-ts/#!/'
  }
  
];

const personalProjects = [
  {
    name: 'Lord Of War',
    description: 'Small Angular4 project I made for an interview assignment and had a lot of fun with. My first interaction with \'observables\', needed to broadcast changes live across parallel components.',
    stack: 'Angular 4',
    url: 'https://katzy687.github.io/lord-of-war'
  },
  {
    name: 'A-star-angular',
    description: 'Interview assignment where I was tasked with integrating a pathfinding algorithm into an angular frontend UI. Set a start point, end point, add some walls and hit go. I went with the A* algorithm over BFS. I mapped the pathfinding matrix output onto my grid and animated it via a timeout method.',
    stack: 'AngularJS, Angular Material',
    url: 'https://katzy687.github.io/lord-of-war'
  },
  {
    name: 'fanco',
    description: 'My final project from bootcamp, assigned by IBM. I used to D3 to correlate seasonal weather with fan sales for a fictional company. Turns out people don\'t buy fans in the winter. Not that we needed an app for that haha.',
    stack: 'D3, angular',
    url: 'https://katzy687.github.io/lord-of-war'
  },
];

const projects = {clientProjects, personalProjects};

export default projects;