import React from 'react'

const BrowserPrev = () => {
	return (
		<div className="mockup-browser border bg-base-300 lg:w-[800px] my-14 min-h-96 flex flex-col ">
			<div className="mockup-browser-toolbar">
				<div className="input">https://dailytask.com/day01</div>
			</div>
			<div className="flex justify-start py-2 px-2 bg-base-200 flex-1 flex-col ">
				<p>Name: Prakash Raja</p>
				<p>symbolName: {`¶®@|<@$|-| ®@j@`}</p>
				<p>age: 22</p>
			</div>
		</div>
	)
}
export default BrowserPrev
