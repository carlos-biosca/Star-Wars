import './DetailsList.css'

export default function DetailsList ({ list, names, id }) {
  return (
    <ul className={`${id}__list`}>
      {
        list.map((item, index) => {
          return (
            <li key={index} className={`${id}__item`}>
              {
                names.map((name, index) => {
                  return <span key={index} className={`${id}__${name}`}>{item[name]}</span>
                })
              }
            </li>
          )
        })
      }
    </ul>
  )
}
