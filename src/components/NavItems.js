import React, { useContext } from 'react'
// import PropTypes from 'prop-types'
import { tokensContext } from '../context/token-context'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { theme } from './theme'
import { ThemeProvider, createTheme, styled } from '@mui/material/styles'

const themeLinks = createTheme({
	...theme,
	components: {
		MuiMenu: {
			styleOverrides: {
				paper: {
					width: '148px',
					borderRadius: '16px !important',
				},
			},
		},
	},
})

const NavItems = ({ width }) => {
	const tokens = useContext(tokensContext)
	console.log(tokens)
	let width1 = width.toString() + 'px'
	const [anchorEl, setAnchorEl] = React.useState(null)
	const open = Boolean(anchorEl)
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}
	return (
		<>
			<ThemeProvider theme={themeLinks}>
				<Button
					id="basic-button"
					aria-controls="basic-menu"
					aria-haspopup="true"
					aria-expanded={open ? 'true' : undefined}
					onClick={handleClick}
				>
					Earn
				</Button>
				<Menu
					id="basic-menu"
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					MenuListProps={{
						'aria-labelledby': 'basic-button',
					}}
				>
					<MenuItem onClick={handleClose}>
						<Link to="/" class="link">
							BNB
						</Link>
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<Link to="/busd" class="link">
							BUSD
						</Link>
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<Link to="/bfm" class="link">
							BFM
						</Link>
					</MenuItem>
				</Menu>
				<Tooltip title="Coming Soon">
					<Button
						id="basic-button"
						// aria-controls="basic-menu"
						// aria-haspopup="true"
						// aria-expanded={open ? 'true' : undefined}
						// onClick={handleClick}
					>
						<span className="disable">Swap</span>
					</Button>
				</Tooltip>
				{/* <span className="subnav"> */}
				{/* 	<Button className="subnavbtn"> */}
				{/* 		<span>Earn</span> */}
				{/* 	</Button> */}
				{/* 	<Tooltip title="Coming Soon"> */}
				{/* 		<Button className=""> */}
				{/* 			<span>Swap</span> */}
				{/* 		</Button> */}
				{/* 	</Tooltip> */}
				{/* 	<div */}
				{/* 		className="subnav-content" */}
				{/* 		style={{ */}
				{/* 			inset: '0px auto auto 0px', */}
				{/* 			transform: `translate(${width1},64px)`, */}
				{/* 		}} */}
				{/* 	> */}
				{/* 		<Link to="/" className="link"> */}
				{/* 			BNB */}
				{/* 		</Link> */}
				{/* 		<br /> */}
				{/* 		<Link to="/busd" className="link"> */}
				{/* 			BUSD */}
				{/* 		</Link> */}
				{/* 		<br /> */}
				{/* 		<Link to="/bfm" className="link"> */}
				{/* 			BFM */}
				{/* 		</Link> */}
				{/* 		<br /> */}
				{/* 	</div> */}
				{/* </span> */}
			</ThemeProvider>
		</>
	)
}

// const SubItems = () => {
// 	return (
// 		<div className="subnav-content">
// 			<Link to="/" className="link">
// 				BNB
// 			</Link>
// 			<Link to="/busd" className="link">
// 				BUSD
// 			</Link>
// 			<Link to="/bfm" className="link">
// 				BFM
// 			</Link>
// 		</div>
// 	)
// }

NavItems.propTypes = {
	width: PropTypes.number,
}

export default NavItems

// NavItems.propTypes = {
// 	tokens: PropTypes.Array,
// }
