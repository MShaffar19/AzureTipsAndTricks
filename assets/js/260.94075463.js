(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{609:function(e,t,r){"use strict";r.r(t);var o=r(41),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("::: danger\nThis tip is marked obsolete. More info can be found "),r("a",{attrs:{href:"https://github.com/microsoft/AzureTipsAndTricks/issues/77",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(".\n:::")]),e._v(" "),r("p",[e._v("::: tip\n💡 Learn more : "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/storage/common/storage-use-azcopy-v10?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("AzCopy v10"),r("OutboundLink")],1),e._v(".\n:::")]),e._v(" "),r("h4",{attrs:{id:"working-with-azcopy-and-azure-storage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#working-with-azcopy-and-azure-storage"}},[e._v("#")]),e._v(" Working with AzCopy and Azure Storage")]),e._v(" "),r("p",[e._v("We've reviewed the following options with Azure Storage so far:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip74.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Working with Azure Storage Blobs and Files through the Portal"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip75.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Create an Azure Storage Blob Container through C#"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip76.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Uploading and Downloading a Stream into an Azure Storage Blob"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip77.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Working with Azure Storage Explorer"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip78.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Copy Azure Storage Blobs and Files via C#"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip79.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Creating an Azure Blob Hierarchy"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip80.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Adding Metadata to a file inside Azure Storage Blob Container"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip81.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Working with AzCopy and Azure Storage"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("Today, we are going to look at working with AzCopy to manipulate our Azure Storage container that we've been using throughout this series. Feel free to walk through other post in the series to get up to speed.")]),e._v(" "),r("p",[r("strong",[e._v("What is AzCopy?")]),e._v(" AzCopy is a command-line utility designed for copying data to/from Microsoft Azure Blob, File, and Table storage, using simple commands designed for optimal performance. You can copy data between a file system and a storage account, or between storage accounts. "),r("em",[e._v("(courtesy of docs)")])]),e._v(" "),r("p",[e._v("You can download either the latest version of AzCopy on "),r("a",{attrs:{href:"http://aka.ms/downloadazcopy?WT.mc_id=akams-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows"),r("OutboundLink")],1),e._v(" or "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/storage/common/storage-use-azcopy-linux?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Linux"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("For this example, I'm going to use Windows. After I downloaded and installed the utility, I navigated inside my command prompt to the following folder "),r("code",[e._v("%ProgramFiles(x86)%\\Microsoft SDKs\\Azure\\AzCopy")]),e._v(" and ran the "),r("code",[e._v("azcopy.exe")]),e._v(" command to ensure everything was working properly.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/azcopy1blog.png")}}),e._v(" "),r("p",[e._v("So you may be wondering if you need to do the device login as we did with the "),r("a",{attrs:{href:"https://www.michaelcrump.net/azure-cli-with-win10-bash/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure CLI"),r("OutboundLink")],1),e._v(". The answer is no, we'll be using our Azure Storage Access Key.")]),e._v(" "),r("h4",{attrs:{id:"getting-the-azure-storage-access-key"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getting-the-azure-storage-access-key"}},[e._v("#")]),e._v(" Getting the Azure Storage Access Key")]),e._v(" "),r("p",[e._v("Go ahead and open the Azure Portal and navigate to the Azure Storage account that we worked with "),r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip74.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("earlier"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("Look under "),r("strong",[e._v("Settings")]),e._v(", then "),r("strong",[e._v("Access Keys")]),e._v(" and copy the key1.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/azcopy2blog.png")}}),e._v(" "),r("p",[e._v("Store the key somewhere that you can retrieve it again.")]),e._v(" "),r("h4",{attrs:{id:"kick-the-tires-with-a-couple-of-commands"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kick-the-tires-with-a-couple-of-commands"}},[e._v("#")]),e._v(" Kick the tires with a couple of commands.")]),e._v(" "),r("p",[e._v("We can easily download a file from our Azure Storage Blob Container that we've been working with earlier with the following command:")]),e._v(" "),r("div",{staticClass:"language-text line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('AzCopy /Source:https://mbcrumpsa.blob.core.windows.net/images-backup /Dest:C:\\mytest /SourceKey:thekeyyoucopiedearlier /Pattern:"mikepic.png"\n')])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("img",{attrs:{src:e.$withBase("/files/azcopy3blog.gif")}}),e._v(" "),r("p",[e._v("We can do the reverse and upload a file from our hard disk to Azure Storage Blob Container with the following command:")]),e._v(" "),r("div",{staticClass:"language-text line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('AzCopy /Source:C:\\mytest /Dest:https://mbcrumpsa.blob.core.windows.net/images-backup /DestKey:thekeyyoucopiedearlier /Pattern:"mikepicnew.png"\n')])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("img",{attrs:{src:e.$withBase("/files/azcopy4blog.gif")}}),e._v(" "),r("p",[r("strong",[e._v("Keep in mind:")]),e._v(" The main difference between these two commands is the use of "),r("strong",[e._v("SourceKey")]),e._v(" for downloading and "),r("strong",[e._v("DestKey")]),e._v(" for uploading. The key that is being used is identical (named key1 from the example above).")]),e._v(" "),r("p",[e._v("Finally, you can copy from one Azure Storage account to another one with the following command:")]),e._v(" "),r("div",{staticClass:"language-text line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('AzCopy /Source:https://mbcrumpsa.blob.core.windows.net/images-backup /Dest:https://mbcrumpsa.blob.core.windows.net/images /SourceKey:thekeyyoucopiedearlier /DestKey:thekeyyoucopiedearlier /Pattern:"mikepicnew.png"\n')])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("In this case, I am copying a file named "),r("code",[e._v("mikepicnew.png")]),e._v(" from "),r("code",[e._v("images-backup")]),e._v(" to "),r("code",[e._v("images")]),e._v(" and then I'll refresh the container.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/azcopy5blog.gif")}})])}),[],!1,null,null,null);t.default=a.exports}}]);