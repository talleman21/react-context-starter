
import {withTemplateConsumer} from '../context/TemplateProvider'

const Main = (props) => {
  return (
    <div style={{display:'flex',justifyContent:'center',marginTop:'20px'}}>
      <div style={{marginRight:'5px'}}>Test Input:</div>
      <input type='text' value={props.test} onChange={(e)=>props.setTest(e.target.value)}/>
    </div>
  )
}

export default withTemplateConsumer(Main)
