import './style.css';
import renderHome from './modules/home.js';
import generateShows from './modules/shows.js';
import generatePeople from './modules/people.js';


const createPage = async () => {
  const showsTemp = await generateShows();
  const people = await generatePeople();
  const shows = showsTemp.slice(0, 25);
  const actors = people.filter((person) => person.gender === "Male" && person.birthday !== null).slice(0, 25);
  const actoras = people.filter((person) => person.gender === "Female" && person.birthday !== null).slice(0, 25);

  renderHome();

  console.log('x: ', shows);
  console.log('y: ', actors);
  console.log('z: ', actoras);
}

createPage();
