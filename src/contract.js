import Web3 from 'web3'
import modal from './modal'
import bnbabi from './abi'

const addr = '0xFCEFd42238a209228Cf0DfbA201f08d7a949374d'
const abi = bnbabi
// const web3 = modal()

let contract = async () => {
	let web3 = await modal()

	let bnbContract = new web3.eth.Contract(abi, addr)
	return bnbContract
}

//args - value,level(0,1,2,3),fromAddr, toAddr is smart contract address
export const stakeContract = async (value, level, fromAddr) => {
	// 	let web3 = await modal()
	//
	// 	let contract = new web3.eth.Contract(abi, addr)
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

export const getEarnedBnb = async () => {}

export const getInviteUsers = async () => {}

export const getTotalUserEarnings = async () => {}

export const getTotalDeposit = async () => {}

export const getTotalWithdrawal = async () => {}
