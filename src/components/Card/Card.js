import './Card.css'

export default function Card ({ text, image }) {
  return (
    <div className="card">
      <div className="card__image">
        <img src={image} alt="" />
      </div>
      <div className="card__content">
        <div className="card__decal-right"></div>
        <div className="card__decal-left"></div>
        <h3 className="card__title">{text}</h3>
        <div className="card__gradient"></div>
      </div>
      <div className="card__footer"></div>
    </div>
  )
}
