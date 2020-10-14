(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{514:function(e,t,s){"use strict";s.r(t);var a=s(41),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("::: tip")]),e._v(" "),s("p",[e._v("💡 Learn more :  "),s("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/aks/developer-best-practices-pod-security/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Use Azure Key Vault with FlexVolume"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v(":::")]),e._v(" "),s("p",[e._v("This post was brought to you by "),s("a",{attrs:{href:"https://twitter.com/kumarallamraju",target:"_blank",rel:"noopener noreferrer"}},[e._v("@kumarallamraju"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"use-azure-key-vault-to-store-sensitive-data-and-access-from-kubernetes-pods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-azure-key-vault-to-store-sensitive-data-and-access-from-kubernetes-pods"}},[e._v("#")]),e._v(" Use Azure Key Vault to store sensitive data and access from Kubernetes Pods")]),e._v(" "),s("p",[e._v("As you develop and run applications in Azure Kubernetes Service (AKS), the security of Kubernetes pods is a key consideration. Your applications should be designed for the principle of least number of privileges required. Keeping private data secure is top of mind for your application. It's not a recommended practice to store sensitive data to your code or embed them in your container images. This approach would create a risk for exposure and limit the ability to rotate those credentials as the container images will need to be rebuilt.")]),e._v(" "),s("p",[e._v("Azure Key Vault FlexVolume for Kubernetes allows you to consume sensitive data from Azure Key Vault (like secrets, keys or certificates) and attach that data directly to Pods.  You can find the OSS project "),s("a",{attrs:{href:"https://github.com/Azure/kubernetes-keyvault-flexvol",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(". Azure Key Vault FlexVolume allows you to seamlessly integrate your key management systems with Kubernetes. Sensitive data like Secrets, keys, and certificates in a key management system become a volume accessible to pods. Once the volume is mounted, its data is available directly in the container filesystem for your application. Let's see it in action.")]),e._v(" "),s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),s("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),s("p",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),s("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("Pls make sure you have an AKS cluster provisioned and running before installing the Azure Key Vault FlexVolume. Instructions to create a new AKS cluster is documented "),s("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/aks/kubernetes-walkthrough",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1)]),e._v(" "),s("h4",{attrs:{id:"_1-deploy-key-vault-flexvolume-to-your-aks-cluster-with-this-command"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-deploy-key-vault-flexvolume-to-your-aks-cluster-with-this-command"}},[e._v("#")]),e._v(" 1. Deploy Key Vault FlexVolume to your AKS cluster with this command:")]),e._v(" "),s("div",{staticClass:"language-cmd line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("kubectl create -f https://raw.githubusercontent.com/Azure/kubernetes-keyvault-flexvol/master/deployment/kv-flexvol-installer.yaml\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h4",{attrs:{id:"_2-to-validate-key-vault-flexvolume-is-running-as-expected-run-the-following-command"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-to-validate-key-vault-flexvolume-is-running-as-expected-run-the-following-command"}},[e._v("#")]),e._v(" 2. To validate Key Vault FlexVolume is running as expected, run the following command:")]),e._v(" "),s("div",{staticClass:"language-cmd line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("kubectl get pods -n kv\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h4",{attrs:{id:"_3-using-key-vault-flexvolume"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-using-key-vault-flexvolume"}},[e._v("#")]),e._v(" 3. Using Key Vault FlexVolume")]),e._v(" "),s("p",[e._v("Key Vault FlexVolume offers four modes for accessing a Key Vault instance: Service Principal, Pod Identity, [VMSS User Assigned Managed Identity], [VMSS System Assigned Managed Identity].")]),e._v(" "),s("p",[e._v("In this blog we are going to focus on Option #1 - Service Principal")]),e._v(" "),s("h2",{attrs:{id:"create-a-service-principal-and-read-in-the-application-id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-service-principal-and-read-in-the-application-id"}},[e._v("#")]),e._v(" Create a service principal and read in the application ID")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("SP=$(az ad sp create-for-rbac --output json)\nSP_ID=$(echo $SP | jq -r .appId)\nSP_PASSWORD=$(echo $SP | jq -r .password)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("Add your service principal credentials as Kubernetes secrets accessible by the Key Vault FlexVolume driver.")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("kubectl create secret generic kvcreds --from-literal clientid=<SP_ID> --from-literal clientsecret=<SP_PASSWORD> --type=azure/kv\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h4",{attrs:{id:"_4-ensure-this-service-principal-has-all-the-required-permissions-to-access-content-in-your-key-vault-instance-if-not-run-the-following-azure-cli-commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-ensure-this-service-principal-has-all-the-required-permissions-to-access-content-in-your-key-vault-instance-if-not-run-the-following-azure-cli-commands"}},[e._v("#")]),e._v(" 4. Ensure this service principal has all the required permissions to access content in your Key Vault instance. If not, run the following Azure CLI commands:")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# Assign Reader Role to the service principal for your keyvault\naz role assignment create --role Reader --assignee <principalid> --scope /subscriptions/<subscriptionid>/resourcegroups/<resourcegroup>/providers/Microsoft.KeyVault/vaults/<keyvaultname>\n\n\n# Assign key vault permissions to your service principal\naz keyvault set-policy -n $KV_NAME --key-permissions get --spn <YOUR SPN CLIENT ID>\naz keyvault set-policy -n $KV_NAME --secret-permissions get --spn <YOUR SPN CLIENT ID>\naz keyvault set-policy -n $KV_NAME --certificate-permissions get --spn <YOUR SPN CLIENT ID>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("h4",{attrs:{id:"_5-i-have-showed-an-example-below-that-mounts-the-volume-and-references-the-secrets-stored-on-azure-key-vault"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-i-have-showed-an-example-below-that-mounts-the-volume-and-references-the-secrets-stored-on-azure-key-vault"}},[e._v("#")]),e._v(" 5. I have showed an example below that mounts the volume and references the secrets stored on Azure Key Vault")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-flex-kv\nspec:\n  containers:\n  - name: nginx-flex-kv\n    image: nginx\n    volumeMounts:\n    - name: test\n      mountPath: /kvmnt\n      readOnly: true\n  volumes:\n  - name: test\n    flexVolume:\n      driver: "azure/kv"\n      secretRef:\n        name: kvcreds                             \n      options:\n        usepodidentity: "false"                  \n        keyvaultname: "testkeyvault"             \n        keyvaultobjectnames: "SQL-USR;SQL-PWD;SQL-FQDN;SQL-DBNAME"\n        keyvaultobjecttypes: "secret;secret;secret;secret"\n        keyvaultobjectaliases: "SQL_USER;SQL_PASSWORD;SQL_SERVER;SQL_DBNAME"\n        keyvaultobjectversions: "testversion"     \n        resourcegroup: "testresourcegroup"        \n        subscriptionid: "xxxx9280-xx-4xx183-xxxx-xxxxxx"  \n        tenantid: "xxxxdfaa-1983-4571-1111-123455d2537"\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br")])]),s("p",[e._v("Please make sure the Azure Key Vault was created ahead of time before deploying this application. In the above example I have a keyvault named "),s("code",[e._v("testkeyvault")]),e._v(", 4 secrets named "),s("code",[e._v("SQL-USR;SQL-PWD;SQL-FQDN;SQL-DBNAME")]),e._v(" and their values exists.")]),e._v(" "),s("h4",{attrs:{id:"_6-deploy-your-app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-deploy-your-app"}},[e._v("#")]),e._v(" 6. Deploy your app")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("kubectl create -f deployment/nginx-flex-kv.yaml\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h4",{attrs:{id:"_7-validate-the-pod-has-access-to-the-secret-from-key-vault"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-validate-the-pod-has-access-to-the-secret-from-key-vault"}},[e._v("#")]),e._v(" 7. Validate the pod has access to the secret from key vault:")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("kubectl exec -it nginx-flex-kv ls /kvmnt\nSQL_USER;SQL_PASSWORD;SQL_SERVER;SQL_DBNAME\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("This output confirm the kubernetes Pod was able to access the sensitive data from Azure Key Vault.")]),e._v(" "),s("h4",{attrs:{id:"conclusion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),s("p",[e._v("With Azure Key Vault, you can store and regularly rotate secrets such as credentials, storage account keys, or certificates. You can integrate Azure Key Vault with an AKS cluster using a FlexVolume. The FlexVolume driver lets the AKS cluster natively retrieve credentials from Key Vault and securely provide them only to the requesting pod.")]),e._v(" "),s("h4",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://github.com/Azure/kubernetes-keyvault-flexvol?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Key Vault FlexVolume"),s("OutboundLink")],1)])]),e._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://azure.microsoft.com/en-us/services/key-vault/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Key Vault"),s("OutboundLink")],1)])])])])}),[],!1,null,null,null);t.default=r.exports}}]);