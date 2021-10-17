import Web3 from 'web3'
import modal from './modal'
import bnbabi from './abi'

const addr = '0x0042dC93997D14De820e481F602a6d33D52523E4'
const abi = bnbabi
// const web3 = modal()

let contract = async () => {
	let web3 = await modal()

	let bnbContract = new web3.eth.Contract(abi, addr)
	return bnbContract
}

export const stakeContract = async (value, level, fromAddr) => {
	let bnbContract = await contract()
	let regx = /([0x])\w+/
	let referralAddr = regx.exec(window.location.search)
	if (referralAddr !== null) {
		let refAddr = referralAddr[0].toString()
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
	let bnbContract = await contract()
	bnbContract.methods
		.withdraw()
		.send({
			from: fromAddr,
		})
		.then((res) => console.log(res))
}

export const getInviteUsers = async () => {
	let bnbContract = await contract()
	let web3 = await modal()
	let fromAddr = await web3.eth.getAccounts().then((response) => response[0])
	let result = bnbContract.methods
		.getUserTotalReferrals(fromAddr)
		.call()
		.then((res) => res)
	return result
}

export const getEarnedBnb = async () => {
	let bnbContract = await contract()
	let web3 = await modal()
	let fromAddr = await web3.eth.getAccounts().then((response) => response[0])
	let result = bnbContract.methods
		.getUserReferralTotalBonus(fromAddr)
		.call()
		.then((res) => res)
	return result
}

export const getTotalDeposit = async () => {
	let bnbContract = await contract()

	let result = bnbContract.methods
		.totalInvested()
		.call()
		.then((res) => res)
	return result

	// console.log(value)
}
export const getTotalUserDeposit = async () => {
	let bnbContract = await contract()
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
	let bnbContract = await contract()
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
	let bnbContract = await contract()
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
