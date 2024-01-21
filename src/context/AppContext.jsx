import React , {  useState, createContext } from 'react';


export const AppContext = createContext();

export const AppProvider = (props) => {

   const [keyPair , setKeyPair] = useState(5);
   const [encryptedMessage , setEncryptedMessage] = useState('');
   const [decryptedMessage , setDecryptedMessage] = useState('');
   const [publicKey , setPublicKey] = useState('');
   const [privateKey , setPrivateKey] = useState('');

    return (
            <AppContext.Provider
            value={ {
                keyPair,
                setKeyPair,
                encryptedMessage,
                setEncryptedMessage,
                decryptedMessage,
                setDecryptedMessage
              }}
               >
                {props.children}
            </AppContext.Provider>
    )
}