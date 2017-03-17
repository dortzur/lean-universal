import React from "react"
import {Link} from "react-router";
import {connect} from "react-redux";
import styles from "./app.scss";

@connect((state) => ({initialized: state.app.initialized}))
class App extends React.Component {
    render() {
        return (<div className={styles.baba}>

            <header style={{marginBottom: 30}} className={styles.babaGanush}>
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
var baba=12;
export default App;
