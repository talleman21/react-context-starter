import { useState } from 'react'
import {Provider} from './context/TemplateProvider'
import Main from './components/Main'

function App() {

  const [test,setTest] = useState('Im test state')

  const store = {
    test,setTest
  }

  return (
    <Provider value={store}>
      <Main/>
      <div style={{textAlign:'center'}}>{test}</div>
    </Provider>
  );
}

export default App;
