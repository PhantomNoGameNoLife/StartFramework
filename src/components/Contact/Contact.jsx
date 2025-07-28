import { Helmet } from 'react-helmet'
import Heading from "../Heading/Heading"
import Style from './Contact.module.css'
import { useState } from 'react'


const Contact = () => {
  const [isTop, SetIsTop] = useState({
    user: '',
    age: '',
    email: '',
    password: ''
  })
  const labelTop = (input, e) => {
    e.target.value ? SetIsTop({ ...isTop, [input]: true }) : SetIsTop({ ...isTop, [input]: false });
  }
  return (
    <>
      <Helmet>
        <title>contact</title>
      </Helmet>
      <section>
        <div className="container">
          <div className="dvh-100 d-flex flex-column justify-content-center align-items-center">
            <div className='text-white text-center'>
              <Heading head='CONATCT SECTION' secColor={true} />
            </div>
            <form action="" className='p-3 w-100'>
              <label className={isTop.user ? Style.top : ''} htmlFor="username">userName:</label>
              <input id='username' className="form-control py-3 border-0 border-bottom w-100" type="text" onChange={(e) => labelTop('user', e)} placeholder="userName" aria-label="User Name" autoComplete='name'></input>
              <label className={isTop.age ? Style.top : ''} htmlFor="userage">userAge:</label>
              <input id='userage' className="form-control py-3 border-0 border-bottom w-100" type="number" onChange={(e) => labelTop('age', e)} placeholder="userage" aria-label="User Age" min={16} max={100}></input>
              <label className={isTop.email ? Style.top : ''} htmlFor="useremail">userEmail:</label>
              <input id='useremail' className="form-control py-3 border-0 border-bottom w-100" type="email" onChange={(e) => labelTop('email', e)} placeholder="useremail" aria-label="User Email" autoComplete='email'></input>
              <label className={isTop.pass ? Style.top : ''} htmlFor="userpassword">userPassword:</label>
              <input id='userpassword' className="form-control py-3 border-0 border-bottom w-100" type="password" onChange={(e) => labelTop('pass', e)} placeholder="userpassword" aria-label="User Password" minLength={6}></input>
              <button className={`btn mt-4 text-white ${Style.bg}`}>Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
