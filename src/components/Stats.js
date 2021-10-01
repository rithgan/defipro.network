import React, { useState } from 'react'
import {
	Box,
	Card,
	CardHeader,
	CardContent,
	Typography,
	Paper,
	Button,
	// TextField,
	InputBase,
} from '@mui/material'
import { getTotalDeposit } from '../contract'

const Stats = () => {
	// 	const [deposit, setDeposit] = useState()
	// 	const handleDeposit = async () => {
	// 		let totalDeposit = await getTotalDeposit()
	//
	// 		setDeposit(totalDeposit)
	// 	}
	return (
		<Box
			sx={{
				flexGrow: 1,
			}}
		>
			<Card>
				<CardContent>
					<Typography sx={{ marginTop: '0', marginBottom: '1rem' }}>
						Invited users: 0
					</Typography>
					<Typography sx={{ marginTop: '0', marginBottom: '1rem' }}>
						Total Earnings: 0 BNB
					</Typography>
					<Typography sx={{ marginTop: '0', marginBottom: '1rem' }}>
						{`Total Deposit: 0 BNB`}
					</Typography>
				</CardContent>
			</Card>
		</Box>
	)
}

export default Stats
