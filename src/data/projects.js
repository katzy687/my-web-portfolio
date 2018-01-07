import DT from '../assets/client-screens/dank-tickets.png';

const clientProjects = [
  {
    name: 'Dank Tickets',
    description: `Ticketing event site for marijuana conventions. The first project where I incorporated a lot of CSS Grid on the front end. I also hooked up 'Nodemailer' as part of first time user validation flow.`,
    stack: 'AngularJS, mongodb, node, express',
    url: 'https://www.danktickets.herokuapp.com',
    img: DT
  },
  {
    name: 'Emunah',
    description: 'Community site for Rav Dror of Emunah. Hooks into youtube, twitter and soundcloud apis to bring all content to one place.',
    stack: 'angular, youtube, soundcloud apis',
    url: 'https://emunah.herokuapp.com/home',
    img: 
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
    name: 'A-Star-Angular',
    description: 'Small project incorporating the A* pathfinding algorithm into an angularjs UI (with angular material components). The project was originally an interview assignment task that I continued developing. The task was assigned without proposing an algorithm. I elected to use the A-star or A* over breadth-first-search (BFS) because there is a heuristic of direction that makes it more efficient.',
    stack: 'AngularJS, Angular Material, A-Star Pathfinding module',
    url: 'https://a-star-angular.herokuapp.com/#!/main'
  },
  {
    name: 'Fanco-Fan',
    description: 'My final project from coding bootcamp, assigned by IBM. I used D3 to visualize seasonal weather data and correlate it with fan sales for a fictional company. Turns out people don\'t buy fans in the winter. Not that we needed an app for that :). Also hooked into the Twilio API to send messages to our \'agents\' in the field, and the weather API to pull in live Boston Weather.',
    stack: 'D3, AngularJS, Twilio, WeatherAPI',
    url: 'https://fancofan.herokuapp.com/#/home/totalSales'
  },
];

const projects = {clientProjects, personalProjects};

export default projects;