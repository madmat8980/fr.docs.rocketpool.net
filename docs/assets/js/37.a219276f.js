(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{528:function(e,t,o){e.exports=o.p+"assets/img/tui-odao.070fbd0e.png"},656:function(e,t,o){"use strict";o.r(t);var a=o(13),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"setting-up-an-oracle-dao-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-an-oracle-dao-node"}},[e._v("#")]),e._v(" Setting up an Oracle DAO Node")]),e._v(" "),a("p",[e._v("At a bare minimum, a standard Rocket Pool node runs the following:")]),e._v(" "),a("ul",[a("li",[e._v("The Smartnode CLI")]),e._v(" "),a("li",[e._v("The Smartnode API daemon")]),e._v(" "),a("li",[e._v("The Smartnode "),a("code",[e._v("node")]),e._v(" daemon")]),e._v(" "),a("li",[e._v("The Smartnode "),a("code",[e._v("watchtower")]),e._v(" daemon")])]),e._v(" "),a("p",[e._v("Optionally, the node can also run the following components:")]),e._v(" "),a("ul",[a("li",[e._v("An Execution Client")]),e._v(" "),a("li",[e._v("A Beacon Node")]),e._v(" "),a("li",[e._v("A Validator Client")]),e._v(" "),a("li",[e._v("MEV-Boost")]),e._v(" "),a("li",[e._v("Prometheus")]),e._v(" "),a("li",[e._v("The Prometheus Node Exporter")]),e._v(" "),a("li",[e._v("Grafana")])]),e._v(" "),a("p",[e._v("Each of these components can be run as Docker containers in the standard setup, as "),a("code",[e._v("systemd")]),e._v(' services in the "Native Mode" setup, or run as externally-managed entities that the Smartnode can connect to via their respective API routes.')]),e._v(" "),a("p",[e._v("Conveniently, Oracle DAO nodes are the same as normal Rocket Pool nodes, but the "),a("code",[e._v("watchtower")]),e._v(" daemon performs the supplemental Oracle DAO duties and there are more Prometheus metrics collected for performance monitoring purposes.")]),e._v(" "),a("h2",{attrs:{id:"initial-node-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initial-node-setup"}},[e._v("#")]),e._v(" Initial Node Setup")]),e._v(" "),a("p",[e._v("The best way to start is by following "),a("RouterLink",{attrs:{to:"/guides/node/platform.html"}},[e._v("the standard setup instructions")]),e._v(" for a normal Rocket Pool node.\nThat process will help you determine how you'd like to configure and run your node.")],1),e._v(" "),a("p",[e._v("If you would like to run minipools (validators) on your node, please follow the normal node documentation from start to finish and return here when you're done.")]),e._v(" "),a("p",[e._v("If you do "),a("em",[e._v("not")]),e._v(" intend to run minipools and instead will use it purely for Oracle DAO duties, you can skip all of the steps relating to staking RPL and minipool creation.\nThe other steps such as node registration, establishing a good security posture, monitoring the node's health and performance, and updating the Smartnode after an update all still apply to you and you should review them carefully before proceeding.\nReturn here when you've finished.")]),e._v(" "),a("h2",{attrs:{id:"additional-oracle-dao-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-oracle-dao-configuration"}},[e._v("#")]),e._v(" Additional Oracle DAO Configuration")]),e._v(" "),a("p",[e._v("There are two additional settings you need to provision in order to satisfy your Oracle DAO responsibilities.\nPlease select the mode you use to configure your node below from the tabs below.")]),e._v(" "),a("Tabs",{attrs:{type:"border-card"}},[a("Tab",{attrs:{label:"[service config] Interactive UI"}},[a("p",[e._v("Open the "),a("code",[e._v("rocketpool service config")]),e._v(" TUI and go to the "),a("code",[e._v("Smartnode and TX Fees")]),e._v(" section.\nHere, you will see two options at the bottom:")]),e._v(" "),a("center",[a("p",[a("img",{attrs:{src:o(528),alt:""}})])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("Archive-Mode EC URL")]),e._v(" must be the HTTP endpoint of the RPC API for your Archive Execution Client.\n"),a("strong",[e._v("Note that if you are already using your Archive EC as your primary client in Externally-Managed mode, you can ignore this setting.")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("Web3.Storage API Token")]),e._v(" must be populated with the API Token for your Web3.Storage account, which you can find in your account settings.\nThis will be required in order to upload your generated rewards tree artifacts to IPFS.")])],1),e._v(" "),a("Tab",{attrs:{label:"[service config] Headlessly"}},[a("p",[e._v("Run the following command to configure your node headlessly:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('rocketpool service config --smartnode-archiveECUrl "http://<your Archive EC URL>" --smartnode-web3StorageApiToken "<your web3.storage API token>"\n')])])]),a("p",[e._v("Where:")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("--smartnode-archiveECUrl")]),e._v(" must be the HTTP endpoint of the RPC API for your Archive Execution Client.\n"),a("strong",[e._v("Note that if you are already using your Archive EC as your primary client in Externally-Managed mode, you can ignore this setting.")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("--smartnode-web3StorageApiToken")]),e._v(" must be populated with the API Token for your Web3.Storage account, which you can find in your account settings.\nThis will be required in order to upload your generated rewards tree artifacts to IPFS.")])])]),e._v(" "),a("p",[e._v("Finally, restart your "),a("code",[e._v("watchtower")]),e._v(" daemon (i.e., with "),a("code",[e._v("docker restart rocketpool_watchtower")]),e._v(" in Docker or Hybrid mode, or "),a("code",[e._v("sudo systemctl restart rp_watchtower")]),e._v(" in Native mode) for the settings to take effect.")])]),e._v(" "),a("Tab",{attrs:{label:"Direct Config File"}},[a("p",[e._v("Open the "),a("code",[e._v("user-settings.yml")]),e._v(" file in your Smartnode directory ("),a("code",[e._v("~/.rocketpool")]),e._v(" by default) in a text editor.\nScroll down to the "),a("code",[e._v("smartnode")]),e._v(" section:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('smartnode:\n  archiveECUrl: http://<your Archive EC URL>\n  dataPath: /home/user/.rocketpool/data\n  manualMaxFee: "0"\n  minipoolStakeGasThreshold: "150"\n  network: mainnet\n  priorityFee: "2"\n  projectName: rocketpool\n  rewardsTreeMode: generate\n  web3StorageApiToken: <your web3.storage API token>\n')])])]),a("p",[e._v("Replace the values in the "),a("code",[e._v("archiveECUrl")]),e._v(" and "),a("code",[e._v("web3StorageApiToken")]),e._v(" fields, where:")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("archiveECUrl")]),e._v(" must be the HTTP endpoint of the RPC API for your Archive Execution Client.\n"),a("strong",[e._v("Note that if you are already using your Archive EC as your primary client in Externally-Managed mode, you can ignore this setting.")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("web3StorageApiToken")]),e._v(" must be populated with the API Token for your Web3.Storage account, which you can find in your account settings.\nThis will be required in order to upload your generated rewards tree artifacts to IPFS.")])])]),e._v(" "),a("p",[e._v("Finally, restart your "),a("code",[e._v("watchtower")]),e._v(" daemon (i.e., with "),a("code",[e._v("docker restart rocketpool_watchtower")]),e._v(" in Docker or Hybrid mode, or "),a("code",[e._v("sudo systemctl restart rp_watchtower")]),e._v(" in Native mode) for the settings to take effect.")])])],1),e._v(" "),a("h2",{attrs:{id:"oracle-dao-smartnode-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oracle-dao-smartnode-commands"}},[e._v("#")]),e._v(" Oracle DAO Smartnode Commands")]),e._v(" "),a("p",[e._v("The Smartnode CLI's "),a("code",[e._v("odao")]),e._v(" command group is used to interact with the Oracle DAO contracts and duties on-chain:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("NAME:\n   rocketpool odao - Manage the Rocket Pool oracle DAO\n\nUSAGE:\n   rocketpool odao command [command options] [arguments...]\n\nCOMMANDS:\n   status, s             Get oracle DAO status\n   members, m            Get the oracle DAO members\n   member-settings, b    Get the oracle DAO settings related to oracle DAO members\n   proposal-settings, a  Get the oracle DAO settings related to oracle DAO proposals\n   minipool-settings, i  Get the oracle DAO settings related to minipools\n   propose, p            Make an oracle DAO proposal\n   proposals, o          Manage oracle DAO proposals\n   join, j               Join the oracle DAO (requires an executed invite proposal)\n   leave, l              Leave the oracle DAO (requires an executed leave proposal)\n\nOPTIONS:\n   --help, -h  show help\n")])])]),a("h3",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" status")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("status")]),e._v(" command simply summarizes a few details about the Oracle DAO such as member count and proposal count:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("The node is a member of the oracle DAO - it can create unbonded minipools, vote on DAO proposals and perform watchtower duties.\n\nThere are currently 8 member(s) in the oracle DAO.\n\nThere are 29 oracle DAO proposal(s) in total:\n- 22 proposal(s) have passed and been executed\n- 7 proposal(s) were cancelled, defeated, or have expired\n")])])]),a("h3",{attrs:{id:"members"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[e._v("#")]),e._v(" members")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("members")]),e._v(" command prints detailed information about each member of the Oracle DAO, including their handle, their contact information, their node address, their RPL bond, and the last time they submitted a proposal for voting:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("The oracle DAO has 8 members:\n\n--------------------\n\nMember ID:            kermit-2\nURL:                  https://www.rocketpool.net\nNode address:         0x04ddB06D1429578691F630B67A53916445DA38bE\nJoined at:            31 Jul 21 23:32 EDT\nLast proposal:        27 Sep 22 21:18 EDT\nRPL bond amount:      5000.000000\nUnbonded minipools:   0\n...\n")])])]),a("h3",{attrs:{id:"member-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#member-settings"}},[e._v("#")]),e._v(" member-settings")]),e._v(" "),a("p",[a("code",[e._v("member-settings")]),e._v(" shows the current values for each of the configurable parameters related to Oracle DAO membership:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ODAO Voting Quorum Threshold: 51.000000%\nRequired Member RPL Bond: 1750.000000 RPL\nMax Number of Unbonded Minipools: 250\nConsecutive Challenge Cooldown: 300 Blocks\nChallenge Meeting Window: 900 Blocks\nCost for Non-members to Challenge Members: 1.000000 ETH\n")])])]),a("p",[e._v("This command is described in more detail in the "),a("RouterLink",{attrs:{to:"/guides/odao/proposals.html"}},[e._v("Oracle DAO Proposals")]),e._v(" section.")],1),e._v(" "),a("h3",{attrs:{id:"proposal-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proposal-settings"}},[e._v("#")]),e._v(" proposal-settings")]),e._v(" "),a("p",[a("code",[e._v("proposal-settings")]),e._v(" shows the current values for each of the configurable parameters related to proposals that the Oracle DAO can vote on:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Cooldown Between Proposals: 1h0m0s\nProposal Voting Window: 168h0m0s\nDelay Before Voting on a Proposal is Allowed: 15m0s\nWindow to Execute an Accepted Proposal: 168h0m0s\nWindow to Act on an Executed Proposal: 168h0m0s\n")])])]),a("p",[e._v("This command is described in more detail in the "),a("RouterLink",{attrs:{to:"/guides/odao/proposals.html"}},[e._v("Oracle DAO Proposals")]),e._v(" section.")],1),e._v(" "),a("h3",{attrs:{id:"minipool-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#minipool-settings"}},[e._v("#")]),e._v(" minipool-settings")]),e._v(" "),a("p",[a("code",[e._v("minipool-settings")]),e._v(" shows the current values for each of the configurable parameters related to minipools on the Rocket Pool network:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Scrub Period: 1h0m0s\n")])])]),a("h3",{attrs:{id:"propose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#propose"}},[e._v("#")]),e._v(" propose")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("propose")]),e._v(" command is used to submit governance proposals that the rest of the Oracle DAO can vote on.\nThese can involve changing a setting or modifying the Oracle DAO members (i.e., inviting or kicking other members).")]),e._v(" "),a("p",[e._v("This command is described in more detail in the "),a("RouterLink",{attrs:{to:"/guides/odao/proposals.html"}},[e._v("Oracle DAO Proposals")]),e._v(" section.")],1),e._v(" "),a("h3",{attrs:{id:"proposals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proposals"}},[e._v("#")]),e._v(" proposals")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("proposals")]),e._v(" command is used to interact with existing Oracle DAO governance proposals.\nIt can view them, rescind proposals that you made, vote on them, and execute them (if applicable) causing them to take effect after they have been approved by the other members:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("NAME:\n   rocketpool odao proposals - Manage oracle DAO proposals\n\nUSAGE:\n   rocketpool odao proposals command [command options] [arguments...]\n\nCOMMANDS:\n   list, l     List the oracle DAO proposals\n   details, d  View proposal details\n   cancel, c   Cancel a proposal made by the node\n   vote, v     Vote on a proposal\n   execute, x  Execute a proposal\n\nOPTIONS:\n   --help, -h  show help\n   \n")])])]),a("p",[e._v("This command is described in more detail in the "),a("RouterLink",{attrs:{to:"/guides/odao/proposals.html"}},[e._v("Oracle DAO Proposals")]),e._v(" section.")],1),e._v(" "),a("h3",{attrs:{id:"join-leave"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#join-leave"}},[e._v("#")]),e._v(" join / leave")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("join")]),e._v(" and "),a("code",[e._v("leave")]),e._v(" commands are used to join the Oracle DAO once you've been invited, or leave the Oracle DAO once the other members have approved your resignation request.")]),e._v(" "),a("h2",{attrs:{id:"joining-the-oracle-dao"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#joining-the-oracle-dao"}},[e._v("#")]),e._v(" Joining the Oracle DAO")]),e._v(" "),a("h3",{attrs:{id:"the-rpl-bond"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-rpl-bond"}},[e._v("#")]),e._v(" The RPL Bond")]),e._v(" "),a("p",[e._v("In order to join the Oracle DAO, your node wallet will need enough RPL in it to cover the required membership bond.\nThis will be locked in Rocket Pool's vault as part of the joining process.\nThe exact amount of RPL required for the bond will be determined at the time of your invitation, and will be communicated to you by the other Oracle DAO members prior to onboarding you.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("Unlike all other ETH and RPL rewards, the RPL bond is "),a("em",[e._v("not")]),e._v(" sent to your node's withdrawal address upon exiting the Oracle DAO.\nIt is sent back to your node wallet itself.\nConsider this as extra incentive to protect your node wallet from compromise.")])]),e._v(" "),a("h3",{attrs:{id:"accepting-an-invitation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accepting-an-invitation"}},[e._v("#")]),e._v(" Accepting an Invitation")]),e._v(" "),a("p",[e._v("Once your node is set up and you have been invited to join the Oracle DAO by the existing members, you can use the "),a("code",[e._v("rocketpool odao join")]),e._v(" command to accept the invitation.\nThis will involve two transactions:")]),e._v(" "),a("ul",[a("li",[e._v("One to lock the RPL required for your bond")]),e._v(" "),a("li",[e._v("One to join the Oracle DAO when the bond has been received")])]),e._v(" "),a("p",[e._v("Once you've joined, your "),a("code",[e._v("watchtower")]),e._v(" daemon will automatically begin performing its required duties.\nYou can verify this by looking at its logs (e.g. "),a("code",[e._v("rocketpool service logs watchtower")]),e._v(" for standard Docker-based installations); the watchtower performs its loop of duties every 4 to 6 minutes, and you will notice a distinct change in its output once you've joined the Oracle DAO.")]),e._v(" "),a("h3",{attrs:{id:"next-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[e._v("#")]),e._v(" Next Steps")]),e._v(" "),a("p",[e._v("Now that you've joined the Oracle DAO, take a look at the next section to learn how to test your node in this role.")])],1)}),[],!1,null,null,null);t.default=r.exports}}]);