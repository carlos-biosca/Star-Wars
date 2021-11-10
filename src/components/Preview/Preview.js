import './Preview.css'

export default function Preview ({ data, changeSlide, current, interval }) {
  return (
    <div className="preview">
      {
        data.map((card, index) => {
          return (
            <span className="preview__card" key={index} onClick={() => changeSlide(index)}>
              <div className=
                {
                  (current === index && interval !== null) ?
                    `preview__progress preview__progress--${card.color} preview__progress--animated` :
                    (current === index && interval == null) ?
                      `preview__progress preview__progress--${card.color} preview__progress--selected` :
                      `preview__progress preview__progress--${card.color}`
                }
              ></div>
              <img src={card.image} alt="" className={current === index ? "preview__background preview__background--blur" : "preview__background"} />
              <span className="preview__title">{card.title}</span>
            </span>
          )
        })
      }
    </div>
  )
}
