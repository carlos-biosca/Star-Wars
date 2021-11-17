import ImageSlider from "../../components/ImageSlider/ImageSlider";

import card1 from '../../assets/images/cards/card1.webp'

import './Home.css'

export default function Home () {
  return (
    <>
      <ImageSlider />
      <section className="cards">
        <div className="card">
          <div className="card__image">
            <img src={card1} alt="" />
          </div>
          <div className="card__content">
            <div className="card__decal"></div>
            <h3 className="card__title">INSIDE STAR WARS: VISIONS: MEET THE SHIPS AND VEHICLES</h3>
            {/* <div className="card__gradient"></div> */}
          </div>
          <div className="card__footer"></div>
        </div>
      </section>
    </>
  )
}
