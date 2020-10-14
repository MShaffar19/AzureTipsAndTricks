(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{440:function(e,a,t){"use strict";t.r(a);var r=t(41),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("::: tip\n💡 Learn more : "),t("a",{attrs:{href:"https://docs.microsoft.com/azure/lab-services/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Lab Services and Azure DevTest Labs"),t("OutboundLink")],1),e._v(".\n:::")]),e._v(" "),t("h4",{attrs:{id:"azure-lab-services-demystified"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#azure-lab-services-demystified"}},[e._v("#")]),e._v(" Azure Lab Services Demystified")]),e._v(" "),t("h4",{attrs:{id:"i-was-working-in-the-lab-late-one-night"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i-was-working-in-the-lab-late-one-night"}},[e._v("#")]),e._v(" I was working in the lab late one night")]),e._v(" "),t("p",[e._v("Historically, if you wanted to set up a lab for educational or research use, you'd have to fill a room with identical PCs and load them all with a custom disk image with the OS and software required so that each user has exactly the same experience. Azure already supports hosting virtual machines with custom images, but this doesn't handle access management, user quotas, etc. With Azure Lab Service, you can build and manage your computer lab in the cloud.")]),e._v(" "),t("h4",{attrs:{id:"lab-equipment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lab-equipment"}},[e._v("#")]),e._v(" Lab equipment")]),e._v(" "),t("p",[e._v("Azure Lab Services does everything you'd expect from a traditional computer lab and then some. Because you're running on virtual machines, there's no painful copy-and-install process. Instead, you can scale your lab up easily from a common template.\nUse the Azure portal to create a new Lab Services account. This must have a unique name and can be in a new or existing resource group.")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/azure-labs-newaccount.png")}}),e._v(" "),t("p",[e._v("Unlike most other Azure services, this one has its own portal. You manage the labs through https://labs.azure.com. This is where you set up machines, users, and all other lab settings.")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/lab-services-dashboard.png")}}),e._v(" "),t("p",[e._v("Virtual machine images are created from a range of Windows or Linux OS options, and you can then customize the template image with the require software and settings. You start the template virtual machine, connect remotely, and configure as required. Once you're done, you can click Publish and then you're ready to deploy it to multiple virtual machines for your lab. You need to take care at this step because you can't un-publish a template. You'll have to start over with a new lab if you need to change the template once published.")]),e._v(" "),t("p",[e._v("You can specify how many concurrent users can be active in the lab, from 1 to a maximum of 100. In addition, you can set a schedule for when the machines are available with auto-shutdown of virtual machines at the end of the session. This is important because if you leave machines running, you'll be charged for their usage.")]),e._v(" "),t("p",[e._v("Users register with the lab using a unique link that you can distribute to them however you like. This will allow them to connect to an available virtual machine. The admin or educator can monitor which users have registered and see which virtual machines are active and how long they have been active.")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/azure-labs-vm-sizes.png")}}),e._v(" "),t("p",[e._v("There are three tiers of virtual machine instance you can select from depending on the workload required. The service is billed for the number of minutes each machine is active. You're not charged for virtual machines that are shut down.")]),e._v(" "),t("h4",{attrs:{id:"securing-your-lab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#securing-your-lab"}},[e._v("#")]),e._v(" Securing your lab")]),e._v(" "),t("p",[e._v("Lab Services only allows users with the Lab Creator role to create and edit labs. This role is managed through the Azure portal. This means that regular lab users only have access to a virtual machine and can't make any changes to the lab setup. The virtual machine itself is protected by a default username and password, which the lab creator set on creation, and this has to be shared with valid users in order to access the lab content.")]),e._v(" "),t("h4",{attrs:{id:"why-should-i-care"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why-should-i-care"}},[e._v("#")]),e._v(" Why should I care?")]),e._v(" "),t("p",[e._v("Beyond just creating a virtual machine image, there is a great deal of admin involved in successfully running a lab. Azure Lab Services manages a lot of this work for you. You can use the service for facilitating classroom labs or providing a controlled environment for customers to trial your software. You can even go beyond the features available here by creating a customized environment with Azure DevTest Labs to deploy to another user's Azure subscription, respecting their own organization's restrictions and infrastructure. To deploy your first lab, visit https://labs.azure.com.")])])}),[],!1,null,null,null);a.default=s.exports}}]);