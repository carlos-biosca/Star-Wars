import './Input.css'

export default function Input ({ type, id, text }) {
  return (
    <input type={type} name={id} id={id} aria-required="true" className="modal__input" placeholder={text} />
  )
}
