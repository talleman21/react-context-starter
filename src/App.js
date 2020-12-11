import { useState } from 'react'
import {Provider} from './context/TemplateProvider'
import Main from './components/Main'
import ArrayDisplay from './components/ArrayDisplay'

function App() {

  const [test,setTest] = useState('Im test state')
  const [anArray,setAnArray] = useState([1,2,3,4,5])

  const store = {
    test,setTest,
    anArray,setAnArray
  }

  return (
    <Provider value={store}>
      <Main/>
      <div style={{textAlign:'center'}}>{test}</div>
      <ArrayDisplay />
    </Provider>
  );
}

export default App;
