import React, { createContext, useState } from 'react'

const InfoOverviewContext = createContext()

const InfoOverviewProvider = ({ children }) => {
    const [infoOverview, setInfoOverview] = useState(
        {
            showMoreSkills: false
        }
    )

    return (
        <InfoOverviewContext.Provider value={{infoOverview, setInfoOverview}}>
            {children}
        </InfoOverviewContext.Provider>
    )
}

export {InfoOverviewContext, InfoOverviewProvider}