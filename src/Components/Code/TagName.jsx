const TagName = ({children}) => {
	return (
		<>
		&lt;<span className={`text-red-400`}>{children}</span>&gt;
		</>
	)
}
export default TagName
