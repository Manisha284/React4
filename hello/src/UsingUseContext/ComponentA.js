import React, { Component } from 'react'
import ComponentB from './ComponentB'

class componentA extends Component {
    render() {
        return (
            <div>
                <ComponentB />
            </div>
        )
    }
}

export default componentA
