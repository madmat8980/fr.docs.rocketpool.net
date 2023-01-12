(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{617:function(e,t,o){"use strict";o.r(t);var a=o(13),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"backing-up-your-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#backing-up-your-node"}},[e._v("#")]),e._v(" Backing Up Your Node")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),o("p",[e._v("This is currently written for "),o("strong",[e._v("Docker Mode")]),e._v(" installations.\nSome locations may vary for Hybrid or Native users.")])]),e._v(" "),o("p",[e._v("In general, if you created your node wallet and minipools via the Smartnode, the only thing you truly need on hand to recover your node from a complete failure is the "),o("strong",[e._v("mnemonic for your node wallet")]),e._v("\nEverything else can be recovered from that quite easily.")]),e._v(" "),o("p",[e._v("If you have minipools that have externally-generated validator keys (e.g. you migrated from "),o("strong",[e._v("Allnodes")]),e._v(" to your own self-hosted node), you will need the private keystore files for your validators as well since they cannot be recovered from the node wallet.")]),e._v(" "),o("p",[e._v("That being said, once the Merge takes place, you will no longer be able to use a light Execution client (e.g. Pocket or Infura) as a fallback if you ever need to resync the Execution layer chain.\nFurthermore, you will be required to have an active and healthy Execution client to attest correctly.\nHaving a fast, reliable way to recover from an Execution client failure (such as a corrupt database, SSD malfunction, or compromised / stolen hardware) will be critical, as it can take hours or even days to sync from scratch.")]),e._v(" "),o("p",[e._v("In this guide, we'll show you how to back up some of these things to help improve your node's resilience and minimize unnecessary downtime.")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),o("p",[e._v("This guide assumes you have installed the Smartnode to the default directory ("),o("code",[e._v("~/.rocketpool")]),e._v(").\nIf you specified a different installation directory, substitute it accordingly in the instructions below.")])]),e._v(" "),o("h2",{attrs:{id:"items-that-can-be-backed-up"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#items-that-can-be-backed-up"}},[e._v("#")]),e._v(" Items That Can Be Backed Up")]),e._v(" "),o("h3",{attrs:{id:"smartnode-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#smartnode-configuration"}},[e._v("#")]),e._v(" Smartnode Configuration")]),e._v(" "),o("p",[e._v("The Smartnode's configuration is stored in "),o("code",[e._v("~/.rocketpool/user-settings.yml")]),e._v(".\nYou can save this and replace it to restore all of your Smartnode settings (i.e., the things you specified in "),o("code",[e._v("rocketpool service config")]),e._v(").")]),e._v(" "),o("h3",{attrs:{id:"execution-client-eth1-client-chain-data"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#execution-client-eth1-client-chain-data"}},[e._v("#")]),e._v(" Execution Client / ETH1 Client Chain Data")]),e._v(" "),o("p",[e._v("The Execution client's chain data is likely the most important thing to back up.\nAs mentioned, it can take several days to re-sync your EC chain data.\nAfter The Merge, this means hours to days of downtime and lost profits!")]),e._v(" "),o("p",[e._v("The chain data is stored within the "),o("code",[e._v("rocketpool_eth1clientdata")]),e._v(" Docker volume, which by default is located at "),o("code",[e._v("/var/lib/docker/volumes/rocketpool_eth1clientdata")]),e._v(".\nNote this folder is typically not accessible by unprivileged user accounts; you will need to elevate to the "),o("code",[e._v("root")]),e._v(" user to see it.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),o("p",[e._v("If you changed Docker's storage location during the initial Smartnode installation (such as Raspberry Pi users or people that run Docker on a second SSD), you will find the volume in "),o("code",[e._v("/<your external mount point>/docker/volumes/rocketpool_eth1clientdata")])]),e._v(" "),o("p",[e._v("If you don't recall which installation path you use, you can check "),o("code",[e._v("/etc/docker/daemon.json")]),e._v(" for its location.\nIf the file doesn't exist, you use the default location.")])]),e._v(" "),o("p",[e._v("For detailed instructions on how to efficiently back up your Execution chain data, please see the "),o("a",{attrs:{href:"#backing-up-your-execution-chain-data"}},[e._v("Backing up your Execution Chain Data")]),e._v(" section below.")]),e._v(" "),o("h3",{attrs:{id:"monitoring-metrics-data"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#monitoring-metrics-data"}},[e._v("#")]),e._v(" Monitoring & Metrics Data")]),e._v(" "),o("p",[e._v("This data is stored within the "),o("code",[e._v("rocketpool_grafana-storage")]),e._v(" Docker volume, which by default is located at "),o("code",[e._v("/var/lib/docker/volumes/rocketpool_grafana-storage")]),e._v(" (or "),o("code",[e._v("/<your external mount point>/docker/volumes/rocketpool_prometheus-data")]),e._v(" if you customized your Docker storage location).")]),e._v(" "),o("h2",{attrs:{id:"items-that-should-not-be-backed-up"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#items-that-should-not-be-backed-up"}},[e._v("#")]),e._v(" Items That Should "),o("strong",[e._v("Not")]),e._v(" Be Backed Up")]),e._v(" "),o("h3",{attrs:{id:"private-keys-and-passwords"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#private-keys-and-passwords"}},[e._v("#")]),e._v(" Private Keys and Passwords")]),e._v(" "),o("p",[e._v("Your node wallet's private key and the password file used to encrypt it are stored in "),o("code",[e._v("~/.rocketpool/data/wallet")]),e._v(" and "),o("code",[e._v("~/.rocketpool/data/password")]),e._v(" respectively.\nThese files don't generally need to be backed up, as they can be recovered from your mnemonic using "),o("code",[e._v("rocketpool wallet recover")]),e._v(".")]),e._v(" "),o("p",[e._v("If, for some reason, you "),o("em",[e._v("do")]),e._v(" decide to back up these files, you will need to be "),o("strong",[e._v("extremely careful")]),e._v(" about how you store them.\nAnyone who gains access to these files will gain access to your node wallet, its validators, and any funds you have stored on it for things like gas.")]),e._v(" "),o("p",[e._v("We "),o("strong",[e._v("strongly recommend")]),e._v(" you do not back up these files and just use your wallet mnemonic to recover them if necessary.")]),e._v(" "),o("h3",{attrs:{id:"consensus-client-eth2-client-chain-data"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#consensus-client-eth2-client-chain-data"}},[e._v("#")]),e._v(" Consensus Client / ETH2 Client Chain Data")]),e._v(" "),o("p",[e._v("Unlike the Execution layer data, the Consensus layer data is not nearly as important to your node thanks to "),o("RouterLink",{attrs:{to:"/guides/node/config-docker.html#beacon-chain-checkpoint-syncing"}},[e._v("Checkpoint Sync")]),e._v(".\nConsensus clients can easily use this technique to immediately resync to the head of the Beacon chain and resume validation duties.")],1),e._v(" "),o("h2",{attrs:{id:"backing-up-your-execution-chain-data"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#backing-up-your-execution-chain-data"}},[e._v("#")]),e._v(" Backing up your Execution Chain Data")]),e._v(" "),o("p",[e._v("The Smartnode comes with the ability to back up your Execution chain data via the "),o("code",[e._v("rocketpool service export-eth1-data")]),e._v(" command.\nUnder the hood, this utilizes "),o("code",[e._v("rsync")]),e._v(", a powerful backup/copy tool within Linux.")]),e._v(" "),o("p",[o("code",[e._v("rsync")]),e._v(" compares the files in the source directory (your Docker volume) and the target directory (your backup location).\nIf a source file doesn't exist in the target directory, it will be copied entirely.\nHowever, if it "),o("em",[e._v("does")]),e._v(" exist, "),o("code",[e._v("rsync")]),e._v(" will only copy the "),o("em",[e._v("changes")]),e._v(" between the two files.")]),e._v(" "),o("p",[e._v("This means the first backup will take a good amount of time as it must copy all of the data initially.\nSubsequent backups will only copy the changes between your previous backup and now, making the process much faster.")]),e._v(" "),o("p",[e._v("As part of a backup strategy, you may want to plan to run "),o("code",[e._v("export-eth1-data")]),e._v(" on a regular basis.\nTo ensure the integrity of the chain data, running this command will "),o("strong",[e._v("safely shut down the Execution client before backing up its data")]),e._v(".\nIf you elect to schedule it every week, your Execution client will only be down for a few minutes while it updates the backup.\nThis is certainly better than the days it would take to resync the data from scratch.")]),e._v(" "),o("p",[e._v("To trigger a backup, start by "),o("strong",[e._v("mounting the storage medium you want to export the data to")]),e._v(".\nFor example, this could be an external hard drive.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("HINT")]),e._v(" "),o("p",[e._v("If you don't know how to mount external devices on Linux, it's easy!\nPlug the device into your node, and follow "),o("a",{attrs:{href:"https://www.addictivetips.com/ubuntu-linux-tips/mount-external-hard-drives-in-linux/",target:"_blank",rel:"noopener noreferrer"}},[e._v("a guide like this"),o("OutboundLink")],1),e._v(" to learn how to mount it.")])]),e._v(" "),o("p",[e._v("Once you have it mounted, note its mount path.\nFor this example, let's assume that we want to store the chain data in a folder called "),o("code",[e._v("/mnt/external-drive")]),e._v(" which the external device is mounted to.\nReplace this with your actual mount path wherever you see it below.")]),e._v(" "),o("p",[e._v("Now, run the following command:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("rocketpool service export-eth1-data /mnt/external-drive\n")])])]),o("p",[e._v("This will check that your target folder is reachable and has enough free space to store the chain data.\nThe output will look like this:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("This will export your execution client's chain data to an external directory, such as a portable hard drive.\nIf your execution client is running, it will be shut down.\nOnce the export is complete, your execution client will restart automatically.\n\nYou have a fallback execution client configured (http://<some address>:8545).\nRocket Pool (and your consensus client) will use that while the main client is offline.\n\nChain data size:       87 GiB\nTarget dir free space: 287 GiB\nYour target directory has enough space to store the chain data.\n\nNOTE: Once started, this process *will not stop* until the export is complete - even if you exit the command with Ctrl+C.\nPlease do not exit until it finishes so you can watch its progress.\n\nAre you sure you want to export your execution layer chain data? [y/n]\n")])])]),o("p",[e._v("As you can see, the chain data is 87 GB (for the Prater testnet; the Ethereum mainnet will be an order of magnitude larger) and the external folder has 287 GiB free so exporting can continue.")]),e._v(" "),o("p",[e._v("When you're ready, enter "),o("code",[e._v("y")]),e._v(" here and press "),o("code",[e._v("Enter")]),e._v(".\nThis will stop your Execution client and begin copying its chain data to your target folder.\nYou will see the progress of each individual file go past the screen as it runs.")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),o("p",[e._v("It's important that you "),o("em",[e._v("do not")]),e._v(" exit the terminal while this is running.\nIf you do, the copy will continue to run in the background but you won't be able to follow its progress!")])]),e._v(" "),o("p",[e._v("Once it's finished, it will automatically restart your Execution client container.")]),e._v(" "),o("p",[o("strong",[e._v("Note that your existing chain data is not deleted from your node after the export is complete!")])]),e._v(" "),o("h3",{attrs:{id:"restoring-your-execution-chain-data"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#restoring-your-execution-chain-data"}},[e._v("#")]),e._v(" Restoring Your Execution Chain Data")]),e._v(" "),o("p",[e._v("If you ever need to restore your backed up chain data, simply run the following command.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("rocketpool service import-eth1-data /mnt/external-drive\n")])])]),o("div",{staticClass:"custom-block danger"},[o("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),o("p",[e._v("This will automatically delete any existing Execution client data in your "),o("code",[e._v("rocketpool_eth1clientdata")]),e._v(" volume!")])]),e._v(" "),o("p",[e._v("Once it's done, your Execution client will be ready to go.")])])}),[],!1,null,null,null);t.default=n.exports}}]);