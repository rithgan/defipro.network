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
import modal from '../modal'
import { theme } from './theme'

const levels = [0, 1, 2, 3]

const HeadText = styled(Typography)(() => ({
	textAlign: 'center',
	fontSize: '2rem',
	lineHeight: '2.225rem',
	fontWeight: '500',
	color: '#fff',
}))

const ItemHeading = styled(`h4`)(() => ({
	marginTop: '0px',
	marginBottom: '0px',
	marginLeft: '0.75rem',
	paddingBottom: '0.35rem',
	color: '#fff',
	textTransform: 'uppercase',
	fontSize: '0.9rem',
	letterSpacing: '0.1rem',
	lineHeight: '2',
}))

const ItemSection = styled(`section`)(() => ({
	width: '100%',
	padding: '0px !important',
}))

const Item = styled(Card)(({ theme }) => ({
	// ...theme.typography.body2,
	paddingTop: '2rem',
	paddingBottom: '2rem',
	// textAlign: 'center',
	color: theme.palette.text.secondary,
	borderRadius: '16px',
	boxShadow: '0 0 8px 2px rgb(0 0 0 / 8%)',
	// display: 'flex',
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
	textAlign: 'center',
	fontWeight: '600',
}))
const LowerText = styled(Typography)(({ theme }) => ({
	...theme.typography.body2,
	textAlign: 'center',
}))

const ItemInput = styled(InputBase)(() => ({
	marginLeft: '0.75rem',
	marginRight: '0.75rem',
	// paddingLeft: '0.25rem',
	// paddingRight: '0.25rem',
	padding: '0.25rem 0.35rem',
	background: '#2c2a2a !important',
	borderRadius: '4px',
}))

const ItemButton = styled(Button)(() => ({}))

const PoolCards = () => {
	const [level0Value, setLevel0Value] = useState('')
	const [level1Value, setLevel1Value] = useState('')
	const [level2Value, setLevel2Value] = useState('')
	const [level3Value, setLevel3Value] = useState('')
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
		if (value >= 0.05 && fromAddr !== '') stakeContract(value, level, fromAddr)
	}
	return (
		<>
			<ThemeProvider theme={theme}>
				<Box
					sx={{ flexGrow: 1, marginBottom: '16px', background: 'transparent' }}
				>
					<Grid sx={{ paddingTop: '16px' }} container spacing={2} mt={1}>
						<Grid item md={12}>
							<HeadText>Deposit BNB</HeadText>
						</Grid>
						{/* Wault 1 */}
						<Grid item xs={12} md={6} lg={3}>
							<ItemHeading>Wault A</ItemHeading>
							<ItemSection>
								<Item>
									<ItemContainer>
										<ItemContent>
											<UpperText>365</UpperText>
											<LowerText>Days</LowerText>
										</ItemContent>
										<ItemContent>
											<UpperText>2%</UpperText>
											<LowerText>Daily %</LowerText>
										</ItemContent>
									</ItemContainer>
									<ItemContainer style={{ marginTop: '1rem' }}>
										<ItemContent>
											<UpperText>730%</UpperText>
											<LowerText>APR</LowerText>
										</ItemContent>
										<ItemContent>
											<UpperText>0.05</UpperText>
											<LowerText>Min Deposit</LowerText>
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
										<ItemContent>
											<ItemButton
												color="secondary"
												onClick={() => deposit(levels[0])}
												variant="contained"
											>
												Deposit
											</ItemButton>
										</ItemContent>
									</ItemContainer>
								</Item>
							</ItemSection>
						</Grid>
						{/* Wault 2 */}
						<Grid item xs={12} md={6} lg={3}>
							<ItemHeading>Wault B</ItemHeading>
							<ItemSection>
								<Item>
									<ItemContainer>
										<ItemContent>
											<UpperText>30</UpperText>
											<LowerText>Days</LowerText>
										</ItemContent>
										<ItemContent>
											<UpperText>4%</UpperText>
											<LowerText>Daily %</LowerText>
										</ItemContent>
									</ItemContainer>
									<ItemContainer style={{ marginTop: '1rem' }}>
										<ItemContent>
											<UpperText>120%</UpperText>
											<LowerText>APR</LowerText>
										</ItemContent>
										<ItemContent>
											<UpperText>0.05</UpperText>
											<LowerText>Min Deposit</LowerText>
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
										<ItemContent>
											<ItemButton
												color="secondary"
												onClick={() => deposit(levels[1])}
												variant="contained"
											>
												Deposit
											</ItemButton>
										</ItemContent>
									</ItemContainer>
								</Item>
							</ItemSection>
						</Grid>
						{/* Wault 3 */}
						<Grid item xs={12} md={6} lg={3}>
							<ItemHeading>Wault C</ItemHeading>
							<ItemSection>
								<Item>
									<ItemContainer>
										<ItemContent>
											<UpperText>60</UpperText>
											<LowerText>Days</LowerText>
										</ItemContent>
										<ItemContent>
											<UpperText>3%</UpperText>
											<LowerText>Daily %</LowerText>
										</ItemContent>
									</ItemContainer>
									<ItemContainer style={{ marginTop: '1rem' }}>
										<ItemContent>
											<UpperText>180%</UpperText>
											<LowerText>APR</LowerText>
										</ItemContent>
										<ItemContent>
											<UpperText>0.05</UpperText>
											<LowerText>Min Deposit</LowerText>
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
										<ItemContent>
											<ItemButton
												color="secondary"
												onClick={() => deposit(levels[2])}
												variant="contained"
											>
												Deposit
											</ItemButton>
										</ItemContent>
									</ItemContainer>
								</Item>
							</ItemSection>
						</Grid>
						{/* Wault 4 */}
						<Grid item xs={12} md={6} lg={3}>
							<ItemHeading>Wault D</ItemHeading>
							<ItemSection>
								<Item>
									<ItemContainer>
										<ItemContent>
											<UpperText>120</UpperText>
											<LowerText>Days</LowerText>
										</ItemContent>
										<ItemContent>
											<UpperText>2.5%</UpperText>
											<LowerText>Daily %</LowerText>
										</ItemContent>
									</ItemContainer>
									<ItemContainer style={{ marginTop: '1rem' }}>
										<ItemContent>
											<UpperText>300%</UpperText>
											<LowerText>APR</LowerText>
										</ItemContent>
										<ItemContent>
											<UpperText>0.05</UpperText>
											<LowerText>Min Deposit</LowerText>
										</ItemContent>
									</ItemContainer>
									<ItemContainer style={{ marginTop: '1rem' }}>
										<ItemContent>
											<ItemInput
												value={level3Value}
												onChange={(e) => setLevel3Value(e.target.value)}
												placeholder="Enter amount"
												inputProps={{ 'aria-label': 'enter bnb amount' }}
											/>
										</ItemContent>
										<ItemContent>
											<ItemButton
												color="secondary"
												onClick={() => deposit(levels[3])}
												variant="contained"
											>
												Deposit
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

export default PoolCards
