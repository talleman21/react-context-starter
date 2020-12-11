import {withTemplateConsumer} from '../context/TemplateProvider'

const ArrayDisplay = (props) => {
  return (
    <div style={{textAlign:'center',margin:'10px'}}>
      {props.anArray.map(item => <button>{item}</button>)}
      <div>
        <button onClick={()=>props.setAnArray([...props.anArray,props.anArray.length + 1])}>add element</button>
      </div>
    </div>
  )
}

export default withTemplateConsumer(ArrayDisplay)