(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{466:function(e,a,r){"use strict";r.r(a);var s=r(41),t=Object(s.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("::: tip")]),e._v(" "),r("p",[e._v("🔥 Checkout our new Azure Developer page at "),r("a",{attrs:{href:"https://azure.com/developer?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("azure.com/developer"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("💡 Learn more : "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/virtual-machines/linux/build-image-with-packer?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to create custom VM images in Azure"),r("OutboundLink")],1),e._v(".\n:::")]),e._v(" "),r("p",[e._v("This post was brought to you by "),r("strong",[r("a",{attrs:{href:"https://twitter.com/kumarallamraju",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kumar Allamraju"),r("OutboundLink")],1)]),e._v(".")]),e._v(" "),r("h4",{attrs:{id:"creating-custom-vm-images-in-azure-using-packer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#creating-custom-vm-images-in-azure-using-packer"}},[e._v("#")]),e._v(" Creating Custom VM Images in Azure using Packer")]),e._v(" "),r("p",[e._v("Azure provides rich support for open source tools to automate the infrastructure deployments. Some of the tools include Hashicorp's "),r("a",{attrs:{href:"https://packer.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Packer"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://www.terraform.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Terraform"),r("OutboundLink")],1),e._v(". In few simple steps, we'll learn how to create custom VM Linux images in Azure using Packer.")]),e._v(" "),r("p",[r("strong",[e._v("Packer")]),e._v(" is an open source tool for creating identical machine images for multiple platforms from a single source configuration. Packer is lightweight, runs on every major operating system, and is highly performant. It is capable of creating machine images for multiple platforms in parallel.")]),e._v(" "),r("p",[e._v("Since Packer is a command line tool, we will be relying on Azure CLI and Packer to build machine images. Pls make sure "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure CLI"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://www.packer.io/intro/getting-started/install.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Packer"),r("OutboundLink")],1),e._v(" are installed on your development machine prior to running the following steps.")]),e._v(" "),r("h4",{attrs:{id:"_1-create-a-resource-group"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-create-a-resource-group"}},[e._v("#")]),e._v(" 1. Create a Resource Group")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.microsoft.com/en-us/cli/azure/group?view=azure-cli-latest#az-group-create?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("az group create"),r("OutboundLink")],1),e._v(" -n myResourceGroup -l eastus")])]),e._v(" "),r("h4",{attrs:{id:"_2-create-a-service-principal"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-create-a-service-principal"}},[e._v("#")]),e._v(" 2. Create a service principal")]),e._v(" "),r("p",[e._v("Packer authenticates with Azure using a service principal.  An Azure service principal is a security identity that you can use with apps, services, and automation tools like Packer. You control and define the permissions as to what operations the service principal can perform in Azure.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.microsoft.com/en-us/cli/azure/ad/sp?view=azure-cli-latest#az-ad-sp-create-for-rbac?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("az ad sp create-for-rbac"),r("OutboundLink")],1),e._v(' --query "{ client_id: appId, client_secret: password, tenant_id: tenant }"')])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/rbac-output.png")}}),e._v(" "),r("p",[e._v("Pls make a note of client_id, client_secret and tenant_id from the above output. We also need an Azure subscription ID to build the packer template")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.microsoft.com/en-us/cli/azure/account?view=azure-cli-latest#az-account-show?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("az account show"),r("OutboundLink")],1),e._v(' --query "{ subscription_id: id }"')])]),e._v(" "),r("h4",{attrs:{id:"_3-define-a-packer-template"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-define-a-packer-template"}},[e._v("#")]),e._v(" 3. Define a packer template")]),e._v(" "),r("p",[e._v("After completing the above pre-requisites, we have to define a packer template in a json file. The template file typically contains the builders and provisioners that carry out the actual build process. Packer has a  "),r("a",{attrs:{href:"https://www.packer.io/docs/builders/azure.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("provisioner for Azure"),r("OutboundLink")],1),e._v(" that allows us to define Azure resources, such as the service principal credentials created in the preceding step.")]),e._v(" "),r("h4",{attrs:{id:"_4-create-a-custom-vm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-create-a-custom-vm"}},[e._v("#")]),e._v(" 4. Create a custom VM")]),e._v(" "),r("p",[e._v("Now create a file named "),r("code",[e._v("ubuntuVM.json")]),e._v(" and copy the following")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('{\n\t"builders": [{\n\t\t"type": "azure-arm",\n\n\t\t"client_id": "f5b6a5cf-fbdf-4a9f-b3b8-3c2cd00225a4",\n\t\t"client_secret": "0e760437-bf34-4aad-9f8d-870be799c55d",\n\t\t"tenant_id": "72f988bf-86f1-41af-91ab-2d7cd011db47",\n\t\t"subscription_id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx",\n\n\t\t"managed_image_resource_group_name": "myResourceGroup",\n\t\t"managed_image_name": "myPackerImage",\n\n\t\t"os_type": "Linux",\n\t\t"image_publisher": "Canonical",\n\t\t"image_offer": "UbuntuServer",\n\t\t"image_sku": "16.04-LTS",\n\n\t\t"azure_tags": {\n\t\t\t"dept": "Engineering",\n\t\t\t"task": "Image deployment"\n\t\t},\n\n\t\t"location": "East US",\n\t\t"vm_size": "Standard_DS2_v2"\n\t}],\n\t"provisioners": [{\n\t\t"execute_command": "chmod +x {{ .Path }}; {{ .Vars }} sudo -E sh \'{{ .Path }}\'",\n\t\t"inline": [\n\t\t\t"apt-get update",\n\t\t\t"apt-get upgrade -y",\n\t\t\t"apt-get -y install nginx",\n\n\t\t\t"/usr/sbin/waagent -force -deprovision+user && export HISTSIZE=0 && sync"\n\t\t],\n\t\t"inline_shebang": "/bin/sh -x",\n\t\t"type": "shell"\n\t}]\n}\n\n')])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br"),r("span",{staticClass:"line-number"},[e._v("9")]),r("br"),r("span",{staticClass:"line-number"},[e._v("10")]),r("br"),r("span",{staticClass:"line-number"},[e._v("11")]),r("br"),r("span",{staticClass:"line-number"},[e._v("12")]),r("br"),r("span",{staticClass:"line-number"},[e._v("13")]),r("br"),r("span",{staticClass:"line-number"},[e._v("14")]),r("br"),r("span",{staticClass:"line-number"},[e._v("15")]),r("br"),r("span",{staticClass:"line-number"},[e._v("16")]),r("br"),r("span",{staticClass:"line-number"},[e._v("17")]),r("br"),r("span",{staticClass:"line-number"},[e._v("18")]),r("br"),r("span",{staticClass:"line-number"},[e._v("19")]),r("br"),r("span",{staticClass:"line-number"},[e._v("20")]),r("br"),r("span",{staticClass:"line-number"},[e._v("21")]),r("br"),r("span",{staticClass:"line-number"},[e._v("22")]),r("br"),r("span",{staticClass:"line-number"},[e._v("23")]),r("br"),r("span",{staticClass:"line-number"},[e._v("24")]),r("br"),r("span",{staticClass:"line-number"},[e._v("25")]),r("br"),r("span",{staticClass:"line-number"},[e._v("26")]),r("br"),r("span",{staticClass:"line-number"},[e._v("27")]),r("br"),r("span",{staticClass:"line-number"},[e._v("28")]),r("br"),r("span",{staticClass:"line-number"},[e._v("29")]),r("br"),r("span",{staticClass:"line-number"},[e._v("30")]),r("br"),r("span",{staticClass:"line-number"},[e._v("31")]),r("br"),r("span",{staticClass:"line-number"},[e._v("32")]),r("br"),r("span",{staticClass:"line-number"},[e._v("33")]),r("br"),r("span",{staticClass:"line-number"},[e._v("34")]),r("br"),r("span",{staticClass:"line-number"},[e._v("35")]),r("br"),r("span",{staticClass:"line-number"},[e._v("36")]),r("br"),r("span",{staticClass:"line-number"},[e._v("37")]),r("br"),r("span",{staticClass:"line-number"},[e._v("38")]),r("br"),r("span",{staticClass:"line-number"},[e._v("39")]),r("br")])]),r("p",[e._v("This template builds an Ubuntu 16.04 LTS image, installs NGNIX web server and deprovisions the VM. You can customize your packer template file with any custom tools or software of your choice.")]),e._v(" "),r("h4",{attrs:{id:"_5-build-the-packer-image"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-build-the-packer-image"}},[e._v("#")]),e._v(" 5. Build the Packer Image")]),e._v(" "),r("p",[r("code",[e._v("./packer build ubuntuVM.json")])]),e._v(" "),r("p",[e._v("An example of the output from the preceding commands is as follows:")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("==> azure-arm: Running builder ...\n    azure-arm: Creating Azure Resource Manager (ARM) client ...\n==> azure-arm: Creating resource group ...\n==> azure-arm:  -> ResourceGroupName : ‘packer-Resource-Group-swtxmqm7ly’\n==> azure-arm:  -> Location          : ‘East US’\n==> azure-arm:  -> Tags              :\n==> azure-arm:  ->> dept : Engineering\n==> azure-arm:  ->> task : Image deployment\n==> azure-arm: Validating deployment template ...\n==> azure-arm:  -> ResourceGroupName : ‘packer-Resource-Group-swtxmqm7ly’\n==> azure-arm:  -> DeploymentName    : ‘pkrdpswtxmqm7ly’\n==> azure-arm: Deploying deployment template ...\n==> azure-arm:  -> ResourceGroupName : ‘packer-Resource-Group-swtxmqm7ly’\n==> azure-arm:  -> DeploymentName    : ‘pkrdpswtxmqm7ly’\n==> azure-arm: Getting the VM’s IP address ...\n==> azure-arm:  -> ResourceGroupName   : ‘packer-Resource-Group-swtxmqm7ly’\n==> azure-arm:  -> PublicIPAddressName : ‘packerPublicIP’\n==> azure-arm:  -> NicName             : ‘packerNic’\n==> azure-arm:  -> Network Connection  : ‘PublicEndpoint’\n==> azure-arm:  -> IP Address          : ‘40.76.218.147’\n==> azure-arm: Waiting for SSH to become available...\n==> azure-arm: Connected to SSH!\n==> azure-arm: Provisioning with shell script: /var/folders/h1/ymh5bdx15wgdn5hvgj1wc0zh0000gn/T/packer-shell868574263\n    azure-arm: WARNING! The waagent service will be stopped.\n    azure-arm: WARNING! Cached DHCP leases will be deleted.\n    azure-arm: WARNING! root password will be disabled. You will not be able to login as root.\n    azure-arm: WARNING! /etc/resolvconf/resolv.conf.d/tail and /etc/resolvconf/resolv.conf.d/original will be deleted.\n    azure-arm: WARNING! packer account and entire home directory will be deleted.\n==> azure-arm: Querying the machine’s properties ...\n==> azure-arm:  -> ResourceGroupName : ‘packer-Resource-Group-swtxmqm7ly’\n==> azure-arm:  -> ComputeName       : ‘pkrvmswtxmqm7ly’\n==> azure-arm:  -> Managed OS Disk   : ‘/subscriptions/guid/resourceGroups/packer-Resource-Group-swtxmqm7ly/providers/Microsoft.Compute/disks/osdisk’\n==> azure-arm: Powering off machine ...\n==> azure-arm:  -> ResourceGroupName : ‘packer-Resource-Group-swtxmqm7ly’\n==> azure-arm:  -> ComputeName       : ‘pkrvmswtxmqm7ly’\n==> azure-arm: Capturing image ...\n==> azure-arm:  -> Compute ResourceGroupName : ‘packer-Resource-Group-swtxmqm7ly’\n==> azure-arm:  -> Compute Name              : ‘pkrvmswtxmqm7ly’\n==> azure-arm:  -> Compute Location          : ‘East US’\n==> azure-arm:  -> Image ResourceGroupName   : ‘myResourceGroup’\n==> azure-arm:  -> Image Name                : ‘myPackerImage’\n==> azure-arm:  -> Image Location            : ‘eastus’\n==> azure-arm: Deleting resource group ...\n==> azure-arm:  -> ResourceGroupName : ‘packer-Resource-Group-swtxmqm7ly’\n==> azure-arm: Deleting the temporary OS disk ...\n==> azure-arm:  -> OS Disk : skipping, managed disk was used...\nBuild ‘azure-arm’ finished.\n\n==> Builds finished. The artifacts of successful builds are:\n--\x3e azure-arm: Azure.ResourceManagement.VMImage:\n\nManagedImageResourceGroupName: myResourceGroup\nManagedImageName: myPackerImage\nManagedImageLocation: eastus\n\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br"),r("span",{staticClass:"line-number"},[e._v("9")]),r("br"),r("span",{staticClass:"line-number"},[e._v("10")]),r("br"),r("span",{staticClass:"line-number"},[e._v("11")]),r("br"),r("span",{staticClass:"line-number"},[e._v("12")]),r("br"),r("span",{staticClass:"line-number"},[e._v("13")]),r("br"),r("span",{staticClass:"line-number"},[e._v("14")]),r("br"),r("span",{staticClass:"line-number"},[e._v("15")]),r("br"),r("span",{staticClass:"line-number"},[e._v("16")]),r("br"),r("span",{staticClass:"line-number"},[e._v("17")]),r("br"),r("span",{staticClass:"line-number"},[e._v("18")]),r("br"),r("span",{staticClass:"line-number"},[e._v("19")]),r("br"),r("span",{staticClass:"line-number"},[e._v("20")]),r("br"),r("span",{staticClass:"line-number"},[e._v("21")]),r("br"),r("span",{staticClass:"line-number"},[e._v("22")]),r("br"),r("span",{staticClass:"line-number"},[e._v("23")]),r("br"),r("span",{staticClass:"line-number"},[e._v("24")]),r("br"),r("span",{staticClass:"line-number"},[e._v("25")]),r("br"),r("span",{staticClass:"line-number"},[e._v("26")]),r("br"),r("span",{staticClass:"line-number"},[e._v("27")]),r("br"),r("span",{staticClass:"line-number"},[e._v("28")]),r("br"),r("span",{staticClass:"line-number"},[e._v("29")]),r("br"),r("span",{staticClass:"line-number"},[e._v("30")]),r("br"),r("span",{staticClass:"line-number"},[e._v("31")]),r("br"),r("span",{staticClass:"line-number"},[e._v("32")]),r("br"),r("span",{staticClass:"line-number"},[e._v("33")]),r("br"),r("span",{staticClass:"line-number"},[e._v("34")]),r("br"),r("span",{staticClass:"line-number"},[e._v("35")]),r("br"),r("span",{staticClass:"line-number"},[e._v("36")]),r("br"),r("span",{staticClass:"line-number"},[e._v("37")]),r("br"),r("span",{staticClass:"line-number"},[e._v("38")]),r("br"),r("span",{staticClass:"line-number"},[e._v("39")]),r("br"),r("span",{staticClass:"line-number"},[e._v("40")]),r("br"),r("span",{staticClass:"line-number"},[e._v("41")]),r("br"),r("span",{staticClass:"line-number"},[e._v("42")]),r("br"),r("span",{staticClass:"line-number"},[e._v("43")]),r("br"),r("span",{staticClass:"line-number"},[e._v("44")]),r("br"),r("span",{staticClass:"line-number"},[e._v("45")]),r("br"),r("span",{staticClass:"line-number"},[e._v("46")]),r("br"),r("span",{staticClass:"line-number"},[e._v("47")]),r("br"),r("span",{staticClass:"line-number"},[e._v("48")]),r("br"),r("span",{staticClass:"line-number"},[e._v("49")]),r("br"),r("span",{staticClass:"line-number"},[e._v("50")]),r("br"),r("span",{staticClass:"line-number"},[e._v("51")]),r("br"),r("span",{staticClass:"line-number"},[e._v("52")]),r("br"),r("span",{staticClass:"line-number"},[e._v("53")]),r("br"),r("span",{staticClass:"line-number"},[e._v("54")]),r("br"),r("span",{staticClass:"line-number"},[e._v("55")]),r("br")])]),r("p",[e._v("It takes a few minutes for Packer to build the VM, run the provisioners, and finally to clean up the deployment.")]),e._v(" "),r("h4",{attrs:{id:"_6-create-a-vm-from-the-custom-image"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-create-a-vm-from-the-custom-image"}},[e._v("#")]),e._v(" 6. Create a VM from the Custom Image")]),e._v(" "),r("p",[e._v("Now that our custom image is ready, we need to create a VM from the custom image with "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/cli/azure/vm",target:"_blank",rel:"noopener noreferrer"}},[e._v("az vm create"),r("OutboundLink")],1),e._v(". Specify the image you created with the --image parameter. The following example creates a VM named myVM from myPackerImage and generates SSH keys if they do not already exist:")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("    az vm create \\\n    --resource-group myResourceGroup \\\n    --name myVM \\\n    --image myPackerImage \\\n    --admin-username azureuser \\\n    --generate-ssh-keys\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br")])]),r("p",[e._v("If you wish to create VMs in a different resource group or region than your Packer image, specify the image ID rather than image name. You can obtain the image ID with "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/cli/azure/image#az-image-show?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("az image show"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("It takes a few minutes to create the VM. Once the VM has been created, take note of the publicIpAddress displayed by the Azure CLI. This address is used to access the NGINX site via a web browser.")]),e._v(" "),r("p",[e._v("To allow web traffic to reach your VM, open port 80 from the Internet with")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://docs.microsoft.com/en-us/cli/azure/vm",target:"_blank",rel:"noopener noreferrer"}},[e._v("az vm open-port"),r("OutboundLink")],1),e._v("\n--resource-group myResourceGroup --name myVM --port 80")]),e._v(" "),r("h4",{attrs:{id:"_7-test-your-vm-and-nginx-web-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7-test-your-vm-and-nginx-web-server"}},[e._v("#")]),e._v(" 7. Test your VM and NGINX web server")]),e._v(" "),r("p",[e._v("Now point your web browser to the public IP address of your VM in the address bar. The default NGINX home page will be displayed as shown below:")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/nginx.png")}}),e._v(" "),r("p",[e._v("Although this posting focused on building Linux VM images, the same process can be applied to build Windows VMs. In the future episode, we will learn how to create a virtual machine using this custom VM image using "),r("a",{attrs:{href:"https://www.terraform.io?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Terraform"),r("OutboundLink")],1)]),e._v(" "),r("h4",{attrs:{id:"conclusion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),r("p",[e._v("Pre-baked machine images have a lot of advantages, but most have been unable to benefit from them because images have been too tedious to create and manage. Packer changes all of this. In this posting, we have seen how easy it is easy to create custom images in Azure using Packer. Go and try it out!")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://packer.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hashicorp's Packer"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.packer.io/docs/builders/azure.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Resource Manager Builder"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://docs.microsoft.com/en-us/cli/azure/install-azure-cli-macos?view=azure-cli-latest?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure CLI"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/virtual-machines/windows/build-image-with-packer?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Building Windows VMs using Packer"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=t.exports}}]);