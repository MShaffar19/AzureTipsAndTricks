(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{538:function(t,e,o){"use strict";o.r(e);var r=o(41),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("p",[t._v("::: tip")]),t._v(" "),o("p",[t._v("🔥 Make sure you "),o("a",{attrs:{href:"http://azuredev.tips?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("star the repo"),o("OutboundLink")],1),t._v(" to keep up to date with new tips and tricks.")]),t._v(" "),o("p",[t._v("💡 Learn more : "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/bot-service/bot-service-overview-introduction?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Bot Service"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("p",[t._v("📺 Watch the video : "),o("a",{attrs:{href:"https://www.youtube.com/watch?v=XNE43x_JaR4&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=14&t=0s?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Using the Bot Framework Composer tool"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("p",[t._v(":::")]),t._v(" "),o("h4",{attrs:{id:"an-easier-way-to-create-bots"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#an-easier-way-to-create-bots"}},[t._v("#")]),t._v(" An easier way to create Bots")]),t._v(" "),o("p",[t._v("The "),o("a",{attrs:{href:"https://dev.botframework.com/?WT.mc_id=other-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Microsoft Bot Framework"),o("OutboundLink")],1),t._v(" is an open-source framework that enables you to create intelligent, conversational bots that can use "),o("a",{attrs:{href:"https://azure.microsoft.com/services/cognitive-services/?WT.mc_id=microsoft-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Cognitive Services"),o("OutboundLink")],1),t._v(" and can run on the "),o("a",{attrs:{href:"https://azure.microsoft.com/services/bot-service/?WT.mc_id=microsoft-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Bot Service"),o("OutboundLink")],1),t._v(".\nYou can create bots with the "),o("a",{attrs:{href:"https://github.com/microsoft/botframework-sdk?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bot Framework SDK"),o("OutboundLink")],1),t._v(" which is available for several programming languages. And now, you can use the "),o("a",{attrs:{href:"https://github.com/microsoft/BotFramework-Composer?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bot Framework Composer tool"),o("OutboundLink")],1),t._v(" to visually create bots.")]),t._v(" "),o("p",[t._v("In this post, we'll take a look at a sample bot in the Bot Framework Composer Tool and run it in the "),o("a",{attrs:{href:"https://github.com/microsoft/BotFramework-Emulator/releases/latest?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bot Framework Emulator"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("h4",{attrs:{id:"prerequisites"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),o("p",[t._v("If you want to follow along, you'll need the following:")]),t._v(" "),o("ul",[o("li",[t._v("Access to the "),o("a",{attrs:{href:"https://github.com/microsoft/BotFramework-Composer?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bot Framework Composer Tool"),o("OutboundLink")],1),t._v(" "),o("ul",[o("li",[t._v("At the time of this writing, the Composer Tool is in preview. You can "),o("a",{attrs:{href:"https://github.com/microsoft/BotFramework-Composer/blob/stable/docs/setup-yarn.md?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("read here"),o("OutboundLink")],1),t._v(" how to run it on your own machine")])])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/microsoft/BotFramework-Emulator/releases/latest?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bot Framework Emulator"),o("OutboundLink")],1),t._v(": latest stable version")])]),t._v(" "),o("h4",{attrs:{id:"running-a-todo-bot-in-the-bot-framework-composer-tool"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#running-a-todo-bot-in-the-bot-framework-composer-tool"}},[t._v("#")]),t._v(" Running a Todo Bot in the Bot Framework Composer tool")]),t._v(" "),o("p",[t._v("The Bot Framework Composer can help you to create your bots. It provides a visual interface of the conversational flows that the bot goes through to interact with users. Let's try it out.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/55botframeworkcomposer.png")}}),t._v(" "),o("p",[t._v("(Bot Framework Composer tool)")]),t._v(" "),o("ol",[o("li",[t._v("Open the Bot Framework Composer")]),t._v(" "),o("li",[t._v("You can create and open bot projects in the composer. We'll demonstrate it by creating an example bot. In the examples section on the right, select the "),o("strong",[t._v("Simple Todo")]),t._v(" bot")]),t._v(" "),o("li",[t._v("Fill in a "),o("strong",[t._v("Name")]),t._v(" for the Bot")]),t._v(" "),o("li",[t._v("Optionally fill in a "),o("strong",[t._v("description")]),t._v(" for the bot and pick a "),o("strong",[t._v("location")]),t._v(" for its files")]),t._v(" "),o("li",[t._v("Click "),o("strong",[t._v("Next")]),t._v(" to create the bot")])]),t._v(" "),o("p",[t._v("The Simple Todo bot is built up around user intents. In this case, there is the AddIntent, that is used to add a todo item. The DeleteIntent, that users express to delete a todo item. The ShowIntent to show todo items and so on.\nThe bot works with regular expressions to extract keywords from user input text. Each intent has its own regular expression to extract the necessary information from the input text. For the AddIntent, the regular expression is "),o("strong",[t._v("(?i)(?:add|create) .*(?:to-do|todo|task)(?: )?(?:named (?<title>.*))?")]),t._v(', which looks for the word "create" or "add" and needs the word "named" to indicate the name of the todo item to be added. This works well but restricts users to a specific sentence format in order for the bot to work. You can make this more natural by using the '),o("a",{attrs:{href:"https://azure.microsoft.com/services/cognitive-services/language-understanding-intelligent-service/?WT.mc_id=microsoft-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("LUIS (Language Understanding) Cognitive Service"),o("OutboundLink")],1),t._v(" to extract information from natural user input.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/55regularexpr.png")}}),t._v(" "),o("p",[t._v("(The bot uses regular expressions)")]),t._v(" "),o("p",[t._v("On the left-hand side of the Bot Composer, you'll find the menu. When you look at the "),o("strong",[t._v("Design Flow")]),t._v(" menu, you'll see all the flows for the bot, which include user input and bot responses. These consist of "),o("strong",[t._v("Triggers")]),t._v(" and "),o("strong",[t._v("Dialogs")]),t._v('. A dialog contains a complete flow for an intent. For instance, for the AddToDo intent. The flow is triggered by the intent, which in this case is something like "'),o("strong",[t._v("Add todo item")]),t._v('". The flow contains bot responses, like "'),o("strong",[t._v("OK, please enter the title of your todo")]),t._v('", followed by steps that capture user input. The flow can be as complicated as you want. In this flow, for instance, after the user inputs text to indicate what todo item to add, there is a loop that loops back to the bot question "'),o("strong",[t._v("OK, please enter the title of your todo")]),t._v('", if the user input is not recognized.')]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/55designbot.png")}}),t._v(" "),o("p",[t._v("(Bot flow in Bot Composer tool)")]),t._v(" "),o("p",[t._v("In the Bot Composer, you can start the bot by clicking on the "),o("strong",[t._v("Start Bot button")]),t._v(" in the top-right. This starts the bot. And you can test it by opening it in the Bot Framework Emulator. You can do that by clicking on the "),o("strong",[t._v("Test in Emulator button")]),t._v(", which is next to the Start Bot button. This opens the "),o("strong",[t._v("Bot Framework Emulator")]),t._v(" where you can start talking to the bot and testing responses. The emulator also shows a log of the messages to and from the bot. This can help you to test the bot.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/55botemulator.png")}}),t._v(" "),o("p",[t._v("(Bot Framework Emulator)")]),t._v(" "),o("p",[t._v("When you are done building the bot, you can use the Bot Composer to publish the bot to Azure.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/55botemulator.png")}}),t._v(" "),o("p",[t._v("(Publish bot to Azure)")]),t._v(" "),o("p",[t._v("Note: Currently, the Publish functionality in the Bot Composer is not yet fully automated. Follow "),o("a",{attrs:{href:"https://github.com/microsoft/BotFramework-Composer/blob/stable/docs/deploy-bot.md?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("these steps"),o("OutboundLink")],1),t._v(" to publish your bot to Azure.")]),t._v(" "),o("h4",{attrs:{id:"conclusion"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[t._v("#")]),t._v(" Conclusion")]),t._v(" "),o("p",[t._v("The "),o("a",{attrs:{href:"https://dev.botframework.com/?WT.mc_id=other-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Microsoft Bot Framework"),o("OutboundLink")],1),t._v(" is really powerful and enables you to create intelligent, conversational bots for your applications. The "),o("a",{attrs:{href:"https://github.com/microsoft/BotFramework-Composer?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bot Framework Composer tool"),o("OutboundLink")],1),t._v(" helps you to visually create and edit bots and deploy them to Azure. Learn more about the Bot Framework Composer tool "),o("a",{attrs:{href:"https://github.com/microsoft/BotFramework-Composer/blob/stable/toc.md?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("here."),o("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);