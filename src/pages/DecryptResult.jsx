import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const DecryptResult = () => {

  const { decryptedMessage } = useContext(AppContext);



  return (
    <div className="home_page">
  <div className='flex-col' >

<div className="main_card">

<h1 className="headline"> Caesar Cipher Encrypt & Decrypt </h1>

<p className="para mt-1"> this is our project that uses Caesar Cipher Algorithm for encrypt & decrypt </p>


<div className="action_div">
    <h3 className="headline span_blue"> Generated Decrypted Message  </h3>
</div>

<div className="action_div">
      <label htmlFor="" className="label_form"> Generated Message </label>
          <input type="text" readOnly value={decryptedMessage} className="input_form textarea_form readonly_form" />
      </div>


    <div className="action_div">
    <Link to="/" >
    <button className="btn cha3_btn"> Restart Again </button>
    </Link>

    </div>

</div>

</div>
    </div>
  )
}

export default DecryptResult
