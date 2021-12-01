const Web3 = require("web3");
const ethNetwork = 'https://rinkeby.infura.io/v3/f6815badb68e4563ba817dd956545cc1';

var isConnected = false;
const Address = "0xC586BeF4a0992C495Cf22e1aeEE4E446CECDee0E"; //1inch contract address
const abi = [{ "inputs": [{ "internalType": "contract IOneSplitMulti", "name": "impl", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "newImpl", "type": "address" }], "name": "ImplementationUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "contract IERC20", "name": "fromToken", "type": "address" }, { "indexed": true, "internalType": "contract IERC20", "name": "destToken", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "fromTokenAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "destTokenAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "minReturn", "type": "uint256" }, { "indexed": false, "internalType": "uint256[]", "name": "distribution", "type": "uint256[]" }, { "indexed": false, "internalType": "uint256[]", "name": "flags", "type": "uint256[]" }, { "indexed": false, "internalType": "address", "name": "referral", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "feePercent", "type": "uint256" }], "name": "Swapped", "type": "event" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "constant": true, "inputs": [], "name": "chi", "outputs": [{ "internalType": "contract IFreeFromUpTo", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "contract IERC20", "name": "asset", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "claimAsset", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "contract IERC20", "name": "fromToken", "type": "address" }, { "internalType": "contract IERC20", "name": "destToken", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "parts", "type": "uint256" }, { "internalType": "uint256", "name": "flags", "type": "uint256" }], "name": "getExpectedReturn", "outputs": [{ "internalType": "uint256", "name": "returnAmount", "type": "uint256" }, { "internalType": "uint256[]", "name": "distribution", "type": "uint256[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "contract IERC20", "name": "fromToken", "type": "address" }, { "internalType": "contract IERC20", "name": "destToken", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "parts", "type": "uint256" }, { "internalType": "uint256", "name": "flags", "type": "uint256" }, { "internalType": "uint256", "name": "destTokenEthPriceTimesGasPrice", "type": "uint256" }], "name": "getExpectedReturnWithGas", "outputs": [{ "internalType": "uint256", "name": "returnAmount", "type": "uint256" }, { "internalType": "uint256", "name": "estimateGasAmount", "type": "uint256" }, { "internalType": "uint256[]", "name": "distribution", "type": "uint256[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "contract IERC20[]", "name": "tokens", "type": "address[]" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256[]", "name": "parts", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "flags", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "destTokenEthPriceTimesGasPrices", "type": "uint256[]" }], "name": "getExpectedReturnWithGasMulti", "outputs": [{ "internalType": "uint256[]", "name": "returnAmounts", "type": "uint256[]" }, { "internalType": "uint256", "name": "estimateGasAmount", "type": "uint256" }, { "internalType": "uint256[]", "name": "distribution", "type": "uint256[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "isOwner", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "oneSplitImpl", "outputs": [{ "internalType": "contract IOneSplitMulti", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "renounceOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "contract IOneSplitMulti", "name": "impl", "type": "address" }], "name": "setNewImpl", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "contract IERC20", "name": "fromToken", "type": "address" }, { "internalType": "contract IERC20", "name": "destToken", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "minReturn", "type": "uint256" }, { "internalType": "uint256[]", "name": "distribution", "type": "uint256[]" }, { "internalType": "uint256", "name": "flags", "type": "uint256" }], "name": "swap", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "contract IERC20[]", "name": "tokens", "type": "address[]" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "minReturn", "type": "uint256" }, { "internalType": "uint256[]", "name": "distribution", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "flags", "type": "uint256[]" }], "name": "swapMulti", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "contract IERC20", "name": "fromToken", "type": "address" }, { "internalType": "contract IERC20", "name": "destToken", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "minReturn", "type": "uint256" }, { "internalType": "uint256[]", "name": "distribution", "type": "uint256[]" }, { "internalType": "uint256", "name": "flags", "type": "uint256" }, { "internalType": "address", "name": "referral", "type": "address" }, { "internalType": "uint256", "name": "feePercent", "type": "uint256" }], "name": "swapWithReferral", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "contract IERC20[]", "name": "tokens", "type": "address[]" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "minReturn", "type": "uint256" }, { "internalType": "uint256[]", "name": "distribution", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "flags", "type": "uint256[]" }, { "internalType": "address", "name": "referral", "type": "address" }, { "internalType": "uint256", "name": "feePercent", "type": "uint256" }], "name": "swapWithReferralMulti", "outputs": [{ "internalType": "uint256", "name": "returnAmount", "type": "uint256" }], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }]; //1inch ABI

try {
        const web3 = new Web3(new Web3.providers.HttpProvider(ethNetwork));
        isConnected = true;
        //document.getElementById("swap_button").disabled = false;
        //contract = new window.web3.eth.Contract(abi, Address);
        console.log("Connection Successfull!");
        console.log("Latest Block Number: ");
        web3.eth.getBlockNumber().then(console.log);

}
catch(e) {
        console.log("Connection Error!", e);
}

function isConnected(){
  return isConnected;
}




// const serverUrl = "https://r0obsqivojly.usemoralis.com:2053/server"; //Server url from moralis.io
// const appId = "lvyXHTvI63ZToRfnherNjXiKgt8JbAZP19Fl6KAO"; // Application id from moralis.io

// let currentTrade = {};
// let currentSelectSide;
// let tokens;

// async function init() {
//   await Moralis.start({ serverUrl, appId });
//   await Moralis.enableWeb3();
//   await listAvailableTokens();
//   currentUser = Moralis.User.current();
//   if (currentUser) {
//     document.getElementById("swap_button").disabled = false;
//   }
// }

// async function listAvailableTokens() {
//   const result = await Moralis.Plugins.oneInch.getSupportedTokens({
//     chain: "bsc", // The blockchain you want to use (eth/bsc/polygon)
//   });
//   tokens = result.tokens;
//   let parent = document.getElementById("token_list");
//   for (const address in tokens) {
//     let token = tokens[address];
//     let div = document.createElement("div");
//     div.setAttribute("data-address", address);
//     div.className = "token_row";
//     let html = `
//         <img class="token_list_img" src="${token.logoURI}">
//         <span class="token_list_text">${token.symbol}</span>
//         `;
//     div.innerHTML = html;
//     div.onclick = () => {
//       selectToken(address);
//     };
//     parent.appendChild(div);
//   }
// }

// function selectToken(address) {
//   closeModal();
//   console.log(tokens);
//   currentTrade[currentSelectSide] = tokens[address];
//   console.log(currentTrade);
//   renderInterface();
//   getQuote();
// }

// function renderInterface() {
//   if (currentTrade.from) {
//     document.getElementById("from_token_img").src = currentTrade.from.logoURI;
//     document.getElementById("from_token_text").innerHTML = currentTrade.from.symbol;
//   }
//   if (currentTrade.to) {
//     document.getElementById("to_token_img").src = currentTrade.to.logoURI;
//     document.getElementById("to_token_text").innerHTML = currentTrade.to.symbol;
//   }
// }

// async function login() {
//   try {
//     currentUser = Moralis.User.current();
//     if (!currentUser) {
//       currentUser = await Moralis.authenticate();
//     }
//     document.getElementById("swap_button").disabled = false;
//   } catch (error) {
//     console.log(error);
//   }
// }

// function openModal(side) {
//   currentSelectSide = side;
//   document.getElementById("token_modal").style.display = "block";
// }
// function closeModal() {
//   document.getElementById("token_modal").style.display = "none";
// }

// async function getQuote() {
//   if (!currentTrade.from || !currentTrade.to || !document.getElementById("from_amount").value) return;

//   let amount = Number(document.getElementById("from_amount").value * 10 ** currentTrade.from.decimals);

//   const quote = await Moralis.Plugins.oneInch.quote({
//     chain: "bsc", // The blockchain you want to use (eth/bsc/polygon)
//     fromTokenAddress: currentTrade.from.address, // The token you want to swap
//     toTokenAddress: currentTrade.to.address, // The token you want to receive
//     amount: amount,
//   });
//   console.log(quote);
//   document.getElementById("gas_estimate").innerHTML = quote.estimatedGas;
//   document.getElementById("to_amount").value = quote.toTokenAmount / 10 ** quote.toToken.decimals;
// }

// async function trySwap() {
//   let address = Moralis.User.current().get("bscAddress");
//   let amount = Number(document.getElementById("from_amount").value * 10 ** currentTrade.from.decimals);
//   if (currentTrade.from.symbol !== "BNB") {
//     const allowance = await Moralis.Plugins.oneInch.hasAllowance({
//       chain: "bsc", // The blockchain you want to use (eth/bsc/polygon)
//       fromTokenAddress: currentTrade.from.address, // The token you want to swap
//       fromAddress: address, // Your wallet address
//       amount: amount,
//     });
//     console.log(allowance);
//     if (!allowance) {
//       await Moralis.Plugins.oneInch.approve({
//         chain: "bsc", // The blockchain you want to use (eth/bsc/polygon)
//         tokenAddress: currentTrade.from.address, // The token you want to swap
//         fromAddress: address, // Your wallet address
//       });
//     }
//   }
//   try {
//     let receipt = await doSwap(address, amount);
//     alert("Swap Complete");
//   } catch (error) {
//     console.log(error);
//   }
// }

// function doSwap(userAddress, amount) {
//   return Moralis.Plugins.oneInch.swap({
//     chain: "bsc", // The blockchain you want to use (eth/bsc/polygon)
//     fromTokenAddress: currentTrade.from.address, // The token you want to swap
//     toTokenAddress: currentTrade.to.address, // The token you want to receive
//     amount: amount,
//     fromAddress: userAddress, // Your wallet address
//     slippage: 1,
//   });
// }

// init();

// document.getElementById("modal_close").onclick = closeModal;
// document.getElementById("from_token_select").onclick = () => {
//   openModal("from");
// };
// document.getElementById("to_token_select").onclick = () => {
//   openModal("to");
// };
// document.getElementById("login_button").onclick = login;
// document.getElementById("from_amount").onblur = getQuote;
// document.getElementById("swap_button").onclick = trySwap;