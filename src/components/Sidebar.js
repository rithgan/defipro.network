import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import MenuIcon from '@mui/icons-material/Menu'

export default function TemporaryDrawer() {
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	})

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return
		}

		setState({ ...state, [anchor]: open })
	}

	const list = (anchor) => (
		<Box
			sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				{/* {['Inbox', 'Starred', 'Send email','Drafts'].map((text, index) => ( */}
				<ListItem button key={'Earn'}>
					{/* <ListItemIcon> */}
					{/* 	{index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
					{/* </ListItemIcon> */}
					<ListItemText primary={'Earn'} />
				</ListItem>
				{/* ))} */}
			</List>
		</Box>
	)

	return (
		<div>
			<React.Fragment key={'left'}>
				<MenuIcon onClick={toggleDrawer('left', true)} />
				{/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
				<Drawer
					anchor={'left'}
					open={state['left']}
					onClose={toggleDrawer('left', false)}
				>
					{list('left')}
				</Drawer>
			</React.Fragment>
		</div>
	)
}
