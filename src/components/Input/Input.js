import './Input.css'

export default function Input ({ type, id, text, validation, error }) {
  return (
    <>
      <input type={type} name={id} id={id} aria-required="true" maxLength="60" className={error ? 'input input--error' : 'input'} placeholder={text} onBlur={validation} />
      <p className="input__errors">{error}</p>
    </>
  )
}
