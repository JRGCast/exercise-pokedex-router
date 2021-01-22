import React, {Component} from 'react';


class NotFound extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repeatMsg: [],
    }
   
  }

  componentDidMount() {
    const {repeatMsg} = this.state
    const interval = setInterval(() => {
    this.setState(({repeatMsg}) => ({
      repeatMsg: [...repeatMsg, 'Sorry! ']
    }))
    console.log('Teste')
    }, 1*2000)
    setTimeout(()=> {
      clearInterval(interval)
    },1*4000)
  } 

  render() {
  return (<div className="not-found">
    <h2>
      Page requested not found
      <span role="img" aria-label="Crying emoji"> 😭 </span>
      {this.state.repeatMsg.map(element => <span>{element}</span>)}
    </h2>
    <img
      className="not-found-image"
      src="https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif"
      alt="Pikachu crying because the page requested was not found"
    />
  </div>
)
}
}

export default NotFound;