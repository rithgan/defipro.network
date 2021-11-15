import React from 'react'
import LaunchIcon from '@mui/icons-material/Launch'
import PropTypes from 'prop-types'

const style = {
	textAlign: 'center',
	fontSize: '1.1rem',
	lineHeight: '2.225rem',
	fontWeight: '500',

	paddingBottom: '16px',
	textTransform: 'capitalize',
	letterSpacing: '1px',
	textDecoration: 'underlined',
	width: '100%',
	color: '#fff',
}
const Footer = ({ token }) => {
	return (
		<>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					width: '100%',
					alignItem: 'center',
				}}
			>
				<a
					style={style}
					href={
						token === 'BNB'
							? 'https://bscscan.com/address/0xac07e4b30d3559774f18c028afbad006291c8c3e#code'
							: token === 'BUSD'
							? 'https://bscscan.com/address/0x2782912E53f7B3101FD8512130A61A2266bEFAEb#code'
							: 'https://bscscan.com/address/0x11d4d0b5a63D77d9F0e405364c26De7eca239F02#code'
					}
					target="_blank"
					rel="noreferrer"
				>
					View Contract
					<LaunchIcon sx={{ verticalAlign: 'middle' }} />
				</a>
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					width: '100%',
					alignItem: 'center',
				}}
			>
				<a
					style={style}
					href="https://pdfhost.io/v/dt1dbnbCL_BitFarms_User_Guide"
					target="_blank"
					rel="noreferrer"
				>
					User Guide(PDF)
					<LaunchIcon sx={{ verticalAlign: 'middle' }} />
				</a>
			</div>
		</>
	)
}

Footer.propTypes = {
	token: PropTypes.string,
}

export default Footer
