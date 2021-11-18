import slider1 from '../assets/images/slider/thumb-1920-107763.jpg'
import slider2 from '../assets/images/slider/thumb-1920-923364.jpg'
import slider3 from '../assets/images/slider/thumb-1920-665427.jpg'

import card1 from '../assets/images/cards/card1.webp'
import card2 from '../assets/images/cards/card2.jpg'
import card3 from '../assets/images/cards/card3.jpg'
import card4 from '../assets/images/cards/card4.jpg'

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
    link: '/actors'
  }
]

const pilotsList = ['name', 'height', 'mass', 'hair_color', 'eye_color', 'birth_year', 'gender']

const filmsList = ['title', 'episode_id', 'director', 'producer', 'release_date']

const starshipsList = ['name', 'model', 'manufacturer', 'cost_in_credits', 'length', 'max_atmosphering_speed', 'crew']

const cardsData = [
  {
    image: card1,
    text: 'Meet the Ships and Vehicles',
    link: '/starships'
  },
  {
    image: card2,
    text: 'Meet the Droids',
    link: '/actors'
  }, {
    image: card3,
    text: 'Meet the Heroes',
    link: '/actors'
  }, {
    image: card4,
    text: 'Meet the Villains',
    link: '/actors'
  }
]

export { SliderData, pilotsList, filmsList, starshipsList, cardsData }