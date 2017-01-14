import React from "react";


class Page extends React.Component {

    render() {
        return (<div>
            Page {this.props.params.id}
        </div>)

    }
}

export default Page;