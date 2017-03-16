import React from "react";
import {appUpate} from '../state/modules/app-module';

import {asyncConnect} from 'redux-connect';

@asyncConnect([{
    promise: ({store:{getState, dispatch}, router:params}) => {
        return new Promise((resolve) => {
            if (global.window) {
                dispatch(appUpate({loading: 'loading...'}));
                resolve();
            }
            setTimeout(() => {
                dispatch(appUpate({loading: false, tacos: Math.random()}));
                resolve();
            }, 2000)
        });
    }
}], (state) => ({
    loading: state.app.loading,
    tacos: state.app.tacos

}))
class Page extends React.Component {

    render() {
        return (<div>
            Page {this.props.params.id}
            Tacos: {this.props.loading || this.props.tacos}
        </div>)

    }
}

export default Page;