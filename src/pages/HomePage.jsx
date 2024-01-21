import React , {useContext} from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const HomePage = () => {

  const { keyPair , setKeyPair } = useContext(AppContext)




  return (
    <div className="home_page">
  <div className='flex-col' >

<div className="main_card">

<h1 className="headline"> Caesar Cipher Encrypt & Decrypt </h1>

<p className="para mt-1"> this is our project that uses Caesar Cipher Algorithm for encrypt & decrypt </p>

<div className="action_div">
    <h3 className="headline span_blue"> First Generate Key  </h3>
</div>

    <div className="action_div">
    <label htmlFor="" className="label_form">  Key Length  (Choose)  </label>
       <input value={keyPair} onChange={(e) => setKeyPair(e.target.value) } name="keylength" id="" type='number' className="input_form" />
    </div>

    <div className="action_div">

    <Link to={'/encrypt'} >

    <button className="btn cha3_btn"  > Generate Key Pair </button>
    </Link>


    </div>

</div>

</div>
    </div>

  )
}

export default HomePage
