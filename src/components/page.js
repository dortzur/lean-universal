import React from "react";


class Page extends React.Component {
    static loadProps(params, cb) {
        console.log(params, "YO");
        setTimeout(() => {
            console.log(params, "YOYO");
            cb(null, {tacos: Math.pow(10, 17) * Math.random()})
        }, 1000)
    }

    renderLoading() {

        return <div>LOADING...</div>
    }

    render() {
        return (<div>
            <div>
                Page {this.props.params.id}
            </div>
            <div>
                tacos:{this.props.tacos}
            </div>
        </div>)

    }
}

export default Page;