import './Input.css'

export default function Input ({ type, id, text, validation, error }) {
  return (
    <>
      <input type={type} name={id} id={id} aria-required="true" maxLength="60" className={error ? 'modal__input modal__input--error' : 'modal__input'} placeholder={text} onBlur={validation} />
      <p className="modal__errors">{error}</p>
    </>
  )
}
