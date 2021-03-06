import React, { createContext, useState } from 'react'

const TabContext = createContext()

const TabProvider = ({ children }) => {
    const [tab, setSelectedTab] = useState(
        {
            selectedTab: 0
        }
    )


    return (
        <TabContext.Provider value={{tab, setSelectedTab}}>
            {children}
        </TabContext.Provider>
    )
}

export {TabContext, TabProvider}