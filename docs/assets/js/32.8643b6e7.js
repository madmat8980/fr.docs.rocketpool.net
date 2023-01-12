(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{476:function(t,e,o){t.exports=o.p+"assets/img/rp-install-screen.31b64d0e.png"},622:function(t,e,o){"use strict";o.r(e);var a=o(13),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"creating-a-standard-rocket-pool-node-with-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-standard-rocket-pool-node-with-docker"}},[t._v("#")]),t._v(" Creating a Standard Rocket Pool Node with Docker")]),t._v(" "),a("p",[t._v("In this section, we will walk through the process of installing the Rocket Pool Smartnode stack using the standard "),a("a",{attrs:{href:"https://www.docker.com/resources/what-container",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker"),a("OutboundLink")],1),t._v("-based setup.\nThis will install and configure everything you need to run a complete node, including:")]),t._v(" "),a("ul",[a("li",[t._v("The Rocket Pool "),a("strong",[t._v("Smartnode")]),t._v(" software")]),t._v(" "),a("li",[t._v("An "),a("strong",[t._v("Execution")]),t._v(" (formerly ETH1) client of your choice, or a connection to an existing client you already manage")]),t._v(" "),a("li",[t._v("A "),a("strong",[t._v("Consensus")]),t._v(" (formerly ETH2) client of your choice, or a connection to an existing client you already manage")]),t._v(" "),a("li",[t._v("A "),a("strong",[t._v("Validator")]),t._v(" client that will handle your Beacon Chain validation duties")]),t._v(" "),a("li",[t._v("(Optionally) a "),a("strong",[t._v("monitoring stack")]),t._v(" for capturing performance and health metrics")])]),t._v(" "),a("p",[t._v("All you need to do is tell it what you want to run!")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[t._v("The below instructions require you to use your system's "),a("strong",[t._v("terminal")]),t._v(" to enter and execute commands.\nIf you are connected to the node machine via SSH, you are already doing this.\nIf you are on the node machine and using a Desktop UI, you will need to open a terminal window to execute the following commands.\nRefer to your OS's instructions to learn how to do this if you are unfamiliar.")])]),t._v(" "),a("h2",{attrs:{id:"process-overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#process-overview"}},[t._v("#")]),t._v(" Process Overview")]),t._v(" "),a("p",[t._v("At a high level, here's what is involved in installing Rocket Pool:")]),t._v(" "),a("ol",[a("li",[t._v("Download the Rocket Pool command-line interface (CLI)")]),t._v(" "),a("li",[t._v("Use the CLI to install the Smartnode stack")]),t._v(" "),a("li",[t._v("Configure the Smartnode stack with an easy-to-use UI in the terminal")]),t._v(" "),a("li",[t._v("Done!")])]),t._v(" "),a("h2",{attrs:{id:"downloading-the-rocket-pool-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#downloading-the-rocket-pool-cli"}},[t._v("#")]),t._v(" Downloading the Rocket Pool CLI")]),t._v(" "),a("p",[t._v("The instructions for downloading the CLI vary based on your Operating System.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[t._v("You must perform the following instructions "),a("strong",[t._v("on the machine you will use for your Rocket Pool node.")]),t._v("\nIf you are not using a keyboard and monitor directly connected to your node machine, you will need to access it remotely (e.g. via SSH) and run these commands on it through that remote connection.")])]),t._v(" "),a("Tabs",{attrs:{type:"border-card"}},[a("Tab",{attrs:{label:"Linux"}},[a("p",[t._v("On Linux, start by creating a new folder that will hold the CLI application:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p ~/bin\n")])])]),a("p",[t._v("Next, download the CLI.\nThis depends on what architecture your system uses.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("If you do not know your CPU architecture, you can run the following command to find it:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("uname")]),t._v(" -m\n")])])]),a("p",[t._v("The output of this command will print your architecture.\n"),a("strong",[t._v("Note that "),a("code",[t._v("x86_64")]),t._v(" is the same as "),a("code",[t._v("x64")]),t._v(" and "),a("code",[t._v("amd64")]),t._v(".")]),t._v(" "),a("strong",[t._v("Note that "),a("code",[t._v("aarch64")]),t._v(" is the same as "),a("code",[t._v("arm64")]),t._v(".")])])]),t._v(" "),a("p",[t._v("For "),a("code",[t._v("x64")]),t._v(" systems (most normal computers):")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://github.com/rocket-pool/smartnode-install/releases/latest/download/rocketpool-cli-linux-amd64 -O ~/bin/rocketpool\n")])])]),a("p",[t._v("For "),a("code",[t._v("arm64")]),t._v(" systems, such as the Raspberry Pi:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://github.com/rocket-pool/smartnode-install/releases/latest/download/rocketpool-cli-linux-arm64 -O ~/bin/rocketpool\n")])])]),a("p",[t._v("Mark it as executable, so it has permissions to run:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x ~/bin/rocketpool\n")])])]),a("p",[t._v("Next, "),a("strong",[t._v("log out and log back in")]),t._v(" (or close SSH and reconnect), or simply restart.\nThis is because the path that you saved the CLI to ("),a("code",[t._v("~/bin")]),t._v(") may not be in your system's "),a("code",[t._v("PATH")]),t._v(" variable (the list of places your system searches for executables) yet.\nLogging out and back in will put it there.")]),t._v(" "),a("p",[t._v("Now, test running it with the "),a("code",[t._v("--version")]),t._v(" flag.\nYou should see output like this:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("rocketpool --version\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("rocketpool version 1.5.0\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("If you see an error message like this,")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("-bash: /home/user/rocketpool: cannot execute binary file: Exec format error\n")])])]),a("p",[t._v("it means that you downloaded the wrong version above.\nPlease check if your system is "),a("strong",[t._v("x64")]),t._v(" or "),a("strong",[t._v("arm64")]),t._v(" using the command in the tip above, and download the appropriate version.\nIf your system is neither of those, then you will not be able to run Rocket Pool.")])])]),t._v(" "),a("Tab",{attrs:{label:"macOS"}},[a("p",[t._v("On macOS, download the CLI for your machine with the following command.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("If you do not know your CPU architecture, you can run the following command to find it:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("uname")]),t._v(" -m\n")])])]),a("p",[t._v("The output of this command will print your architecture.\n"),a("strong",[t._v("Note that "),a("code",[t._v("x86_64")]),t._v(" is the same as "),a("code",[t._v("x64")]),t._v(" and "),a("code",[t._v("amd64")]),t._v(".")]),t._v(" "),a("strong",[t._v("Note that "),a("code",[t._v("aarch64")]),t._v(" is the same as "),a("code",[t._v("arm64")]),t._v(".")])])]),t._v(" "),a("p",[t._v("For "),a("code",[t._v("x64")]),t._v(" systems (most Macs):")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -L https://github.com/rocket-pool/smartnode-install/releases/latest/download/rocketpool-cli-darwin-amd64 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /usr/local/bin/rocketpool\n")])])]),a("p",[t._v("For "),a("code",[t._v("arm64")]),t._v(" systems, such as the Mac mini with M1:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -L https://github.com/rocket-pool/smartnode-install/releases/latest/download/rocketpool-cli-darwin-arm64 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /opt/homebrew/bin/rocketpool\n")])])]),a("p",[t._v("For "),a("code",[t._v("x64")]),t._v(" systems (most Macs):\nMark it as executable, so it has permissions to run:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x /usr/local/bin/rocketpool\n")])])]),a("p",[t._v("For "),a("code",[t._v("arm64")]),t._v(" systems, such as the Mac mini with M1:\nMark it as executable, so it has permissions to run:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x /opt/homebrew/bin/rocketpool\n")])])]),a("p",[t._v("Now, test running it with the "),a("code",[t._v("--version")]),t._v(" flag.\nYou should see output like this:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("rocketpool --version\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("rocketpool version 1.3.0\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("If you see an error message like this,")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/usr/local/bin/rocketpool: Exec format error\n")])])]),a("p",[t._v("it means that you downloaded the wrong version above.\nPlease check if your system is x64 or arm64 using the command in the tip above, and download the appropriate version.\nIf your system is neither of those, then you will not be able to run Rocket Pool.")])])])],1),t._v(" "),a("h2",{attrs:{id:"installing-the-smartnode-stack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-smartnode-stack"}},[t._v("#")]),t._v(" Installing the Smartnode Stack")]),t._v(" "),a("p",[t._v("Now that you have the CLI installed, you can deploy the Smartnode stack.\nThis will prepare your system with Docker, "),a("a",{attrs:{href:"https://docs.docker.com/compose/",target:"_blank",rel:"noopener noreferrer"}},[t._v("docker-compose"),a("OutboundLink")],1),t._v(", and load the Smartnode files so they're ready to go.\nIt won't actually run anything yet; that comes later.")]),t._v(" "),a("p",[t._v("To deploy the Smartnode stack, you will need to run the following command on your node machine (either by logging in locally, or connecting remotely such as through SSH):")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("rocketpool service install\n")])])]),a("p",[t._v("This will grab the latest version of the Smartnode stack and set it up.\nYou should see output like this ("),a("em",[t._v("above some release notes for the latest version which will be printed at the end")]),t._v("):")]),t._v(" "),a("p",[a("img",{attrs:{src:o(476),alt:""}})]),t._v(" "),a("p",[t._v("If there aren't any error messages, then the installation was successful.\nBy default, it will be put into the "),a("code",[t._v("~/.rocketpool")]),t._v(" directory inside of your user account's home folder.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[t._v("Note that the Smartnode installer cannot install "),a("code",[t._v("docker")]),t._v(" and "),a("code",[t._v("docker-compose")]),t._v(" on all platforms automatically.\nIf you receive an error message like this during the installation:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Automatic dependency installation for the Mint operating system is not supported.\nPlease install docker and docker-compose manually, then try again with the '-d' flag to skip OS dependency installation.\nBe sure to add yourself to the docker group with 'sudo usermod -aG docker $USER' after installing docker.\nLog out and back in, or restart your system after you run this command.\n")])])]),a("p",[t._v("Then you simply have to install those two things manually.")]),t._v(" "),a("p",[t._v("Docker provides common "),a("a",{attrs:{href:"https://docs.docker.com/engine/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("install instructions here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Docker-compose provides common "),a("a",{attrs:{href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("install instructions here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Once both are installed, make sure you give your user account permission to use Docker:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("usermod")]),t._v(" -aG "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$USER")]),t._v("\n")])])]),a("p",[t._v("Finally, re-run the installer with the "),a("code",[t._v("-d")]),t._v(" flag to skip Docker installation:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("rocketpool service install -d\n")])])])]),t._v(" "),a("p",[t._v("After this, "),a("strong",[t._v("log out and back in or restart your SSH session")]),t._v(" for the settings to take effect.")]),t._v(" "),a("p",[t._v("Once this is finished, the Smartnode stack will be ready to run.")]),t._v(" "),a("h2",{attrs:{id:"configuring-docker-s-storage-location"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-docker-s-storage-location"}},[t._v("#")]),t._v(" Configuring Docker's Storage Location")]),t._v(" "),a("p",[t._v("By default, Docker will store all of its container data on your operating system's drive.\nIn some cases, this is not what you want.\nFor example, on "),a("strong",[t._v("Raspberry Pi")]),t._v(" systems, all of the chain data should be stored on the external SSD, not on the MicroSD card.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[t._v("If you are fine with this default behavior, skip down to the next section.")])]),t._v(" "),a("p",[t._v("To do this, create a new file called "),a("code",[t._v("/etc/docker/daemon.json")]),t._v(" as the root user:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo nano /etc/docker/daemon.json\n")])])]),a("p",[t._v("This will be empty at first, which is fine. Add this as the contents:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n    "data-root": "<your external mount point>/docker"\n}\n')])])]),a("p",[t._v("where "),a("code",[t._v("<your external mount point>")]),t._v(" is the directory that your other drive is mounted to.\nIn the case of Raspberry Pi users, it should be "),a("code",[t._v("/mnt/rpdata")]),t._v(" or whatever folder you set up in the "),a("RouterLink",{attrs:{to:"/guides/node/local/prepare-pi.html"}},[t._v("Preparing a Raspberry Pi")]),t._v(" section.")],1),t._v(" "),a("p",[t._v("Press "),a("code",[t._v("Ctrl+O, Enter")]),t._v(" to save the file, and "),a("code",[t._v("Ctrl+X, Enter")]),t._v(" to exit the editor.")]),t._v(" "),a("p",[t._v("Next, make the folder:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo mkdir -p <your external mount point>/docker\n")])])]),a("p",[t._v("(Again, for example, this would be "),a("code",[t._v("/mnt/rpdata/docker")]),t._v(" for Raspberry Pi users.)")]),t._v(" "),a("p",[t._v("Now, restart the docker daemon so it picks up on the changes:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo systemctl restart docker\n")])])]),a("p",[t._v("After that, Docker will store its data on your desired disk.")]),t._v(" "),a("h2",{attrs:{id:"configuring-the-smartnode-stack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-smartnode-stack"}},[t._v("#")]),t._v(" Configuring the Smartnode Stack")]),t._v(" "),a("p",[t._v("The next step in the installation process is to do an initial configuration of your node.\nMove on to the "),a("RouterLink",{attrs:{to:"/guides/node/config-docker.html"}},[t._v("Configuring the Smartnode Stack")]),t._v(" section for a walkthrough of this process.")],1)],1)}),[],!1,null,null,null);e.default=s.exports}}]);