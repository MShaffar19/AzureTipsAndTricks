(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{628:function(e,t,r){"use strict";r.r(t);var a=r(41),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("::: tip\n💡 Learn more : "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-functions/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Functions Documentation"),r("OutboundLink")],1),e._v(".\n:::")]),e._v(" "),r("h4",{attrs:{id:"where-are-we"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#where-are-we"}},[e._v("#")]),e._v(" Where are we?")]),e._v(" "),r("p",[r("strong",[e._v("Full Source Code")]),e._v(" The source code for the app can be found on "),r("a",{attrs:{href:"https://github.com/mbcrump/EmailSubscription",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("This blog post is part of a series on how to generate a weekly digest email for a blog using Azure Functions, SendGrid and Azure Storage.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip97.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Part 1 - What we're going to build and how to build it"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip98.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Part 2 - Storing Emails using Azure Table Storage"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip99.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Part 3 - Writing the Frontend with HTML5 and jQuery"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip100.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Part 4 - Sending Emails with Sendgrid and Azure Functions"),r("OutboundLink")],1)])]),e._v(" "),r("h4",{attrs:{id:"the-problem"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#the-problem"}},[e._v("#")]),e._v(" The Problem")]),e._v(" "),r("p",[e._v("While reading a blog post, one of these popped up:")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/emailsub1.png")}}),e._v(" "),r("p",[e._v("We've all seen then before, and I must admit that I've never really looked into it before I started writing "),r("a",{attrs:{href:"https://michaelcrump.net/azure-tips-and-tricks-complete-list/",target:"_blank",rel:"noopener noreferrer"}},[e._v("this Azure Tips and Tricks series"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("We're all crazy busy, so it seems to be a good idea, for someone to give you an email address and be notified of new posts. OK, so I wanted to do it, and started looking into sites that offer this. After looking around, I kept finding this:")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/emailsub2.png")}}),e._v(" "),r("p",[e._v("Most companies offer you a certain number of subscribers for free, then you'll quickly get to a paid version once you go over that number.")]),e._v(" "),r("p",[e._v("Since I like to save a penny now and again and am aware that I have more subscribers that the free account offers (200), I decided to roll my own. But what would I need?")]),e._v(" "),r("h4",{attrs:{id:"my-requirements-to-roll-my-own"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#my-requirements-to-roll-my-own"}},[e._v("#")]),e._v(" My Requirements to roll my own")]),e._v(" "),r("p",[e._v("My requirements for my version of creating an email subscription is the following:")]),e._v(" "),r("ul",[r("li",[e._v("A way to email folks for free or really, really cheap.")]),e._v(" "),r("li",[e._v("Storage to save the email address and a way to indicate if they want to unsubscribe.")]),e._v(" "),r("li",[e._v("A web page that folks can fill out that can make a POST call.")]),e._v(" "),r("li",[e._v("Code running in the cloud (1) on a schedule and (2) perform actions based on a POST request.")]),e._v(" "),r("li",[e._v("Visual Studio and C# as I'm well versed in them.")])]),e._v(" "),r("h4",{attrs:{id:"my-stack"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#my-stack"}},[e._v("#")]),e._v(" My Stack")]),e._v(" "),r("p",[e._v("After poking around for a bit, I landed on the following:")]),e._v(" "),r("ul",[r("li",[e._v("SendGrid will handle email (25K emails free monthly)")]),e._v(" "),r("li",[e._v("Azure Storage Tables to save the email address and subscription status (this gives me an unlimited number of subscribers).")]),e._v(" "),r("li",[e._v("Timer Trigger with Azure Functions to run on a schedule to send emails. (Runs weekly and retrieves my last 7 days worth of blog posts)")]),e._v(" "),r("li",[e._v("HTTP Trigger with Azure Functions to collect POST data coming from my website that contains the email address and subscription status that someone types in.")]),e._v(" "),r("li",[e._v("Azure Functions supports Visual Studio tooling and the full .NET Framework. (in case, I want to use something outside of .NET Core)")])]),e._v(" "),r("h4",{attrs:{id:"creating-a-sendgrid-account"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-sendgrid-account"}},[e._v("#")]),e._v(" Creating a SendGrid account")]),e._v(" "),r("p",[e._v("Go to the "),r("strong",[e._v("Azure Portal")]),e._v(" and search services for "),r("strong",[e._v("SendGrid")]),e._v(" and create an account as shown below. You'll notice that I used the "),r("strong",[e._v("Free")]),e._v(" account as it is good enough for what I was trying to accomplish.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/sendgrid1.png")}}),e._v(" "),r("p",[e._v("Go to your SendGrid account once provisioned and click on "),r("strong",[e._v("Manage")]),e._v(" and it will bring you to "),r("a",{attrs:{href:"https://app.sendgrid.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://app.sendgrid.com/"),r("OutboundLink")],1),e._v(". From the SendGrid portal, you are going to want to grab your API key. You can find it under "),r("strong",[e._v("Settings")]),e._v(", then "),r("strong",[e._v("API Keys")]),e._v(". Give your API Key a name and then give it "),r("strong",[e._v("Full Access")]),e._v(" and click "),r("strong",[e._v("Create and View")]),e._v(". Now that you have your API Key, save it somewhere safe.")]),e._v(" "),r("h4",{attrs:{id:"creating-an-azure-storage-table"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-azure-storage-table"}},[e._v("#")]),e._v(" Creating an Azure Storage Table")]),e._v(" "),r("p",[e._v("Go back to the Azure Portal and click "),r("strong",[e._v("Create a Resource")]),e._v(" and select "),r("strong",[e._v("Azure Storage")]),e._v(". We'll keep it simple as shown below to get started.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/storageacct1.png")}}),e._v(" "),r("p",[e._v("Once complete, go into the resource and look under "),r("strong",[e._v("Services")]),e._v(".")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/storageacct2.png")}}),e._v(" "),r("p",[e._v("Go ahead and click on "),r("strong",[e._v("Tables")]),e._v(" and you could create a new table through the portal as shown below.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/aztablesblog1.png")}}),e._v(" "),r("p",[e._v("Go ahead and give the table a name that you'll remember and look under "),r("strong",[e._v("Settings")]),e._v(", then "),r("strong",[e._v("Access Keys")]),e._v(" and copy the connection string as we'll use that shortly.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/storagethroughcsharp1.png")}}),e._v(" "),r("p",[e._v("Now that we have our "),r("strong",[e._v("SendGrid")]),e._v(" account and our "),r("strong",[e._v("Azure Storage Table")]),e._v(" created. We can proceed.")]),e._v(" "),r("h4",{attrs:{id:"open-visual-studio"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#open-visual-studio"}},[e._v("#")]),e._v(" Open Visual Studio")]),e._v(" "),r("p",[e._v("Create a C# Azure Function application by opening Visual Studio and selecting the template under the "),r("strong",[e._v("Cloud")]),e._v(" node as shown below:")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/emailsub3.png")}}),e._v(" "),r("p",[e._v("Under Storage, change the default emulator to the "),r("strong",[e._v("Azure Storage Account")]),e._v(" that we created earlier:")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/emailsub4.png")}}),e._v(" "),r("p",[e._v("We'll begin by using the "),r("strong",[e._v("Timer Trigger")]),e._v(" and leaving everything as the defaults.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/emailsub5.png")}}),e._v(" "),r("p",[e._v("Once the project spins up, we'll use NuGet to pull in references to :")]),e._v(" "),r("ul",[r("li",[e._v("WindowsAzure.Storage "),r("code",[e._v("To work with Azure Table Storage.")])]),e._v(" "),r("li",[e._v("Microsoft.WindowsAzure.ConfigurationManager "),r("code",[e._v("To hide our API keys")])]),e._v(" "),r("li",[e._v("Sendgrid "),r("code",[e._v("To send our emails")])]),e._v(" "),r("li",[e._v("System.ServiceModel.Syndication "),r("code",[e._v("To work with RSS feeds - use prerelease packages to find it")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);