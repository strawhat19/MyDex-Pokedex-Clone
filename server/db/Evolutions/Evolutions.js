export const Evolutions = [
    {
        "name": "bulbasaur",
        "id": 1,
        "evolvesTo": "ivysaur",
        "atLevel": 16,
        "trigger": "Via Level Up",
        "finalEvolution": "venusaur",
        "finalEvolutionLevel": 32,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "charmander",
        "id": 2,
        "evolvesTo": "charmeleon",
        "atLevel": 16,
        "trigger": "Via Level Up",
        "finalEvolution": "charizard",
        "finalEvolutionLevel": 36,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "squirtle",
        "id": 3,
        "evolvesTo": "wartortle",
        "atLevel": 16,
        "trigger": "Via Level Up",
        "finalEvolution": "blastoise",
        "finalEvolutionLevel": 36,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "caterpie",
        "id": 4,
        "evolvesTo": "metapod",
        "atLevel": 7,
        "trigger": "Via Level Up",
        "finalEvolution": "butterfree",
        "finalEvolutionLevel": 10,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "weedle",
        "id": 5,
        "evolvesTo": "kakuna",
        "atLevel": 7,
        "trigger": "Via Level Up",
        "finalEvolution": "beedrill",
        "finalEvolutionLevel": 10,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "pidgey",
        "id": 6,
        "evolvesTo": "pidgeotto",
        "atLevel": 18,
        "trigger": "Via Level Up",
        "finalEvolution": "pidgeot",
        "finalEvolutionLevel": 36,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "rattata",
        "id": 7,
        "evolvesTo": "raticate",
        "atLevel": 20,
        "trigger": "Via Level Up"
    },
    {
        "name": "spearow",
        "id": 8,
        "evolvesTo": "fearow",
        "atLevel": 20,
        "trigger": "Via Level Up"
    },
    {
        "name": "ekans",
        "id": 9,
        "evolvesTo": "arbok",
        "atLevel": 22,
        "trigger": "Via Level Up"
    },
    {
        "name": "pichu",
        "id": 10,
        "trigger": "Via Level Up",
        "evolvesTo": "pikachu",
        "evolveConditions": [
            "Min Happiness: 220"
        ]
    },
    {
        "name": "pichu",
        "id": 10,
        "evolvesTo": "pikachu",
        "minHappiness": 220,
        "items": "thunder-stone",
        "trigger": "Via Level Up",
        "finalEvolution": "raichu",
        "finalEvolutionTrigger": "use-item"
    },
    {
        "name": "sandshrew",
        "id": 11,
        "evolvesTo": "sandslash",
        "atLevel": 22,
        "trigger": "Via Level Up"
    },
    {
        "name": "nidoran-f",
        "id": 12,
        "evolvesTo": "nidorina",
        "atLevel": 16,
        "trigger": "Via Level Up",
        "finalEvolution": "nidoqueen",
        "finalEvolutionTrigger": "moon-stone"
    },
    {
        "name": "nidoran-m",
        "id": 13,
        "evolvesTo": "nidorino",
        "atLevel": 16,
        "trigger": "Via Level Up",
        "finalEvolution": "nidoking",
        "finalEvolutionTrigger": "moon-stone"
    },
    {
        "name": "cleffa",
        "id": 14,
        "trigger": "Via Level Up",
        "evolvesTo": "clefairy",
        "evolveConditions": [
            "Min Happiness: 220"
        ]
    },
    {
        "name": "cleffa",
        "id": 14,
        "evolvesTo": "clefairy",
        "minHappiness": 220,
        "items": "moon-stone",
        "trigger": "Via Level Up",
        "finalEvolution": "clefable",
        "finalEvolutionTrigger": "use-item"
    },
    {
        "name": "vulpix",
        "id": 15,
        "trigger": "Via Use Item",
        "itemName": "fire-stone",
        "evolvesTo": "ninetales"
    },
    {
        "name": "igglybuff",
        "id": 16,
        "trigger": "Via Level Up",
        "evolvesTo": "jigglypuff",
        "evolveConditions": [
            "Min Happiness: 220"
        ]
    },
    {
        "name": "igglybuff",
        "id": 16,
        "evolvesTo": "jigglypuff",
        "minHappiness": 220,
        "items": "moon-stone",
        "trigger": "Via Level Up",
        "finalEvolution": "wigglytuff",
        "finalEvolutionTrigger": "use-item"
    },
    {
        "name": "zubat",
        "id": 17,
        "evolvesTo": "golbat",
        "atLevel": 22,
        "trigger": "Via Level Up",
        "finalEvolution": "crobat",
        "finalEvolutionLevel": null,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "oddish",
        "id": 18,
        "evolvesTo": "gloom",
        "atLevel": 21,
        "trigger": "Via Level Up",
        "finalEvolution": "vileplume",
        "finalEvolutionTrigger": "leaf-stone"
    },
    {
        "name": "paras",
        "id": 19,
        "evolvesTo": "parasect",
        "atLevel": 24,
        "trigger": "Via Level Up"
    },
    {
        "name": "venonat",
        "id": 20,
        "evolvesTo": "venomoth",
        "atLevel": 31,
        "trigger": "Via Level Up"
    },
    {
        "name": "diglett",
        "id": 21,
        "evolvesTo": "dugtrio",
        "atLevel": 26,
        "trigger": "Via Level Up"
    },
    {
        "name": "meowth",
        "id": 22,
        "evolvesTo": "persian",
        "atLevel": 28,
        "trigger": "Via Level Up"
    },
    {
        "name": "psyduck",
        "id": 23,
        "evolvesTo": "golduck",
        "atLevel": 33,
        "trigger": "Via Level Up"
    },
    {
        "name": "mankey",
        "id": 24,
        "evolvesTo": "primeape",
        "atLevel": 28,
        "trigger": "Via Level Up"
    },
    {
        "name": "growlithe",
        "id": 25,
        "trigger": "Via Use Item",
        "itemName": "fire-stone",
        "evolvesTo": "arcanine"
    },
    {
        "name": "poliwag",
        "id": 26,
        "evolvesTo": "poliwhirl",
        "atLevel": 25,
        "trigger": "Via Level Up",
        "finalEvolution": "poliwrath",
        "finalEvolutionTrigger": "water-stone"
    },
    {
        "name": "bellsprout",
        "id": 29,
        "evolvesTo": "weepinbell",
        "atLevel": 21,
        "trigger": "Via Level Up",
        "finalEvolution": "victreebel",
        "finalEvolutionTrigger": "leaf-stone"
    },
    {
        "name": "tentacool",
        "id": 30,
        "evolvesTo": "tentacruel",
        "atLevel": 30,
        "trigger": "Via Level Up"
    },
    {
        "name": "ponyta",
        "id": 32,
        "evolvesTo": "rapidash",
        "atLevel": 40,
        "trigger": "Via Level Up"
    },
    {
        "name": "slowpoke",
        "id": 33,
        "evolvesTo": "slowbro",
        "atLevel": 37,
        "trigger": "Via Level Up"
    },
    {
        "name": "magnemite",
        "id": 34,
        "evolvesTo": "magneton",
        "atLevel": 30,
        "trigger": "Via Level Up",
        "finalEvolution": "magnezone",
        "finalEvolutionLevel": null,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "doduo",
        "id": 36,
        "evolvesTo": "dodrio",
        "atLevel": 31,
        "trigger": "Via Level Up"
    },
    {
        "name": "seel",
        "id": 37,
        "evolvesTo": "dewgong",
        "atLevel": 34,
        "trigger": "Via Level Up"
    },
    {
        "name": "grimer",
        "id": 38,
        "evolvesTo": "muk",
        "atLevel": 38,
        "trigger": "Via Level Up"
    },
    {
        "name": "shellder",
        "id": 39,
        "trigger": "Via Use Item",
        "itemName": "water-stone",
        "evolvesTo": "cloyster"
    },
    {
        "name": "drowzee",
        "id": 42,
        "evolvesTo": "hypno",
        "atLevel": 26,
        "trigger": "Via Level Up"
    },
    {
        "name": "krabby",
        "id": 43,
        "evolvesTo": "kingler",
        "atLevel": 28,
        "trigger": "Via Level Up"
    },
    {
        "name": "voltorb",
        "id": 44,
        "evolvesTo": "electrode",
        "atLevel": 30,
        "trigger": "Via Level Up"
    },
    {
        "name": "exeggcute",
        "id": 45,
        "trigger": "Via Use Item",
        "itemName": "leaf-stone",
        "evolvesTo": "exeggutor"
    },
    {
        "name": "cubone",
        "id": 46,
        "evolvesTo": "marowak",
        "atLevel": 28,
        "trigger": "Via Level Up"
    },
    {
        "name": "tyrogue",
        "id": 47,
        "evolvesTo": "hitmonlee",
        "atLevel": 20,
        "trigger": "Via Level Up"
    },
    {
        "name": "lickitung",
        "id": 48,
        "trigger": "Via Level Up",
        "evolvesTo": "lickilicky",
        "evolveConditions": [
            "Known Move: rollout"
        ]
    },
    {
        "name": "koffing",
        "id": 49,
        "evolvesTo": "weezing",
        "atLevel": 35,
        "trigger": "Via Level Up"
    },
    {
        "name": "happiny",
        "id": 51,
        "trigger": "Via Level Up",
        "evolvesTo": "chansey",
        "evolveConditions": [
            "Held Item: oval-stone",
            "Time Of Day: undefined"
        ]
    },
    {
        "name": "tangela",
        "id": 52,
        "trigger": "Via Level Up",
        "evolvesTo": "tangrowth",
        "evolveConditions": [
            "Known Move: ancient-power"
        ]
    },
    {
        "name": "goldeen",
        "id": 55,
        "evolvesTo": "seaking",
        "atLevel": 33,
        "trigger": "Via Level Up"
    },
    {
        "name": "staryu",
        "id": 56,
        "trigger": "Via Use Item",
        "itemName": "water-stone",
        "evolvesTo": "starmie"
    },
    {
        "name": "mime-jr",
        "id": 57,
        "trigger": "Via Level Up",
        "evolvesTo": "mr-mime",
        "evolveConditions": [
            "Known Move: mimic"
        ]
    },
    {
        "name": "smoochum",
        "id": 59,
        "evolvesTo": "jynx",
        "atLevel": 30,
        "trigger": "Via Level Up"
    },
    {
        "name": "magikarp",
        "id": 64,
        "evolvesTo": "gyarados",
        "atLevel": 20,
        "trigger": "Via Level Up"
    },
    {
        "name": "eevee",
        "id": 67,
        "trigger": "Via Use Item",
        "useItemArray": [
            "water-stone",
            "thunder-stone",
            "fire-stone"
        ],
        "evolvesToArray": [
            "vaporeon",
            "jolteon",
            "flareon"
        ]
    },
    {
        "name": "omanyte",
        "id": 69,
        "evolvesTo": "omastar",
        "atLevel": 40,
        "trigger": "Via Level Up"
    },
    {
        "name": "kabuto",
        "id": 70,
        "evolvesTo": "kabutops",
        "atLevel": 40,
        "trigger": "Via Level Up"
    },
    {
        "name": "munchlax",
        "id": 72,
        "trigger": "Via Level Up",
        "evolvesTo": "snorlax",
        "evolveConditions": [
            "Min Happiness: 220"
        ]
    },
    {
        "name": "dratini",
        "id": 76,
        "evolvesTo": "dragonair",
        "atLevel": 30,
        "trigger": "Via Level Up",
        "finalEvolution": "dragonite",
        "finalEvolutionLevel": 55,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "chikorita",
        "id": 79,
        "evolvesTo": "bayleef",
        "atLevel": 16,
        "trigger": "Via Level Up",
        "finalEvolution": "meganium",
        "finalEvolutionLevel": 32,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "cyndaquil",
        "id": 80,
        "evolvesTo": "quilava",
        "atLevel": 14,
        "trigger": "Via Level Up",
        "finalEvolution": "typhlosion",
        "finalEvolutionLevel": 36,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "totodile",
        "id": 81,
        "evolvesTo": "croconaw",
        "atLevel": 18,
        "trigger": "Via Level Up",
        "finalEvolution": "feraligatr",
        "finalEvolutionLevel": 30,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "sentret",
        "id": 82,
        "evolvesTo": "furret",
        "atLevel": 15,
        "trigger": "Via Level Up"
    },
    {
        "name": "hoothoot",
        "id": 83,
        "evolvesTo": "noctowl",
        "atLevel": 20,
        "trigger": "Via Level Up"
    },
    {
        "name": "ledyba",
        "id": 84,
        "evolvesTo": "ledian",
        "atLevel": 18,
        "trigger": "Via Level Up"
    },
    {
        "name": "spinarak",
        "id": 85,
        "evolvesTo": "ariados",
        "atLevel": 22,
        "trigger": "Via Level Up"
    },
    {
        "name": "chinchou",
        "id": 86,
        "evolvesTo": "lanturn",
        "atLevel": 27,
        "trigger": "Via Level Up"
    },
    {
        "name": "togepi",
        "id": 87,
        "trigger": "Via Level Up",
        "evolvesTo": "togetic",
        "evolveConditions": [
            "Min Happiness: 220"
        ]
    },
    {
        "name": "togepi",
        "id": 87,
        "evolvesTo": "togetic",
        "minHappiness": 220,
        "items": "shiny-stone",
        "trigger": "Via Level Up",
        "finalEvolution": "togekiss",
        "finalEvolutionTrigger": "use-item"
    },
    {
        "name": "natu",
        "id": 88,
        "evolvesTo": "xatu",
        "atLevel": 25,
        "trigger": "Via Level Up"
    },
    {
        "name": "mareep",
        "id": 89,
        "evolvesTo": "flaaffy",
        "atLevel": 15,
        "trigger": "Via Level Up",
        "finalEvolution": "ampharos",
        "finalEvolutionLevel": 30,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "azurill",
        "id": 90,
        "trigger": "Via Level Up",
        "evolvesTo": "marill",
        "evolveConditions": [
            "Min Happiness: 220"
        ]
    },
    {
        "name": "bonsly",
        "id": 91,
        "trigger": "Via Level Up",
        "evolvesTo": "sudowoodo",
        "evolveConditions": [
            "Known Move: mimic"
        ]
    },
    {
        "name": "hoppip",
        "id": 92,
        "evolvesTo": "skiploom",
        "atLevel": 18,
        "trigger": "Via Level Up",
        "finalEvolution": "jumpluff",
        "finalEvolutionLevel": 27,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "aipom",
        "id": 93,
        "trigger": "Via Level Up",
        "evolvesTo": "ambipom",
        "evolveConditions": [
            "Known Move: double-hit"
        ]
    },
    {
        "name": "sunkern",
        "id": 94,
        "trigger": "Via Use Item",
        "itemName": "sun-stone",
        "evolvesTo": "sunflora"
    },
    {
        "name": "yanma",
        "id": 95,
        "trigger": "Via Level Up",
        "evolvesTo": "yanmega",
        "evolveConditions": [
            "Known Move: ancient-power"
        ]
    },
    {
        "name": "wooper",
        "id": 96,
        "evolvesTo": "quagsire",
        "atLevel": 20,
        "trigger": "Via Level Up"
    },
    {
        "name": "murkrow",
        "id": 97,
        "trigger": "Via Use Item",
        "itemName": "dusk-stone",
        "evolvesTo": "honchkrow"
    },
    {
        "name": "misdreavus",
        "id": 98,
        "trigger": "Via Use Item",
        "itemName": "dusk-stone",
        "evolvesTo": "mismagius"
    },
    {
        "name": "wynaut",
        "id": 100,
        "evolvesTo": "wobbuffet",
        "atLevel": 15,
        "trigger": "Via Level Up"
    },
    {
        "name": "pineco",
        "id": 102,
        "evolvesTo": "forretress",
        "atLevel": 31,
        "trigger": "Via Level Up"
    },
    {
        "name": "gligar",
        "id": 104,
        "trigger": "Via Level Up",
        "evolvesTo": "gliscor",
        "evolveConditions": [
            "Held Item: razor-fang",
            "Time Of Day: undefined"
        ]
    },
    {
        "name": "snubbull",
        "id": 105,
        "evolvesTo": "granbull",
        "atLevel": 23,
        "trigger": "Via Level Up"
    },
    {
        "name": "sneasel",
        "id": 109,
        "trigger": "Via Level Up",
        "evolvesTo": "weavile",
        "evolveConditions": [
            "Held Item: razor-claw",
            "Time Of Day: undefined"
        ]
    },
    {
        "name": "teddiursa",
        "id": 110,
        "evolvesTo": "ursaring",
        "atLevel": 30,
        "trigger": "Via Level Up"
    },
    {
        "name": "slugma",
        "id": 111,
        "evolvesTo": "magcargo",
        "atLevel": 38,
        "trigger": "Via Level Up"
    },
    {
        "name": "swinub",
        "id": 112,
        "evolvesTo": "piloswine",
        "atLevel": 33,
        "trigger": "Via Level Up",
        "finalEvolution": "mamoswine",
        "finalEvolutionLevel": null,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "corsola",
        "id": 113,
        "evolvesTo": "cursola",
        "atLevel": 38,
        "trigger": "Via Level Up"
    },
    {
        "name": "remoraid",
        "id": 114,
        "evolvesTo": "octillery",
        "atLevel": 25,
        "trigger": "Via Level Up"
    },
    {
        "name": "mantyke",
        "id": 116,
        "trigger": "Via Level Up",
        "evolvesTo": "mantine",
        "evolveConditions": [
            "Party Species: remoraid"
        ]
    },
    {
        "name": "houndour",
        "id": 118,
        "evolvesTo": "houndoom",
        "atLevel": 24,
        "trigger": "Via Level Up"
    },
    {
        "name": "phanpy",
        "id": 119,
        "evolvesTo": "donphan",
        "atLevel": 25,
        "trigger": "Via Level Up"
    },
    {
        "name": "larvitar",
        "id": 126,
        "evolvesTo": "pupitar",
        "atLevel": 30,
        "trigger": "Via Level Up",
        "finalEvolution": "tyranitar",
        "finalEvolutionLevel": 55,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "treecko",
        "id": 130,
        "evolvesTo": "grovyle",
        "atLevel": 16,
        "trigger": "Via Level Up",
        "finalEvolution": "sceptile",
        "finalEvolutionLevel": 36,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "torchic",
        "id": 131,
        "evolvesTo": "combusken",
        "atLevel": 16,
        "trigger": "Via Level Up",
        "finalEvolution": "blaziken",
        "finalEvolutionLevel": 36,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "mudkip",
        "id": 132,
        "evolvesTo": "marshtomp",
        "atLevel": 16,
        "trigger": "Via Level Up",
        "finalEvolution": "swampert",
        "finalEvolutionLevel": 36,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "poochyena",
        "id": 133,
        "evolvesTo": "mightyena",
        "atLevel": 18,
        "trigger": "Via Level Up"
    },
    {
        "name": "zigzagoon",
        "id": 134,
        "evolvesTo": "linoone",
        "atLevel": 20,
        "trigger": "Via Level Up",
        "finalEvolution": "obstagoon",
        "finalEvolutionLevel": 35,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "wurmple",
        "id": 135,
        "evolvesTo": "silcoon",
        "atLevel": 7,
        "trigger": "Via Level Up",
        "finalEvolution": "beautifly",
        "finalEvolutionLevel": 10,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "lotad",
        "id": 136,
        "evolvesTo": "lombre",
        "atLevel": 14,
        "trigger": "Via Level Up",
        "finalEvolution": "ludicolo",
        "finalEvolutionTrigger": "water-stone"
    },
    {
        "name": "seedot",
        "id": 137,
        "evolvesTo": "nuzleaf",
        "atLevel": 14,
        "trigger": "Via Level Up",
        "finalEvolution": "shiftry",
        "finalEvolutionTrigger": "leaf-stone"
    },
    {
        "name": "taillow",
        "id": 138,
        "evolvesTo": "swellow",
        "atLevel": 22,
        "trigger": "Via Level Up"
    },
    {
        "name": "wingull",
        "id": 139,
        "evolvesTo": "pelipper",
        "atLevel": 25,
        "trigger": "Via Level Up"
    },
    {
        "name": "ralts",
        "id": 140,
        "evolvesTo": "kirlia",
        "atLevel": 20,
        "trigger": "Via Level Up",
        "finalEvolution": "gardevoir",
        "finalEvolutionLevel": 30,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "surskit",
        "id": 141,
        "evolvesTo": "masquerain",
        "atLevel": 22,
        "trigger": "Via Level Up"
    },
    {
        "name": "shroomish",
        "id": 142,
        "evolvesTo": "breloom",
        "atLevel": 23,
        "trigger": "Via Level Up"
    },
    {
        "name": "slakoth",
        "id": 143,
        "evolvesTo": "vigoroth",
        "atLevel": 18,
        "trigger": "Via Level Up",
        "finalEvolution": "slaking",
        "finalEvolutionLevel": 36,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "nincada",
        "id": 144,
        "evolvesTo": "ninjask",
        "atLevel": 20,
        "trigger": "Via Level Up"
    },
    {
        "name": "whismur",
        "id": 145,
        "evolvesTo": "loudred",
        "atLevel": 20,
        "trigger": "Via Level Up",
        "finalEvolution": "exploud",
        "finalEvolutionLevel": 40,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "makuhita",
        "id": 146,
        "evolvesTo": "hariyama",
        "atLevel": 24,
        "trigger": "Via Level Up"
    },
    {
        "name": "skitty",
        "id": 148,
        "trigger": "Via Use Item",
        "itemName": "moon-stone",
        "evolvesTo": "delcatty"
    },
    {
        "name": "aron",
        "id": 151,
        "evolvesTo": "lairon",
        "atLevel": 32,
        "trigger": "Via Level Up",
        "finalEvolution": "aggron",
        "finalEvolutionLevel": 42,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "meditite",
        "id": 152,
        "evolvesTo": "medicham",
        "atLevel": 37,
        "trigger": "Via Level Up"
    },
    {
        "name": "electrike",
        "id": 153,
        "evolvesTo": "manectric",
        "atLevel": 26,
        "trigger": "Via Level Up"
    },
    {
        "name": "budew",
        "id": 158,
        "trigger": "Via Level Up",
        "evolvesTo": "roselia",
        "evolveConditions": [
            "Min Happiness: 220",
            "Time Of Day: undefined"
        ]
    },
    {
        "name": "budew",
        "id": 158,
        "evolvesTo": "roselia",
        "minHappiness": 220,
        "items": "shiny-stone",
        "trigger": "Via Level Up",
        "finalEvolution": "roserade",
        "finalEvolutionTrigger": "use-item"
    },
    {
        "name": "gulpin",
        "id": 159,
        "evolvesTo": "swalot",
        "atLevel": 26,
        "trigger": "Via Level Up"
    },
    {
        "name": "carvanha",
        "id": 160,
        "evolvesTo": "sharpedo",
        "atLevel": 30,
        "trigger": "Via Level Up"
    },
    {
        "name": "wailmer",
        "id": 161,
        "evolvesTo": "wailord",
        "atLevel": 40,
        "trigger": "Via Level Up"
    },
    {
        "name": "numel",
        "id": 162,
        "evolvesTo": "camerupt",
        "atLevel": 33,
        "trigger": "Via Level Up"
    },
    {
        "name": "spoink",
        "id": 164,
        "evolvesTo": "grumpig",
        "atLevel": 32,
        "trigger": "Via Level Up"
    },
    {
        "name": "trapinch",
        "id": 166,
        "evolvesTo": "vibrava",
        "atLevel": 35,
        "trigger": "Via Level Up",
        "finalEvolution": "flygon",
        "finalEvolutionLevel": 45,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "cacnea",
        "id": 167,
        "evolvesTo": "cacturne",
        "atLevel": 32,
        "trigger": "Via Level Up"
    },
    {
        "name": "swablu",
        "id": 168,
        "evolvesTo": "altaria",
        "atLevel": 35,
        "trigger": "Via Level Up"
    },
    {
        "name": "barboach",
        "id": 173,
        "evolvesTo": "whiscash",
        "atLevel": 30,
        "trigger": "Via Level Up"
    },
    {
        "name": "corphish",
        "id": 174,
        "evolvesTo": "crawdaunt",
        "atLevel": 30,
        "trigger": "Via Level Up"
    },
    {
        "name": "baltoy",
        "id": 175,
        "evolvesTo": "claydol",
        "atLevel": 36,
        "trigger": "Via Level Up"
    },
    {
        "name": "lileep",
        "id": 176,
        "evolvesTo": "cradily",
        "atLevel": 40,
        "trigger": "Via Level Up"
    },
    {
        "name": "anorith",
        "id": 177,
        "evolvesTo": "armaldo",
        "atLevel": 40,
        "trigger": "Via Level Up"
    },
    {
        "name": "feebas",
        "id": 178,
        "trigger": "Via Level Up",
        "evolvesTo": "milotic",
        "evolveConditions": [
            "Min Beauty: 171"
        ]
    },
    {
        "name": "shuppet",
        "id": 181,
        "evolvesTo": "banette",
        "atLevel": 37,
        "trigger": "Via Level Up"
    },
    {
        "name": "chingling",
        "id": 184,
        "trigger": "Via Level Up",
        "evolvesTo": "chimecho",
        "evolveConditions": [
            "Min Happiness: 220",
            "Time Of Day: undefined"
        ]
    },
    {
        "name": "snorunt",
        "id": 186,
        "evolvesTo": "glalie",
        "atLevel": 42,
        "trigger": "Via Level Up"
    },
    {
        "name": "spheal",
        "id": 187,
        "evolvesTo": "sealeo",
        "atLevel": 32,
        "trigger": "Via Level Up",
        "finalEvolution": "walrein",
        "finalEvolutionLevel": 44,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "bagon",
        "id": 191,
        "evolvesTo": "shelgon",
        "atLevel": 30,
        "trigger": "Via Level Up",
        "finalEvolution": "salamence",
        "finalEvolutionLevel": 50,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "beldum",
        "id": 192,
        "evolvesTo": "metang",
        "atLevel": 20,
        "trigger": "Via Level Up",
        "finalEvolution": "metagross",
        "finalEvolutionLevel": 45,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "turtwig",
        "id": 203,
        "evolvesTo": "grotle",
        "atLevel": 18,
        "trigger": "Via Level Up",
        "finalEvolution": "torterra",
        "finalEvolutionLevel": 32,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "chimchar",
        "id": 204,
        "evolvesTo": "monferno",
        "atLevel": 14,
        "trigger": "Via Level Up",
        "finalEvolution": "infernape",
        "finalEvolutionLevel": 36,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "piplup",
        "id": 205,
        "evolvesTo": "prinplup",
        "atLevel": 16,
        "trigger": "Via Level Up",
        "finalEvolution": "empoleon",
        "finalEvolutionLevel": 36,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "starly",
        "id": 206,
        "evolvesTo": "staravia",
        "atLevel": 14,
        "trigger": "Via Level Up",
        "finalEvolution": "staraptor",
        "finalEvolutionLevel": 34,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "bidoof",
        "id": 207,
        "evolvesTo": "bibarel",
        "atLevel": 15,
        "trigger": "Via Level Up"
    },
    {
        "name": "kricketot",
        "id": 208,
        "evolvesTo": "kricketune",
        "atLevel": 10,
        "trigger": "Via Level Up"
    },
    {
        "name": "shinx",
        "id": 209,
        "evolvesTo": "luxio",
        "atLevel": 15,
        "trigger": "Via Level Up",
        "finalEvolution": "luxray",
        "finalEvolutionLevel": 30,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "cranidos",
        "id": 211,
        "evolvesTo": "rampardos",
        "atLevel": 30,
        "trigger": "Via Level Up"
    },
    {
        "name": "shieldon",
        "id": 212,
        "evolvesTo": "bastiodon",
        "atLevel": 30,
        "trigger": "Via Level Up"
    },
    {
        "name": "burmy",
        "id": 213,
        "evolvesTo": "wormadam",
        "atLevel": 20,
        "trigger": "Via Level Up"
    },
    {
        "name": "combee",
        "id": 214,
        "evolvesTo": "vespiquen",
        "atLevel": 21,
        "trigger": "Via Level Up"
    },
    {
        "name": "buizel",
        "id": 216,
        "evolvesTo": "floatzel",
        "atLevel": 26,
        "trigger": "Via Level Up"
    },
    {
        "name": "cherubi",
        "id": 217,
        "evolvesTo": "cherrim",
        "atLevel": 25,
        "trigger": "Via Level Up"
    },
    {
        "name": "shellos",
        "id": 218,
        "evolvesTo": "gastrodon",
        "atLevel": 30,
        "trigger": "Via Level Up"
    },
    {
        "name": "drifloon",
        "id": 219,
        "evolvesTo": "drifblim",
        "atLevel": 28,
        "trigger": "Via Level Up"
    },
    {
        "name": "buneary",
        "id": 220,
        "trigger": "Via Level Up",
        "evolvesTo": "lopunny",
        "evolveConditions": [
            "Min Happiness: 220"
        ]
    },
    {
        "name": "glameow",
        "id": 221,
        "evolvesTo": "purugly",
        "atLevel": 38,
        "trigger": "Via Level Up"
    },
    {
        "name": "stunky",
        "id": 223,
        "evolvesTo": "skuntank",
        "atLevel": 34,
        "trigger": "Via Level Up"
    },
    {
        "name": "bronzor",
        "id": 224,
        "evolvesTo": "bronzong",
        "atLevel": 33,
        "trigger": "Via Level Up"
    },
    {
        "name": "gible",
        "id": 230,
        "evolvesTo": "gabite",
        "atLevel": 24,
        "trigger": "Via Level Up",
        "finalEvolution": "garchomp",
        "finalEvolutionLevel": 48,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "riolu",
        "id": 232,
        "trigger": "Via Level Up",
        "evolvesTo": "lucario",
        "evolveConditions": [
            "Min Happiness: 220",
            "Time Of Day: undefined"
        ]
    },
    {
        "name": "hippopotas",
        "id": 233,
        "evolvesTo": "hippowdon",
        "atLevel": 34,
        "trigger": "Via Level Up"
    },
    {
        "name": "skorupi",
        "id": 234,
        "evolvesTo": "drapion",
        "atLevel": 40,
        "trigger": "Via Level Up"
    },
    {
        "name": "croagunk",
        "id": 235,
        "evolvesTo": "toxicroak",
        "atLevel": 37,
        "trigger": "Via Level Up"
    },
    {
        "name": "finneon",
        "id": 237,
        "evolvesTo": "lumineon",
        "atLevel": 31,
        "trigger": "Via Level Up"
    },
    {
        "name": "snover",
        "id": 239,
        "evolvesTo": "abomasnow",
        "atLevel": 40,
        "trigger": "Via Level Up"
    },
    {
        "name": "snivy",
        "id": 256,
        "evolvesTo": "servine",
        "atLevel": 17,
        "trigger": "Via Level Up",
        "finalEvolution": "serperior",
        "finalEvolutionLevel": 36,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "tepig",
        "id": 257,
        "evolvesTo": "pignite",
        "atLevel": 17,
        "trigger": "Via Level Up",
        "finalEvolution": "emboar",
        "finalEvolutionLevel": 36,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "oshawott",
        "id": 258,
        "evolvesTo": "dewott",
        "atLevel": 17,
        "trigger": "Via Level Up",
        "finalEvolution": "samurott",
        "finalEvolutionLevel": 36,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "patrat",
        "id": 259,
        "evolvesTo": "watchog",
        "atLevel": 20,
        "trigger": "Via Level Up"
    },
    {
        "name": "lillipup",
        "id": 260,
        "evolvesTo": "herdier",
        "atLevel": 16,
        "trigger": "Via Level Up",
        "finalEvolution": "stoutland",
        "finalEvolutionLevel": 32,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "purrloin",
        "id": 261,
        "evolvesTo": "liepard",
        "atLevel": 20,
        "trigger": "Via Level Up"
    },
    {
        "name": "pansage",
        "id": 262,
        "trigger": "Via Use Item",
        "itemName": "leaf-stone",
        "evolvesTo": "simisage"
    },
    {
        "name": "pansear",
        "id": 263,
        "trigger": "Via Use Item",
        "itemName": "fire-stone",
        "evolvesTo": "simisear"
    },
    {
        "name": "panpour",
        "id": 264,
        "trigger": "Via Use Item",
        "itemName": "water-stone",
        "evolvesTo": "simipour"
    },
    {
        "name": "munna",
        "id": 265,
        "trigger": "Via Use Item",
        "itemName": "moon-stone",
        "evolvesTo": "musharna"
    },
    {
        "name": "pidove",
        "id": 266,
        "evolvesTo": "tranquill",
        "atLevel": 21,
        "trigger": "Via Level Up",
        "finalEvolution": "unfezant",
        "finalEvolutionLevel": 32,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "blitzle",
        "id": 267,
        "evolvesTo": "zebstrika",
        "atLevel": 27,
        "trigger": "Via Level Up"
    },
    {
        "name": "woobat",
        "id": 269,
        "trigger": "Via Level Up",
        "evolvesTo": "swoobat",
        "evolveConditions": [
            "Min Happiness: 220"
        ]
    },
    {
        "name": "drilbur",
        "id": 270,
        "evolvesTo": "excadrill",
        "atLevel": 31,
        "trigger": "Via Level Up"
    },
    {
        "name": "tympole",
        "id": 273,
        "evolvesTo": "palpitoad",
        "atLevel": 25,
        "trigger": "Via Level Up",
        "finalEvolution": "seismitoad",
        "finalEvolutionLevel": 36,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "sewaddle",
        "id": 276,
        "evolvesTo": "swadloon",
        "atLevel": 20,
        "trigger": "Via Level Up",
        "finalEvolution": "leavanny",
        "finalEvolutionLevel": null,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "venipede",
        "id": 277,
        "evolvesTo": "whirlipede",
        "atLevel": 22,
        "trigger": "Via Level Up",
        "finalEvolution": "scolipede",
        "finalEvolutionLevel": 30,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "cottonee",
        "id": 278,
        "trigger": "Via Use Item",
        "itemName": "sun-stone",
        "evolvesTo": "whimsicott"
    },
    {
        "name": "petilil",
        "id": 279,
        "trigger": "Via Use Item",
        "itemName": "sun-stone",
        "evolvesTo": "lilligant"
    },
    {
        "name": "sandile",
        "id": 281,
        "evolvesTo": "krokorok",
        "atLevel": 29,
        "trigger": "Via Level Up",
        "finalEvolution": "krookodile",
        "finalEvolutionLevel": 40,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "darumaka",
        "id": 282,
        "evolvesTo": "darmanitan",
        "atLevel": 35,
        "trigger": "Via Level Up"
    },
    {
        "name": "dwebble",
        "id": 284,
        "evolvesTo": "crustle",
        "atLevel": 34,
        "trigger": "Via Level Up"
    },
    {
        "name": "scraggy",
        "id": 285,
        "evolvesTo": "scrafty",
        "atLevel": 39,
        "trigger": "Via Level Up"
    },
    {
        "name": "yamask",
        "id": 287,
        "evolvesTo": "cofagrigus",
        "atLevel": 34,
        "trigger": "Via Level Up"
    },
    {
        "name": "tirtouga",
        "id": 288,
        "evolvesTo": "carracosta",
        "atLevel": 37,
        "trigger": "Via Level Up"
    },
    {
        "name": "archen",
        "id": 289,
        "evolvesTo": "archeops",
        "atLevel": 37,
        "trigger": "Via Level Up"
    },
    {
        "name": "trubbish",
        "id": 290,
        "evolvesTo": "garbodor",
        "atLevel": 36,
        "trigger": "Via Level Up"
    },
    {
        "name": "zorua",
        "id": 291,
        "evolvesTo": "zoroark",
        "atLevel": 30,
        "trigger": "Via Level Up"
    },
    {
        "name": "minccino",
        "id": 292,
        "trigger": "Via Use Item",
        "itemName": "shiny-stone",
        "evolvesTo": "cinccino"
    },
    {
        "name": "gothita",
        "id": 293,
        "evolvesTo": "gothorita",
        "atLevel": 32,
        "trigger": "Via Level Up",
        "finalEvolution": "gothitelle",
        "finalEvolutionLevel": 41,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "solosis",
        "id": 294,
        "evolvesTo": "duosion",
        "atLevel": 32,
        "trigger": "Via Level Up",
        "finalEvolution": "reuniclus",
        "finalEvolutionLevel": 41,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "ducklett",
        "id": 295,
        "evolvesTo": "swanna",
        "atLevel": 35,
        "trigger": "Via Level Up"
    },
    {
        "name": "vanillite",
        "id": 296,
        "evolvesTo": "vanillish",
        "atLevel": 35,
        "trigger": "Via Level Up",
        "finalEvolution": "vanilluxe",
        "finalEvolutionLevel": 47,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "deerling",
        "id": 297,
        "evolvesTo": "sawsbuck",
        "atLevel": 34,
        "trigger": "Via Level Up"
    },
    {
        "name": "foongus",
        "id": 300,
        "evolvesTo": "amoonguss",
        "atLevel": 39,
        "trigger": "Via Level Up"
    },
    {
        "name": "frillish",
        "id": 301,
        "evolvesTo": "jellicent",
        "atLevel": 40,
        "trigger": "Via Level Up"
    },
    {
        "name": "joltik",
        "id": 303,
        "evolvesTo": "galvantula",
        "atLevel": 36,
        "trigger": "Via Level Up"
    },
    {
        "name": "ferroseed",
        "id": 304,
        "evolvesTo": "ferrothorn",
        "atLevel": 40,
        "trigger": "Via Level Up"
    },
    {
        "name": "klink",
        "id": 305,
        "evolvesTo": "klang",
        "atLevel": 38,
        "trigger": "Via Level Up",
        "finalEvolution": "klinklang",
        "finalEvolutionLevel": 49,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "tynamo",
        "id": 306,
        "evolvesTo": "eelektrik",
        "atLevel": 39,
        "trigger": "Via Level Up",
        "finalEvolution": "eelektross",
        "finalEvolutionTrigger": "thunder-stone"
    },
    {
        "name": "elgyem",
        "id": 307,
        "evolvesTo": "beheeyem",
        "atLevel": 42,
        "trigger": "Via Level Up"
    },
    {
        "name": "litwick",
        "id": 308,
        "evolvesTo": "lampent",
        "atLevel": 41,
        "trigger": "Via Level Up",
        "finalEvolution": "chandelure",
        "finalEvolutionTrigger": "dusk-stone"
    },
    {
        "name": "axew",
        "id": 309,
        "evolvesTo": "fraxure",
        "atLevel": 38,
        "trigger": "Via Level Up",
        "finalEvolution": "haxorus",
        "finalEvolutionLevel": 48,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "cubchoo",
        "id": 310,
        "evolvesTo": "beartic",
        "atLevel": 37,
        "trigger": "Via Level Up"
    },
    {
        "name": "mienfoo",
        "id": 314,
        "evolvesTo": "mienshao",
        "atLevel": 50,
        "trigger": "Via Level Up"
    },
    {
        "name": "golett",
        "id": 316,
        "evolvesTo": "golurk",
        "atLevel": 43,
        "trigger": "Via Level Up"
    },
    {
        "name": "pawniard",
        "id": 317,
        "evolvesTo": "bisharp",
        "atLevel": 52,
        "trigger": "Via Level Up"
    },
    {
        "name": "rufflet",
        "id": 319,
        "evolvesTo": "braviary",
        "atLevel": 54,
        "trigger": "Via Level Up"
    },
    {
        "name": "vullaby",
        "id": 320,
        "evolvesTo": "mandibuzz",
        "atLevel": 54,
        "trigger": "Via Level Up"
    },
    {
        "name": "deino",
        "id": 323,
        "evolvesTo": "zweilous",
        "atLevel": 50,
        "trigger": "Via Level Up",
        "finalEvolution": "hydreigon",
        "finalEvolutionLevel": 64,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "larvesta",
        "id": 324,
        "evolvesTo": "volcarona",
        "atLevel": 59,
        "trigger": "Via Level Up"
    },
    {
        "name": "chespin",
        "id": 337,
        "evolvesTo": "quilladin",
        "atLevel": 16,
        "trigger": "Via Level Up",
        "finalEvolution": "chesnaught",
        "finalEvolutionLevel": 36,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "fennekin",
        "id": 338,
        "evolvesTo": "braixen",
        "atLevel": 16,
        "trigger": "Via Level Up",
        "finalEvolution": "delphox",
        "finalEvolutionLevel": 36,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "froakie",
        "id": 339,
        "evolvesTo": "frogadier",
        "atLevel": 16,
        "trigger": "Via Level Up",
        "finalEvolution": "greninja",
        "finalEvolutionLevel": 36,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "bunnelby",
        "id": 340,
        "evolvesTo": "diggersby",
        "atLevel": 20,
        "trigger": "Via Level Up"
    },
    {
        "name": "fletchling",
        "id": 341,
        "evolvesTo": "fletchinder",
        "atLevel": 17,
        "trigger": "Via Level Up",
        "finalEvolution": "talonflame",
        "finalEvolutionLevel": 35,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "scatterbug",
        "id": 342,
        "evolvesTo": "spewpa",
        "atLevel": 9,
        "trigger": "Via Level Up",
        "finalEvolution": "vivillon",
        "finalEvolutionLevel": 12,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "litleo",
        "id": 343,
        "evolvesTo": "pyroar",
        "atLevel": 35,
        "trigger": "Via Level Up"
    },
    {
        "name": "flabebe",
        "id": 344,
        "evolvesTo": "floette",
        "atLevel": 19,
        "trigger": "Via Level Up",
        "finalEvolution": "florges",
        "finalEvolutionTrigger": "shiny-stone"
    },
    {
        "name": "skiddo",
        "id": 345,
        "evolvesTo": "gogoat",
        "atLevel": 32,
        "trigger": "Via Level Up"
    },
    {
        "name": "pancham",
        "id": 346,
        "evolvesTo": "pangoro",
        "atLevel": 32,
        "trigger": "Via Level Up"
    },
    {
        "name": "espurr",
        "id": 348,
        "evolvesTo": "meowstic",
        "atLevel": 25,
        "trigger": "Via Level Up"
    },
    {
        "name": "honedge",
        "id": 349,
        "evolvesTo": "doublade",
        "atLevel": 35,
        "trigger": "Via Level Up",
        "finalEvolution": "aegislash",
        "finalEvolutionTrigger": "dusk-stone"
    },
    {
        "name": "inkay",
        "id": 352,
        "evolvesTo": "malamar",
        "atLevel": 30,
        "trigger": "Via Level Up"
    },
    {
        "name": "binacle",
        "id": 353,
        "evolvesTo": "barbaracle",
        "atLevel": 39,
        "trigger": "Via Level Up"
    },
    {
        "name": "skrelp",
        "id": 354,
        "evolvesTo": "dragalge",
        "atLevel": 48,
        "trigger": "Via Level Up"
    },
    {
        "name": "clauncher",
        "id": 355,
        "evolvesTo": "clawitzer",
        "atLevel": 37,
        "trigger": "Via Level Up"
    },
    {
        "name": "helioptile",
        "id": 356,
        "trigger": "Via Use Item",
        "itemName": "sun-stone",
        "evolvesTo": "heliolisk"
    },
    {
        "name": "tyrunt",
        "id": 357,
        "evolvesTo": "tyrantrum",
        "atLevel": 39,
        "trigger": "Via Level Up"
    },
    {
        "name": "amaura",
        "id": 358,
        "evolvesTo": "aurorus",
        "atLevel": 39,
        "trigger": "Via Level Up"
    },
    {
        "name": "goomy",
        "id": 362,
        "evolvesTo": "sliggoo",
        "atLevel": 40,
        "trigger": "Via Level Up",
        "finalEvolution": "goodra",
        "finalEvolutionLevel": 50,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "bergmite",
        "id": 366,
        "evolvesTo": "avalugg",
        "atLevel": 37,
        "trigger": "Via Level Up"
    },
    {
        "name": "noibat",
        "id": 367,
        "evolvesTo": "noivern",
        "atLevel": 48,
        "trigger": "Via Level Up"
    },
    {
        "name": "rowlet",
        "id": 374,
        "evolvesTo": "dartrix",
        "atLevel": 17,
        "trigger": "Via Level Up",
        "finalEvolution": "decidueye",
        "finalEvolutionLevel": 34,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "litten",
        "id": 375,
        "evolvesTo": "torracat",
        "atLevel": 17,
        "trigger": "Via Level Up",
        "finalEvolution": "incineroar",
        "finalEvolutionLevel": 34,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "popplio",
        "id": 376,
        "evolvesTo": "brionne",
        "atLevel": 17,
        "trigger": "Via Level Up",
        "finalEvolution": "primarina",
        "finalEvolutionLevel": 34,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "pikipek",
        "id": 377,
        "evolvesTo": "trumbeak",
        "atLevel": 14,
        "trigger": "Via Level Up",
        "finalEvolution": "toucannon",
        "finalEvolutionLevel": 28,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "yungoos",
        "id": 378,
        "evolvesTo": "gumshoos",
        "atLevel": 20,
        "trigger": "Via Level Up"
    },
    {
        "name": "grubbin",
        "id": 379,
        "evolvesTo": "charjabug",
        "atLevel": 20,
        "trigger": "Via Level Up",
        "finalEvolution": "vikavolt",
        "finalEvolutionLevel": null,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "cutiefly",
        "id": 382,
        "evolvesTo": "ribombee",
        "atLevel": 25,
        "trigger": "Via Level Up"
    },
    {
        "name": "rockruff",
        "id": 383,
        "evolvesTo": "lycanroc",
        "atLevel": 25,
        "trigger": "Via Level Up"
    },
    {
        "name": "mareanie",
        "id": 385,
        "evolvesTo": "toxapex",
        "atLevel": 38,
        "trigger": "Via Level Up"
    },
    {
        "name": "mudbray",
        "id": 386,
        "evolvesTo": "mudsdale",
        "atLevel": 30,
        "trigger": "Via Level Up"
    },
    {
        "name": "dewpider",
        "id": 387,
        "evolvesTo": "araquanid",
        "atLevel": 22,
        "trigger": "Via Level Up"
    },
    {
        "name": "fomantis",
        "id": 388,
        "evolvesTo": "lurantis",
        "atLevel": 34,
        "trigger": "Via Level Up"
    },
    {
        "name": "morelull",
        "id": 389,
        "evolvesTo": "shiinotic",
        "atLevel": 24,
        "trigger": "Via Level Up"
    },
    {
        "name": "salandit",
        "id": 390,
        "evolvesTo": "salazzle",
        "atLevel": 33,
        "trigger": "Via Level Up"
    },
    {
        "name": "stufful",
        "id": 391,
        "evolvesTo": "bewear",
        "atLevel": 27,
        "trigger": "Via Level Up"
    },
    {
        "name": "bounsweet",
        "id": 392,
        "evolvesTo": "steenee",
        "atLevel": 18,
        "trigger": "Via Level Up",
        "finalEvolution": "tsareena",
        "finalEvolutionLevel": null,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "wimpod",
        "id": 396,
        "evolvesTo": "golisopod",
        "atLevel": 30,
        "trigger": "Via Level Up"
    },
    {
        "name": "sandygast",
        "id": 397,
        "evolvesTo": "palossand",
        "atLevel": 42,
        "trigger": "Via Level Up"
    },
    {
        "name": "type-null",
        "id": 399,
        "trigger": "Via Level Up",
        "evolvesTo": "silvally",
        "evolveConditions": [
            "Min Happiness: 220"
        ]
    },
    {
        "name": "jangmo-o",
        "id": 408,
        "evolvesTo": "hakamo-o",
        "atLevel": 35,
        "trigger": "Via Level Up",
        "finalEvolution": "kommo-o",
        "finalEvolutionLevel": 45,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "cosmog",
        "id": 413,
        "evolvesTo": "cosmoem",
        "atLevel": 43,
        "trigger": "Via Level Up",
        "finalEvolution": "solgaleo",
        "finalEvolutionLevel": 53,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "poipole",
        "id": 424,
        "trigger": "Via Level Up",
        "evolvesTo": "naganadel",
        "evolveConditions": [
            "Known Move: dragon-pulse"
        ]
    },
    {
        "name": "grookey",
        "id": 429,
        "evolvesTo": "thwackey",
        "atLevel": 16,
        "trigger": "Via Level Up",
        "finalEvolution": "rillaboom",
        "finalEvolutionLevel": 35,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "scorbunny",
        "id": 430,
        "evolvesTo": "raboot",
        "atLevel": 16,
        "trigger": "Via Level Up",
        "finalEvolution": "cinderace",
        "finalEvolutionLevel": 35,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "sobble",
        "id": 431,
        "evolvesTo": "drizzile",
        "atLevel": 16,
        "trigger": "Via Level Up",
        "finalEvolution": "inteleon",
        "finalEvolutionLevel": 35,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "skwovet",
        "id": 432,
        "evolvesTo": "greedent",
        "atLevel": 24,
        "trigger": "Via Level Up"
    },
    {
        "name": "rookidee",
        "id": 433,
        "evolvesTo": "corvisquire",
        "atLevel": 18,
        "trigger": "Via Level Up",
        "finalEvolution": "corviknight",
        "finalEvolutionLevel": 38,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "blipbug",
        "id": 434,
        "evolvesTo": "dottler",
        "atLevel": 10,
        "trigger": "Via Level Up",
        "finalEvolution": "orbeetle",
        "finalEvolutionLevel": 30,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "nickit",
        "id": 435,
        "evolvesTo": "thievul",
        "atLevel": 18,
        "trigger": "Via Level Up"
    },
    {
        "name": "gossifleur",
        "id": 436,
        "evolvesTo": "eldegoss",
        "atLevel": 20,
        "trigger": "Via Level Up"
    },
    {
        "name": "wooloo",
        "id": 437,
        "evolvesTo": "dubwool",
        "atLevel": 24,
        "trigger": "Via Level Up"
    },
    {
        "name": "chewtle",
        "id": 438,
        "evolvesTo": "drednaw",
        "atLevel": 22,
        "trigger": "Via Level Up"
    },
    {
        "name": "yamper",
        "id": 439,
        "evolvesTo": "boltund",
        "atLevel": 25,
        "trigger": "Via Level Up"
    },
    {
        "name": "rolycoly",
        "id": 440,
        "evolvesTo": "carkol",
        "atLevel": 18,
        "trigger": "Via Level Up",
        "finalEvolution": "coalossal",
        "finalEvolutionLevel": 34,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "silicobra",
        "id": 442,
        "evolvesTo": "sandaconda",
        "atLevel": 36,
        "trigger": "Via Level Up"
    },
    {
        "name": "arrokuda",
        "id": 444,
        "evolvesTo": "barraskewda",
        "atLevel": 26,
        "trigger": "Via Level Up"
    },
    {
        "name": "toxel",
        "id": 445,
        "evolvesTo": "toxtricity",
        "atLevel": 30,
        "trigger": "Via Level Up"
    },
    {
        "name": "sizzlipede",
        "id": 446,
        "evolvesTo": "centiskorch",
        "atLevel": 28,
        "trigger": "Via Level Up"
    },
    {
        "name": "hatenna",
        "id": 449,
        "evolvesTo": "hattrem",
        "atLevel": 32,
        "trigger": "Via Level Up",
        "finalEvolution": "hatterene",
        "finalEvolutionLevel": 42,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "impidimp",
        "id": 450,
        "evolvesTo": "morgrem",
        "atLevel": 32,
        "trigger": "Via Level Up",
        "finalEvolution": "grimmsnarl",
        "finalEvolutionLevel": 42,
        "finalEvolutionTrigger": "Via Level Up"
    },
    {
        "name": "snom",
        "id": 454,
        "trigger": "Via Level Up",
        "evolvesTo": "frosmoth",
        "evolveConditions": [
            "Min Happiness: 220",
            "Time Of Day: undefined"
        ]
    },
    {
        "name": "cufant",
        "id": 459,
        "evolvesTo": "copperajah",
        "atLevel": 34,
        "trigger": "Via Level Up"
    },
    {
        "name": "dreepy",
        "id": 465,
        "evolvesTo": "drakloak",
        "atLevel": 50,
        "trigger": "Via Level Up",
        "finalEvolution": "dragapult",
        "finalEvolutionLevel": 60,
        "finalEvolutionTrigger": "Via Level Up"
    }
];