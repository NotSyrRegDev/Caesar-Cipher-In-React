import React , {useState , useContext} from 'react'
import {useNavigate } from 'react-router-dom'

import { AppContext } from '../context/AppContext';


const DecryptPage = () => {

  let navigate = useNavigate();

  const { setDecryptedMessage } = useContext(AppContext);


  const [key , setKey] = useState('');
  const [message , setMessage] = useState('');

  const decryptMessage = () => {

    let result = '';
    for (let i = 0; i < message.length; ++i) {
      let ch = message.charAt(i);
      if (ch >= 'a' && ch <= 'z') {
        ch = String.fromCharCode(((ch.charCodeAt(0) - 'a'.charCodeAt(0) - parseInt(key, 10) + 26) % 26) + 'a'.charCodeAt(0));
      } else if (ch >= 'A' && ch <= 'Z') {
        ch = String.fromCharCode(((ch.charCodeAt(0) - 'A'.charCodeAt(0) - parseInt(key, 10) + 26) % 26) + 'A'.charCodeAt(0));
      }
      result += ch;
    }
    setDecryptedMessage(result);

   navigate('/decrypt-result');

  }

  return (
    <div className="home_page">
  <div className='flex-col' >

<div className="main_card">

<h1 className="headline"> Caesar Cipher Encrypt & Decrypt </h1>

<p className="para mt-1"> this is our project that uses Caesar Cipher Algorithm for encrypt & decrypt </p>


<div className="action_div">
    <h3 className="headline span_blue"> Now Let's Decrypt  </h3>
</div>



    <div className="action_div">
    <label htmlFor="" className="label_form">  Type Encrypted Message </label>
        <input type="text" placeholder='Type your input here...' value={message} onChange={(e) => setMessage(e.target.value) } className="input_form" />
    </div>

    <div className="action_div">
    <label htmlFor="" className="label_form">  Type the key </label>
        <input type="number" placeholder='Type your key here...' value={key} onChange={(e) => setKey(e.target.value) } className="input_form" />
    </div>



    <div className="action_div">

    <button className="btn cha3_btn" onClick={() => decryptMessage()  } > Decrypt Message </button>


    </div>

</div>

</div>
    </div>
  )
}

export default DecryptPage
