import './DetailsList.css'
import formatListNames from '../../utils/formatListNames'
export default function DetailsList ({ list, names, id }) {

  return (
    <ul className={`${id}__list`}>
      {
        list.map((item, index) => {
          return (

            <li key={index} className={`${id}__item`}>
              {
                names.map((name, index) => {
                  if (name === 'name' | name === 'title') return <p key={index} className={`${id}__${name}`}>{item[name]}</p>
                  else {
                    return (
                      <p key={index} className={`${id}__${name}`}>
                        {formatListNames(name)}: {item[name]}
                      </p>
                    )
                  }
                })
              }
            </li>
          )
        })
      }
    </ul>
  )
}
