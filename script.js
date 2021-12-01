// var isConnected = false;
const Address = "0xC586BeF4a0992C495Cf22e1aeEE4E446CECDee0E"; //1inch contract address
const abi = [{ "inputs": [{ "internalType": "contract IOneSplitMulti", "name": "impl", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "newImpl", "type": "address" }], "name": "ImplementationUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "contract IERC20", "name": "fromToken", "type": "address" }, { "indexed": true, "internalType": "contract IERC20", "name": "destToken", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "fromTokenAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "destTokenAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "minReturn", "type": "uint256" }, { "indexed": false, "internalType": "uint256[]", "name": "distribution", "type": "uint256[]" }, { "indexed": false, "internalType": "uint256[]", "name": "flags", "type": "uint256[]" }, { "indexed": false, "internalType": "address", "name": "referral", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "feePercent", "type": "uint256" }], "name": "Swapped", "type": "event" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "constant": true, "inputs": [], "name": "chi", "outputs": [{ "internalType": "contract IFreeFromUpTo", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "contract IERC20", "name": "asset", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "claimAsset", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "contract IERC20", "name": "fromToken", "type": "address" }, { "internalType": "contract IERC20", "name": "destToken", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "parts", "type": "uint256" }, { "internalType": "uint256", "name": "flags", "type": "uint256" }], "name": "getExpectedReturn", "outputs": [{ "internalType": "uint256", "name": "returnAmount", "type": "uint256" }, { "internalType": "uint256[]", "name": "distribution", "type": "uint256[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "contract IERC20", "name": "fromToken", "type": "address" }, { "internalType": "contract IERC20", "name": "destToken", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "parts", "type": "uint256" }, { "internalType": "uint256", "name": "flags", "type": "uint256" }, { "internalType": "uint256", "name": "destTokenEthPriceTimesGasPrice", "type": "uint256" }], "name": "getExpectedReturnWithGas", "outputs": [{ "internalType": "uint256", "name": "returnAmount", "type": "uint256" }, { "internalType": "uint256", "name": "estimateGasAmount", "type": "uint256" }, { "internalType": "uint256[]", "name": "distribution", "type": "uint256[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "contract IERC20[]", "name": "tokens", "type": "address[]" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256[]", "name": "parts", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "flags", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "destTokenEthPriceTimesGasPrices", "type": "uint256[]" }], "name": "getExpectedReturnWithGasMulti", "outputs": [{ "internalType": "uint256[]", "name": "returnAmounts", "type": "uint256[]" }, { "internalType": "uint256", "name": "estimateGasAmount", "type": "uint256" }, { "internalType": "uint256[]", "name": "distribution", "type": "uint256[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "isOwner", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "oneSplitImpl", "outputs": [{ "internalType": "contract IOneSplitMulti", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "renounceOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "contract IOneSplitMulti", "name": "impl", "type": "address" }], "name": "setNewImpl", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "contract IERC20", "name": "fromToken", "type": "address" }, { "internalType": "contract IERC20", "name": "destToken", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "minReturn", "type": "uint256" }, { "internalType": "uint256[]", "name": "distribution", "type": "uint256[]" }, { "internalType": "uint256", "name": "flags", "type": "uint256" }], "name": "swap", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "contract IERC20[]", "name": "tokens", "type": "address[]" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "minReturn", "type": "uint256" }, { "internalType": "uint256[]", "name": "distribution", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "flags", "type": "uint256[]" }], "name": "swapMulti", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "contract IERC20", "name": "fromToken", "type": "address" }, { "internalType": "contract IERC20", "name": "destToken", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "minReturn", "type": "uint256" }, { "internalType": "uint256[]", "name": "distribution", "type": "uint256[]" }, { "internalType": "uint256", "name": "flags", "type": "uint256" }, { "internalType": "address", "name": "referral", "type": "address" }, { "internalType": "uint256", "name": "feePercent", "type": "uint256" }], "name": "swapWithReferral", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "contract IERC20[]", "name": "tokens", "type": "address[]" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "minReturn", "type": "uint256" }, { "internalType": "uint256[]", "name": "distribution", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "flags", "type": "uint256[]" }, { "internalType": "address", "name": "referral", "type": "address" }, { "internalType": "uint256", "name": "feePercent", "type": "uint256" }], "name": "swapWithReferralMulti", "outputs": [{ "internalType": "uint256", "name": "returnAmount", "type": "uint256" }], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }]; //TODO

let currentTrade = {};
let currentSelectSide, tokens, contract, userAddress;
const referrer = "0x680f520a98177c18a305aAA8523b26228bc05d31"; //set referrer address to receive fee

// const login = document.getElementById("login_button");
// login.addEventListener("click", connectWeb3);

// window.addEventListener('load', async () => {
//     // Modern dapp browsers...
//     if (window.ethereum) {
//         console.log("Web3 dectected");
//         window.web3 = new Web3(ethereum);
//         try {
//             // Request account access if needed
//             await ethereum.enable();
//             // Acccounts now exposed
//             isConnected = true;
//             contract = await new window.web3.eth.Contract(abi, Address);
//             self = await web3.eth.getAccounts();
//             self = self[0].toString();
//             userAddress = self;
//             web3.eth.handleRevert = true;
//             console.log("Your address: " + userAddress);
//             document.getElementById("swap_button").disabled = false;
//             // web3.eth.sendTransaction({/* ... */});
//         } catch (error) {
//             // User denied account access...
//         }
//     }
//     // Legacy dapp browsers...
//     else if (window.web3) {
//         console.log('Web3 Detected! ' + web3.currentProvider.constructor.name);
//         window.web3 = new Web3(web3.currentProvider);
//         isConnected = true;
//         document.getElementById("swap_button").disabled = false;
//         contract = new window.web3.eth.Contract(abi, Address);
//         // Acccounts always exposed
//         //web3.eth.sendTransaction({/* ... */});
//     }
//     // Non-dapp browsers...
//     else {
//         console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
//         console.log('No Web3 Detected... using HTTP Provider')
//         isConnected = false;
//         document.getElementById("swap_button").disabled = true;
//     }
// });
//connectWeb3(); //connect wallet

// async function connectWeb3() {
//     if(window.ethereum){
//         console.log("Web3 dectected");
// 		window.web3 = new Web3(window.ethereum);
// 		window.ethereum.enable();
//         isConnected = true;
//         contract = await new window.web3.eth.Contract(abi, Address);
//         self = await web3.eth.getAccounts();
//         self = self[0].toString();
//         userAddress = self;
//         web3.eth.handleRevert = true;
//         console.log("Your address: " + userAddress);
//         document.getElementById("swap_button").disabled = false;
// 	}
//     else if(typeof web3 !== 'undefined') {
//         console.log('Web3 Detected! ' + web3.currentProvider.constructor.name);
//         window.web3 = new Web3(web3.currentProvider);
//         isConnected = true;
//         document.getElementById("swap_button").disabled = false;
//         contract = new window.web3.eth.Contract(abi, Address);
//     }
//     else {
//         console.log('No Web3 Detected... using HTTP Provider')
//         isConnected = false;
//         document.getElementById("swap_button").disabled = true;
//     }
// }

// function isConnected(){
//     return isConnected;
// }

fetch('https://api.1inch.exchange/v4.0/1/tokens').then(response => response.json()).then(data => {
    let tokens = data.tokens;
    let parent = document.getElementById("token_list");
    // console.log(tokens);
    for (const address in tokens) {
        let token = tokens[address];
        // console.log(token.decimals);
        let div = document.createElement("div");
        div.setAttribute("data-address", token.address);
        div.className = "token_row";
        let html = `
            <img class="token_list_img" src="${token.logoURI}">
            <span class="token_list_text">${token.symbol}</span>
            `;
        div.innerHTML = html;
        div.onclick = () => {
        selectToken(token.address);
        };
        parent.appendChild(div);
    }
    function selectToken(address) {
        closeModal();
        // console.log(tokens);
        currentTrade[currentSelectSide] = tokens[address];
        console.log(currentTrade);
        renderInterface();
        getQuote();
    }
    function renderInterface() {
        if (currentTrade.from) {
            document.getElementById("from_token_img").src = currentTrade.from.logoURI;
            document.getElementById("from_token_text").innerHTML = currentTrade.from.symbol;
        }
        if (currentTrade.to) {
            document.getElementById("to_token_img").src = currentTrade.to.logoURI;
            document.getElementById("to_token_text").innerHTML = currentTrade.to.symbol;
        }
    }
    document.getElementById("from_amount").onblur = getQuote;
    function getQuote() {
        if (!currentTrade.from || !currentTrade.to || !document.getElementById("from_amount").value) return;
        // let fee = 1;
        let amount_from = Number(document.getElementById("from_amount").value * 10**currentTrade.from.decimals);
        let quote_url = `https://api.1inch.exchange/v4.0/1/quote?fromTokenAddress=${currentTrade.from.address}&toTokenAddress=${currentTrade.to.address}&amount=${amount_from}`;
        // console.log(quote_url);
        fetch(quote_url)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                document.getElementById("gas_estimate").innerHTML = data.estimatedGas;
                document.getElementById("fee_estimate").innerHTML = "1%";
                document.getElementById("to_amount").value = data.toTokenAmount / 10**data.toToken.decimals;
            })
            .catch(err => console.log(err.description));
    }
    document.getElementById("swap_button").onclick = doSwap;
    function doSwap() {
        let swap_amount = Number(document.getElementById("to_amount").value);
        let slippage = 1;
        let fee = 1;
        let swap_url = `https://api.1inch.exchange/v4.0/1/swap?fromTokenAddress=${currentTrade.from.address}&toTokenAddress=${currentTrade.to.address}&amount=${swap_amount}&fromAddress=${userAddress}&slippage=${slippage}&referrerAddress=${referrer}&fee=${fee}`;
        fetch(swap_url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log(err.description));
    }
}).catch(err => console.log(err.description));

// https://api.1inch.exchange/v4.0/1/approve/allowance

function openModal(side) {
    currentSelectSide = side;
    document.getElementById("token_modal").style.display = "block";
}
function closeModal() {
    document.getElementById("token_modal").style.display = "none";
}

document.getElementById("from_token_select").onclick = () => {
    openModal("from");
  };
document.getElementById("to_token_select").onclick = () => {
    openModal("to");
};

//   async function trySwap() {
//     let address = Moralis.User.current().get("bscAddress");
//     let amount = Number(document.getElementById("from_amount").value * 10 ** currentTrade.from.decimals);
//     if (currentTrade.from.symbol !== "BNB") {
//       const allowance = await Moralis.Plugins.oneInch.hasAllowance({
//         chain: "bsc", // The blockchain you want to use (eth/bsc/polygon)
//         fromTokenAddress: currentTrade.from.address, // The token you want to swap
//         fromAddress: address, // Your wallet address
//         amount: amount,
//       });
//       console.log(allowance);
//       if (!allowance) {
//         await Moralis.Plugins.oneInch.approve({
//           chain: "bsc", // The blockchain you want to use (eth/bsc/polygon)
//           tokenAddress: currentTrade.from.address, // The token you want to swap
//           fromAddress: address, // Your wallet address
//         });
//       }
//     }
//     try {
//       let receipt = await doSwap(address, amount);
//       alert("Swap Complete");
//     } catch (error) {
//       console.log(error);
//     }
//   }
  
//   function doSwap(userAddress, amount) {
//     return Moralis.Plugins.oneInch.swap({
//       chain: "bsc", // The blockchain you want to use (eth/bsc/polygon)
//       fromTokenAddress: currentTrade.from.address, // The token you want to swap
//       toTokenAddress: currentTrade.to.address, // The token you want to receive
//       amount: amount,
//       fromAddress: userAddress, // Your wallet address
//       slippage: 1,
//     });
//   }
  
//   init();
  
//   document.getElementById("modal_close").onclick = closeModal;
//   document.getElementById("login_button").onclick = login;
//  
//   document.getElementById("swap_button").onclick = trySwap;
 