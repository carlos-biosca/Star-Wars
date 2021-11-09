import { useState, useEffect } from "react"

import { SliderData } from "../../constants"

import './ImageSlider.css'

export default function ImageSlider () {
  const [current, setCurrent] = useState(0)

  const prevSlide = () => {
    setCurrent(current === 0 ? SliderData.length - 1 : current - 1)
  }

  const nextSlide = () => {
    setCurrent(current === SliderData.length - 1 ? 0 : current + 1)
  }

  useEffect(() => {
    const allImages = document.querySelectorAll('.slider__item')
    for (let img of allImages) {
      img.style.transform = `translateX(-${current}00%)`
    }
  }, [current])

  return (
    <section className="slider">
      <button className="slider__button slider__button--left" onClick={prevSlide}><ion-icon name="chevron-back-outline"></ion-icon></button>
      <button className="slider__button slider__button--right" onClick={nextSlide}><ion-icon name="chevron-forward-outline"></ion-icon></button>
      <ul className="slider__container">
        {
          SliderData.map((slide, index) => {
            return (
              <li key={index} className="slider__item">
                <img src={slide.image} alt='' className={'slider__image'} />
                <div className="slider__info">
                  <h2>Visit the starships</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam sunt sed velit nobis! Magni quaerat, quo culpa repellendus nemo optio voluptate est incidunt provident. Magnam neque.</p>
                  <button>More Details</button>
                </div>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}
