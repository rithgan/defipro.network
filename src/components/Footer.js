import React from 'react'
import LaunchIcon from '@mui/icons-material/Launch'

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
const Footer = () => {
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
					href="https://bscscan.com/address/0xac07e4b30d3559774f18c028afbad006291c8c3e#code"
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

export default Footer
