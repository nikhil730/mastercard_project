import React from 'react'
import Description from '../Data/Description'

export const DescriptionPage = (props) => {
  return (
    <div className="DescriptionPage">
        <h3>{Description[props.index].describe}</h3>
    </div>
  )
}
