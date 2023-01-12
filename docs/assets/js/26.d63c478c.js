(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{467:function(e,t,o){e.exports=o.p+"assets/img/stake-behalf-1.cf6f60f1.png"},468:function(e,t,o){e.exports=o.p+"assets/img/stake-behalf-2.f94d497b.png"},622:function(e,t,o){"use strict";o.r(t);var a=o(13),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"creating-a-new-minipool-validator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-new-minipool-validator"}},[e._v("#")]),e._v(" Creating a New Minipool (Validator)")]),e._v(" "),a("p",[e._v("As a reminder, a "),a("code",[e._v("minipool")]),e._v(" in Rocket Pool terms refers to a unique smart contract instance on the Execution Layer (ETH1) chain that your node manages.\nThe minipool handles 16 of your ETH, 16 ETH from the rETH staking pool, and merges them together so that it can send 32 ETH to the Beacon Chain deposit contract to create a new validator.\nThus, in order to create a validator using Rocket Pool, you need to "),a("strong",[e._v("create a minipool")]),e._v(".")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Creating a minipool means depositing 16 of your own ETH to the Beacon Chain.\nThese funds "),a("strong",[e._v("cannot be retrieved")]),e._v(" until after the Execution Layer (ETH1) has merged with the Beacon Chain (ETH2), and withdrawals have been implemented.\nBy creating the minipool, you are acknowledging that you are effectively locking these funds until that system is in place.")])]),e._v(" "),a("h2",{attrs:{id:"staking-rpl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#staking-rpl"}},[e._v("#")]),e._v(" Staking RPL")]),e._v(" "),a("p",[e._v("Before you can create a minipool, you'll first need to stake some RPL as collateral.\n"),a("strong",[e._v("At a minimum")]),e._v(", you'll need to stake 1.6 ETH worth of RPL which is 10% of your total bond in the node.\nThe exact amount of RPL will change based on the ETH/RPL price ratio, which is snapshotted on-chain at regular intervals by the Oracle DAO.")]),e._v(" "),a("p",[e._v("There is no maximum to the amount you can stake, though "),a("strong",[e._v("you will only receive rewards for the first 150%")]),e._v(" at each checkpoint - anything above that will go unrewarded.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("RPL stake isn't handled on a per-minipool basis.\nWhen you stake RPL, you do it for your "),a("strong",[e._v("entire node")]),e._v(".\nThis means you'll only need to handle the total RPL stake for your node if you plan to run multiple minipools.")])]),e._v(" "),a("h3",{attrs:{id:"staking-via-the-website-recommended"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#staking-via-the-website-recommended"}},[e._v("#")]),e._v(" Staking via the Website (Recommended)")]),e._v(" "),a("p",[e._v("The easiest and safest way to stake RPL for your node is to use the website's new "),a("strong",[e._v("Stake-on-Behalf")]),e._v(" feature, which was introduced with the Redstone upgrade.\nThis way, you can stake RPL for your node while the RPL is still in the wallet you used to acquire it.\nIn other words, you "),a("strong",[e._v("don't need to send RPL to your node's hot wallet")]),e._v(" in order to stake it.")]),e._v(" "),a("p",[e._v("Select which network you're using from the tabs below to be taken to it:")]),e._v(" "),a("Tabs",{attrs:{type:"border-card"}},[a("Tab",{attrs:{label:"Mainnet"}},[a("p",[a("a",{attrs:{href:"https://stake.rocketpool.net/stake-behalf",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://stake.rocketpool.net/stake-behalf"),a("OutboundLink")],1)])]),e._v(" "),a("Tab",{attrs:{label:"Prater Testnet"}},[a("p",[a("a",{attrs:{href:"https://testnet.rocketpool.net/stake-behalf",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://testnet.rocketpool.net/stake-behalf"),a("OutboundLink")],1)])])],1),e._v(" "),a("p",[e._v("Start by connecting your wallet to the website using MetaMask, WalletConnect, or any of the other methods the website supports.\nYou will then be presented with this dialog:")]),e._v(" "),a("center",[a("p",[a("img",{attrs:{src:o(467),alt:""}})])]),e._v(" "),a("p",[e._v("This is a two-step process.\nFirst, enter the amount of RPL you want to stake and click "),a("code",[e._v("Approve")]),e._v(" - this will "),a("strong",[e._v("approve")]),e._v(" the staking contract to access that much RPL in your wallet, but "),a("strong",[e._v("no more than that amount")]),e._v(".")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("You can approve more than the amount you intend to stake if you trust the Rocket Pool staking contract, and don't want to perform this extra Approve transaction each time you want to stake more RPL.")])]),e._v(" "),a("p",[e._v("Once the RPL is approved, you will see this dialog:")]),e._v(" "),a("center",[a("p",[a("img",{attrs:{src:o(468),alt:""}})])]),e._v(" "),a("p",[e._v("Enter the amount of RPL you want to stake in the "),a("code",[e._v("Stake RPL")]),e._v(" box, and enter your node's address in the "),a("code",[e._v("on behalf of Node Address")]),e._v(" box.\n"),a("strong",[e._v("Make sure you have the correct node address before doing this!")]),e._v("\nIf you need to confirm your node's address, you can quickly retrieve it via the CLI using the "),a("code",[e._v("rocketpool node status")]),e._v(" command.")]),e._v(" "),a("p",[e._v("When you've entered that information, press the "),a("code",[e._v("Stake")]),e._v(" button and approve the transaction.\nIt will be sent to the Ethereum network, and once included in a block, you're all set!")]),e._v(" "),a("p",[e._v("If you run "),a("code",[e._v("rocketpool node status")]),e._v(", you should see your staked RPL appear under the "),a("code",[e._v("=== RPL Stake and Minipools ===")]),e._v(" section.")]),e._v(" "),a("h3",{attrs:{id:"staking-via-the-node-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#staking-via-the-node-cli"}},[e._v("#")]),e._v(" Staking via the Node CLI")]),e._v(" "),a("p",[e._v("If you cannot (or do not want to) use the website to stake your RPL, you can also stake it via the node's CLI directly.")]),e._v(" "),a("p",[e._v("First, transfer your RPL from the wallet you acquired it with to your node's address.")]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[a("strong",[e._v("Please do this carefully and ensure you are sending the RPL to your node's address - transfers on Ethereum cannot be undone!")]),e._v(" "),a("strong",[e._v("Sending RPL to the wrong address will result in the loss of your RPL.")])]),e._v(" "),a("p",[e._v("Use the "),a("code",[e._v("rocketpool node status")]),e._v(" command to verify your node's address if you aren't sure what it is.")])]),e._v(" "),a("p",[e._v("Run the following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("rocketpool node stake-rpl\n")])])]),a("p",[e._v("Here is the output:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Please choose an amount of RPL to stake:\n1: The minimum minipool stake amount (284.477473 RPL)?\n2: The maximum effective minipool stake amount (4267.162095 RPL)?\n3: Your entire RPL balance (1440.000000 RPL)?\n4: A custom amount\n")])])]),a("p",[e._v("Select how much you'd like to stake, then confirm the operation.")]),e._v(" "),a("p",[e._v("The first time you run this command, it will involve two transactions - one to "),a("strong",[e._v("approve")]),e._v(" the Rocket Pool staking contract to access your RPL, and one to "),a("strong",[e._v("stake")]),e._v(" your RPL with it.\nSubsequent runs will only require the "),a("strong",[e._v("stake")]),e._v(" transaction, since the token has already been approved.")]),e._v(" "),a("p",[e._v("Once both transactions finish, you can check your staked RPL amount with "),a("code",[e._v("rocketpool node status")]),e._v(".\nThe following portion of the output is what you want to verify:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("The node has a total stake of 11763.477483 RPL and an effective stake of 0.0 RPL, allowing it to run 41 minipool(s) in total.\nThis is currently a 0.00% collateral ratio.\nThe node must keep at least 10810.143971 RPL staked to collateralize its minipools and claim RPL rewards.\n")])])]),a("p",[e._v("If the "),a("code",[e._v("collateral ratio")]),e._v(" is 10% or higher, then you have enough staked to create a new minipool.")]),e._v(" "),a("h2",{attrs:{id:"optional-finding-a-custom-vanity-address-for-your-minipool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optional-finding-a-custom-vanity-address-for-your-minipool"}},[e._v("#")]),e._v(" (Optional) Finding a Custom Vanity Address for your Minipool")]),e._v(" "),a("p",[e._v("By default, when you create a new minipool, Rocket Pool will generate a random unique address for it.\nHowever, the Smartnode provides the ability to search for a custom "),a("strong",[e._v("vanity address")]),e._v(" for the minipool.")]),e._v(" "),a("p",[e._v("A vanity address is one where you personally pick the characters that the address starts with.\nThis is a purely cosmetic exercise and will not have any practical impact on your minipool's operation.\nAs Ethereum addresses are in hexadecimal, any of the following characters are legal:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("0 1 2 3 4 5 6 7 8 9 a b c d e f\n")])])]),a("p",[e._v("As a few examples, you could make your minipool's address start with a bunch of zeros ("),a("code",[e._v("0x000000...")]),e._v("), "),a("code",[e._v("0x600d")]),e._v(' (hex for "good") or '),a("code",[e._v("0xa77e57ed")]),e._v(' (hex for "attested", a fitting prefix for a minipool).')]),e._v(" "),a("p",[e._v("To find such a vanity address, you will need to "),a("strong",[e._v("search for it")]),e._v('.\nThis searching process involves picking a number, applying it as a "salt" to the hashing algorithm, and comparing the results against what you\'re looking for.\nThe results are effectively random (though any given salt always produces the same result), so the only way to find an address with the prefix you want is to try lots and lots of them until you find a salt that works.')]),e._v(" "),a("p",[e._v("If you would like a custom vanity address to use for your minipool when you create it, you can use the following command to search for one:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("rocketpool minipool find-vanity-address\n")])])]),a("p",[e._v("This will prompt you for the prefix you want to search for, and ask which type of deposit you will be doing (a 16 ETH or a 32 ETH deposit - see below for more info on these types).\nOnce you enter that information, it will begin trying lots and lots of salts until it finds one that produces your desired prefix!")]),e._v(" "),a("p",[e._v("Here is a complete example of the process:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ rocketpool minipool find-vanity-address\n\nPlease specify the address prefix you would like to search for (must start with 0x):\n0xa77e57\n\nRunning with 12 threads.\nFound on thread 3: salt 0x5cd7fb = 0xA77E57c892C9e98B0B81289e4AfdA62fb59c5DDD\nFinished in 1.91145873s\n")])])]),a("p",[e._v("In this case, we searched for "),a("code",[e._v("0xa77e57")]),e._v(" as the prefix and found the salt "),a("code",[e._v("0x5cd7fb")]),e._v(" which could generate it.\nIn the next step, when we create a minipool, we can specify this salt as an optional argument to create the new minipool at the address associated with the salt ("),a("code",[e._v("0xA77E57c892C9e98B0B81289e4AfdA62fb59c5DDD")]),e._v(" as shown above).")]),e._v(" "),a("p",[e._v("In general, each additional character you search for will multiply the search time by about 16.\nBecause of this, "),a("strong",[e._v("we recommend you only look for prefixes of 7 or 8 characters max unless you have a very powerful machine with many CPU cores")]),e._v(".\nOtherwise, it might take prohibitively long to find a salt that produces the prefix you want.")]),e._v(" "),a("p",[e._v("For example, an AMD 5600x with 6 cores (12 threads) at 4.8 GHz can search about 3.2 million salts per second.\nOn average, it will take a few seconds to find a 6-character prefix, a few minutes to find a 7-character prefix, and a few hours to find an 8-character prefix.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("The salt that gets generated is specific to the following variables:")]),e._v(" "),a("ul",[a("li",[e._v("The network you're using (either the Prater Testnet or Mainnet)")]),e._v(" "),a("li",[e._v("The node address")]),e._v(" "),a("li",[e._v("The deposit type (16 ETH is currently the only valid option)")]),e._v(" "),a("li",[e._v("The salt")])]),e._v(" "),a("p",[e._v("If you change any of those variables, the minipool address for a given salt will change as well.")])]),e._v(" "),a("p",[e._v("For more advanced usage (such as searching for a different node address or changing how many CPU cores are used for searching), take a look at the help text with "),a("code",[e._v("rocketpool minipool find-vanity-address --help")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"depositing-eth-and-creating-a-minipool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#depositing-eth-and-creating-a-minipool"}},[e._v("#")]),e._v(" Depositing ETH and Creating a Minipool")]),e._v(" "),a("p",[e._v("After everything you've done so far, you are finally ready to deposit your ETH, create a new minipool, and create an ETH2 validator.\nThis is done with the following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("rocketpool node deposit\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("If the market value of rETH is higher than its ETH backing (i.e., rETH is at a premium on the market), there is an opportunity to arbitrage the difference when creating a minipool.\nThe value of the arbitrage is equal to the amount of protocol ETH in the minipool times the premium (minus a small amount of gas).\nE.g., if making a minipool when there's a 2.5% premium: "),a("code",[e._v("16 ETH * .025 = 0.4 ETH")]),e._v(".\nIn other words, you could receive 0.4 ETH back during these conditions just for creating a minipool!")]),e._v(" "),a("p",[e._v("If you're interested in taking advantage of this opportunity, consider using the community-developed "),a("a",{attrs:{href:"https://github.com/xrchz/rocketarb/blob/main/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("rocketarb"),a("OutboundLink")],1),e._v(" tool to capture the profit of the MEV rETH arbitrage opportunity that launching your minipool creates.")]),e._v(" "),a("p",[e._v("To learn more about rocketarb, feel free to inquire about it on the "),a("a",{attrs:{href:"https://discord.gg/rocketpool",target:"_blank",rel:"noopener noreferrer"}},[e._v("RP discord server"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("If you want to use a salt for a vanity address that you found using the process above, run the following command instead:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("rocketpool node deposit --salt <your salt, e.g. 0x1234abcd>\n")])])])]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("DANGER")]),e._v(" "),a("p",[e._v("The CLI will then check to ensure that your Consensus (ETH2) client is synced.\nIf not synced, then it will warn you in large red letters.\nA situation may arise where "),a("strong",[e._v("your ETH2 validator is activated before your Consensus Client (ETH2) finishes syncing")]),e._v(".\nIf this happens, your validator will be assigned attestation and block proposal duties on the Beacon Chain, but it cannot perform those duties until your Consensus (ETH2) client is fully synced.")]),e._v(" "),a("p",[e._v("In this situation, "),a("strong",[e._v("every missed attestation and block proposal will cause you to lose ETH!")]),e._v("\nYou will continue to slowly leak your ETH until your Consensus (ETH2) client finishes syncing.")]),e._v(" "),a("p",[e._v("In most cases, "),a("strong",[e._v("you should cancel the process and wait for your client to sync.")])]),e._v(" "),a("p",[e._v("However, there are situations where the Beacon Chain validator queue is very long, and you believe that your Consensus (ETH2) client will finish syncing before your validator exits the queue and is activated.\nIn this case, you may want to do the deposit anyway to save time and begin validating sooner.\nIf you "),a("strong",[e._v("understand these risks")]),e._v(" and "),a("strong",[e._v("believe this is the case")]),e._v(", the CLI will let you go ahead with a deposit anyway.")])]),e._v(" "),a("p",[e._v("You will next be prompted with the network's current gas costs recommendations; confirm your gas price selection and follow the rest of the prompts.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Your eth2 client is on the correct network.\n\nYour minipool will use the current fixed commission rate of 15.00%.\nYour consensus client is synced, you may safely create a minipool.\n+============== Suggested Gas Prices ==============+\n| Avg Wait Time |  Max Fee  |    Total Gas Cost    |\n| 15 Seconds    | 15 gwei   | 0.0244 to 0.0366 ETH |\n| 1 Minute      | 10 gwei   | 0.0157 to 0.0235 ETH |\n| 3 Minutes     | 7 gwei    | 0.0100 to 0.0150 ETH |\n| >10 Minutes   | 6 gwei    | 0.0080 to 0.0120 ETH |\n+==================================================+\n\nThese prices include a maximum priority fee of 2.00 gwei.\nPlease enter your max fee (including the priority fee) or leave blank for the default of 10 gwei:\n\n\nUsing a max fee of 10.00 gwei and a priority fee of 2.00 gwei.\nYou are about to deposit 16.000000 ETH to create a minipool with a minimum possible commission rate of 15.000000%.\nARE YOU SURE YOU WANT TO DO THIS? Running a minipool is a long-term commitment, and this action cannot be undone! [y/n]\ny\n\nCreating minipool...\nTransaction has been submitted with hash <transaction hash>.\nYou may follow its progress by visiting:\n<link to transaction>\n\nWaiting for the transaction to be mined... you may wait here for it, or press CTRL+C to exit and return to the terminal.\n\nThe node deposit of 16.000000 ETH was made successfully!\nYour new minipool's address is: <new minipool address>\nThe validator pubkey is: <new validator public key>\n\nYour minipool is now in Initialized status.\nOnce the 16 ETH deposit has been matched by the staking pool, it will move to Prelaunch status.\nAfter that, it will move to Staking status once 1h0m0s have passed.\nYou can watch its progress using `rocketpool service logs node`.\n")])])]),a("p",[e._v("Note that creating a minipool "),a("strong",[e._v("is an expensive transaction")]),e._v("!\nPay close attention to the total cost and ensure that you accept it.")]),e._v(" "),a("p",[e._v("If you accept, your minipool creation will be triggered.\nOnce the transaction completes, you will be given the address of your new minipool contract on the eth1 chain and its corresponding validator public key on the Beacon Chain.\nYou can visit these with any block explorers if you'd like.")]),e._v(" "),a("h2",{attrs:{id:"confirming-a-successful-stake"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#confirming-a-successful-stake"}},[e._v("#")]),e._v(" Confirming a Successful Stake")]),e._v(" "),a("p",[e._v("Upon creation, your minipool will be put into the "),a("code",[e._v("initialized")]),e._v(" state.\nIt will remain here until it's your turn in the Rocket Pool queue to be given 16 ETH from the staking pool so you can stake your new validator on the Beacon Chain.")]),e._v(" "),a("p",[e._v("Once this happens, your minipool will move into the "),a("code",[e._v("prelaunch")]),e._v(" state for a certain period of time (currently 12 hours).\nYour 16 ETH deposit will be transferred to be Beacon Chain, and the Oracle DAO "),a("a",{attrs:{href:"https://github.com/rocket-pool/rocketpool-research/blob/master/Reports/withdrawal-creds-exploit.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("will verify that it is all correct"),a("OutboundLink")],1),e._v(".\nDuring this time, you can observe the validator by looking up its validator pubkey with a Beacon Chain explorer such as "),a("a",{attrs:{href:"https://beaconcha.in",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://beaconcha.in"),a("OutboundLink")],1),e._v(" (or "),a("a",{attrs:{href:"https://prater.beaconcha.in",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://prater.beaconcha.in"),a("OutboundLink")],1),e._v(" for the Prater Testnet).")]),e._v(" "),a("p",[e._v("You can check on the new minipool's status with the "),a("code",[e._v("rocketpool minipool status")]),e._v(" command.\nFor example, when it has moved into "),a("code",[e._v("prelaunch")]),e._v(", you will likely see something like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("1 Prelaunch minipool(s):\n\n--------------------\n\nAddress:              <your minipool address>\nPenalties:            0\nStatus updated:       2022-08-17, 01:24 +0000 UTC\nNode fee:             15.000000%\nNode deposit:         16.000000 ETH\nRP ETH assigned:      2022-08-17, 01:24 +0000 UTC\nRP deposit:           16.000000 ETH\nValidator pubkey:     <your validator public key>\nValidator index:      0\nValidator seen:       no\nUse latest delegate:  no\nDelegate address:     <your delegate address>\nRollback delegate:    <none>\nEffective delegate:   <your delegate address> \n\n\n0 finalized minipool(s):\n\n\n\n")])])]),a("p",[e._v("After this prelaunch period, your minipool will enter "),a("code",[e._v("staking")]),e._v(" status and send the additional 16 ETH from the staking pool to the deposit contract.\nThis will be done by the "),a("code",[e._v("rocketpool_node")]),e._v(" Docker container (or the "),a("code",[e._v("rp-node")]),e._v(" service if you used the Native setup) - if, for some reason, you are taking abnormally long to enter "),a("code",[e._v("staking")]),e._v(" status, looking at the logs for this container / service will likely tell you what's wrong.\nYou can check these logs with the "),a("code",[e._v("rocketpool service logs node")]),e._v(" command (or "),a("code",[e._v("/srv/rocketpool/node_log.sh")]),e._v(" on Native mode setups).")]),e._v(" "),a("p",[e._v("Running "),a("code",[e._v("rocketpool minipool status")]),e._v(" will then show something like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ rocketpool minipool status\n\n1 Staking minipool(s):\n\n--------------------\n\nAddress:              <your validator address>\nPenalties:            0\nStatus updated:       2022-07-17, 20:01 +0000 UTC\nNode fee:             15.000000%\nNode deposit:         16.000000 ETH\nRP ETH assigned:      2022-07-17, 18:58 +0000 UTC\nRP deposit:           16.000000 ETH\nValidator pubkey:     <your validator public key>\nValidator index:      <your validator index number>\nValidator active:     yes\nValidator balance:    32.018460 ETH\nExpected rewards:     16.010614 ETH\nUse latest delegate:  no\nDelegate address:     <your delegate address>\nRollback delegate:    <none>\nEffective delegate:   <your delegate address> \n\n\n0 finalized minipool(s):\n\n")])])]),a("p",[e._v("Once the Beacon Chain accepts both of the 16 ETH deposits (one from you and one from the staking pool), your validator will enter the Beacon Chain queue where it will wait for its turn to become activated and start staking.")]),e._v(" "),a("p",[e._v("At this point, you're done!\nCongratulations!\nYou have officially created a validator with Rocket Pool!")]),e._v(" "),a("p",[e._v("Have a look at the next sections in Monitoring and Maintenance to learn how to watch your validator's performance and health over time.")]),e._v(" "),a("h2",{attrs:{id:"creating-multiple-minipools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-multiple-minipools"}},[e._v("#")]),e._v(" Creating Multiple Minipools")]),e._v(" "),a("p",[e._v("Conveniently, your Rocket Pool node is capable of hosting as many minipools as you want.\nYou "),a("strong",[e._v("do not")]),e._v(" need to create a new node for each minipool.")]),e._v(" "),a("p",[e._v("If you would like to make a second (or third, or fourth...) minipool for your node, all you need to do is run "),a("code",[e._v("rocketpool node deposit")]),e._v(" again.\nNote that you may need to stake more RPL first to maintain an overall collateral level of at least 10% before you do this.\nAlso, you won't be able to reuse an old vanity address salt - you'll need to search for another unique one for each of your minipools.")]),e._v(" "),a("h2",{attrs:{id:"next-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[e._v("#")]),e._v(" Next Steps")]),e._v(" "),a("p",[e._v("Now that you have a minipool up and running, the next steps will walk you through how to monitor the health of your node, check for and apply updates, and maintain it throughout its life.")]),e._v(" "),a("p",[a("strong",[e._v("Please read through the "),a("code",[e._v("Monitoring and Maintenance")]),e._v(" section next to learn more about these topics.")])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);