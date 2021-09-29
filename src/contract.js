import Web3 from 'web3'
import modal from './modal'
import bnbabi from './abi'

const addr = '0x1E6b54f079157E58CC9b116F924B384509b63F82'
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
	bnbContract.methods
		.invest('0x1E6b54f079157E58CC9b116F924B384509b63F82', level)
		.send({
			value: value * 1000000000000000000,
			from: fromAddr,
			// gasPrice: '100000000',
		})
		.then((res) => {
			return console.log()
		})
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
