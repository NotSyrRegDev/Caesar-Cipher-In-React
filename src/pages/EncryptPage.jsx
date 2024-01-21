import React , {useState , useContext , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'




const EncryptPage = () => {

  let navigate = useNavigate();

  const [message,  setMessage] = useState('');

  const { keyPair  , setEncryptedMessage   } = useContext(AppContext);




  const encryptMessage = () => {

      let result = '';
      for (let i = 0; i < message.length; ++i) {
        let ch = message.charAt(i);
        if (ch >= 'a' && ch <= 'z') {
          ch = String.fromCharCode(((ch.charCodeAt(0) - 'a'.charCodeAt(0) + parseInt(keyPair, 10)) % 26) + 'a'.charCodeAt(0));
        } else if (ch >= 'A' && ch <= 'Z') {
          ch = String.fromCharCode(((ch.charCodeAt(0) - 'A'.charCodeAt(0) + parseInt(keyPair, 10)) % 26) + 'A'.charCodeAt(0));
        }
        result += ch;
      }
      setEncryptedMessage(result);

  navigate('/encrypt-result');

  }

  return (
    <div className="home_page">
  <div className='flex-col' >

<div className="main_card">

<h1 className="headline"> Caesar Cipher Encrypt & Decrypt </h1>

<p className="para mt-1"> this is our project that uses Caesar Cipher Algorithm for encrypt & decrypt </p>


<div className="action_div">
    <h3 className="headline span_blue"> Now Let's Encrypt  </h3>
</div>


    <div className="action_div">
    <label htmlFor="" className="label_form">  Type Input </label>
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value) } placeholder='Type your input here...' className="input_form" />
    </div>

    <div className="action_div">

    <button className="btn cha3_btn" onClick={() => encryptMessage() } > Encrypt Message </button>


    </div>

</div>

</div>
    </div>
  )
}

export default EncryptPage
