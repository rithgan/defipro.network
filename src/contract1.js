import Web3 from 'web3'
import modal from './modal'
import busdabi from './busdabi'
import busdTokenabi from './busdTokenabi'

// BUSD addr and abi
const addr = '0x35E58aAa00DD758049093ED7076478f5094c6d8A' //development
const busd = busdabi

//BUSD contracts
let contractBUSD = async () => {
	let web3 = await modal()

	let busdContract = new web3.eth.Contract(busd, addr)
	return busdContract
}

//BUSD functions

export const stakeContractBusd = async (value, level, fromAddr) => {
	let busdContract = await contractBUSD()
	let regx = /([0x])\w+/
	let referralAddr = regx.exec(window.location.search)
	console.log(referralAddr)
	console.log(busdContract.methods)
	let val0 = value * 1000000000000000000
	let uint256 = val0.toString()
	let val = Web3.utils.toWei(uint256)
	if (referralAddr !== null) {
		let refAddr = referralAddr[0].toString()
		console.log(refAddr)
		busdContract.methods
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
		busdContract.methods
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

export const harvestContract = async (fromAddr) => {
	let busdContract = await contractBUSD()
	busdContract.methods
		.withdraw()
		.send({
			from: fromAddr,
		})
		.then((res) => console.log(res))
}

export const getInviteUsers = async () => {
	let busdContract = await contractBUSD()
	let web3 = await modal()
	let fromAddr = await web3.eth.getAccounts().then((response) => response[0])
	let result = busdContract.methods
		.getUserTotalReferrals(fromAddr)
		.call()
		.then((res) => res)
	return result
}

export const getEarnedBnb = async () => {
	let busdContract = await contractBUSD()
	let web3 = await modal()
	let fromAddr = await web3.eth.getAccounts().then((response) => response[0])
	let result = busdContract.methods
		.getUserReferralTotalBonus(fromAddr)
		.call()
		.then((res) => res)
	return result
}

export const getTotalDeposit = async () => {
	let busdContract = await contractBUSD()

	let result = busdContract.methods
		.totalInvested()
		.call()
		.then((res) => res)
	return result

	// console.log(value)
}
export const getTotalUserDeposit = async () => {
	let busdContract = await contractBUSD()
	let web3 = await modal()
	let fromAddr = await web3.eth.getAccounts().then((response) => response[0])
	let result = busdContract.methods
		.getUserTotalDeposits(fromAddr)
		.call()
		.then((res) => res)
	return result

	// console.log(value)
}

export const getTotalUserWithdrawn = async () => {
	let busdContract = await contractBUSD()
	let web3 = await modal()
	let fromAddr = await web3.eth.getAccounts().then((response) => response[0])
	let result = busdContract.methods
		.getUserTotalWithdrawn(fromAddr)
		.call()
		.then((res) => res)
	return result

	// console.log(value)
}

export const getTotalUserEarnings = async () => {
	let busdContract = await contractBUSD()
	let web3 = await modal()
	let fromAddr = await web3.eth.getAccounts().then((response) => response[0])
	let result = busdContract.methods
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
