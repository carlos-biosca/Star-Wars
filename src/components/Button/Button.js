import './Button.css'

export default function Button ({ open, text }) {
  return <button aria-label={text} onClick={open}>{text.toUpperCase()}</button>
}
