import React from 'react'
import PropTypes from 'prop-types'

const Image = (props) => {
	return <img src={props.src} alt="yellow bnc" width="80px" />
}

Image.propTypes = {
	src: PropTypes.string,
}

export default Image
