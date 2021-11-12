import './Button.css'

export default function Button ({ open, text, name }) {
  return <button type="button" aria-label={text} onClick={open} className={name}>{text}</button>
}
