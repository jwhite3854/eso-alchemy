(function ($) {
	'use strict';

	const conditions = {
		"breach": "Breach",
		"cowardice": "Cowardice",
		"defile": "Defile",
		"detection": "Detection",
		"enervation": "Enervation",
		"entrapment": "Entrapment",
		"fracture": "Fracture",
		"grav-health": "-- Health",
		"heroism": "Heroism",
		"hindrance": "Hindrance",
		"inc-armor": "+ Armor",
		"inc-spell-critical": "+ Spell Critical",
		"inc-spell-power": "+ Spell Power",
		"inc-spell-resist": "+ Spell Resist",
		"inc-weapon-critical": "+ Weapon Critical",
		"inc-weapon-power": "+ Weapon Power",
		"invisible": "Invisible",
		"ling-health": "< Health",
		"maim": "Maim",
		"protection": "Protection",
		"rav-health": "- Health",
		"rav-magicka": "- Magicka",
		"rav-stamina": "- Stamina",
		"res-health": "+ Health",
		"res-magicka": "+ Magicka",
		"res-stamina": "+ Stamina",
		"speed": "Speed",
		"timidity": "Timidity",
		"uncertainty": "Uncertainty",
		"unstoppable": "Unstoppable",
		"vitality": "Vitality",
		"vulnerability": "Vulnerability"
	}

	const reagents = {
		"beetle-scuttle": {
			"title": "Beetle Scuttle",
			"uses": ["breach","protection","inc-armor","vitality"]
		},
		"blessed-thistle": {
			"title": "Blessed Thistle",
			"uses": ["res-stamina","inc-weapon-power","rav-health","speed"]
		},
		"blue-entoloma": {
			"title": "Blue Entoloma",
			"uses": ["rav-magicka","cowardice","res-health","invisible"]
		},
		"bugloss": {
			"title": "Bugloss",
			"uses": ["inc-spell-resist","res-health","cowardice","res-magicka"]
		},
		"butterfly-wing": {
			"title": "Butterfly",
			"uses": ["res-health","ling-health","uncertainty","vitality"]
		},
		"chaurus-egg": {
			"title": "Chaurus Egg",
			"uses": ["timidity","rav-magicka","res-stamina","detection"]
		},
		"clam-gall": {
			"title": "Clam Gall",
			"uses": ["inc-spell-resist","hindrance","vulnerability","defile"]
		},
		"columbine": {
			"title": "Columbine",
			"uses": ["res-health","res-magicka","res-stamina","unstoppable"]
		},
		"corn-flower": {
			"title": "Corn Flower",
			"uses": ["res-magicka","inc-spell-power","rav-health","detection"]
		},
		"dragon-rheum": {
			"title": "Dragon Rheum",
			"uses": ["enervation","heroism","res-magicka","speed"]
		},
		"dragons-bile": {
			"title": "Dragons Bile",
			"uses": ["heroism","vulnerability","invisible","vitality"]
		},
		"dragons-blood": {
			"title": "Dragons Blood",
			"uses": ["ling-health","res-stamina","heroism","defile"]
		},
		"dragonthorn": {
			"title": "Dragonthorn",
			"uses": ["inc-weapon-power","res-stamina","fracture","inc-weapon-critical"]
		},
		"emetic-russula": {
			"title": "Emetic Russula",
			"uses": ["rav-health","rav-magicka","rav-stamina","entrapment"]
		},
		"fleshfly-larva": {
			"title": "Fleshfly Larva",
			"uses": ["rav-stamina","grav-health","vulnerability","vitality"]
		},
		"imp-stool": {
			"title": "Imp Stool",
			"uses": ["maim","rav-stamina","inc-armor","enervation"]
		},
		"ladys-smock": {
			"title": "Ladys Smock",
			"uses": ["inc-spell-power","res-magicka","breach","inc-spell-critical"]
		},
		"luminous-rusula": {
			"title": "Luminous Rusula",
			"uses": ["rav-stamina","maim","res-health","hindrance"]
		},
		"mountain-flower": {
			"title": "Mountain Flower",
			"uses": ["inc-armor","res-health","maim","res-stamina"]
		},
		"mudcrab-chitin": {
			"title": "Mudcrab Chitin",
			"uses": ["inc-spell-resist","protection","inc-armor","defile"]
		},
		"namiras-rot": {
			"title": "Namiras Rot",
			"uses": ["inc-spell-critical","speed","invisible","unstoppable"]
		},
		"nightshade": {
			"title": "Nightshade",
			"uses": ["rav-health","grav-health","protection","defile"]
		},
		"nirnroot": {
			"title": "Nirnroot",
			"uses": ["rav-health","uncertainty","enervation","invisible"]
		},
		"nirnroot-crimson": {
			"title": "Nirnroot, Crimson",
			"uses": ["timidity","inc-spell-critical","grav-health","res-health"]
		},
		"pearl": {
			"title": "Powdered Mother of Pearl",
			"uses": ["ling-health","speed","vitality","protection"]
		},
		"scrib-jelly": {
			"title": "Scrib Jelly",
			"uses": ["rav-magicka","vulnerability","speed","ling-health"]
		},
		"spider-egg": {
			"title": "Spider Egg",
			"uses": ["hindrance","ling-health","invisible","defile"]
		},
		"stinkhorn": {
			"title": "Stinkhorn",
			"uses": ["fracture","rav-health","inc-weapon-power","rav-stamina"]
		},
		"torchbug-thorax": {
			"title": "Torchbug Thorax",
			"uses": ["fracture","enervation","detection","vitality"]
		},
		"vile-coagulant": {
			"title": "Vile Coagulant",
			"uses": ["timidity","rav-health","res-magicka","protection"]
		},
		"violet-coprinus": {
			"title": "Violet Coprinus",
			"uses": ["breach","rav-health","inc-spell-power","rav-magicka"]
		},
		"water-hyacinth": {
			"title": "Water Hyacinth",
			"uses": ["res-health","inc-spell-critical","inc-weapon-critical","entrapment"]
		},
		"white-cap": {
			"title": "White Cap",
			"uses": ["cowardice","rav-magicka","inc-spell-resist","detection"]
		},
		"wormwood": {
			"title": "Wormwood",
			"uses": ["inc-weapon-critical","hindrance","detection","unstoppable"]
		}
	}

	const reagentList = document.getElementById("reagent-list");
	for (const [id, reagent] of Object.entries(reagents)){

		let liDataTags = id + ' ' + reagent.uses.join(' ');

		let cardInput = document.createElement("input");
		cardInput.className = "reagent";
		cardInput.setAttribute("type", "checkbox");
		cardInput.setAttribute("id", "reagent-"+id);
		cardInput.setAttribute("value", id);

		let cardTitle = document.createElement("label");
		cardTitle.className = "uk-card-title";
		cardTitle.innerText = reagent.title;
		cardTitle.setAttribute("for", "reagent-"+id);
		
		let cardHeader = document.createElement("div");
		cardHeader.className = "uk-card-header";
		cardHeader.append(cardInput);
		cardHeader.append(cardTitle);

		let cardGrid = document.createElement("div");
		cardGrid.className = "reagent-filter uk-grid uk-child-width-1-2 uk-child-width-1-4@m uk-text-center";
		cardGrid.setAttribute("uk-grid", "uk-grid");

		for (let useID of reagent.uses) {
			let reagentButton = document.createElement("button");
			reagentButton.className = "uk-button uk-button-default uk-width-1-1";
			reagentButton.innerText = conditions[useID];

			let reagentDiv = document.createElement("div");
			reagentDiv.setAttribute("uk-filter-control", "[data-tags*='"+useID+"']");
			reagentDiv.setAttribute("data-tags", id + " " + useID);
			reagentDiv.append(reagentButton);

			cardGrid.append(reagentDiv);
		}

		let cardBody = document.createElement("div");
		cardBody.className = "uk-card-body";
		cardBody.append(cardGrid);

		let listEl = document.createElement("li");
		listEl.setAttribute('data-tags', liDataTags);
		listEl.append(cardHeader);
		listEl.append(cardBody);
		
		reagentList.append(listEl);
	}

	const reagentInputs = document.getElementsByClassName('reagent');
	for (const reagent of reagentInputs){
		reagent.addEventListener("click", function(e){
			let reagentUses = reagents[reagent.value].uses;
			console.log(reagent.checked);
			
		});
	}

})();