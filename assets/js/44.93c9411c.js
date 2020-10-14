(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{394:function(e,t,o){"use strict";o.r(t);var s=o(41),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("::: tip\n💡 Learn more : "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-functions/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Functions Documentation"),o("OutboundLink")],1),e._v(".\n:::")]),e._v(" "),o("h4",{attrs:{id:"use-run-from-zip-to-deploy-a-site-to-azure-web-apps-or-functions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#use-run-from-zip-to-deploy-a-site-to-azure-web-apps-or-functions"}},[e._v("#")]),e._v(" Use Run-From-Zip to deploy a site to Azure Web Apps or Functions")]),e._v(" "),o("p",[e._v("Here is a neat feature that I just discovered dispite it being added about 6 months or so ago. It is the ability to deploy a site to Azure Web Apps or Azure Functions from a zip file.")]),e._v(" "),o("p",[e._v("With "),o("strong",[e._v("Run-From-Zip")]),e._v(" there is no longer a deployment step which copies the files to wwwroot such as git, ftp, etc. Instead, the zip file that you point to in your App Settings gets mounted on wwwroot as read-only.")]),e._v(" "),o("p",[e._v("To get started:")]),e._v(" "),o("p",[e._v("Using "),o("strong",[e._v("Azure Storage Explorer")]),e._v(", create a storage blob container and upload your zip file and select "),o("strong",[e._v("Generate SAS Signature")]),e._v(" as shown below:")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/azblobfunction1.png")}}),e._v(" "),o("p",[e._v("Hit "),o("strong",[e._v("Create")]),e._v(" and then "),o("strong",[e._v("Copy")])]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/azblobfunction2.png")}}),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/azblobfunction3.png")}}),e._v(" "),o("p",[e._v("Now head back over to the Azure Portal and add an Azure App Setting called "),o("code",[e._v("WEBSITE_RUN_FROM_ZIP")]),e._v(", and point it to your zip file.")]),e._v(" "),o("p",[e._v("Mine looks like : "),o("code",[e._v("WEBSITE_RUN_FROM_ZIP=https://REMOVED.blob.core.windows.net/michael-test/MichaelSampleApp.zip?st=2018-06-24T22%3A16%3A40Z&se=2018-06-25T22%3A16%3A40Z&sp=rl&sv=2017-07-29&sr=b&sig=01h%3D")])]),e._v(" "),o("p",[e._v("Now gives your site a couple of seconds and you should see your site that was deployed via a zip file.")])])}),[],!1,null,null,null);t.default=r.exports}}]);