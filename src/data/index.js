import slider1 from '../assets/images/slider/thumb-1920-107763.jpg'
import slider2 from '../assets/images/slider/thumb-1920-923364.jpg'
import slider3 from '../assets/images/slider/thumb-1920-665427.jpg'

const SliderData = [
  {
    image: slider1,
    title: 'WHAT’S THE GREATEST SHIP DESIGN IN STAR WARS?',
    text: 'Learn about the secrets of star wars ships.',
    theme: 'light',
    color: 'blue',
    button: 'learn more',
    link: '/starships'
  },
  {
    image: slider2,
    title: 'STAR WARS INSIDE INTEL: THE PILOTS',
    text: 'Jump into the cockpit for a dogfight of words.',
    theme: 'dark',
    color: 'orange',
    button: 'more details',
    link: '#!'
  },
  {
    image: slider3,
    title: 'HEROES OF STAR WARS',
    text: 'We are all the Republic. Meet the actors behind-the-scenes.',
    theme: 'dark',
    color: 'gold',
    button: 'read now',
    link: '#!'
  }
]

const pilotsList = ['name', 'height', 'mass', 'hair_color', 'eye_color', 'birth_year', 'gender']

const filmsList = ['title', 'episode', 'director', 'producer', 'release_date']

export { SliderData, pilotsList, filmsList }