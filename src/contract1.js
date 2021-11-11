import Web3 from 'web3'
import modal from './modal'
import busdabi from './busdabi'
import busdTokenabi from './busdTokenabi'

// BUSD addr and abi
const addr = '0x35E58aAa00DD758049093ED7076478f5094c6d8A' //development
const busd = busdabi

const token = '0xAC212351dC5E1d056D5a36E00A62BA748CbF694c' //development
const tokenabi = busdTokenabi

//BUSD contracts
let contractBUSD = async () => {
	let web3 = await modal()

	let busdContract = new web3.eth.Contract(busd, addr)
	return busdContract
}

let tokenBUSD = async () => {
	let web3 = await modal()
	let busdToken = new web3.eth.Contract(tokenabi, token)
	return busdToken
}

//BUSD functions
export const approveContract = async (value, fromAddr) => {
	let busdContract = await tokenBUSD()
	console.log(busdContract.methods)
	console.log(fromAddr)
	let uint256 = value * 1000000000000000000

	busdContract.methods
		.approve('0x35E58aAa00DD758049093ED7076478f5094c6d8A')
		.send({
			// value: uint256,
			from: '0x35E58aAa00DD758049093ED7076478f5094c6d8A',
		})
		.then((res) => console.log(res))
}

export const stakeContractBusd = async (value, level, fromAddr) => {
	let busdContract = await contractBUSD()
	let regx = /([0x])\w+/
	let referralAddr = regx.exec(window.location.search)
	console.log(referralAddr)
	console.log(busdContract.methods)
	if (referralAddr !== null) {
		let refAddr = referralAddr[0].toString()
		console.log(refAddr)
		busdContract.methods
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
		busdContract.methods
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
