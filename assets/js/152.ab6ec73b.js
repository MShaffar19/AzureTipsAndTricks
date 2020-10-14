(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{503:function(e,t,a){"use strict";a.r(t);var r=a(41),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("::: tip")]),e._v(" "),a("p",[e._v("🆓 Grab your FREE "),a("a",{attrs:{href:"https://get.printfection.com/mbcrump/3960040838",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Stickers"),a("OutboundLink")],1),e._v(" now! Limited to first 10 folks!")]),e._v(" "),a("p",[e._v("📺 Watch the video : "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=M5y92imCkh0&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=4?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Availability Zones for your Kubernetes cluster in Azure"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/aks/availability-zones?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Create an Azure Kubernetes Service (AKS) cluster that uses Availability Zones"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v(":::")]),e._v(" "),a("h4",{attrs:{id:"using-availability-zones-to-increase-the-availability-of-your-kubernetes-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-availability-zones-to-increase-the-availability-of-your-kubernetes-cluster"}},[e._v("#")]),e._v(" Using Availability Zones to increase the availability of your Kubernetes cluster")]),e._v(" "),a("p",[e._v("When you run a Kubernetes cluster in Azure on "),a("a",{attrs:{href:"https://azure.microsoft.com/services/kubernetes-service/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Kubernetes Service (AKS)"),a("OutboundLink")],1),e._v(", its nodes and storage are distributed over separate update- and fault-domains in the Azure infrastructure of the datacenter it runs in. This helps to keep the cluster available when hardware fails or when maintenance is performed.\nHowever, if the datacenter fails (which is highly unlikely), the Kubernetes cluster will fail as well. To guard against that, you can run your Kubernetes cluster across "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/availability-zones/az-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Availability Zones"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/34availabilityzonespng.png")}}),e._v(" "),a("p",[e._v("(Availability Zones in Azure)")]),e._v(" "),a("p",[e._v("Availability zones are unique physical locations that are made up of one or more datacenters. Applications that are distributed across availability zones are distributed across physical regions, which protects them against failure of any single datacenter. This makes applications that use Availability Zones highly available.")]),e._v(" "),a("p",[e._v("In this post, we'll deploy an Azure Kubernetes Service cluster across Availability Zones.")]),e._v(" "),a("h4",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),a("ul",[a("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),a("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),a("OutboundLink")],1),e._v(" before you begin)")])]),e._v(" "),a("h4",{attrs:{id:"steps-to-take-during-the-preview-period"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#steps-to-take-during-the-preview-period"}},[e._v("#")]),e._v(" Steps to take during the preview period")]),e._v(" "),a("p",[e._v("Currently, using Availability Zones for AKS is a preview feature. If you are reading this when the feature is generally available, you can skip this section. You can check the status of Availability Zones for AKS on "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/aks/availability-zones?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("this page"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("In order to work with this preview feature, you have to enable feature flags in your Azure subscription.\nYou can do that by running the following commands in the "),a("a",{attrs:{href:"https://shell.azure.com/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[e._v("Azure Cloud Shell")]),a("OutboundLink")],1),e._v(" (or locally installed "),a("strong",[e._v("Azure CLI")]),e._v("):")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("az feature register --name AvailabilityZonePreview --namespace Microsoft.ContainerService\naz feature register --name AKSAzureStandardLoadBalancer --namespace Microsoft.ContainerService\naz feature register --name VMSSPreview --namespace Microsoft.ContainerService\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("It will take several minutes before the preview features are registered for your subscription. You can check if they are registered by running the following commands:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("az feature list -o table --query "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("\"[?contains(name, 'Microsoft.ContainerService/AvailabilityZonePreview')].{Name:name,State:properties.state}\"")]),e._v("\naz feature list -o table --query "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("\"[?contains(name, 'Microsoft.ContainerService/AKSAzureStandardLoadBalancer')].{Name:name,State:properties.state}\"")]),e._v("\naz feature list -o table --query "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("\"[?contains(name, 'Microsoft.ContainerService/VMSSPreview')].{Name:name,State:properties.state}\"")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("img",{attrs:{src:e.$withBase("/files/34feauteflags.png")}}),e._v(" "),a("p",[e._v("(Querying the status of Azure preview features with the Azure CLI)")]),e._v(" "),a("p",[e._v('When all the features have the status "Registered", you need to refresh the registration of the '),a("strong",[e._v("Microsoft.ContainerService resource provider")]),e._v(" with the following command:")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("az provider register --namespace Microsoft.ContainerService\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Also, we need to install the aks-preview CLI extension to use the AKS preview feature. You can do that by running the following commands in the cloud shell. These install the aks-preview extension and update it to the latest version:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Install the aks-preview extension")]),e._v("\naz extension "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" --name aks-preview\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Update the extension to make sure you have the latest version installed")]),e._v("\naz extension update --name aks-preview\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("h4",{attrs:{id:"creating-a-azure-kubernetes-service-using-availability-zones"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-azure-kubernetes-service-using-availability-zones"}},[e._v("#")]),e._v(" Creating a Azure Kubernetes Service using Availability Zones")]),e._v(" "),a("p",[e._v("Let's create a new AKS cluster that uses Availability Zones to increase its availability.")]),e._v(" "),a("ol",[a("li",[e._v("Go to the "),a("a",{attrs:{href:"https://shell.azure.com/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[e._v("Azure Cloud Shell")]),a("OutboundLink")],1),e._v(" and log in. By using this, you make sure that you are using the latest version of the Azure CLI")]),e._v(" "),a("li",[e._v("Run the following command to create a new "),a("strong",[e._v("Resource Group")]),e._v(" that we'll use to create the AKS cluster in:")])]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("az group create --name myTipsResourceGroup --location eastus2\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Run the following command to "),a("strong",[e._v("create the AKS cluster")]),e._v(". This uses the "),a("strong",[e._v("--node-zones")]),e._v(" parameter, which defines the zones that the agent nodes are deployed to. If you don't use the "),a("strong",[e._v("--node-zones")]),e._v(" parameter, the cluster will be created with the default behaviour, where it uses one datacenter and distributes its nodes and storage over failure- and update-domains")])]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("az aks create --resource-group myTipsResourceGroup --name tipsAndTricksAKSCluster --generate-ssh-keys --enable-vmss --load-balancer-sku standard --node-count "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" --node-zones "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("img",{attrs:{src:e.$withBase("/files/34akscreatedsuccess.png")}}),e._v(" "),a("p",[e._v("(AKS cluster using Availability Zones successfully created)")]),e._v(" "),a("h4",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://docs.microsoft.com/azure/availability-zones/az-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Availability Zones"),a("OutboundLink")],1),e._v(" in Azure are unique physical locations that you can use to distribute your applications to. When you use Availability Zones with "),a("a",{attrs:{href:"https://azure.microsoft.com/services/kubernetes-service/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Kubernetes Service (AKS)"),a("OutboundLink")],1),e._v(", you make sure that its nodes run across Availability Zones and are protected against any single failure of a datacenter. Go and check it out!")])])}),[],!1,null,null,null);t.default=s.exports}}]);