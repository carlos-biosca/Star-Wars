import './Preview.css'

export default function Preview ({ data, changeSlide, current }) {
  return (
    <div className="preview">
      {
        data.map((card, index) => {
          return (
            <span className="preview__card" key={index} onClick={() => changeSlide(index)}>
              <div className={current === index ? `preview__progress preview__progress--${card.color} preview__progress--active` : `preview__progress preview__progress--${card.color}`}></div>
              <img src={card.image} alt="" className="preview__background" />
              <span className="preview__title">{card.title}</span>
            </span>
          )
        })
      }
    </div>
  )
}
