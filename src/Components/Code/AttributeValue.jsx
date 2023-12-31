import React from 'react'

const AttributeValue = ({children}) => {
	return (
		<span className={`text-indigo-200`}><span className={`text-pink-300`}>{`{`}</span>{children}<span className={`text-pink-300`}>{`}`}</span></span>
	)
}
export default AttributeValue
