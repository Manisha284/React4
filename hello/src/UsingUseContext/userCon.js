import React from 'react'

const UserContext=React.createContext()
const ChannelContext=React.createContext()

const UserProvider=UserContext.Provider
const ChannelProvider=ChannelContext.Provider

export { UserProvider,ChannelProvider }

export { UserContext , ChannelContext}

