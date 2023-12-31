import React from 'react'

const ComponentTag = ({children}) => {
	return (
		<>
			&lt;<span className={`text-red-400`}>{children}</span>
		</>
	)
}
export default ComponentTag
