import React from 'react'                                         

const Hello = props => {
const r = Math.floor(Math.random() * 3)

  if (r == 0) return <p>今日も頑張りましょう。</p>
  if (r == 1) return <p>こんにちは</p>
  if (r == 2) return <p>朗らかな日ですね。</p>

}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render () {
      return (
        <div>
            <Hello />
        </div>
      )
    }
}

export default App
