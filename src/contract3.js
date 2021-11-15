import Web3 from 'web3'
import modal from './modal'
import bfmabi from './bfmabi'
import bfmTokenabi from './bfmTokenabi'

// BFM addr and abi
const addr = '0x11d4d0b5a63D77d9F0e405364c26De7eca239F02' //prod
const bfm = bfmabi

//BFM contracts
let contractBFM = async () => {
	let web3 = await modal()

	let bfmContract = new web3.eth.Contract(bfm, addr)
	return bfmContract
}

//BFM functions

export const stakeContractBfm = async (value, level, fromAddr) => {
	let bfmContract = await contractBFM()
	let regx = /([0x])\w+/
	let referralAddr = regx.exec(window.location.search)
	console.log(referralAddr)
	console.log(bfmContract.methods)
	// let val0 = value * 1000000000000000000
	let val0 = Web3.utils.toWei(value)
	console.log(val0)
	let uint256 = val0.toString()
	let val = Web3.utils.toBN(uint256)
	if (referralAddr !== null) {
		let refAddr = referralAddr[0].toString()
		console.log(refAddr)
		bfmContract.methods
			.invest(refAddr, level, val)
			.send({
				// value: val,
				from: fromAddr,
				// gasPrice: '100000000',
			})
			.then((res) => {
				return console.log(res)
			})
	} else {
		bfmContract.methods
			.invest(addr, level, val)
			.send({
				// value: val,
				from: fromAddr,
				// gasPrice: '100000000',
			})
			.then((res) => {
				return console.log()
			})
	}
}

export const harvestContractBfm = async (fromAddr) => {
	let bfmContract = await contractBFM()
	bfmContract.methods
		.withdraw()
		.send({
			from: fromAddr,
		})
		.then((res) => console.log(res))
}

export const getInviteUsersBfm = async () => {
	let bfmContract = await contractBFM()
	let web3 = await modal()
	let fromAddr = await web3.eth.getAccounts().then((response) => response[0])
	let result = bfmContract.methods
		.getUserTotalReferrals(fromAddr)
		.call()
		.then((res) => res)
	return result
}

export const getEarnedBfm = async () => {
	let bfmContract = await contractBFM()
	let web3 = await modal()
	let fromAddr = await web3.eth.getAccounts().then((response) => response[0])
	let result = bfmContract.methods
		.getUserReferralTotalBonus(fromAddr)
		.call()
		.then((res) => res)
	return result
}

export const getTotalDepositBfm = async () => {
	let bfmContract = await contractBFM()

	let result = bfmContract.methods
		.totalInvested()
		.call()
		.then((res) => res)
	return result

	// console.log(value)
}
export const getTotalUserDepositBfm = async () => {
	let bfmContract = await contractBFM()
	let web3 = await modal()
	let fromAddr = await web3.eth.getAccounts().then((response) => response[0])
	let result = bfmContract.methods
		.getUserTotalDeposits(fromAddr)
		.call()
		.then((res) => res)
	return result

	// console.log(value)
}

export const getTotalUserWithdrawnBfm = async () => {
	let bfmContract = await contractBFM()
	let web3 = await modal()
	let fromAddr = await web3.eth.getAccounts().then((response) => response[0])
	let result = bfmContract.methods
		.getUserTotalWithdrawn(fromAddr)
		.call()
		.then((res) => res)
	return result

	// console.log(value)
}

export const getTotalUserEarningsBfm = async () => {
	let bfmContract = await contractBFM()
	let web3 = await modal()
	let fromAddr = await web3.eth.getAccounts().then((response) => response[0])
	let result = bfmContract.methods
		.getUserAvailable(fromAddr)
		.call()
		.then((res) => res)
	return result
}

// export const getTotalWithdrawalBfm = async () => {
// 	let web3 = await modal()
//
// 	let fromAddr = await web3.eth.getAccounts().then((response) => response[0])
// 	let result = web3.eth.getBalance(fromAddr).then((res) => res)
//
// 	return result
// }
