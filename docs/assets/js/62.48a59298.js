(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{575:function(t,a,s){"use strict";s.r(a);var n=s(13),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"eth"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eth"}},[t._v("#")]),t._v(" eth")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/rocket-pool/rocketpool-go/utils/eth"')]),t._v("\n")])])]),s("h2",{attrs:{id:"index"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[t._v("#")]),t._v(" Index")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#constants"}},[t._v("Constants")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#func-estimatesendtransactiongas"}},[t._v("func EstimateSendTransactionGas(client *ethclient.Client, toAddress common.Address, opts *bind.TransactOpts) (rocketpool.GasInfo, error)")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#func-ethtowei"}},[t._v("func EthToWei(eth float64) *big.Int")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#func-filtercontractlogs"}},[t._v("func FilterContractLogs(rp *rocketpool.RocketPool, contractName string, q FilterQuery, intervalSize *big.Int) ([]types.Log, error)")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#func-getlogs"}},[t._v("func GetLogs(rp *rocketpool.RocketPool, addressFilter []common.Address, topicFilter [][]common.Hash, intervalSize, fromBlock, toBlock *big.Int, blockHash *common.Hash) ([]types.Log, error)")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#func-gweitowei"}},[t._v("func GweiToWei(gwei float64) *big.Int")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#func-sendtransaction"}},[t._v("func SendTransaction(client *ethclient.Client, toAddress common.Address, opts *bind.TransactOpts) (common.Hash, error)")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#func-weitoeth"}},[t._v("func WeiToEth(wei *big.Int) float64")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#func-weitogwei"}},[t._v("func WeiToGwei(wei *big.Int) float64")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#type-filterquery"}},[t._v("type FilterQuery")])])]),t._v(" "),s("h2",{attrs:{id:"constants"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#constants"}},[t._v("#")]),t._v(" Constants")]),t._v(" "),s("p",[t._v("Conversion factors")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    WeiPerEth  "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float64")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1e18")]),t._v("\n    WeiPerGwei "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float64")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1e9")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"func-estimatesendtransactiongas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#func-estimatesendtransactiongas"}},[t._v("#")]),t._v(" func "),s("a",{attrs:{href:"https://github.com/rocket-pool/rocketpool-go/blob/release/utils/eth/transactions.go#L16",target:"_blank",rel:"noopener noreferrer"}},[t._v("EstimateSendTransactionGas"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("EstimateSendTransactionGas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("client "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ethclient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" toAddress common"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" opts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("bind"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TransactOpts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rocketpool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GasInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Estimate the gas of SendTransaction")]),t._v(" "),s("h2",{attrs:{id:"func-ethtowei"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#func-ethtowei"}},[t._v("#")]),t._v(" func "),s("a",{attrs:{href:"https://github.com/rocket-pool/rocketpool-go/blob/release/utils/eth/units.go#L28",target:"_blank",rel:"noopener noreferrer"}},[t._v("EthToWei"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("EthToWei")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eth "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float64")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("big"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Int\n")])])]),s("p",[t._v("Convert eth to wei")]),t._v(" "),s("h2",{attrs:{id:"func-filtercontractlogs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#func-filtercontractlogs"}},[t._v("#")]),t._v(" func "),s("a",{attrs:{href:"https://github.com/rocket-pool/rocketpool-go/blob/release/utils/eth/logs.go#L21",target:"_blank",rel:"noopener noreferrer"}},[t._v("FilterContractLogs"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("FilterContractLogs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("rocketpool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RocketPool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" contractName "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" q FilterQuery"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" intervalSize "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("big"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Int"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"func-getlogs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#func-getlogs"}},[t._v("#")]),t._v(" func "),s("a",{attrs:{href:"https://github.com/rocket-pool/rocketpool-go/blob/release/utils/eth/logs.go#L51",target:"_blank",rel:"noopener noreferrer"}},[t._v("GetLogs"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetLogs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("rocketpool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RocketPool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" addressFilter "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("common"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" topicFilter "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("common"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" intervalSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fromBlock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" toBlock "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("big"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Int"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" blockHash "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("common"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Gets the logs for a particular log request, breaking the calls into batches if necessary")]),t._v(" "),s("h2",{attrs:{id:"func-gweitowei"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#func-gweitowei"}},[t._v("#")]),t._v(" func "),s("a",{attrs:{href:"https://github.com/rocket-pool/rocketpool-go/blob/release/utils/eth/units.go#L51",target:"_blank",rel:"noopener noreferrer"}},[t._v("GweiToWei"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GweiToWei")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gwei "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float64")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("big"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Int\n")])])]),s("p",[t._v("Convert gigawei to wei")]),t._v(" "),s("h2",{attrs:{id:"func-sendtransaction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#func-sendtransaction"}},[t._v("#")]),t._v(" func "),s("a",{attrs:{href:"https://github.com/rocket-pool/rocketpool-go/blob/release/utils/eth/transactions.go#L55",target:"_blank",rel:"noopener noreferrer"}},[t._v("SendTransaction"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SendTransaction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("client "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ethclient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" toAddress common"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" opts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("bind"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TransactOpts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("common"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Send a transaction to an address")]),t._v(" "),s("h2",{attrs:{id:"func-weitoeth"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#func-weitoeth"}},[t._v("#")]),t._v(" func "),s("a",{attrs:{href:"https://github.com/rocket-pool/rocketpool-go/blob/release/utils/eth/units.go#L17",target:"_blank",rel:"noopener noreferrer"}},[t._v("WeiToEth"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WeiToEth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wei "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("big"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Int"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float64")]),t._v("\n")])])]),s("p",[t._v("Convert wei to eth")]),t._v(" "),s("h2",{attrs:{id:"func-weitogwei"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#func-weitogwei"}},[t._v("#")]),t._v(" func "),s("a",{attrs:{href:"https://github.com/rocket-pool/rocketpool-go/blob/release/utils/eth/units.go#L40",target:"_blank",rel:"noopener noreferrer"}},[t._v("WeiToGwei"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WeiToGwei")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wei "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("big"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Int"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float64")]),t._v("\n")])])]),s("p",[t._v("Convert wei to gigawei")]),t._v(" "),s("h2",{attrs:{id:"type-filterquery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#type-filterquery"}},[t._v("#")]),t._v(" type "),s("a",{attrs:{href:"https://github.com/rocket-pool/rocketpool-go/blob/release/utils/eth/logs.go#L14-L19",target:"_blank",rel:"noopener noreferrer"}},[t._v("FilterQuery"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" FilterQuery "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    BlockHash "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("common"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Hash\n    FromBlock "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("big"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Int\n    ToBlock   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("big"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Int\n    Topics    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("common"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Hash\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);