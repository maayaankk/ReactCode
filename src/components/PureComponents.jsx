import React, { PureComponent } from 'react'

export class PureComponents extends PureComponent {
    render() {
        console.log('Pure Component Rendered')
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureComponents
