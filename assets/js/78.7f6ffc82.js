(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{429:function(e,t,o){"use strict";o.r(t);var s=o(41),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("::: tip\n💡 Learn more : "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/devops/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure DevOps Documentation"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("📺 Watch the video : "),o("a",{attrs:{href:"https://www.youtube.com/watch?v=bwpW44aQ7lU&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=47?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Quick tour of Azure DevOps projects using Node.js and AKS: Part 1"),o("OutboundLink")],1),e._v(".\n:::")]),e._v(" "),o("h4",{attrs:{id:"a-quick-tour-around-azure-devops-projects-and-node-js-and-kubernetes-service"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#a-quick-tour-around-azure-devops-projects-and-node-js-and-kubernetes-service"}},[e._v("#")]),e._v(" A quick tour around Azure DevOps Projects and Node.js and Kubernetes Service")]),e._v(" "),o("p",[e._v("In this post, I will walk you through creating a new "),o("a",{attrs:{href:"https://azure.microsoft.com/services/kubernetes-service?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Kubernetes Service"),o("OutboundLink")],1),e._v(" (AKS) cluster using an "),o("a",{attrs:{href:"https://azure.microsoft.com/features/devops-projects?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure DevOps Projects"),o("OutboundLink")],1),e._v(" and take a look under the hood to help understand how to get started with AKS.")]),e._v(" "),o("h4",{attrs:{id:"hold-up-what-is-azure-devops-and-aks-in-a-nutshell"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hold-up-what-is-azure-devops-and-aks-in-a-nutshell"}},[e._v("#")]),e._v(" Hold up - What is Azure DevOps and AKS (in a nutshell)?")]),e._v(" "),o("p",[e._v("Azure DevOps Services is a cloud service for collaborating on code development such as:")]),e._v(" "),o("ul",[o("li",[e._v("Source control")]),e._v(" "),o("li",[e._v("CD/CD")]),e._v(" "),o("li",[e._v("Agile tooling")]),e._v(" "),o("li",[e._v("A variety of tools to test your apps, including manual/exploratory testing, load testing, and continuous testing")]),e._v(" "),o("li",[e._v("Dashboards")]),e._v(" "),o("li",[e._v("Built-in wiki")])]),e._v(" "),o("p",[e._v("Azure Kubernetes Service (AKS) manages your hosted Kubernetes environment, making it quick and easy to deploy and manage containerized applications without container orchestration expertise. It also eliminates the burden of ongoing operations and maintenance by provisioning, upgrading, and scaling resources on demand, without taking your applications offline.")]),e._v(" "),o("h4",{attrs:{id:"create-the-devops-project"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-the-devops-project"}},[e._v("#")]),e._v(" Create the DevOps Project")]),e._v(" "),o("p",[e._v("In the Azure portal, search for "),o("strong",[e._v("DevOps")]),e._v(" and choose the "),o("strong",[e._v("DevOps Project")]),e._v(" from the results. Click the "),o("strong",[e._v("Add")]),e._v(" button, select the "),o("strong",[e._v("Node.js")]),e._v(" application, "),o("strong",[e._v("click")]),e._v(" it and then the "),o("strong",[e._v("Next")]),e._v(" button. Select "),o("strong",[e._v("Express.js")]),e._v(" for the application framework and click "),o("strong",[e._v("Next")]),e._v(". For deploying the application, select "),o("strong",[e._v("Kubernetes Service")]),e._v(" and click Next. Now just give the DevOps project an "),o("strong",[e._v("Organization name")]),e._v(" and "),o("strong",[e._v("Project name")]),e._v(". Provide a subscription and a "),o("strong",[e._v("cluster name")]),e._v(" and click the "),o("strong",[e._v("Done")]),e._v(" button.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/devops-k8s1.gif")}}),e._v(" "),o("p",[e._v("A lot of amazing work is happening in the background, so now is the time to drink a cup of coffee or read my "),o("a",{attrs:{href:"http://azuredev.tips",target:"_blank",rel:"noopener noreferrer"}},[e._v("other tips"),o("OutboundLink")],1),e._v(" before clicking the "),o("strong",[e._v("refresh")]),e._v(" button on your DevOps Projects list.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/devops-k8s2.png")}}),e._v(" "),o("p",[o("strong",[e._v("Click")]),e._v(" on your "),o("strong",[e._v("DevOps project name")]),e._v(" in the list to go to the DevOps project dashboard. This has everything you need to access the source code repository and the application build and release pipeline (which automates the steps needed to take your code, build it and deploy to a live Kubernetes environment).  There are also links to your live deployed application, the Kubernetes cluster and "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/application-insights/app-insights-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Application Insights"),o("OutboundLink")],1),e._v(" (telemetry for your live site).")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/devops-k8s3.png")}}),e._v(" "),o("p",[e._v("You should also have received an email letting you know the project is ready. You can also start setting up your team members.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/devops-k8s20.png")}}),e._v(" "),o("h4",{attrs:{id:"taking-a-peek-at-the-code"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#taking-a-peek-at-the-code"}},[e._v("#")]),e._v(" Taking a peek at the code")]),e._v(" "),o("p",[e._v("In the CI/CD pipeline, "),o("strong",[e._v("click")]),e._v(" on the commit to see the code or you can optionally click on "),o("strong",[e._v("Master")]),e._v(" to take you to the full file list.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/devops-k8s4.png")}}),e._v(" "),o("p",[e._v("This takes you to the commit for the repo we just deployed containing the deployed sample app.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/devops-k8s5.png")}}),e._v(" "),o("p",[e._v("When you created the DevOps project, it cloned the source from the "),o("a",{attrs:{href:"https://github.com/Microsoft/devops-project-samples?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("devops-project-samples"),o("OutboundLink")],1),e._v(" GitHub project and added it your DevOps projects and did a lot of the initial plumbing for you. How cool is that?")]),e._v(" "),o("h4",{attrs:{id:"taking-a-look-at-the-build"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#taking-a-look-at-the-build"}},[e._v("#")]),e._v(" Taking a look at the Build")]),e._v(" "),o("p",[e._v("Back on the DevOps Project dashboard, click the "),o("strong",[e._v("Build link")]),e._v(" that has the successful build number.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/devops-k8s6.png")}}),e._v(" "),o("p",[e._v("This takes you to the new Azure DevOps Pipelines build that was created for the project. Now click the "),o("strong",[e._v("Edit")]),e._v(" button at the top.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/devops-k8s7.png")}}),e._v(" "),o("p",[e._v("You now see the steps created for building a container image and a "),o("a",{attrs:{href:"https://helm.sh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Helm package"),o("OutboundLink")],1),e._v(". For those that ned a refresher, "),o("strong",[e._v("Helm")]),e._v(" is used to deploy applications to Kubernetes and it is used by default with the DevOps projects that target Kubernetes.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/devops-k8s8.png")}}),e._v(" "),o("p",[e._v("Clicking on either of the Docker tasks will show you the new Azure Container Registry (ACR) that the DevOps project created, along with the image name (plus the build number).")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/devops-k8s9.png")}}),e._v(" "),o("p",[e._v("The build creates an ACR, builds and pushes the image using docker, checks to see if Helm is installed begins packaging and deploying the charts/sampleapp directory It also creates the ARM templates and finally publishes the build artifact.")]),e._v(" "),o("p",[e._v("If you switch back over to "),o("strong",[e._v("Repos")]),e._v(", then "),o("strong",[e._v("Files")]),e._v(" then "),o("strong",[e._v("Applications")]),e._v(" then you can see the "),o("code",[e._v("charts/sampleapp")]),e._v(" folder.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/devops-k8s10.png")}}),e._v(" "),o("p",[e._v("I hope that helps and tomorrow we'll take a look at the "),o("strong",[e._v("Dev")]),e._v(" and "),o("strong",[e._v("Azure Resources")]),e._v(" portion.")])])}),[],!1,null,null,null);t.default=r.exports}}]);