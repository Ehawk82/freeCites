const init = () => {
	launchHomePage();
},
launchHomePage = () => {
	const heading = createEle("h1"),
		  worker = createEle("div"),
		  hirer = createEle("div"),
	      container = createEle("div"),
	      footer = createEle("footer");
	//
	heading.innerHTML = "Free Cites";
	heading.className = "heading w3-center";

	worker.innerHTML = "BUSINESS";
	worker.className = "worker w3-button w3-padding-16 w3-margin w3-large w3-monarch";

	hirer.innerHTML = "WORKERS";
	hirer.className = "hirer w3-button w3-padding-16 w3-margin w3-large w3-monarch";

	container.append(worker,hirer);
	container.className = "container w3-center w3-card-4";

	footer.innerHTML = "Ehawk LLC &copy; 2021 - Powered by w3css";
	footer.className = "footer w3-center w3-grey";

	body.append(heading,container,footer);
};

window.onload = () => {
	init();
};