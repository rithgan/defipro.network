import Web3 from 'web3'
import modal from './modal'
import bnbabi from './bnbabi'

// BNB addr and abi
const addr = '0xac07e4B30D3559774F18c028AfBad006291c8c3E' //production
const bnb = bnbabi

//BNB contracts
let contractBNB = async () => {
	let web3 = await modal()

	let bnbContract = new web3.eth.Contract(bnb, addr)
	return bnbContract
}

//BNB functions
export const stakeContract = async (value, level, fromAddr) => {
	let bnbContract = await contractBNB()
	let regx = /([0x])\w+/
	let referralAddr = regx.exec(window.location.search)
	console.log(referralAddr)
	if (referralAddr !== null) {
		let refAddr = referralAddr[0].toString()
		console.log(refAddr)
		bnbContract.methods
			.invest(refAddr, level)
			.send({
				value: value * 1000000000000000000,
				from: fromAddr,
				// gasPrice: '100000000',
			})
			.then((res) => {
				return console.log()
			})
	} else {
		bnbContract.methods
			.invest(addr, level)
			.send({
				value: value * 1000000000000000000,
				from: fromAddr,
				// gasPrice: '100000000',
			})
			.then((res) => {
				return console.log()
			})
	}
}

export const harvestContract = async (fromAddr) => {
	let bnbContract = await contractBNB()
	bnbContract.methods
		.withdraw()
		.send({
			from: fromAddr,
		})
		.then((res) => console.log(res))
}

export const getInviteUsers = async () => {
	let bnbContract = await contractBNB()
	let web3 = await modal()
	let fromAddr = await web3.eth.getAccounts().then((response) => response[0])
	let result = bnbContract.methods
		.getUserTotalReferrals(fromAddr)
		.call()
		.then((res) => res)
	return result
}

export const getEarnedBnb = async () => {
	let bnbContract = await contractBNB()
	let web3 = await modal()
	let fromAddr = await web3.eth.getAccounts().then((response) => response[0])
	let result = bnbContract.methods
		.getUserReferralTotalBonus(fromAddr)
		.call()
		.then((res) => res)
	return result
}

export const getTotalDeposit = async () => {
	let bnbContract = await contractBNB()

	let result = bnbContract.methods
		.totalInvested()
		.call()
		.then((res) => res)
	return result

	// console.log(value)
}
export const getTotalUserDeposit = async () => {
	let bnbContract = await contractBNB()
	let web3 = await modal()
	let fromAddr = await web3.eth.getAccounts().then((response) => response[0])
	let result = bnbContract.methods
		.getUserTotalDeposits(fromAddr)
		.call()
		.then((res) => res)
	return result

	// console.log(value)
}

export const getTotalUserWithdrawn = async () => {
	let bnbContract = await contractBNB()
	let web3 = await modal()
	let fromAddr = await web3.eth.getAccounts().then((response) => response[0])
	let result = bnbContract.methods
		.getUserTotalWithdrawn(fromAddr)
		.call()
		.then((res) => res)
	return result

	// console.log(value)
}

export const getTotalUserEarnings = async () => {
	let bnbContract = await contractBNB()
	let web3 = await modal()
	let fromAddr = await web3.eth.getAccounts().then((response) => response[0])
	let result = bnbContract.methods
		.getUserAvailable(fromAddr)
		.call()
		.then((res) => res)
	return result
}

export const getTotalWithdrawal = async () => {
	let web3 = await modal()

	let fromAddr = await web3.eth.getAccounts().then((response) => response[0])
	let result = web3.eth.getBalance(fromAddr).then((res) => res)

	return result
}
