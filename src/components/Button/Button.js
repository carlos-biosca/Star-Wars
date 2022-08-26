import './Button.css'

export default function Button ({ open, text , name, dataTestId }) {
  return <button type="button" aria-label={text} onClick={open} className={name} data-testid={dataTestId}>{text}</button>
}
