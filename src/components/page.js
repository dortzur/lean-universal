import React from "react";


class Page extends React.Component {
    static async loadProps(params) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({tacos: Math.pow(10, 17) * Math.random()})
            }, 1000);
        });
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