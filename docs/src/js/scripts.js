const init = () => {
	launchHomePage();
},
launchHomePage = () => {
	const heading = createEle("h1"),
		  worker = createEle("button"),
		  hirer = createEle("button"),
	      container = createEle("div"),
	      footer = createEle("div");
	//
	heading.innerHTML = "GTec";
	heading.className = "heading w3-center w3-wide";

	worker.innerHTML = "WORKERS";
	worker.onclick = workerPortal();
	worker.className = "worker w3-margin w3-large";

	hirer.innerHTML = "BUSINESS";
	hirer.onclick = hirePortal();
	hirer.className = "hirer w3-margin w3-large";

	container.append(worker,hirer);
	container.className = "container w3-center w3-card-4";

	footer.innerHTML = "Ehawk LLC &copy; 2021 - Powered by w3css";
	footer.className = "footer w3-center";

	body.append(heading,container,footer);
},
workerPortal = () => {
	return () => {
		alert("this will point us to the workers portal")
		console.log("hello work portal");
	}
},
hirePortal = () => {
	return () => {
		alert("this will point us to the businesses portal")
		console.log("hello hiring portal");
	}
};

window.onload = () => {
	init();
};