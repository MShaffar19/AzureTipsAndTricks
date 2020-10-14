(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{462:function(t,e,s){"use strict";s.r(e);var a=s(41),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("::: tip\n💡 Learn more : "),s("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-monitor/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Monitor Capabilities"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("📺 Watch the video : "),s("a",{attrs:{href:"https://www.youtube.com/watch?v=iTRILNstmFI&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=50&t=1s?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to use Azure Monitor Insights to record custom events"),s("OutboundLink")],1),t._v(".\n:::")]),t._v(" "),s("h4",{attrs:{id:"use-azure-monitor-to-track-custom-events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-azure-monitor-to-track-custom-events"}},[t._v("#")]),t._v(" Use Azure Monitor to track custom events")]),t._v(" "),s("p",[t._v("When you enable "),s("a",{attrs:{href:"https://docs.microsoft.com/azure/application-insights/app-insights-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Insights"),s("OutboundLink")],1),t._v(" in your application, you automatically start tracking application usage, performance, failures and more. This is great information that helps you to keep your application up and running and preforming well.")]),t._v(" "),s("p",[t._v("But sometimes you need more information. For instance, when you've just released a new feature, you want to know if users are using it and if that works for them.\nInsight scan help you to track this information as well. You do that by talking to the Insights API that you can access through the SDK.")]),t._v(" "),s("blockquote",[s("p",[t._v("NOTE: The following examples demonstrate adding the Insights SDK for .NET, but versions are also available for Node.js and Java")])]),t._v(" "),s("p",[t._v("If you don't have the Insights SDK in your application yet, you can add it easily from within Visual Studio. Just "),s("strong",[t._v("right-click you project > Add > Insights Telemetry")]),t._v(" and go through the wizard.")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/AddAppInsightsSDK.png")}}),t._v(" "),s("p",[t._v("(Add the Insights SDK)")]),t._v(" "),s("p",[t._v("If you do have the SDK already, make sure that you've updated it to the latest version. You can do this in the NuGet Package Manager.")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/UpdateAppInsightsSDKNuget.png")}}),t._v(" "),s("p",[t._v("(Update the Insights SDK)")]),t._v(" "),s("p",[t._v("Let's take a look at how we can track some custom events with Application Insights.")]),t._v(" "),s("h5",{attrs:{id:"log-custom-server-side-events-using-the-insights-c-sdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#log-custom-server-side-events-using-the-insights-c-sdk"}},[t._v("#")]),t._v(" Log custom server-side events using the Insights C# SDK")]),t._v(" "),s("p",[t._v("Logging custom events is very simple when you use the SDK.")]),t._v(" "),s("p",[t._v("The first thing that you need to do is get a reference to the telemetry client, like this:")]),t._v(" "),s("div",{staticClass:"language-csharp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TelemetryClient")]),t._v(" telemetry "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("TelemetryClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Now use the client to log events. There are several methods that you can use to log custom data. For things that happened, the "),s("strong",[t._v("TrackEvent")]),t._v(" call works best. "),s("a",{attrs:{href:"https://docs.microsoft.com/azure/application-insights/app-insights-api-custom-events-metrics?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Other methods"),s("OutboundLink")],1),t._v(" that you can use are "),s("strong",[t._v("TrackException")]),t._v(", "),s("strong",[t._v("TrackRequest")]),t._v(" and "),s("strong",[t._v("TrackDependency")]),t._v(", amongst others.\nIn my case, I want to track the search terms that people use in my application. I can do that like this:")]),t._v(" "),s("div",{staticClass:"language-csharp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" dictionary "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("Dictionary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndictionary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"term"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" searchterm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ntelemetry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("TrackEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Searched"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dictionary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("You provide the TrackEvent method with a dictionary. Because of this, you can provide it with a whole list of key/value pairs.")]),t._v(" "),s("h5",{attrs:{id:"log-custom-client-side-events-using-the-insights-javascript-sdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#log-custom-client-side-events-using-the-insights-javascript-sdk"}},[t._v("#")]),t._v(" Log custom client-side events using the Insights JavaScript SDK")]),t._v(" "),s("p",[t._v("I also want to track events that happen on the client. In JavaScript, I execute a method when a user clicks on a certain div element. I want to know which div this is.\nTo track events on the client, you use the Insights JavaScript SDK. This is automatically injected for you on each page when you enable Application Insights.")]),t._v(" "),s("p",[t._v("In JavaScript, I just call "),s("strong",[t._v("trackEvent")]),t._v(" on the "),s("strong",[t._v("appInsights")]),t._v(" object to track the event.")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" dictionary "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"service"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" serviceName "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("appInsights"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("trackEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ServiceClick"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dictionary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("I can do this, without first getting a reference to the Insights client, because the client is already injected for me.\nAnd also here, I pass the "),s("strong",[t._v("trackEvent")]),t._v(" method a dictionary with values.")]),t._v(" "),s("h5",{attrs:{id:"analyzing-custom-events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#analyzing-custom-events"}},[t._v("#")]),t._v(" Analyzing custom events")]),t._v(" "),s("p",[t._v("Now that we are logging custom events, we can also see them in Insights in the Azure portal.")]),t._v(" "),s("p",[t._v("In the portal, in your Insights instance, you can see the events in the "),s("strong",[t._v("Events")]),t._v(" menu.")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/CustomEventsInPortal.png")}}),t._v(" "),s("p",[t._v("(Insights Events in the Azure portal)")]),t._v(" "),s("p",[t._v("In the events page, you can see an aggregate table of which custom events happened and how many times they happened.\nFrom here, you can drill down into the events to take a closer look at their data. You can see each individual event and see which data is associated with the event.")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/DataFromCustomEvent.png")}}),t._v(" "),s("p",[t._v("(Custom event data in the Azure portal)")]),t._v(" "),s("p",[t._v("If you want to dive in deeper, you can query all of your data, including the custom events, using the Insights Analytics portal.")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/AppInsightsAnalyticsButton.png")}}),t._v(" "),s("p",[t._v("(The Analytics button in Application Insights)")]),t._v(" "),s("p",[t._v('In here, you can query the data. This is very powerful and allows you to display the results as data or even render it in a chart. You can query the data using a SQL-like language, which is pretty simple to use and there\'s good documentation on the query language. The portal provides you with all of the fields that you can query on and you can use common constructs like "where" clauses in your queries.')]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/AppInsightsAnalytics.png")}}),t._v(" "),s("p",[t._v("(Query custom events in Insights Analytics)")]),t._v(" "),s("h5",{attrs:{id:"conclusion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[t._v("#")]),t._v(" Conclusion")]),t._v(" "),s("p",[t._v("Logging custom data with Insights is very easy. You can track things that happen and you can also track metrics, like the http queue length performance metric. Insights in the Azure portal allows you to easily analyze this custom data and even render charts from it.")]),t._v(" "),s("p",[t._v("As all of this is relatively easy, you owe it to yourself to track what your users are doing. That's the only way to know if your application is actually being used in the way you thought it would. Go and check it out!")])])}),[],!1,null,null,null);e.default=n.exports}}]);