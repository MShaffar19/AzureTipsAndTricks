(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{362:function(e,t,r){"use strict";r.r(t);var o=r(41),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("::: tip\n💡 Learn more : "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("App Service Documentation"),r("OutboundLink")],1),e._v(".\n:::")]),e._v(" "),r("h4",{attrs:{id:"a-multi-part-series-showing-an-end-to-end-possibility"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#a-multi-part-series-showing-an-end-to-end-possibility"}},[e._v("#")]),e._v(" A multi-part series showing an end-to-end possibility")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.linkedin.com/in/crystal-tenn-6a0b9b67/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Crystal Tenn"),r("OutboundLink")],1),e._v(" and I teamed up to bring an E2E blog series that features an Azure App Service website that communicates with an API project, which communicates to an Azure SQL back-end. The app is a traditional To-Do application based on an existing sample that used ADO.NET, but adapted for Azure deploy and to Visual Studio 2017. The  technology/tooling stack is Visual Studio, VSTS, C#, Angular, and SQL.")]),e._v(" "),r("p",[e._v("The process for the app is described below. In Visual Studio, you will start out with a working To Do list application. You will push the code to VSTS (Visual Studio Team Services). Then you will create a CI/CD (Continuous Integration/Continuous Delivery) process in order to deploy to Azure. In Azure you will create 3 resources: Azure Web App, Azure API App, and an Azure SQL Server through this exercise.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip101.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Local Setup - SQL Server"),r("OutboundLink")],1),e._v(" - Locally connect a front-end website to an API, and connect the API to a SQL Server.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip102.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Local Setup - Visual Studio and Swagger"),r("OutboundLink")],1),e._v(" - Continue Part 1 and use a local instance of Visual Studio and Swagger to communicate to our db.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip103.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Swagger - Learn how to use Swagger for API management"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip104.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Deployment - Deploy the SQL database to Azure manually"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip105.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Deployment - Deploy the front-end Web App and API App to Azure manually"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip107.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Adding the project to VSTS with Git"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip108.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("VSTS Continuous Integration - Setup a CI Process in VSTS"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip109.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("VSTS Continuous Deployment - Setup a CD Process in VSTS"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip110.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cleanup - Cleanup and delete the Azure resources created in this tutorial"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("Keep in mind : While we won't be going into the deep specifics of how to code, you should be able to use this guide to look at several parts of the Azure technology stack and how you can best implement them in your organization.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/todolist-diagram.png")}}),e._v(" "),r("h4",{attrs:{id:"local-setup-working-with-swagger"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#local-setup-working-with-swagger"}},[e._v("#")]),e._v(" Local Setup - Working with Swagger")]),e._v(" "),r("p",[e._v("If you noticed in the last post, we started working with Swagger.")]),e._v(" "),r("p",[r("strong",[e._v("What is Swagger UI?")]),e._v(" is a collection of HTML, Javascript, and CSS assets that dynamically generate beautiful documentation from a Swagger-compliant API.")]),e._v(" "),r("p",[e._v("The nice thing about Swagger is that you can create an existing "),r("strong",[e._v("Web API")]),e._v(" app using the VS Templates and add "),r("strong",[e._v("Swagger")]),e._v(" via Nuget.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/e2e-swagger1.jpg")}}),e._v(" "),r("p",[e._v("Then if you spin up a project, you simply add "),r("strong",[e._v("/swagger")]),e._v(" to see the UI. In the example below, we've already added it and supplied the comments in the app to where it recognizes it. This makes testing APIs very simply and it works in real-time, meaning if you run a "),r("strong",[e._v("POST")]),e._v(", then you can immediately check your database for the new record.")]),e._v(" "),r("p",[e._v("Learn more about Swagger "),r("a",{attrs:{href:"https://github.com/swagger-api/swagger-ui?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h4",{attrs:{id:"continuing-where-we-left-off"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#continuing-where-we-left-off"}},[e._v("#")]),e._v(" Continuing where we left off")]),e._v(" "),r("p",[e._v("1.) Open the project in Visual Studio by double clicking "),r("strong",[e._v("ToDoList.sln")]),e._v(", if it is not already open from the previous parts. Navigate to the "),r("strong",[e._v("ToDoListDataAPI")]),e._v(" project.")]),e._v(" "),r("p",[e._v("2.) Set the ToDoListDataAPI project to Set as Startup project by right clicking on the project and choosing that option and run the application.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/e2e-setstartup.jpg")}}),e._v(" "),r("p",[e._v('3.) Add "/swagger" to the end of your URL if it is not already there, you should see a page like this:')]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/e2e-swagger.jpg")}}),e._v(" "),r("p",[e._v("Click on the "),r("strong",[e._v("Show/Hide")]),e._v(" button.")]),e._v(" "),r("p",[e._v("4.) Run a "),r("strong",[e._v("GET")]),e._v(" which is the first API on the page /api/ToDoList, you should see:")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/e2e-02.png")}}),e._v(" "),r("p",[e._v("5.) Run a "),r("strong",[e._v("POST")]),e._v(", click where the screen-shot shows, and fill in an ID with a random number and any description you want and then click "),r("strong",[e._v("Try it out")]),e._v(".")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/e2e-03.png")}}),e._v(" "),r("p",[e._v("6.) Run a "),r("strong",[e._v("GET")]),e._v(" again, you should see your added value:")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/e2e-04.png")}}),e._v(" "),r("p",[e._v("7.) Run a "),r("strong",[e._v("PUT")]),e._v(", again click to get the format from where it's shown in the screen-shot and modify an existing record's description.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/e2e-05.png")}}),e._v(" "),r("p",[e._v("8.) Try to run a "),r("strong",[e._v("GET")]),e._v(" by ID, use 1 for example:")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/e2e-06.png")}}),e._v(" "),r("p",[e._v("9.) Switch back to SQL Server Management Studio (and log in if you need to) and choose "),r("strong",[e._v("Select Top 1000 Rows")]),e._v(" on the "),r("strong",[e._v("ToDoListDb")]),e._v(" db to see the data.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/e2e-sqlselect.jpg")}}),e._v(" "),r("p",[e._v("10.) Your SQL Server Management Studio table should look like this now:")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/e2e-sqlserver.jpg")}})])}),[],!1,null,null,null);t.default=i.exports}}]);