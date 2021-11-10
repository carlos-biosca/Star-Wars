import { useState, useEffect, useRef } from "react"

import { SliderData } from "../../constants"

import './ImageSlider.css'

import { Link } from 'react-router-dom'
import Preview from "../Preview/Preview"


export default function ImageSlider () {
  const [current, setCurrent] = useState(0)
  const intervalSlider = useRef(0)

  const cardSlide = (slide) => {
    setCurrent(slide)
    clearInterval(intervalSlider.current)
    intervalSlider.current = null
  }

  const prevSlide = () => {
    setCurrent(current => current === 0 ? SliderData.length - 1 : current - 1)
    clearInterval(intervalSlider.current)
    intervalSlider.current = null
  }

  const nextSlide = () => {
    setCurrent(current => current === SliderData.length - 1 ? 0 : current + 1)
    clearInterval(intervalSlider.current)
    intervalSlider.current = null
  }

  useEffect(() => {
    intervalSlider.current = setInterval(() => {
      setCurrent(current => current === SliderData.length - 1 ? 0 : current + 1)
    }, 6000)
    return () => clearInterval(intervalSlider.current)
  }, [])

  useEffect(() => {
    const allImages = document.querySelectorAll('.slider__item')
    for (let img of allImages) {
      img.style.transform = `translateX(-${current}00%)`
    }
  }, [current])

  return (
    <section className="slider" id='slider'>
      <button className="slider__button slider__button--left" onClick={prevSlide}><ion-icon name="chevron-back-outline"></ion-icon></button>
      <button className="slider__button slider__button--right" onClick={nextSlide}><ion-icon name="chevron-forward-outline"></ion-icon></button>
      <ul className="slider__container">
        {
          SliderData.map((slide, index) => {
            return (
              <li key={index} className={`slider__item slider__item--${slide.theme}`}>
                <img src={slide.image} alt='' className={'slider__image'} />
                <div className={`slider__info slider__info--${slide.color}`}>
                  <h2>{slide.title}</h2>
                  <p>{slide.text}</p>
                  <Link to={slide.link}>{slide.button}</Link>
                </div>
              </li>
            )
          })
        }
      </ul>
      <Preview data={SliderData} changeSlide={cardSlide} current={current} interval={intervalSlider.current} />
    </section>
  )
}
