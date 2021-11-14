import './FormSuccess.css'

export default function FormSuccess ({ text }) {
  return (
    <div className='success__container'>
      <h1 className='success__title'>{text}</h1>
    </div>
  )
}
