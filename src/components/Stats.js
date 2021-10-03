import React, { useState, useEffect } from 'react'
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
import { getEarnedBnb, getInviteUsers } from '../contract'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import { theme } from './theme'

const themeStats = createTheme({
	...theme,
	components: {
		MuiTypography: {
			styleOverrides: {
				root: {
					lineHeight: '1.575',
					fontSize: '1.5rem',
				},
			},
		},
		MuiCardContent: {
			styleOverrides: {
				root: {
					paddingBottom: '16px !important',
				},
			},
		},
	},
})

const Stats = () => {
	const [user, setUser] = useState(0)
	const [total, setTotal] = useState(0)

	// 	const fetchUser = () => {
	// 		getInviteUsers()
	// 			.then((users) => {
	// 				if (users === 'undefined') console.log('no')
	// 				else setUser(users)
	// 			})
	// 			.catch((error) => console.log(error))
	// 	}
	// 	// useEffect(() => {
	// 	// 	fetchUser()
	// 	// }, [user])
	// 	// const fetchUser = async () => {
	// 	// 	try {
	// 	// 		const user = await getInviteUsers()
	// 	// 		console.log(user)
	// 	// 		setUser(user)
	// 	// 	} catch (e) {
	// 	// 		console.log(e)
	// 	// 	}
	// 	// }
	// 	// useEffect(() => {
	// 	// 	fetchUser()
	// 	// }, [])
	// 	// 	const fetchPeople = async () => {
	// 	//
	// 	// 			const people = await getInviteUsers()
	// 	// 	}
	// 	//
	// 	// 	console.log(fetchPeople())
	// 	// setUser(people)
	// 	const [deposit, setDeposit] = useState(0)
	// 	// const fetchDeposit = async () => {
	// 	// 	await getTotalDeposit()
	// 	// 		.then((users) => {
	// 	// 			setDeposit(users)
	// 	// 		})
	// 	// 		.catch((error) => console.log(error))
	// 	// }
	// 	// const fetchDeposit = async () => {
	// 	// 	try {
	// 	// 		const deposit = await getTotalDeposit()
	// 	// 		if (deposit !== 'undefined') {
	// 	// 			setDeposit(deposit)
	// 	// 			console.log(deposit)
	// 	// 			console.log('Deposit is done')
	// 	// 		} else console.log('Deposit is undefined')
	// 	// 	} catch (e) {
	// 	// 		console.log(e)
	// 	// 	}
	// 	// }
	// 	// useEffect(() => {
	// 	// 	fetchDeposit()
	// 	// }, [deposit, fetchDeposit])
	// 	// 	const handleDeposit = async () => {
	// 	// 		let totalDeposit = await getTotalDeposit()
	// 	//
	// 	// setDeposit(getTotalDeposit())
	// 	// 	}
	//
	// 	useEffect(() => {
	// 		const fetch = async () => await setDeposit(getTotalDeposit())
	// 	}, [])
	// 	console.log(user + ' state')
	let totalDeposit = getEarnedBnb().then((res) => setTotal(res))
	let users = getInviteUsers().then((res) => setUser(res))

	return (
		<ThemeProvider theme={themeStats}>
			<Box
				sx={{
					flexGrow: 1,
					marginBottom: '16px',
					background: 'transparent',
				}}
			>
				<Card
					sx={{
						borderRadius: '16px',
						boxShadow: '0 0 8px 2px rgb(0 0 0 / 8%)',
					}}
				>
					<CardContent>
						<Typography sx={{ marginTop: '0', marginBottom: '1rem' }}>
							Invited users: {user}
						</Typography>
						<Typography sx={{ marginTop: '0' }}>
							Total Earnings: {total / 1000000000000000000} BNB
						</Typography>
						{/* <Typography sx={{ marginTop: '0', marginBottom: '1rem' }}> */}
						{/* 	{`Total Referral Deposit: 0 BNB`} */}
						{/* </Typography> */}
						{/* <Typography sx={{ marginTop: '0', marginBottom: '1rem' }}> */}
						{/* 	{`Total Referral Earnings: 0 BNB`} */}
						{/* </Typography> */}
					</CardContent>
				</Card>
			</Box>
		</ThemeProvider>
	)
}

export default Stats
