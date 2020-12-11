import React,{createContext} from 'react'

const {Provider,Consumer} = createContext(null)


export const withTemplateConsumer = (Component) => {
  return (props) => {
    return(
      <Consumer>
        {state => <Component {...props} {...state} />}
      </Consumer>
    )
  }  
}

export {Provider,Consumer}