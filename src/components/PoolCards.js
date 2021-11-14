import React, { useState } from 'react'
import {
	Box,
	Card,
	CardHeader,
	CardContent,
	CardActions,
	Button,
	Typography,
	Paper,
	Grid,
	InputBase,
} from '@mui/material'
import { styled, ThemeProvider } from '@mui/material/styles'
import { stakeContract } from '../contract'
import { stakeContractBusd } from '../contract1'
import { stakeContractBfm } from '../contract3'
import { approveContract, checkApproveStatus } from '../contract2'
import { approveContractBfm, checkApproveStatusBfm } from '../contract4'
import modal from '../modal'
import { theme } from './theme'
import Image from './WaultImage'
import CalculatorModal from './CalculatorModal'
import PropTypes from 'prop-types'

const levels = [0, 1, 2, 3]

const HeadText = styled(Typography)(() => ({
	textAlign: 'center',
	fontSize: '2rem',
	lineHeight: '2.225rem',
	fontWeight: '500',
	color: '#fff',
	[theme.breakpoints.down('md')]: {
		visibility: 'hidden',
	},
	paddingBottom: '16px',
}))

const ItemHeading = styled(`h4`)(() => ({
	marginTop: '0px',
	marginBottom: '0px',
	marginLeft: '0.75rem',
	// paddingBottom: '0.35rem',
	color: '#e3af00',
	textTransform: 'capitalize',
	fontSize: '1.5rem',
	// letterSpacing: '0.1rem',
	lineHeight: '2',
}))

const ItemSection = styled(`section`)(() => ({
	width: '100%',
	padding: '0px !important',
}))

const Item = styled(Card)(({ theme }) => ({
	// ...theme.typography.body2,
	paddingTop: '0rem',
	paddingBottom: '2rem',
	// textAlign: 'center',
	color: theme.palette.text.secondary,
	borderRadius: '16px',
	// boxShadow: '0 0 8px 2px #d4a3003d',
	// display: 'flex',
	background: 'rgb(19, 20, 25)',
}))

const ItemContainer = styled(`div`)(({ theme }) => ({
	display: 'flex',
}))

const ItemContent = styled(CardContent)(({ theme }) => ({
	flex: '1 1 0%',
	textAlign: 'center',
	padding: '0',
	paddingBottom: '0 !important',
}))

const UpperText = styled(Typography)(({ theme }) => ({
	...theme.typography.h5,
	// textAlign: 'center',
	fontWeight: '400 !important',
	fontSize: '1.1rem',
	textAlign: 'start',
	paddingLeft: '1.875rem',
	color: 'white',
	marginTop: '12px',
}))
const LowerText = styled(Typography)(({ theme }) => ({
	...theme.typography.body2,
	textAlign: 'center',
	color: 'white',
}))

const ItemInput = styled(InputBase)(() => ({
	marginLeft: '0.75rem',
	marginRight: '0.75rem',
	// paddingLeft: '0.25rem',
	// paddingRight: '0.25rem',
	padding: '0.35rem',
	background:
		'linear-gradient(rgb(97, 103, 116) 0%, rgb(64, 63, 76) 100%) !important',
	borderRadius: '4px',
	width: '80%',
	marginBottom: '1rem',
}))

const ItemButton = styled(Button)(() => ({
	width: '80%',
	borderRadius: '4px',
	color: '#fff',
}))

const waultA = {
	row1: {
		d: '1',
		r: '2%',
		i: '0.02',
	},
	row2: {
		d: '7',
		r: '14.9%',
		i: '0.149',
	},
	row3: {
		d: '30',
		r: '81.1%',
		i: '0.811',
	},
	row4: {
		d: '90',
		r: '494.3%',
		i: '4.943',
	},
}
const waultD = {
	row1: {
		d: '1',
		r: '4%',
		i: '0.04',
	},
	row2: {
		d: '7',
		r: '31.6%',
		i: '0.316',
	},
	row3: {
		d: '30',
		r: '224.3%',
		i: '2.243',
	},
	row4: {
		d: '90',
		r: '3311.9%',
		i: '33.119',
	},
}
const waultC = {
	row1: {
		d: '1',
		r: '3%',
		i: '0.03',
	},
	row2: {
		d: '7',
		r: '23%',
		i: '0.23',
	},
	row3: {
		d: '30',
		r: '142.7%',
		i: '1.427',
	},
	row4: {
		d: '90',
		r: '1330%',
		i: '13.30',
	},
}
const waultB = {
	row1: {
		d: '1',
		r: '2.5%',
		i: '0.025',
	},
	row2: {
		d: '7',
		r: '18.9%',
		i: '0.189',
	},
	row3: {
		d: '30',
		r: '109.8%',
		i: '1.098',
	},
	row4: {
		d: '90',
		r: '822.9%',
		i: '8.229',
	},
}

const PoolCards = ({ token, approved }) => {
	const [level0Value, setLevel0Value] = useState('')
	const [level1Value, setLevel1Value] = useState('')
	const [level2Value, setLevel2Value] = useState('')
	const [level3Value, setLevel3Value] = useState('')
	// const approve = async () => {
	// 	let value
	// 	let status
	// 	// let response
	// 	let web3 = await modal()
	// 	let fromAddr = await web3.eth.getAccounts().then((response) => response[0])
	// 	if (fromAddr !== '')
	// 		status = approveContract(value, fromAddr).then((res) =>
	// 			stakeContractBusd(value, level, fromAddr)
	// 		)
	// 	// console.log(response)
	// }
	// console.log(status)
	// const status = checkApproveStatus(
	// 	'0x809ef2A48455EE591C3C69d177bAd58A5988db6e'
	// ).then((res) => setApproved(res))
	// status > 0 ? console.log(true) : console.log(false)
	const deposit = async (level) => {
		let value
		switch (level) {
			case 0:
				value = level0Value
				break
			case 1:
				value = level1Value
				break
			case 2:
				value = level2Value
				break
			case 3:
				value = level3Value
				break
			default:
				console.error('level is missing')
		}
		let web3 = await modal()
		let fromAddr = await web3.eth.getAccounts().then((response) => response[0])
		if (value >= 0.05 && fromAddr !== '') {
			// token === 'BNB'
			// 	? stakeContract(value, level, fromAddr)
			// 	: // : checkApproveStatus(fromAddr)
			// 	// ? approveContract(value, fromAddr)
			// 	approved
			// 	? stakeContractBusd(value, level, fromAddr)
			// 	: approveContract(value, fromAddr)

			switch (token) {
				case 'BNB':
					stakeContract(value, level, fromAddr)
					break
				case 'BUSD':
					approved
						? stakeContractBusd(value, level, fromAddr)
						: approveContract(value, fromAddr)
					break

				case 'BFM':
					approved
						? stakeContractBfm(value, level, fromAddr)
						: approveContractBfm(value, fromAddr)
					break
				default:
					null
			}
		}
	}
	return (
		<>
			<ThemeProvider theme={theme}>
				<Box
					sx={{ flexGrow: 1, marginBottom: '16px', background: 'transparent' }}
				>
					<Grid sx={{ paddingTop: '16px' }} container spacing={2} mt={1}>
						<Grid item md={12}>
							<HeadText>Stake {token}</HeadText>
						</Grid>
						{/* Wault 1 */}
						<Grid item xs={12} md={6} lg={3}>
							<ItemHeading sx={{ color: 'white !important' }}>
								Wault A
							</ItemHeading>
							<ItemSection>
								<Item>
									<ItemContainer
										sx={{
											marginBottom: '1rem',
											paddingTop: '24px',
											paddingBottom: '16px',
											background: 'rgb(38, 39, 43)',
										}}
									>
										<ItemContent>
											<ItemHeading>Earn {token}</ItemHeading>
											<LowerText>2% Daily ROI</LowerText>
										</ItemContent>
										<ItemContent>
											<Image
												src={
													token === 'BNB'
														? './bnc1.svg'
														: token === 'BUSD'
														? './BUSDWault.svg'
														: './BFMWault.svg'
												}
											/>
										</ItemContent>
									</ItemContainer>
									<ItemContainer>
										<ItemContent>
											<UpperText>APR</UpperText>
											{/* <LowerText>Days</LowerText> */}
										</ItemContent>
										<ItemContent>
											<UpperText>
												<span>
													730%
													<CalculatorModal
														sx={{
															cursor: 'pointer',
															fontSize: '1.3rem',
														}}
														wault={waultA}
													/>
												</span>
											</UpperText>
											{/* <LowerText>Daily %</LowerText> */}
										</ItemContent>
									</ItemContainer>
									<ItemContainer style={{ marginTop: '1rem' }}>
										<ItemContent>
											<UpperText>Days</UpperText>
											{/* <LowerText>APR</LowerText> */}
										</ItemContent>
										<ItemContent>
											<UpperText>365</UpperText>
											{/* <LowerText>Min Deposit</LowerText> */}
										</ItemContent>
									</ItemContainer>
									<ItemContainer style={{ marginTop: '1rem' }}>
										<ItemContent>
											<UpperText>Min Deposit</UpperText>
											{/* <LowerText>APR</LowerText> */}
										</ItemContent>
										<ItemContent>
											<UpperText>
												{token === 'BFM' || token === 'BNB' ? '0.05' : '1'}{' '}
												{token}
											</UpperText>
											{/* <LowerText>Min Deposit</LowerText> */}
										</ItemContent>
									</ItemContainer>
									<ItemContainer style={{ marginTop: '1rem' }}>
										<ItemContent>
											<ItemInput
												value={level0Value}
												onChange={(e) => setLevel0Value(e.target.value)}
												placeholder="Enter amount"
												inputProps={{ 'aria-label': 'enter bnb amount' }}
											/>
										</ItemContent>
									</ItemContainer>
									<ItemContainer>
										<ItemContent>
											<ItemButton
												color="secondary"
												onClick={() => deposit(levels[0])}
												variant="contained"
											>
												{token === 'BNB'
													? 'Deposit'
													: approved && (token === 'BUSD' || token === 'BFM')
													? 'Deposit'
													: 'Approve'}
											</ItemButton>
										</ItemContent>
									</ItemContainer>
								</Item>
							</ItemSection>
						</Grid>
						{/* Wault 2 */}
						<Grid item xs={12} md={6} lg={3}>
							<ItemHeading sx={{ color: 'white !important' }}>
								Wault B
							</ItemHeading>
							<ItemSection>
								<Item>
									<ItemContainer
										sx={{
											marginBottom: '1rem',
											paddingTop: '24px',
											paddingBottom: '16px',
											background: 'rgb(38, 39, 43)',
										}}
									>
										<ItemContent>
											<ItemHeading>Earn {token}</ItemHeading>
											<LowerText>2.5% Daily ROI</LowerText>
										</ItemContent>
										<ItemContent>
											<Image
												src={
													token === 'BNB'
														? './bnc1.svg'
														: token === 'BUSD'
														? './BUSDWault.svg'
														: './BFMWault.svg'
												}
											/>
										</ItemContent>
									</ItemContainer>
									<ItemContainer>
										<ItemContent>
											<UpperText>APR</UpperText>
											{/* <LowerText>Days</LowerText> */}
										</ItemContent>
										<ItemContent>
											<UpperText>
												<span>
													300%
													<CalculatorModal
														sx={{
															cursor: 'pointer',
															fontSize: '1.3rem',
														}}
														wault={waultB}
													/>
												</span>
											</UpperText>
											{/* <LowerText>Daily %</LowerText> */}
										</ItemContent>
									</ItemContainer>
									<ItemContainer style={{ marginTop: '1rem' }}>
										<ItemContent>
											<UpperText>Days</UpperText>
											{/* <LowerText>APR</LowerText> */}
										</ItemContent>
										<ItemContent>
											<UpperText>120</UpperText>
											{/* <LowerText>Min Deposit</LowerText> */}
										</ItemContent>
									</ItemContainer>
									<ItemContainer style={{ marginTop: '1rem' }}>
										<ItemContent>
											<UpperText>Min Deposit</UpperText>
											{/* <LowerText>APR</LowerText> */}
										</ItemContent>
										<ItemContent>
											<UpperText>
												{token === 'BFM' || token === 'BNB' ? '0.05' : '1'}{' '}
												{token}
											</UpperText>
											{/* <LowerText>Min Deposit</LowerText> */}
										</ItemContent>
									</ItemContainer>
									<ItemContainer style={{ marginTop: '1rem' }}>
										<ItemContent>
											<ItemInput
												value={level1Value}
												onChange={(e) => setLevel1Value(e.target.value)}
												placeholder="Enter amount"
												inputProps={{ 'aria-label': 'enter bnb amount' }}
											/>
										</ItemContent>
									</ItemContainer>
									<ItemContainer>
										<ItemContent>
											<ItemButton
												color="secondary"
												onClick={() => deposit(levels[1])}
												variant="contained"
											>
												{approved && (token === 'BUSD' || token === 'BFM')
													? 'Deposit'
													: 'Approve'}
											</ItemButton>
										</ItemContent>
									</ItemContainer>
								</Item>
							</ItemSection>
						</Grid>
						{/* Wault 3 */}
						<Grid item xs={12} md={6} lg={3}>
							<ItemHeading sx={{ color: 'white !important' }}>
								Wault C
							</ItemHeading>
							<ItemSection>
								<Item>
									<ItemContainer
										sx={{
											marginBottom: '1rem',
											paddingTop: '24px',
											paddingBottom: '16px',
											background: 'rgb(38, 39, 43)',
										}}
									>
										<ItemContent>
											<ItemHeading>Earn {token}</ItemHeading>
											<LowerText>3% Daily ROI</LowerText>
										</ItemContent>
										<ItemContent>
											<Image
												src={
													token === 'BNB'
														? './bnc1.svg'
														: token === 'BUSD'
														? './BUSDWault.svg'
														: './BFMWault.svg'
												}
											/>
										</ItemContent>
									</ItemContainer>
									<ItemContainer>
										<ItemContent>
											<UpperText>APR</UpperText>
											{/* <LowerText>Days</LowerText> */}
										</ItemContent>
										<ItemContent>
											<UpperText>
												<span>
													180%
													<CalculatorModal
														sx={{
															cursor: 'pointer',
															fontSize: '1.3rem',
														}}
														wault={waultC}
													/>
												</span>
											</UpperText>
											{/* <LowerText>Daily %</LowerText> */}
										</ItemContent>
									</ItemContainer>
									<ItemContainer style={{ marginTop: '1rem' }}>
										<ItemContent>
											<UpperText>Days</UpperText>
											{/* <LowerText>APR</LowerText> */}
										</ItemContent>
										<ItemContent>
											<UpperText>60</UpperText>
											{/* <LowerText>Min Deposit</LowerText> */}
										</ItemContent>
									</ItemContainer>
									<ItemContainer style={{ marginTop: '1rem' }}>
										<ItemContent>
											<UpperText>Min Deposit</UpperText>
											{/* <LowerText>APR</LowerText> */}
										</ItemContent>
										<ItemContent>
											<UpperText>
												{token === 'BFM' || token === 'BNB' ? '0.05' : '1'}{' '}
												{token}
											</UpperText>
											{/* <LowerText>Min Deposit</LowerText> */}
										</ItemContent>
									</ItemContainer>
									<ItemContainer style={{ marginTop: '1rem' }}>
										<ItemContent>
											<ItemInput
												value={level2Value}
												onChange={(e) => setLevel2Value(e.target.value)}
												placeholder="Enter amount"
												inputProps={{ 'aria-label': 'enter bnb amount' }}
											/>
										</ItemContent>
									</ItemContainer>
									<ItemContainer>
										<ItemContent>
											<ItemButton
												color="secondary"
												onClick={() => deposit(levels[2])}
												variant="contained"
											>
												{approved && (token === 'BUSD' || token === 'BFM')
													? 'Deposit'
													: 'Approve'}
											</ItemButton>
										</ItemContent>
									</ItemContainer>
								</Item>
							</ItemSection>
						</Grid>
						{/* Wault 4 */}
						<Grid item xs={12} md={6} lg={3}>
							<ItemHeading sx={{ color: 'white !important' }}>
								Wault D
							</ItemHeading>
							<ItemSection>
								<Item>
									<ItemContainer
										sx={{
											marginBottom: '1rem',
											paddingTop: '24px',
											paddingBottom: '16px',
											background: 'rgb(38, 39, 43)',
										}}
									>
										<ItemContent>
											<ItemHeading>Earn {token}</ItemHeading>
											<LowerText>4% Daily ROI</LowerText>
										</ItemContent>
										<ItemContent>
											<Image
												src={
													token === 'BNB'
														? './bnc1.svg'
														: token === 'BUSD'
														? './BUSDWault.svg'
														: './BFMWault.svg'
												}
											/>
										</ItemContent>
									</ItemContainer>
									<ItemContainer>
										<ItemContent>
											<UpperText>APR</UpperText>
											{/* <LowerText>Days</LowerText> */}
										</ItemContent>
										<ItemContent>
											<UpperText>
												<span>
													120%
													<CalculatorModal
														sx={{
															cursor: 'pointer',
															fontSize: '1.3rem',
														}}
														wault={waultD}
													/>
												</span>
											</UpperText>
											{/* <LowerText>Daily %</LowerText> */}
										</ItemContent>
									</ItemContainer>
									<ItemContainer style={{ marginTop: '1rem' }}>
										<ItemContent>
											<UpperText>Days</UpperText>
											{/* <LowerText>APR</LowerText> */}
										</ItemContent>
										<ItemContent>
											<UpperText>30</UpperText>
											{/* <LowerText>Min Deposit</LowerText> */}
										</ItemContent>
									</ItemContainer>
									<ItemContainer style={{ marginTop: '1rem' }}>
										<ItemContent>
											<UpperText>Min Deposit</UpperText>
											{/* <LowerText>APR</LowerText> */}
										</ItemContent>
										<ItemContent>
											<UpperText>
												{token === 'BFM' || token === 'BNB' ? '0.05' : '1'}{' '}
												{token}
											</UpperText>
											{/* <LowerText>Min Deposit</LowerText> */}
										</ItemContent>
									</ItemContainer>{' '}
									<ItemContainer style={{ marginTop: '1rem' }}>
										<ItemContent>
											<ItemInput
												value={level3Value}
												onChange={(e) => setLevel3Value(e.target.value)}
												placeholder="Enter amount"
												inputProps={{ 'aria-label': 'enter bnb amount' }}
											/>
										</ItemContent>
									</ItemContainer>
									<ItemContainer>
										<ItemContent>
											<ItemButton
												color="secondary"
												onClick={() => deposit(levels[3])}
												variant="contained"
											>
												{approved && (token === 'BUSD' || token === 'BFM')
													? 'Deposit'
													: 'Approve'}
											</ItemButton>
										</ItemContent>
									</ItemContainer>
								</Item>
							</ItemSection>
						</Grid>
					</Grid>
				</Box>
			</ThemeProvider>
		</>
	)
}

PoolCards.propTypes = {
	token: PropTypes.string,
	approved: PropTypes.bool,
}

export default PoolCards
