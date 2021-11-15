import './FormSuccess.css'

import completed from '../../assets/images/complete.jpg'

export default function FormSuccess ({ text }) {
  return (
    <div className='success__container'>
      <img src={completed} alt="" className="success__logo" />
      <h1 className='success__title'>{text}</h1>
    </div>
  )
}
