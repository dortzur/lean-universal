import React from "react"
class App extends React.Component {
    render() {
        return (<div>
            <div>index</div>
            {this.props.children}
        </div>)
    }

}

export default App;
