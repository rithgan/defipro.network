import React from 'react'
import {
	Box,
	Card,
	CardHeader,
	CardContent,
	Typography,
	Paper,
	Button,
	TextField,
} from '@mui/material'

const Affiliate = () => {
	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<Card>
					<CardHeader title="Affiliate Program"></CardHeader>
					<CardContent>
						<Typography>1 LVL (your invited user) - 7%</Typography>
						<Typography>2 LVL (user invited by your 1 lvl) - 3%</Typography>
						<Typography>3 LVL - 1.5%</Typography>
						<Typography>4 LVL - 1%</Typography>
						<Typography>5 LVL - 0.5%</Typography>
					</CardContent>
					<Paper
						component="form"
						sx={{
							p: '2px 4px',
							display: 'inline-block',
							alignItems: 'center',
							width: 200,
						}}
					>
						<Typography>You personal link:</Typography>
						<TextField id="outlined-basic" variant="outlined"></TextField>
						<Button variant="contained">Copy</Button>
					</Paper>
					<CardContent>
						<Typography>Invited users: 0</Typography>
						<Typography>Total Earnings: 0 BNB</Typography>
					</CardContent>
				</Card>
			</Box>
		</>
	)
}

export default Affiliate
