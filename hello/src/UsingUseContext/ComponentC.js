import React,{useContext} from 'react'
import { UserContext , ChannelContext} from './userCon'

function ComponentC() {
    const user=useContext(UserContext)
    const channel=useContext(ChannelContext)
    return (
        <div>
           <h1>{user}</h1>
           <h1>{channel}</h1>
        </div>
    )
}

export default ComponentC
