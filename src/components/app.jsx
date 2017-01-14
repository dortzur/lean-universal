import React from "react"
import {Link} from "react-router";
import {connect} from "react-redux";

@connect((state) => ({initialized: state.app.initialized}))
class App extends React.Component {
    render() {
        return (<div>

            <header style={{marginBottom: 30}}>
                Header&nbsp;
                <Link to="/">home</Link>&nbsp;
                <Link to="/page/1">page 1</Link>&nbsp;
                <Link to="/page/2">page 2</Link>&nbsp;
                <div>{this.props.initialized.toString()}</div>
            </header>
            {this.props.children}
        </div>)
    }

}

export default App;
