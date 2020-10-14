(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{528:function(e,t,r){"use strict";r.r(t);var o=r(41),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("::: tip")]),e._v(" "),r("p",[e._v("🔥  "),r("a",{attrs:{href:"https://bing.com/covid",target:"_blank",rel:"noopener noreferrer"}},[e._v("COVID-19 Tracker and News"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v(":::")]),e._v(" "),r("h3",{attrs:{id:"making-the-most-out-of-the-azure-cli-interactive-mode"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#making-the-most-out-of-the-azure-cli-interactive-mode"}},[e._v("#")]),e._v(" Making the most out of the Azure CLI Interactive Mode")]),e._v(" "),r("h4",{attrs:{id:"the-power-of-the-azure-cli"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#the-power-of-the-azure-cli"}},[e._v("#")]),e._v(" The power of the Azure CLI")]),e._v(" "),r("p",[e._v("The "),r("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure CLI"),r("OutboundLink")],1),e._v(" is a very powerful tool. You can use it to do basically anything in Azure from the command prompt, including creating and deleting resources like "),r("a",{attrs:{href:"https://azure.microsoft.com/services/app-service/web/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web Apps"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://azure.microsoft.com/services/virtual-machines/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("VMs"),r("OutboundLink")],1),e._v(". You can use the "),r("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/install-azure-cli?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure CLI"),r("OutboundLink")],1),e._v(" from your local computer or from the "),r("a",{attrs:{href:"https://shell.azure.com/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cloud Shell"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("In this post, we'll explore the "),r("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/interactive-azure-cli?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("interactive mode of the Azure CLI"),r("OutboundLink")],1),e._v(". This is a special mode that enhances the behavior of the CLI.")]),e._v(" "),r("h4",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),r("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),r("ul",[r("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),r("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),r("OutboundLink")],1),e._v(" before you begin)")]),e._v(" "),r("li",[e._v("The "),r("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure CLI"),r("OutboundLink")],1),e._v(". You can "),r("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/install-azure-cli?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("download it for Windows, Linux or Mac"),r("OutboundLink")],1),e._v(". Or you can use the "),r("a",{attrs:{href:"https://shell.azure.com/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cloud Shell"),r("OutboundLink")],1)])]),e._v(" "),r("h4",{attrs:{id:"using-the-azure-cli-interactive-mode"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#using-the-azure-cli-interactive-mode"}},[e._v("#")]),e._v(" Using the Azure CLI Interactive Mode")]),e._v(" "),r("p",[e._v("Let's take a look at the Azure CLI interactive mode. We'll use the Azure Cloud Shell for this and you can also use an Azure CLI that you run on your local machine.")]),e._v(" "),r("ol",[r("li",[e._v("Open Azure Cloud Shell, "),r("a",{attrs:{href:"https://shell.azure.com/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://shell.azure.com/"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Type "),r("strong",[e._v("az interactive")]),e._v(" to start the interactive mode")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/48intercativemode.png")}}),e._v(" "),r("p",[e._v("(Azure CLI interactive mode)")]),e._v(" "),r("p",[r("strong",[e._v("Autocomplete and examples")])]),e._v(" "),r("p",[e._v("Azure CLI interactive mode helps you to be more productive. When you use it for a CLI command, like "),r("strong",[e._v("webapp show")]),e._v(", it will automatically complete your command. It also shows you which parameters are available for the command and what the parameters mean (number 1 in the image).\nYou also get a description of what the command does. For instance, for the "),r("strong",[e._v("webapp show")]),e._v(" command, it shows that this command will "),r("strong",[e._v('"Get the details of a web app"')]),e._v(" (number 2 in the image)."),r("br"),e._v("\nAnd on top of all of that, the interactive mode also shows examples of how you can use the command (number 3 in the image).")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/48autocomplete.gif")}}),e._v(" "),r("p",[e._v("(Azure CLI interactive mode)")]),e._v(" "),r("p",[r("strong",[e._v("Scoping")])]),e._v(" "),r("p",[e._v("When you use the interactive mode, you don't have to type "),r("strong",[e._v("az")]),e._v(" in front of your command. This is because this mode is already scoped to the az command. And you can scope to other commands as well. If you are working with Web Apps for instance, and don't want to type webapp for every command, you can scope to webapp by typing "),r("strong",[e._v("%%webapp")]),e._v(". You can also scope deeper by scoping to the webapp create command with "),r("strong",[e._v("%%create")]),e._v(". You can go back in scope by typing "),r("strong",[e._v("%%..")]),e._v(" to go up one level or by typing "),r("strong",[e._v("%%")]),e._v(" to go back to the root scope.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/48scoping.gif")}}),e._v(" "),r("p",[e._v("(Scoping in the Azure CLI interactive mode)")]),e._v(" "),r("p",[r("strong",[e._v("Query")])]),e._v(" "),r("p",[e._v("You can use the Azure CLI to query JSON results from commands that you run. For instance, when you create a "),r("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/group?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Resource Group"),r("OutboundLink")],1),e._v(", the result is a JSON string that contains the data for that Resource Group, including its id and name.\nIn the Azure CLI interactive mode, you can use the JSON results of a previous command in other commands with "),r("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/query-azure-cli?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("JMESPath queries"),r("OutboundLink")],1),e._v(". For instance, when you create a Web App, you can give it the name of a Resource Group that you've created in a previous command with "),r("strong",[e._v('"?? name"')]),e._v(":")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/48parameter.png")}}),e._v(" "),r("p",[e._v("(JMESPath query in the Azure CLI interactive mode)")]),e._v(" "),r("p",[r("strong",[e._v("External commands")])]),e._v(" "),r("p",[e._v("You can run shell commands without leaving the Azure CLI interactive mode, like a bash command. You can run shell commands by typing "),r("strong",[e._v("#[cmd]")]),e._v(", for instance "),r("strong",[e._v("#mkdir")]),e._v(" to create a new directory.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/48usebashcommands.png")}}),e._v(" "),r("p",[e._v("(External commands in the Azure CLI interactive mode)")]),e._v(" "),r("h4",{attrs:{id:"conclusion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),r("p",[e._v("You can be very productive in Azure with the "),r("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure CLI"),r("OutboundLink")],1),e._v(". And you can be even more productive when you use the "),r("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/interactive-azure-cli?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure CLI interactive mode"),r("OutboundLink")],1),e._v(". Go and check it out!")]),e._v(" "),r("h2",{attrs:{id:"live-streaming-software-development"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#live-streaming-software-development"}},[e._v("#")]),e._v(" Live streaming software development")]),e._v(" "),r("p",[e._v("On a side note - If you like Azure Tips and Tricks, then you might enjoy another project that I'm working on for live streaming. Check out my channel below and hit the follow button to know when I'm live.")]),e._v(" "),r("iframe",{attrs:{src:"https://player.twitch.tv/?channel=mbcrump",frameborder:"0",allowfullscreen:"true",scrolling:"no",height:"378",width:"620"}}),r("a",{staticStyle:{padding:"2px 0px 4px",display:"block",width:"345px","font-weight":"normal","font-size":"10px","text-decoration":"underline"},attrs:{href:"https://www.twitch.tv/mbcrump?tt_content=text_link&tt_medium=live_embed"}},[e._v("Watch live video from mbcrump on www.twitch.tv")])])}),[],!1,null,null,null);t.default=a.exports}}]);