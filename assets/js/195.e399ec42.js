(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{546:function(e,a,t){"use strict";t.r(a);var s=t(41),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("::: tip")]),e._v(" "),t("p",[e._v("🔥 Make sure you "),t("a",{attrs:{href:"http://azuredev.tips?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("star the repo"),t("OutboundLink")],1),e._v(" to keep up to date with new tips and tricks.")]),e._v(" "),t("p",[e._v("💡 Learn more : "),t("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/virtual-machines/linux/image-builder-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Image Builder overview"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("📺 Watch the video : "),t("a",{attrs:{href:"https://www.youtube.com/watch?v=yT97IeAFfwA&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=12&?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Getting started with Azure Image Builder"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v(":::")]),e._v(" "),t("h4",{attrs:{id:"virtual-machine-images"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#virtual-machine-images"}},[e._v("#")]),e._v(" Virtual Machine Images")]),e._v(" "),t("p",[e._v("Having standard Virtual Machine (VM) images can help you to make sure that your VMs are all configured the same and have the same properties and security policies applied to them. You can create VM images with the "),t("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/virtual-machines/linux/image-builder-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Image Builder"),t("OutboundLink")],1),e._v(". This allows you to define VM images in json format, store them somewhere (like in the "),t("a",{attrs:{href:"https://docs.microsoft.com/azure/virtual-machines/windows/shared-image-galleries?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Shared Image Gallery"),t("OutboundLink")],1),e._v("), build them and deploy them into VMs.")]),e._v(" "),t("p",[e._v("In this post, we'll build a Linux-based VM image and create a VM from it using Azure Image Builder.")]),e._v(" "),t("h4",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),t("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),t("ul",[t("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),t("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),t("OutboundLink")],1),e._v(" before you begin)")]),e._v(" "),t("li",[e._v("The "),t("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure CLI"),t("OutboundLink")],1),e._v(". You can "),t("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/install-azure-cli?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("download it for Windows, Linux or Mac"),t("OutboundLink")],1),e._v(". Or you can use the "),t("a",{attrs:{href:"https://shell.azure.com/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cloud Shell"),t("OutboundLink")],1)])]),e._v(" "),t("h4",{attrs:{id:"creating-a-linux-vm-image-using-azure-image-builder"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-linux-vm-image-using-azure-image-builder"}},[e._v("#")]),e._v(" Creating a Linux VM image using Azure Image Builder")]),e._v(" "),t("p",[e._v("Let's use Azure Image Builder to create a Linux VM image, build that image and deploy it as a VM. We'll do all of this using the Azure CLI, which you can run on your "),t("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("local machine"),t("OutboundLink")],1),e._v(" or in the cloud using "),t("a",{attrs:{href:"https://shell.azure.com/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cloud Shell"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[t("strong",[e._v("Things to do whilst Azure Image Builder is in Preview")])]),e._v(" "),t("p",[e._v("Azure Image Builder is currently in preview. This means that we need to run a couple of commands to register the preview feature. You can skip this part when Azure image Builder is generally available.")]),e._v(" "),t("p",[e._v("First, register the new feature:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("az feature register --namespace Microsoft.VirtualMachineImages --name VirtualMachineTemplatePreview\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Next, check if the registration succeeded. It can take a while until the feature is registered, so keep trying this command until it is:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("az feature show --namespace Microsoft.VirtualMachineImages --name VirtualMachineTemplatePreview \n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("We also need to make sure that certain resource providers are registered in your subscription. You can check that with:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("az provider show -n Microsoft.VirtualMachineImages \n\naz provider show -n Microsoft.Storage \n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("If these are not registered, run the following command:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("az provider register -n Microsoft.VirtualMachineImages\n\naz provider register -n Microsoft.Storage\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[t("strong",[e._v("Setup variables and create the VM image")])]),e._v(" "),t("p",[e._v("Before we begin, we should create some variables for the things that we are going to use more often. The following commands set variables that we'll use. Make sure to insert your Azure Subscription ID, which you can find with "),t("strong",[e._v("az account show")]),e._v(" or by looking in the Azure portal under "),t("strong",[e._v("Subscriptions")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# Resource group name - we are using myImageBuilderRG in this example\nimageResourceGroup=myImageBuilerRGLinux\n# Datacenter location - we are using West US 2 in this example\nlocation=WestUS2\n# Name for the image - we are using myBuilderImage in this example\nimageName=myBuilderImage\n# Run output name\nrunOutputName=aibLinux\n# Set Azure Subscription ID\nsubscriptionID=<Your subscription ID>\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br")])]),t("p",[e._v("Next, we'll create the resource group that will contain the VM image:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("az group create -n $imageResourceGroup -l $location\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("We also need to grant Image Builder contributor rights on the Resource Group that we've just created. It needs this to build the image. You can use the exact assignee id in the code below. This is the app registration for the image Builder service and is the same for everyone.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("az role assignment create \\\n    --assignee cf32a0cc-373c-47c9-9156-0db11f6a6dfc \\\n    --role Contributor \\\n    --scope /subscriptions/$subscriptionID/resourceGroups/$imageResourceGroup\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("Now to download the example VM template, which is a json file and apply our variables to it:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('curl https://raw.githubusercontent.com/danielsollondon/azvmimagebuilder/master/quickquickstarts/0_Creating_a_Custom_Linux_Managed_Image/helloImageTemplateLinux.json -o helloImageTemplateLinux.json\n\nsed -i -e "s/<subscriptionID>/$subscriptionID/g" helloImageTemplateLinux.json\nsed -i -e "s/<rgName>/$imageResourceGroup/g" helloImageTemplateLinux.json\nsed -i -e "s/<region>/$location/g" helloImageTemplateLinux.json\nsed -i -e "s/<imageName>/$imageName/g" helloImageTemplateLinux.json\nsed -i -e "s/<runOutputName>/$runOutputName/g" helloImageTemplateLinux.json\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("p",[e._v("You can see the json file and that the parameters have been applied in the code editor by using:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("code helloImageTemplateLinux.json\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Next, we'll submit the image configuration to the VM Image Builder service:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("az resource create \\\n    --resource-group $imageResourceGroup \\\n    --properties @helloImageTemplateLinux.json \\\n    --is-full-object \\\n    --resource-type Microsoft.VirtualMachineImages/imageTemplates \\\n    -n helloImageTemplateLinux01\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("When that is done, we can build the image with the command below. Note that this can take about 15 minutes or so.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("az resource invoke-action \\\n     --resource-group $imageResourceGroup \\\n     --resource-type  Microsoft.VirtualMachineImages/imageTemplates \\\n     -n helloImageTemplateLinux01 \\\n     --action Run \n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("p",[e._v("Once the build has completed, we can create a VM from the image using the following command:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("az vm create \\\n  --resource-group $imageResourceGroup \\\n  --name myVM \\\n  --admin-username azureuser \\\n  --image $imageName \\\n  --location $location \\\n  --generate-ssh-keys\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("p",[e._v("Note that you can also build and deploy and image using a "),t("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=AzureImageBuilder.devOps-task-for-azure-image-builder&WT.mc_id=other-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("task in Azure DevOps"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Once this is done, you should see a public IP address of the VM in the output. Use that IP address in the following command to SSH into the VM:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("ssh azureuser@<publicIpAddress>\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("That's it! You should now be connected with the VM and see something like the image below, which shows that this VM was built from the VM Image:")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/61result.png")}}),e._v(" "),t("p",[e._v("(Connected to the VM that was built from the image)")]),e._v(" "),t("p",[e._v("Also, if you go to the Azure portal and take a look at the Resource Group that we've created, you'll find the VM in there:")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/61vmresult.png")}}),e._v(" "),t("p",[e._v("(The VM in the Azure portal)")]),e._v(" "),t("h4",{attrs:{id:"conclusion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/virtual-machines/linux/image-builder-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Image Builder"),t("OutboundLink")],1),e._v(" provides a great way to create customized VM images that you can use as a standard to make sure that you can deploy consistent VMs with the same properties and policies. Go and check it out!")])])}),[],!1,null,null,null);a.default=r.exports}}]);