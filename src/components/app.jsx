import React from "react"
import {Link} from "react-router";
class App extends React.Component {
    render() {
        return (<div>

            <header style={{marginBottom: 30}}>
                Header&nbsp;
                <Link to="/">home</Link>&nbsp;
                <Link to="/page/1">page 1</Link>&nbsp;
                <Link to="/page/2">page 2</Link>&nbsp;
            </header>
            {this.props.children}
        </div>)
    }

}

export default App;
