(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{477:function(e,t,n){e.exports=n.p+"assets/img/ethereum-client-diversity.a242e75b.png"},623:function(e,t,n){"use strict";n.r(t);var r=n(13),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"choosing-your-eth-clients"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#choosing-your-eth-clients"}},[e._v("#")]),e._v(" Choosing your ETH Clients")]),e._v(" "),r("p",[e._v("Rocket Pool's Smartnode installer can transform your machine into a full Ethereum node, as it requires both Execution and Consensus clients in order to operate properly.")]),e._v(" "),r("p",[e._v("The terms ETH1/ETH2 have been deprecated.\nThe chains will be referred to as the "),r("strong",[e._v("Execution Layer (ETH1)")]),e._v(" and the "),r("strong",[e._v("Beacon Chain or Consensus Layer (ETH2)")]),e._v(" in the rest of these guides.")]),e._v(" "),r("p",[e._v("If you already have Execution and Consensus clients up and running on a separate machine (for example, if you're already solo-staking), then skip this section and move onto the "),r("RouterLink",{attrs:{to:"/guides/node/install-modes.html#the-hybrid-configuration-with-external-clients"}},[e._v("Configuring a Hybrid Rocket Pool Node with External Clients")]),e._v(" section.")],1),e._v(" "),r("p",[e._v("Otherwise, read on to learn more about your choices for Execution and Consensus clients.")]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),r("p",[e._v("As of August 2022, the distribution of clients on the Beacon Chain looks roughly like this:")]),e._v(" "),r("center",[r("p",[r("img",{attrs:{src:n(477),alt:""}})]),e._v(" "),r("p",[r("em",[e._v("Data obtained from "),r("a",{attrs:{href:"https://clientdiversity.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://clientdiversity.org"),r("OutboundLink")],1)])])]),e._v(" "),r("p",[e._v("The overwhelming majority of node operators are currently using Geth and Prysm.\nIn the interest of supporting the health of the Execution Layer (formerly ETH1) and the Beacon Chain (formerly ETH2), we currently recommend that you consider using different clients.\nHere are some relevant articles about why an even client diversity is crucial to the health of the network if you would like to learn more:")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://clientdiversity.org/#why",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://clientdiversity.org/#why"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://blog.ethereum.org/2020/08/21/validated-why-client-diversity-matters/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://blog.ethereum.org/2020/08/21/validated-why-client-diversity-matters/"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://our.status.im/the-importance-of-client-diversity/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://our.status.im/the-importance-of-client-diversity/"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://medium.com/prysmatic-labs/eth2-mainnet-incident-retrospective-f0338814340c",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://medium.com/prysmatic-labs/eth2-mainnet-incident-retrospective-f0338814340c"),r("OutboundLink")],1)])],1),e._v(" "),r("p",[e._v("For users that would like to get up and running quickly, the Smartnode installer provides a "),r("code",[e._v("Random Client")]),e._v(" option which may be the best choice.\nFor users that have a specific client they'd like to use in mind, we provide the ability to easily choose one during Rocket Pool's installation.\nThe options below help to describe each client so you can make an informed decision if you'd like to specify which one you want.")]),e._v(" "),r("h2",{attrs:{id:"execution-clients"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#execution-clients"}},[e._v("#")]),e._v(" Execution Clients")]),e._v(" "),r("p",[e._v("Rocket Pool supports three different Execution clients: "),r("strong",[e._v("Geth")]),e._v(", "),r("strong",[e._v("Besu")]),e._v(", and "),r("strong",[e._v("Nethermind")]),e._v(".")]),e._v(" "),r("p",[e._v("Running an Execution client involves storing a copy of the Execution layer blockchain on your machine.\nIt interacts via peer-to-peer communications with other EC nodes to record and verify new blocks and transactions.\nA full Execution client is "),r("strong",[e._v("required")]),e._v(" to run a validator now that the Execution and Consensus layers have merged.")]),e._v(" "),r("h3",{attrs:{id:"geth"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#geth"}},[e._v("#")]),e._v(" Geth")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://geth.ethereum.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Geth"),r("OutboundLink")],1),e._v(" (formally named "),r("code",[e._v("Go Ethereum")]),e._v(") is one of the three original implementations (along with C++ and Python) of the Ethereum protocol.\nIt is written in Go, fully open source and licensed under the GNU LGPL v3.")]),e._v(" "),r("p",[e._v("Geth is the oldest and most widely-used Execution Client around the world.\nIt has a reputation for being very stable and reliable.")]),e._v(" "),r("p",[e._v("It is multithreaded, meaning it can take advantage of your entire CPU.\nIts RAM usage is configurable, down to a "),r("strong",[e._v("minimum of about 4 GB for Mainnet")]),e._v(".\nThis makes it viable for low-power systems and high-power systems alike.")]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),r("p",[e._v("Geth requires "),r("strong",[e._v("offline pruning")]),e._v(" of its database periodically: its database will grow over time and gradually consume all of your free disk space unless you prune it when your disk runs low on free space.\nThe frequency you need to prune will depend on your SSD's size.")]),e._v(" "),r("p",[e._v("For more information on pruning Geth, view the "),r("RouterLink",{attrs:{to:"/guides/node/pruning.html"}},[e._v("Pruning the Execution Client")]),e._v(" page.")],1)]),e._v(" "),r("h3",{attrs:{id:"besu"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#besu"}},[e._v("#")]),e._v(" Besu")]),e._v(" "),r("p",[e._v("Hyperledger "),r("a",{attrs:{href:"https://besu.hyperledger.org/en/stable/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Besu"),r("OutboundLink")],1),e._v(" is an open-source Ethereum client developed under the Apache 2.0 license and written in "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Java_%28programming_language%29",target:"_blank",rel:"noopener noreferrer"}},[e._v("Java"),r("OutboundLink")],1),e._v(".\nBesu's most exciting features is its use of "),r("a",{attrs:{href:"https://consensys.net/blog/news/bonsai-tries-a-big-update-for-small-state-storage-in-hyperledger-besu/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bonsai Tries"),r("OutboundLink")],1),e._v(" for state storage. In addition to their better performance characterstics, Bonsai Tries give Besu two interesting advantages over the other clients:")]),e._v(" "),r("ol",[r("li",[e._v("Besu does "),r("em",[e._v("not")]),e._v(" need to be pruned at all; it is effectively maintenance-free in that respect")]),e._v(" "),r("li",[e._v("Besu is able to revisit any past block in the blockchain, though it does this by rewinding each block so reaching blocks from long ago may take some time.")])]),e._v(" "),r("p",[e._v("Besu currently recommends at least "),r("strong",[e._v("16 GB of RAM")]),e._v(", though it is possible to run successfully with 8 GB.")]),e._v(" "),r("h3",{attrs:{id:"nethermind"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nethermind"}},[e._v("#")]),e._v(" Nethermind")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://nethermind.io/nethermind-client/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nethermind"),r("OutboundLink")],1),e._v(" is written in "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/.NET",target:"_blank",rel:"noopener noreferrer"}},[e._v(".NET Core"),r("OutboundLink")],1),e._v(".\nIt boasts the fastest sync speed of the Execution clients and has a rich set of configuration options.\nIt is designed with node operators in mind and has many features that they will find helpful.")]),e._v(" "),r("p",[e._v("Like Geth, Nethermind requires periodic pruning of its database.\nUnlike Geth, however, Nethermind's database can "),r("a",{attrs:{href:"https://medium.com/nethermind-eth/netherminds-full-pruning-is-here-cutting-the-gordian-knot-5e3450f02de9",target:"_blank",rel:"noopener noreferrer"}},[e._v("be pruned while it stays online"),r("OutboundLink")],1),e._v(".\nThis means you do not need to turn your client off and rely on a fallback in order to prune.\nHowever, Nethermind's online pruning process is quite resource intensive so users running low-power nodes may see some performance degradation during the process.")]),e._v(" "),r("p",[e._v("Nethermind requires "),r("strong",[e._v("at least 16GB of RAM")]),e._v(", though more is preferable.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),r("p",[e._v("Nethermind requires periodic pruning of its database periodically: its database will grow over time and gradually consume all of your free disk space unless you prune it when your disk runs low on free space.\nThe frequency you need to prune will depend on your SSD's size.")]),e._v(" "),r("p",[e._v("Unlike Geth, however, Nethermind "),r("strong",[e._v("remains online")]),e._v(" while it is pruning.\nThis makes it a compelling choice for nodes because they won't have any down time during pruning.")]),e._v(" "),r("p",[e._v("For more information on pruning Nethermind, view the "),r("RouterLink",{attrs:{to:"/guides/node/pruning.html"}},[e._v("Pruning the Execution Client")]),e._v(" page.")],1)]),e._v(" "),r("h3",{attrs:{id:"client-comparison-table"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#client-comparison-table"}},[e._v("#")]),e._v(" Client Comparison Table")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Client")]),e._v(" "),r("th",[e._v("Type")]),e._v(" "),r("th",[e._v("CPU Usage")]),e._v(" "),r("th",[e._v("Minimum RAM Usage")]),e._v(" "),r("th",[e._v("Sync Time")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Geth")]),e._v(" "),r("td",[e._v("Full")]),e._v(" "),r("td",[e._v("Moderate")]),e._v(" "),r("td",[e._v("4 GB")]),e._v(" "),r("td",[e._v("Moderate")])]),e._v(" "),r("tr",[r("td",[e._v("Besu")]),e._v(" "),r("td",[e._v("Full")]),e._v(" "),r("td",[e._v("Moderate")]),e._v(" "),r("td",[e._v("6 GB")]),e._v(" "),r("td",[e._v("Slow")])]),e._v(" "),r("tr",[r("td",[e._v("Nethermind")]),e._v(" "),r("td",[e._v("Full")]),e._v(" "),r("td",[e._v("Moderate")]),e._v(" "),r("td",[e._v("16 GB")]),e._v(" "),r("td",[e._v("Fast")])])])]),e._v(" "),r("h2",{attrs:{id:"consensus-clients"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#consensus-clients"}},[e._v("#")]),e._v(" Consensus Clients")]),e._v(" "),r("p",[e._v("Rocket Pool's installer is proud to support four currently available Consensus clients: "),r("strong",[e._v("Lighthouse")]),e._v(", "),r("strong",[e._v("Nimbus")]),e._v(", "),r("strong",[e._v("Prysm")]),e._v(", and "),r("strong",[e._v("Teku")]),e._v(".")]),e._v(" "),r("p",[e._v("Each of these is a "),r("strong",[e._v("full client")]),e._v(", meaning you will contribute to the decentralization of the Consensus network regardless of which client you choose.")]),e._v(" "),r("p",[e._v("All four clients are quite low-risk, low-maintenance, and will generate practically identical total rewards from validation.\nThey differ slightly in terms of resource requirements and features, but you cannot go wrong with any of them.")]),e._v(" "),r("p",[e._v("By default, the Rocket Pool installer will offer to select a random consensus client for you.\nThis will help contribute to the overall "),r("strong",[e._v("diversity of the network")]),e._v(".\nThis is important from a security perspective: if one client is used by a majority of nodes and suffers from a severe bug or attack, it might cause all of those nodes to fail and thus threaten the entire Beacon Chain's stability.")]),e._v(" "),r("h3",{attrs:{id:"lighthouse"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lighthouse"}},[e._v("#")]),e._v(" Lighthouse")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://lighthouse.sigmaprime.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lighthouse"),r("OutboundLink")],1),e._v(" is an open-source Ethereum 2.0 maintained by "),r("a",{attrs:{href:"https://sigmaprime.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sigma Prime"),r("OutboundLink")],1),e._v(".\nIt implements the "),r("a",{attrs:{href:"https://github.com/ethereum/consensus-specs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ethereum 2.0 specification"),r("OutboundLink")],1),e._v(" as defined by the Ethereum Foundation Research team.")]),e._v(" "),r("p",[e._v("Lighthouse is a cutting-edge distributed systems project implementing technologies at the forefront of blockchain research; including proof-of-stake consensus, parallel transaction execution and state separation (sharding).")]),e._v(" "),r("p",[e._v("Lighthouse has no official affiliation with the Ethereum Foundation and will continue to follow its guidance as long it is remains in the best interest of the Ethereum protocol and community surrounding it.")]),e._v(" "),r("p",[e._v("Lighthouse is implemented in "),r("a",{attrs:{href:"https://www.rust-lang.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rust"),r("OutboundLink")],1),e._v(" and will maintain a focus on security and efficiency.")]),e._v(" "),r("h3",{attrs:{id:"nimbus"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nimbus"}},[e._v("#")]),e._v(" Nimbus")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://nimbus.team/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nimbus"),r("OutboundLink")],1),e._v(" is a client implementation for both Ethereum 2.0 and Ethereum 1.0 that strives to be as lightweight as possible in terms of resources used.\nThis allows it to perform well on embedded systems and resource-restricted devices - including "),r("strong",[e._v("Raspberry Pis")]),e._v(" and mobile devices.")]),e._v(" "),r("p",[e._v("However, resource-restricted hardware is not the only thing Nimbus is good for.\nIts low resource consumption makes it easy to run Nimbus together with other workloads on your server (this is especially valuable for stakers looking to lower the cost of their server instances).")]),e._v(" "),r("p",[e._v("Nimbus is written in "),r("a",{attrs:{href:"https://nim-lang.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nim"),r("OutboundLink")],1),e._v(" and maintained by the "),r("a",{attrs:{href:"https://status.im/about/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Status.im team"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"prysm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prysm"}},[e._v("#")]),e._v(" Prysm")]),e._v(" "),r("p",[e._v("The "),r("a",{attrs:{href:"https://docs.prylabs.network/docs/getting-started/#what-is-prysm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prysm"),r("OutboundLink")],1),e._v(" project is a full-featured implementation for the Ethereum 2.0 network written entirely in the "),r("a",{attrs:{href:"https://golang.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Go programming language"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("Created by "),r("a",{attrs:{href:"https://prysmaticlabs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prysmatic Labs"),r("OutboundLink")],1),e._v(", Prysm implements the official "),r("a",{attrs:{href:"https://github.com/ethereum/eth2.0-specs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ethereum 2.0 specification"),r("OutboundLink")],1),e._v(", which is the product of an ongoing collective research and development effort by various teams across the Ethereum ecosystem including the "),r("a",{attrs:{href:"https://ethereum.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ethereum Foundation"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"teku"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#teku"}},[e._v("#")]),e._v(" Teku")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://docs.teku.consensys.net/en/stable/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Teku"),r("OutboundLink")],1),e._v(" (formerly known as Artemis) is a "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Java_%28programming_language%29",target:"_blank",rel:"noopener noreferrer"}},[e._v("Java"),r("OutboundLink")],1),e._v("-based Ethereum 2.0 client designed & built to meet institutional needs and security requirements.\nPegaSys is an arm of "),r("a",{attrs:{href:"https://consensys.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ConsenSys"),r("OutboundLink")],1),e._v(" dedicated to building enterprise-ready clients and tools for interacting with the core Ethereum platform.")]),e._v(" "),r("p",[e._v("Teku is Apache 2.0 licensed and written in Java, a language notable for its maturity & ubiquity.")]),e._v(" "),r("h3",{attrs:{id:"client-comparison-table-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#client-comparison-table-2"}},[e._v("#")]),e._v(" Client Comparison Table")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Client")]),e._v(" "),r("th",[e._v("CPU Usage")]),e._v(" "),r("th",[e._v("Minimum RAM Usage")]),e._v(" "),r("th",[e._v("Sync Time")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Lighthouse")]),e._v(" "),r("td",[e._v("Moderate")]),e._v(" "),r("td",[e._v("2 GB")]),e._v(" "),r("td",[e._v("Instant with checkpoint sync")])]),e._v(" "),r("tr",[r("td",[e._v("Nimbus")]),e._v(" "),r("td",[e._v("Low")]),e._v(" "),r("td",[e._v("0.75 GB")]),e._v(" "),r("td",[e._v("Instant with checkpoint sync")])]),e._v(" "),r("tr",[r("td",[e._v("Prysm")]),e._v(" "),r("td",[e._v("Moderate")]),e._v(" "),r("td",[e._v("2 GB")]),e._v(" "),r("td",[e._v("Instant with checkpoint sync")])]),e._v(" "),r("tr",[r("td",[e._v("Teku")]),e._v(" "),r("td",[e._v("Moderate")]),e._v(" "),r("td",[e._v("4 GB")]),e._v(" "),r("td",[e._v("Instant with checkpoint sync")])])])]),e._v(" "),r("h2",{attrs:{id:"note-for-raspberry-pi-users"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#note-for-raspberry-pi-users"}},[e._v("#")]),e._v(" Note for Raspberry Pi Users")]),e._v(" "),r("p",[e._v("After the Merge of the Execution and Consensus layers in September 2022, our experience with staking on a Raspberry Pi has shown that currently the "),r("strong",[e._v("only viable client pair")]),e._v(" is "),r("strong",[e._v("Geth")]),e._v(" for your Execution client, and "),r("strong",[e._v("Nimbus")]),e._v(" for your Consensus client.")]),e._v(" "),r("p",[e._v("Other platforms can reliably run any combination of clients, but for Raspberry Pi users, we "),r("strong",[e._v("strongly recommend")]),e._v(" using Geth and Nimbus.")])])}),[],!1,null,null,null);t.default=o.exports}}]);