(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{452:function(e,s,a){"use strict";a.r(s);var t=a(41),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("::: tip\n💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/cli/azure?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Command-Line Interface (CLI)"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("📺 Watch the video : "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=lO5Dvde07Tg&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=15?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to deploy an Azure Web App using only the CLI tool"),a("OutboundLink")],1),e._v(".\n:::")]),e._v(" "),a("h4",{attrs:{id:"deploy-an-azure-web-app-using-only-the-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-an-azure-web-app-using-only-the-cli"}},[e._v("#")]),e._v(" Deploy an Azure Web App using only the CLI")]),e._v(" "),a("p",[e._v("While I love working with the Azure Portal or even Visual Studio, it is sometimes nice to do everything from the command line. While I'm a power Windows user, in this tutorial I'll be using a Linux VM and BASH to do everything.")]),e._v(" "),a("p",[e._v("Step 1) Ensure you have the following stack installed.")]),e._v(" "),a("p",[e._v("*This will give us a full web development stack we can work with in the future. *")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("mbcrump@crumplinux:~$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" --version\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" version "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2.7")]),e._v(".4\nmbcrump@crumplinux:~$ nodejs --version\nv4.2.6\nmbcrump@crumplinux:~$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" --version\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3.5")]),e._v(".2\nmbcrump@crumplinux:~$ gulp --version\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("20")]),e._v(":05:28"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" CLI version "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.4")]),e._v(".0\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("20")]),e._v(":05:28"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" Local version "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3.9")]),e._v(".1\nmbcrump@crumplinux:~$ mongod --version\ndb version v2.6.10\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2017")]),e._v("-09-20T20:11:43.087+0000 "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" version: nogitversion\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2017")]),e._v("-09-20T20:11:43.095+0000 OpenSSL version: OpenSSL "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.0")]),e._v(".2g  "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" Mar "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2016")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br")])]),a("p",[e._v("I'm particularly interested in the "),a("a",{attrs:{href:"https://github.com/meanjs/mean?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("MEAN.JS"),a("OutboundLink")],1),e._v(" stack.")]),e._v(" "),a("p",[a("strong",[e._v("What is MEAN.JS?")]),e._v(" MEAN.JS is a Full-Stack JavaScript Using MongoDB, Express, AngularJS, and Node.js -")]),e._v(" "),a("p",[e._v("Step 2) Create a folder such as "),a("code",[e._v("webapp")]),e._v(" and then "),a("code",[e._v("cd webapp")]),e._v(".")]),e._v(" "),a("p",[e._v("Step 3) Run the following command "),a("code",[e._v("git clone https://github.com/crpietschmann/jsQuizEngine.git")]),e._v(". This is a JavaScript based quiz engine by "),a("a",{attrs:{href:"https://github.com/crpietschmann?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chris Pietschmann"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Step 4) Change your working directory to "),a("code",[e._v("jsQuizEngine/src")]),e._v(" and now we'll need to create a deployment user that can deploy web app through Git.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("az webapp deployment user set --user-name mbcrump --password AREALLYLONGPW\n")])])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("Name    PublishingUserName\n------  --------------------\nweb     mbcrump\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("Step 5) We'll need a resource group. I'm going to put mine in the West US.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('az group create --name StaticResourceGroup --location "West US"\n')])])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("Location    Name\n----------  -------------------\nwestus      StaticResourceGroup\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("Step 6) We'll also need an Azure App Service Plan. I'll use the free one for this example.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("az appservice plan create --name StaticAppServicePlan --resource-group StaticResourceGroup --sku FREE\n")])])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("AppServicePlanName    GeoRegion    Kind    Location      MaximumNumberOfWorkers  Name                  ProvisioningState    ResourceGroup        Status    Subscription\n--------------------  -----------  ------  ----------  ------------------------  --------------------  -------------------  -------------------  --------  ------------------------------------\nStaticAppServicePlan  West US      app     West US                            "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("  StaticAppServicePlan  Succeeded            StaticResourceGroup  Ready     d1ecc7ac-c1d8-40dc-97d6-2507597e7404\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("Step 7) We'll create an Azure Web App and deploy it using local Git.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("az webapp create --name MyQuizApplication --resource-group StaticResourceGroup --plan StaticAppServicePlan --deployment-local-git\n")])])]),a("p",[e._v("You should see in the output "),a("code",[e._v("Local git is configured with url of 'https://mbcrump@myquizapplication.scm.azurewebsites.net/MyQuizApplication.git'")]),e._v(" Copy and paste this to your editor of choice.")]),e._v(" "),a("p",[e._v("Step 8) We'll need to add azure to our local Git repo.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("git remote add azure https://mbcrump@myquizapplication.scm.azurewebsites.net/MyQuizApplication.git\n")])])]),a("p",[e._v("Step 9) Push the changes.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("git push azure master\n")])])]),a("p",[e._v("Step 10) Nice! We can now browse to our "),a("a",{attrs:{href:"http://myquizapplication.azurewebsites.net/#",target:"_blank",rel:"noopener noreferrer"}},[e._v("new site"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/azureappservicequiz.png")}})])}),[],!1,null,null,null);s.default=n.exports}}]);