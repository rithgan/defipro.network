import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => {
	return (
		<>
			<Link to="/" className="link">
				BNB |
			</Link>
			<Link to="/busd" className="link">
				BUSD |
			</Link>
			<Link to="/bfm" className="link">
				BFM |
			</Link>
		</>
	)
}

export default Links
