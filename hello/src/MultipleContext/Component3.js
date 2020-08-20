import React, { Component } from 'react'
import { UserConsumer } from './UserContext'
import { ChannelConsumer } from './UserContext'

class Component3 extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (user)=>{
                    return (
                        <ChannelConsumer>
                            {
                                (Channel)=>{
                                return (
                                    <div><h1>Hello {user}
                                    ,Hello {Channel}</h1></div>
                                )
                                }
                            }
                        </ChannelConsumer>
                    )
                    }
                }
            </UserConsumer>
        )
    }
}

export default Component3
