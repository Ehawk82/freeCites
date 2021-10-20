const init = () => {
	launchHomePage();
},
launchHomePage = () => {
	const container = createEle("div"),
	      disclaimer = createEle("div");
	//
	disclaimer.innerHTML = "This project has been suspended due to violations in the development contract and is pending investigation. <br/>  For more information, please see: <br/><code>18 U.S. Code § 1038</code>";
	disclaimer.className = "disclaimer w3-red w3-padding-64 w3-margin w3-half w3-card-4";

	container.append(disclaimer);
	container.className = "container w3-center w3-padding-64";


	body.append(container);
};

window.onload = () => {
	init();
};