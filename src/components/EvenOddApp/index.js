import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  OnIncrement = () => {
    let newValue = Math.random() * 100
    newValue = Math.ceil(newValue)

    this.setState(() => ({count: newValue}))
  }

  render() {
    const {count} = this.state
    let para
    if (count % 2 === 0) {
      para = <p className="para">Count is Even</p>
    } else {
      para = <p className="para">Count is Odd</p>
    }

    return (
      <div className="container">
        <h1 className="heading">Count {count}</h1>
        {para}
        <button className="button" onClick={this.OnIncrement}>
          Increment
        </button>
        <p className="para1">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}
export default EvenOddApp
