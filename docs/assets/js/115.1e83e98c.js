(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{654:function(e,t,o){"use strict";o.r(t);var n=o(13),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"the-rocket-pool-oracle-dao"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#the-rocket-pool-oracle-dao"}},[e._v("#")]),e._v(" The Rocket Pool Oracle DAO")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),o("p",[e._v("This documentation only applies to members of Rocket Pool's Oracle DAO.\nIf you have not been explicitly invited to the Oracle DAO and just intend to run a regular Rocket Pool node, this section of the guide does not apply to you.\nYou can safely ignore it, but are welcome to read it if you are interested.")])]),e._v(" "),o("p",[e._v("The "),o("strong",[e._v("Oracle DAO")]),e._v(" is the group of special Rocket Pool nodes that are responsible for the administrative duties required by the protocol that cannot be achieved by Smart Contracts due to technical limitations.\nThey are essentially the same as normal Rocket Pool nodes; they use the same tools, can be configured with the same methods, and can even run regular minipools, but they come with supplemental tasks that they perform.\nThis includes things such as:")]),e._v(" "),o("ul",[o("li",[e._v("Shuttling information from the Beacon Chain to the Execution Layer, including validator status and balances")]),e._v(" "),o("li",[e._v("Ensuring minipools are creating using validator public keys that aren't already in use, and "),o("a",{attrs:{href:"https://github.com/rocket-pool/rocketpool-research/blob/master/Reports/withdrawal-creds-exploit.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("have the proper withdrawal credentials"),o("OutboundLink")],1),e._v(" so the protocol can safely fund them")]),e._v(" "),o("li",[e._v("Constructing the rewards Merkle tree at the end of each rewards period and uploading it to IPFS for other node operators to access")]),e._v(" "),o("li",[e._v("Monitoring proposals for compliance with Rocket Pool's "),o("RouterLink",{attrs:{to:"/guides/node/mev.html"}},[e._v("fee recipient requirements")])],1),e._v(" "),o("li",[e._v("Proposing and voting on modifications to the core protocol, including changing parameters and approving contract upgrades")]),e._v(" "),o("li",[e._v("Proposing and voting on the Oracle DAO roster, including inviting and removing other Oracle DAO members")])]),e._v(" "),o("p",[e._v("As a reward for fulfilling these duties, the Oracle DAO is collectively given 15% of the total RPL inflation produced at each rewards period, divided evenly among its members.")]),e._v(" "),o("p",[e._v("Unlike normal Rocket Pool nodes, which can be created and run permissionlessly by anyone, membership in the Oracle DAO is "),o("strong",[e._v("invite only")]),e._v(" by existing members.\nIf you have recently been invited to join the Oracle DAO, this section of the guide will help you understand your role, get your node set up, and ensure that it stays healthy.")]),e._v(" "),o("h2",{attrs:{id:"requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),o("p",[e._v("To run an Oracle DAO node, you will require the following:")]),e._v(" "),o("ul",[o("li",[e._v("Access to an "),o("strong",[e._v("Execution Client's RPC endpoint")]),e._v(". This can be a locally-run client, as is the case with most Rocket Pool nodes, or it can link to external clients that you or your organization maintain independently.")]),e._v(" "),o("li",[e._v("Access to an "),o("strong",[e._v("Archive-Mode Execution Client")]),e._v(", which can either act as your primary client or a supplementary (fallback) client. It will only be used in rare circumstances where duties require your node to recall an Execution Layer state that has been pruned from your Execution Client. Nevertheless, it is "),o("strong",[e._v("critical")]),e._v(" that you have access to an Archive Node during these periods to ensure your duties are able to be fulfilled successfully.\n"),o("ul",[o("li",[e._v("You can use a service such as "),o("a",{attrs:{href:"https://infura.io/pricing",target:"_blank",rel:"noopener noreferrer"}},[e._v("Infura"),o("OutboundLink")],1),e._v(" or "),o("a",{attrs:{href:"https://www.alchemy.com/pricing",target:"_blank",rel:"noopener noreferrer"}},[e._v("Alchemy"),o("OutboundLink")],1),e._v(" for this if you cannot host your own Archive Node.")])])]),e._v(" "),o("li",[e._v("Access to an "),o("strong",[e._v("Archive-Mode Beacon Node's REST API endpoint")]),e._v(" (via HTTP). This can be a locally-run client, as is the case with most Rocket Pool nodes, or it can link to external clients that you or your organization maintain independently.")]),e._v(" "),o("li",[e._v("The standard Smartnode CLI.")]),e._v(" "),o("li",[e._v("The Smartnode daemon configured and running in "),o("code",[e._v("watchtower")]),e._v(" mode (this is included with the standard Smartnode bundle for all users, but only actively performs duties for Oracle DAO nodes).\n"),o("ul",[o("li",[e._v("This can be run in a Docker container (standard setup) or as a simple "),o("code",[e._v("systemd")]),e._v(' service ("Native" mode).')])])]),e._v(" "),o("li",[e._v("Enough ETH to pay for the gas costs of your duties (discussed later).")]),e._v(" "),o("li",[e._v("A "),o("a",{attrs:{href:"https://web3.storage/",target:"_blank",rel:"noopener noreferrer"}},[e._v("web3.storage"),o("OutboundLink")],1),e._v(" account, used for submitting the generated rewards tree artifacts to their IPFS pinning service.")])]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),o("p",[e._v("If you plan to use "),o("strong",[e._v("Infura")]),e._v(" for your Archive Mode fallback, you must have at least the "),o("strong",[e._v("Team")]),e._v(" plan.\nThe free tier and the Developer tier are not sufficient.")]),e._v(" "),o("p",[e._v("If you plan to use "),o("strong",[e._v("Alchemy")]),e._v(", you must have at least the "),o("strong",[e._v("Growth")]),e._v(" plan.\nThe free tier is not sufficient.")])]),e._v(" "),o("h2",{attrs:{id:"activities"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#activities"}},[e._v("#")]),e._v(" Activities")]),e._v(" "),o("p",[e._v("Oracle DAO duties are split into two parts.")]),e._v(" "),o("ol",[o("li",[o("p",[o("strong",[e._v("Automated duties")]),e._v(": these are duties related to routine Rocket Pool operation, such as shuttling information from the Consensus Layer to the Execution Layer, calculating various aspects of the protocol off-chain, and submitting them as updates to the Smart Contracts. Each of these is performed automatically by the "),o("code",[e._v("watchtower")]),e._v(" daemon process and do not require manual intervention so long as your Execution and Consensus Clients, and your "),o("code",[e._v("watchtower")]),e._v(" daemon, are all operating normally.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Manual duties")]),e._v(": these are duties that require your own decision making and out-of-band communication with the rest of the Oracle DAO to perform. They include things such as voting on contract upgrades, changing parameters, and inviting or kicking members to/from the Oracle DAO. These can all be done via the standard Smartnode CLI.")])])]),e._v(" "),o("p",[e._v("Read the next section to learn how to set up your Oracle DAO node.")])])}),[],!1,null,null,null);t.default=a.exports}}]);