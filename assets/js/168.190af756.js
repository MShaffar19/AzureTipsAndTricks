(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{519:function(t,e,s){"use strict";s.r(e);var a=s(41),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("::: tip")]),t._v(" "),s("p",[t._v("🔔 Follow us on "),s("a",{attrs:{href:"https://twitter.com/intent/follow?screen_name=code",target:"_blank",rel:"noopener noreferrer"}},[t._v("Twitter"),s("OutboundLink")],1),t._v(" for daily software updates")]),t._v(" "),s("p",[t._v("🔥 Checkout our Visual Studio Code page at "),s("a",{attrs:{href:"https://code.visualstudio.com/?WT.mc_id=other-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("code.visualstudio.com"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("💡 Learn more : "),s("a",{attrs:{href:"https://code.visualstudio.com/docs/editor/extension-gallery/?WT.mc_id=other-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Visual Studio Code Extensions"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v(":::")]),t._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),s("p",[s("strong",[t._v("GitHub Actions")]),t._v(' gives you the flexibility to build an automated software development lifecycle workflow. You can write individual tasks ("Actions") and combine them to create a custom workflow. Workflows are configurable automated processes that you can set up in your repository to build, test, package, release, or deploy any project on GitHub.')]),t._v(" "),s("p",[t._v("With "),s("strong",[t._v("GitHub Actions")]),t._v(" you can build end-to-end continuous integration (CI) and continuous deployment (CD) capabilities directly in your repository.")]),t._v(" "),s("h3",{attrs:{id:"what-s-covered-in-this-lab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-s-covered-in-this-lab"}},[t._v("#")]),t._v(" What’s covered in this lab")]),t._v(" "),s("p",[t._v("In this lab, you will:")]),t._v(" "),s("ol",[s("li",[t._v("Create a web app on Azure using the App Service extension")]),t._v(" "),s("li",[t._v("Create a workflow with GitHub Actions to add CI/CD to your app")])]),t._v(" "),s("h3",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Your Windows machine should have Node.js LTS and Visual Studio Code.")])]),t._v(" "),s("li",[s("p",[t._v("You are using a GitHub account and an Azure account made for the purposes of this lab. These have been already logged into from your machine and the account info is saved.")])])]),t._v(" "),s("h3",{attrs:{id:"setting-up-the-github-repo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-github-repo"}},[t._v("#")]),t._v(" Setting up the GitHub repo")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Navigate to the "),s("a",{attrs:{href:"https://github.com/fiveisprime/Useful-Website?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("example app repository"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v('Click the "Fork" button in the upper-right hand corner of the repository. From there, click the green "Clone" button and copy the URL.')])])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/fork-github.png")}}),t._v(" "),s("h2",{attrs:{id:"create-an-azure-app-service-web-app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-an-azure-app-service-web-app"}},[t._v("#")]),t._v(" Create an Azure App Service web app")]),t._v(" "),s("p",[t._v("Create the App Service web app that you'l deploy to from GitHub.")]),t._v(" "),s("ol",[s("li",[t._v("Click on the Azure icon in the sidebar.")])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/azure-sidebar.png")}}),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("Click on the "),s("code",[t._v("+")]),t._v(" icon to create a new app service under the "),s("strong",[t._v("VSCode GitHub Universe HOL")]),t._v(" subscription.")])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/create-app-service.png")}}),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[s("p",[t._v("Give your webapp a unique name (we recommend calling it "),s("strong",[t._v("YOUR_NAME-jsinteractive")]),t._v(" )")])]),t._v(" "),s("li",[s("p",[t._v("Select "),s("strong",[t._v("Linux")]),t._v(" as your OS and "),s("strong",[t._v("Node.js LTS")]),t._v(" as your runtime.")])]),t._v(" "),s("li",[s("p",[t._v("It will take a minute or two to create the app. Once it's done, you'll get a prompt to browse to your new site. Click on \"View output\" and open the link to your site.")]),t._v(" "),s("blockquote",[s("p",[t._v("Note: If creation of the app is taking a bit longer than you expect, call one of the proctors and we'll switch you to an already created app")])])]),t._v(" "),s("li",[s("p",[t._v("The page you browse to will be the default site you see, since you haven't yet deployed anything to the site.")])])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/python-default-site.png")}}),t._v(" "),s("h2",{attrs:{id:"set-up-ci-cd-with-github-actions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-up-ci-cd-with-github-actions"}},[t._v("#")]),t._v(" Set up CI/CD with GitHub Actions")]),t._v(" "),s("p",[t._v("Use GitHub actions to automate the deployment workflow for this web app.")]),t._v(" "),s("ol",[s("li",[t._v('Inside the App Service extension, right click on the name of your app service and choose "Open in Portal".')])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/open-in-portal.png")}}),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v('From the Overview page, click on "Get publish profile". A publish profile is a kind of deployment credential, useful when you don\'t own the Azure subscription.')])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/get-publish-profile.png")}}),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[s("p",[t._v("Open the settings file you just downloaded in VS Code and copy the contents of the file.")])]),t._v(" "),s("li",[s("p",[t._v('Add the publish profile as a secret associated with this repo. On the GitHub repository, click on the "Settings" tab.')])])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/github-settings.png")}}),t._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[t._v('Go to "Secrets". Create a new secret and call it "AZURE_WEBAPP_PUBLISH_PROFILE". Paste the contents from the settings file.')])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/create-secret1.png")}}),t._v(" "),s("ol",{attrs:{start:"6"}},[s("li",[t._v("Navigate to the Actions tab in the repo to find the "),s("strong",[t._v("Deploy Node.js to Azure Web App")]),t._v(' template and select "Set up this workflow".')])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/new-action.png")}}),t._v(" "),s("ol",{attrs:{start:"7"}},[s("li",[s("p",[t._v("Update the "),s("code",[t._v("env")]),t._v(" object, set "),s("code",[t._v("AZURE_WEBAPP_NAME")]),t._v(" to the name of your app.")]),t._v(" "),s("div",{staticClass:"language-yml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("AZURE_WEBAPP_NAME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" YOUR_NAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("jsinteractive\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/add-yaml-file.png")}}),t._v(" "),s("ol",{attrs:{start:"8"}},[s("li",[s("p",[t._v('Once you\'re done, click on "Start commit". Fill in the text box with a commit message, and then click the "Commit change" button, which will trigger the workflow.')])]),t._v(" "),s("li",[s("p",[t._v("While the Action is being queued, let's get into the details of what this workflow is actually doing. Go to the "),s("code",[t._v(".github/workflows/azure.yml")]),t._v(" file to follow along.")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Workflow Triggers (line 11)")]),t._v(': Your workflow is set up to run on "push" events to the branch')])]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("For more information, see "),s("a",{attrs:{href:"https://help.github.com/articles/events-that-trigger-workflows?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Events that trigger workflows"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Running your jobs on hosted runners (line 21):")]),t._v(" GitHub Actions provides hosted runners for Linux, Windows, and macOS. We specify the hosted runner in our workflow as below.")])]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build-and-deploy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build and Deploy\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("ul",[s("li",[s("strong",[t._v("Using an action (line 26)")]),t._v(": Actions are reusable units of code that can be built and distributed by anyone on GitHub. To use an action, you must specify the repository that contains the action. We are also specifying the version of Node.js.")])]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@master\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Use Node.js $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" env.NODE_VERSION "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/setup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node@v1\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node-version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" env.NODE_VERSION "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("ul",[s("li",[s("strong",[t._v("Running a command (line 31)")]),t._v(": You can run commands on the job's virtual machine. This action is running the npm commands below to install the dependencies, build the application, and run the tests.")])]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" build"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" and test\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n  # Build and test the project, then\n  # deploy to Azure Web App.\n  npm install\n  npm run build --if-present\n  npm run test --if-present")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("blockquote",[s("p",[t._v("For workflow syntax for GitHub Actions see "),s("a",{attrs:{href:"https://help.github.com/en/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1)])])]),t._v(" "),s("li",[s("p",[t._v("You can go back to the Actions tab, click on your workflow, and see that the workflow is queued or being deployed. Wait for the job to complete successfully before going back to your website.")])])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/workflow-complete.png")}}),t._v(" "),s("h2",{attrs:{id:"test-out-your-app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test-out-your-app"}},[t._v("#")]),t._v(" Test out your app!")]),t._v(" "),s("ol",[s("li",[s("p",[t._v('Back in VS Code, go to the App Service extension, and right click on your app service and click on "Browse Website" to see your site running.')])]),t._v(" "),s("li",[s("p",[t._v("Switch back to GitHub to test the GitHub Actions workflow you just made. Edit "),s("code",[t._v("views/index.hbs")]),t._v(" using the GitHub editor and add the following lines of code on line 11")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-align")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("center"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" Press the button!"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/add-html-code.png")}}),t._v(" "),s("ol",[s("li",[t._v("Go back to the Actions tab and you can watch the build finishing up. Once you see all the green check marks, go to Edge and reload your website!")])]),t._v(" "),s("h2",{attrs:{id:"live-streaming-software-development"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#live-streaming-software-development"}},[t._v("#")]),t._v(" Live streaming software development")]),t._v(" "),s("p",[t._v("On a side note - If you like Azure Tips and Tricks, then you might enjoy another project that I'm working on for live streaming. Check out my channel below and hit the follow button to know when I'm live.")]),t._v(" "),s("iframe",{attrs:{src:"https://player.twitch.tv/?channel=mbcrump",frameborder:"0",allowfullscreen:"true",scrolling:"no",height:"378",width:"620"}}),s("a",{staticStyle:{padding:"2px 0px 4px",display:"block",width:"345px","font-weight":"normal","font-size":"10px","text-decoration":"underline"},attrs:{href:"https://www.twitch.tv/mbcrump?tt_content=text_link&tt_medium=live_embed"}},[t._v("Watch live video from mbcrump on www.twitch.tv")])])}),[],!1,null,null,null);e.default=n.exports}}]);