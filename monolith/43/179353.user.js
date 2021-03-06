// ==UserScript==
// @name 		     TW Gold Jobs Finder
// @description   Shows the list of all silver and gold jobs
// @author 		Macabre2077
// @author 		tw81 (Italian translation)
// @author 		Jakovlev (Hungarian translation)
// @author 		realfan2002 (Romanian translation)
// @author 		Vebuus (Polish translation)
// @autor		pepe100 (Spanish translation)
// @version 	     0.96
// @include		http://*.the-west.*/game.php*
// ==/UserScript==

function exec(fn) {
    var script = document.createElement('script');
    script.setAttribute("type", "application/javascript");
    script.textContent = '(' + fn + ')();';
    document.body.appendChild(script); // run the script
    document.body.removeChild(script); // clean up
}

exec(function() {
	
var VERSION = 0.96;
	
if(window.hasOwnProperty("GoldJobs") && GoldJobs.version > VERSION) return;
	
GoldJobs = {
	version: VERSION,
	CHECK_FILE_URL: 0,
	FEEDBACK_URL: "http://shelimov.me/macabre2077/userscripts/goldjobs/sendFeedback.php",
	CHECK_FILE_URL: "http://pastebin.com/raw.php?i=9iaxjPUv",
    SCRIPT_SITE: "http://userscripts.org/scripts/show/154884",
    SCRIPT_NAME: "TW Gold Jobs Finder",
	toLoad: 0,
	loaded: 0,
	xMax:181,
	yMax:79,
	blockMaxLength:300,
	dataLoaded: false,
	silverJobBbColor: "#708090",
	goldJobBbColor: "#f4c430",
	preferences: {
		jobName: "",
		showSilver: true,
		showGold: true, 
		sortByName: 0,
		sortByDistance: 1
	},
	hiddenImageOpacity: 0.35,
	shownImageOpacity: 1,
	GAME_VERSION_SUPPORTED_MIN: 2.06,
	GAME_VERSION_SUPPORTED_MAX: 2.06,
	bestJobTime: 0
};

GoldJobs.languages = {
	"en_US": {
		jobIcon: "Icon",
		jobName: "Job name",
		distanceTime: "Travel time",
		showJob: "Show",
		title: "Gold And Silver Jobs",
		loaded: "Loaded: ",
		changelist: "Changelist",
		version: "version",
		update_available: "Gold Jobs update available",
		update_question: "You can download the latest version from userscripts.org. Visit the site?",
		loading: "Loading...",
		exportTitle: "Share",
		exportButtonTitle: "Share",
		generatedBy: "Generated by TW Gold Jobs Finder",
		generatedByBb: "[i][url="+GoldJobs.SCRIPT_SITE+"]Generated by TW Gold Jobs Finder[/url][/i]",
		plainText: "Plain Text",
		bbCode: "BB code",
		enqueue: "Enqueue",
		openWindowTitle: "Open window",
		refreshTitle: "Refresh",
		feedback: "Improvement",
		feedbackTitle: "Send feedback",
		feedbackWindowTitle: "Golden Jobs Feedback",
		bug: "Bug",
		send: "Send",
		feedbackDescription: "If you have encountered any bugs or have ideas how to improve this script, describe them..in English please.."
	},
	"ru_RU": {
		jobIcon: "Иконка",
		jobName: "Название работы",
		distanceTime: "Время",
		showJob: "Показать",
		title: "Золотые и серебряные работы",
		changelist: "Список изменений",
		version: "версия",
		loaded: "Загружено: ",
		update_available: "Доступно обновление скрипта Gold Jobs",
		update_question: "Вы можете скачать новую версию с сайта userscripts.org. Перейти?",
		loading: "Загрузка...",
		exportTitle: "Поделиться результатами",
		exportButtonTitle: "Поделиться",
		generatedBy: "Получено с помощью TW Gold Jobs Finder",
		generatedByBb: "[i][url="+GoldJobs.SCRIPT_SITE+"]Получено с помощью TW Gold Jobs Finder[/url][/i]",
		plainText: "Без BB-кода",
		bbCode: "С BB-кодом",
		enqueue: "Начать",
		openWindowTitle: "Открыть",
		refreshTitle: "Обновить данные",
		feedback: "Предложение",
		feedbackTitle: "Обратная связь",
		feedbackWindowTitle: "Golden Jobs, обратная связь",
		bug: "Баг",
		send: "Отправить",
		feedbackDescription: "Если нашли баги, или есть идеи, как улучшить скрипт, напишите их в поле ниже"
	},
	"it_IT": {
		jobIcon: "Icona",  
		jobName: "Nome lavoro",  
		distanceTime: "Tempo di viaggio",  
		showJob: "Mostra",  
		title: "Lavoro Oro e Argento", 
		loaded: "Caricato: ",  
		changelist: "Elenco modifiche",  
		version: "versione",  
		update_available: "E' disponibile un aggiornamento per TW Gold Jobs Finder",  
		update_question: "È possibile scaricare la versione più recente dal userscripts.org. Visita il sito?",  
		loading: "Caricamento in corso ... Ci vorrà un po '" ,
		exportTitle: "Cita",  
		exportButtonTitle: "Cita",  
		generatedBy: "Generato da TW Gold Jobs Finder",  
		generatedByBb: "[i][url="+GoldJobs.SCRIPT_SITE+"]Generato da  TW Gold Jobs Finder[/url][/i]",  
		plainText: "Testo normale",  
		bbCode: "BB code",
		enqueue: "Inizia",
		openWindowTitle: "Aperto",
		refreshTitle: "Aggiornare dati",
		feedback: "Miglioramento",
		feedbackTitle: "Invia feedback",
		feedbackWindowTitle: "Golden Jobs Feedback",
		bug: "Bug",
		send: "Inviare",
		feedbackDescription: "Se avete riscontrato qualche bug o avete idee su come migliorare questo script, vi prego di descriverle .. in inglese per favore."
	},
	"hu_HU": {
		jobIcon: "Ikon",  
		jobName: "Munka neve",  
		distanceTime: "Menetidő",  
		showJob: "Mutatás",  
		title: "Arany és ezüst munkák",  
		parseMap: "1. Adatok importálása",  
		openJobsWindow: "2. Munkák mutatása",  
		loaded: "Töltés: ",  
		changelist: "Változások",  
		version: "verzió",  
		update_available: "Gold Jobs frissítés elérhető",  
		update_question: "Letöltheted a legújabb verziót itt: userscripts.org. Megnyitod az oldalt?",  
		loading: "Kis türelmet, töltés alatt...", 
		exportTitle: "Megosztás",  
		exportButtonTitle: "Megosztás",  
		generatedBy: "TW Gold Jobs Finder által létrehozva",  
		generatedByBb: "[i][url="+GoldJobs.SCRIPT_SITE+"]TW Gold Jobs Finder által létrehozva[/url][/i]",  
		plainText: "Szövegként",  
		bbCode: "BB kód",
		enqueue: "Kezdés",
		openWindowTitle: "Megnyitás",
		refreshTitle: "Frissítés",  
		feedback: "Javaslat",  
		feedbackTitle: "Visszajelzés küldése",  
		feedbackWindowTitle: "Golden Jobs visszajelzés",  
		bug: "Bug", 
		send: "Küld",  
		feedbackDescription: "Ha találkoztál hibákkal (bug), vagy javaslatod lenne a szkript bővítéséhez írd le őket. Szigorúan csak angolul!"  
	},
	"ro_RO": {
		jobIcon: "Imagine",  
		jobName: "Denumirea muncii",  
		distanceTime: "Distanţa",  
		showJob: "Arată",  
		title: "Munci aurii şi argintii",  
		parseMap: "1. Obţine datele",  
		openJobsWindow: "2. Deschide fereastra cu munci",  
		loaded: "Încărcat: ",  
		changelist: "Lista modificărilor",  
		version: "versiune",  
		update_available: "Actualizare disponibilă",  
		update_question: "Puteţi descărca cea mai recentă versiune de pe userscripts.org. Doriţi să vizitaţi pagina?",  
		loading: "Se încarcă... Poate dura ceva timp!", 
		exportTitle: "Distribuiţi",  
		exportButtonTitle: "Distribuiţi",  
		generatedBy: "Generat cu TW Gold Jobs Finder",  
		generatedByBb: "[i][url="+GoldJobs.SCRIPT_SITE+"]Generat cu TW Gold Jobs Finder[/url][/i]",  
		plainText: "Text simplu",  
		bbCode: "BB code",
		enqueue: "Start",
		openWindowTitle: "Deschide",
		refreshTitle: "Reîmprospăta",
		feedback: "Îmbunătățire",
		feedbackTitle: "Trimite feedback",
		feedbackWindowTitle: "Golden Jobs Feedback",
		bug: "Bug",
		send: "Trimite",
		feedbackDescription: "If you have encountered any bugs or have ideas how to improve this script, describe them..in English please.."
	},
	"pl_PL": {
		jobIcob: "Ikona",
		jobName: "Nazwa pracy",
		distanceTime: "Dystans",
		showJob: "Pokaż",
		title: "Złote i srebrne prace",
		parseMap: "1. Pobierz dane",
		openJobsWindow: "2. Otwórz okno z pracami",
		loaded: "Ładowanie: ",
		changelist: "Lista zmian",
		version: "wersja",
		update_available: "Dostępna aktualizacja",
		update_question: "Możesz pobrać najnowszą wersję z userscripts.org. Odwiedzić stronę?",
		loading: "Ładowanie... To zajmie moment",
		exportTitle: "Eksport",
		exportButtonTitle: "Eksport",
		generatedBy: "Stworzone przez TW Gold Jobs Finder",
		generatedByBb: "[i][url="+GoldJobs.SCRIPT_SITE+"]Stworzone przez TW Gold Jobs Finder[/url][/i]",
		plainText: "Zwykły tekst",
		bbCode: "BB code",
		enqueue: "Startuj",
		openWindowTitle: "Otwierać",
		refreshTitle: "Odświeżanie danych",
		feedback: "Poprawa",
		feedbackTitle: "Wysłać opinię",
		feedbackWindowTitle: "Golden Jobs Opinię",
		bug: "Bug",
		send: "Wysłać",
		feedbackDescription: "If you have encountered any bugs or have ideas how to improve this script, describe them..in English please.."
	},
       "es_ES": {
		jobIcon: "Icono",
		jobName: "Nombre Trabajo",
		distanceTime: "Tiempo viaje",
		showJob: "Mostrar",
		title: "Trabajos con Bonus Oro y Plata",
		loaded: "Cargado: ",
		changelist: "Lista de cambios",
		version: "versión",
		update_available: "Actualización disponible Gold Jobs",
		update_question: "Puede descargar la última versión desde userscripts.org. ¿Visitar el sitio?",
		loading: "Cargando...",
		exportTitle: "Compartir",
		exportButtonTitle: "Compartir",
		generatedBy: "Generado por TW Gold Jobs Finder",
		generatedByBb: "[i][url="+GoldJobs.SCRIPT_SITE+"]Generado por TW Gold Jobs Finder[/url][/i]",
		plainText: "Texto plano",
		bbCode: "BB code",
		enqueue: "Encolar",
		openWindowTitle: "Abrir ventana",
		refreshTitle: "Refrescar",
		feedback: "Mejorat",
		feedbackTitle: "Enviar comentarios",
		feedbackWindowTitle: "Golden Jobs comentarios",
		bug: "Bug",
		send: "Enviar",
		feedbackDescription: "Si ha encontrado algún error o tiene ideas de cómo mejorar este script, descríbalos.. por favor en inglés.."
	}
};

GoldJobs.parseWholeMap = function(tiles, onLoad) {
	this.loaded = 0;
	
	var x,y;
	var arr = [];
	var currentBlock = 0;
	var currentBlockLength = 0;
	for(x in tiles) {
		for(y in tiles[x]) {
			if(isNaN(x) || isNaN(y)) {
				continue;
			}
			if(currentBlockLength == 0) {
				arr[currentBlock] = [];
			}
			arr[currentBlock].push([parseInt(x),parseInt(y)]);
			if(++currentBlockLength == this.blockMaxLength) {
				currentBlock++;
				currentBlockLength = 0;
			}
		}
	}

	var i, to = arr.length;
	this.toLoad = to;
	for(i=0;i<to;i++){
		Map.Data.Loader.load(arr[i], function(){
			GoldJobs.loaded++;
			if(GoldJobs.loaded == GoldJobs.toLoad) {
				onLoad();
			}
		});
	}
};

GoldJobs.getJobIcon = function(jobId, x, y, shortname, gold) {
	var pos = {"x": x,"y": y};
	var t = gold ? "gold" : "silver";
	return '<div class="job" style="left: 0; top: 0; position: relative;"><div  onclick="javascript:Map.JobHandler.openJob('+jobId+',{x:'+x+',y:'+y+'})" class="featured '+t+'"></div>'+this.getGotoIcon(x, y)+'<img src="http://www.the-west.ru/images/jobs/'+ shortname +'.png" class="job_icon"></div>'
};

GoldJobs.getGotoIcon = function(x, y) {
	return '<div class="centermap" onclick="javascript:Map.center('+x+','+y+');"style="position: absolute;background-image: url(\'http://www.the-west.ru/images/map/icons/instantwork.png\');width: 20px;height: 20px;top: 0;right: 3px;cursor: pointer;"></div>';
};

GoldJobs.getBestJobTime = function() {
	var list = JobList.getDurations();
	var maxTime = 0;
	for(name in list) {
		if(list[name].requirement <= Character.level && list[name].duration > maxTime) {
			maxTime = list[name].duration;
		}
	}
	GoldJobs.bestJobTime = maxTime;
}

GoldJobs.getEnqueueButton = function(jobId, x, y) {
	var job = JobList.getJobById(jobId);
	var canDo = job.canDo();
	if(GoldJobs.bestJobTime == 0) {
		GoldJobs.getBestJobTime();
	}
	var duration = GoldJobs.bestJobTime;
	var b = this.gui.makeButton(this.lang.enqueue,function() {
		TaskQueue.add(new TaskJob(jobId, x, y, duration));
	});
	b.setWidth(100);
	if(!canDo) b.disable();
	return b.getMainDiv();
};

GoldJobs.addColumnsCss = function() {
	$('.goldenJobs .jobIcon').css('width' , '60px');
	$('.goldenJobs .jobName').css('width' , '140px');
	$('.goldenJobs .startJob').css('width' , '100px');
	$('.goldenJobs .distanceTime').css('width' , '60px');
	$('.goldenJobs .row').css('height' , '56px');
	$('.goldenJobs .row').css('background' , "none");
	
	$('.goldenJobs .row_head .jobName').css('width' , '135px');
	$('.goldenJobs .row_head .distanceTime').css('width' , '95px');
	$('.goldenJobs .row_head .startJob').css('width' , '0px');
	
	$('.goldenJobs .tfoot .jobIcon').css('width' , '100%');
	$('.goldenJobs .tfoot').css('height' , '35px');

	$(".goldenJobs").find('.tw2gui_scrollpane').css("height", "280px");
};

GoldJobs.calculateDistance = function(jobX, jobY) {
	var to = {x: jobX, y: jobY};
	return Map.calcWayTime(Character.position, to);
};

GoldJobs.addEventListener = function(event, callback) {
	if(EventHandler.hasOwnProperty("add")) {
		EventHandler.add(event, callback);
	} else {
		EventHandler.listen(event, callback);		
	}
}

GoldJobs.openWindow = function() {
	var content = $("<div class='jobwindow'/>");
	var table = this.makeJobsTable(this.preferences.jobName, this.preferences.showSilver, this.preferences.showGold, this.preferences.sortByName, this.preferences.sortByDistance);
	
	var win = wman.open("goldenJobs").setResizeable(true).setMinSize(450, 475).setSize(450, 475).setMiniTitle(this.lang.title);
	content.append(table.getMainDiv());
	win.appendToContentPane(content);	
	this.addColumnsCss();
	this.addFilterEvent();
	this.addHeaderEvents();
	this.addEventListener('position_change', GoldJobs.refreshWindow);
};

GoldJobs.buildFooter = function(chosenJobName) {
	var footer=$('<div class="goldjobs_table_foot" style="margin-top: 3px"><span id="gj_job_search" style="position: relative; top: 0px; "/><span id="gj_share" style="position: absolute;top: 3px;right: 7px;"/></div>');
	var exportButton = this.gui.makeButton(this.lang.exportButtonTitle,function() {
		var jobName = $("#gj_job_search_textfield").val();
		var jobs = GoldJobs.jobsDataToBbString(jobName);
		GoldJobs.showExportWindow(jobs+GoldJobs.lang.generatedByBb, true);
	}).setWidth(100);
	var textfield = this.gui.makeTextfield("gj_job_search_textfield").setSize(18).setWidth(137);
	var clearImage = $("<img/>", {
		src: "http://www.the-west.ru/images/chat/servicegrade_traitor.png",
		click: function() {
			$("#gj_job_search_textfield").val("");
			$("#gj_job_search_textfield").change();
		},
		css: {
			filter: "grayscale(100%)",
			"-webkit-filter": "grayscale(100%)",
			"-moz-filter": "grayscale(100%)",
			"-o-filter": "grayscale(100%)",
			position: "absolute",
			top: "-1px",
			left: "130px"
		}
	});
	
	$('#gj_job_search', footer).append(textfield.getMainDiv());
    $('#gj_share', footer).append(exportButton.getMainDiv());

	$("#gj_job_search span.tw2gui_textfield span", footer).append("<span class='placeholder' style='font-weight: lighter;color: #333;position: absolute;left: 12px; top: 1px;'>" + this.lang.jobName + "</span>");
	var placeholder = $("#gj_job_search .placeholder", footer);
	placeholder.after(clearImage);
	placeholder.click(function () {
        $("#gj_job_search_textfield", footer).focus();
    });
    $("#gj_job_search_textfield", footer).focus(function () {
        placeholder.hide();
    });
    $("#gj_job_search_textfield", footer).focusout(function () {
        if ($("#gj_job_search_textfield").val() == "") {
			placeholder.show();
		}
    });
	if(chosenJobName != undefined &&  chosenJobName != "") {
		$("#gj_job_search_textfield", footer).val(chosenJobName);
		$("#gj_job_search_textfield", footer).focus();
	}
	return footer;
};

GoldJobs.getJobIconHeaderCell = function(showGold, showSilver) {
	var hiddenImageOpacity = this.hiddenImageOpacity;
	var shownImageOpacity = this.shownImageOpacity;
	return '<img src="http://www.the-west.ru/images/jobs/featured/goldjob.png" style="width: 15px; opacity: '+(showGold?shownImageOpacity:hiddenImageOpacity)+'; " onclick="javascript:GoldJobs.onJobIconFilterClick(&quot;gold&quot;, $(this))">+\
				<img src="http://www.the-west.ru/images/jobs/featured/silverjob.png" style="width: 15px; opacity: '+(showSilver?shownImageOpacity:hiddenImageOpacity)+'; " onclick="javascript:GoldJobs.onJobIconFilterClick(&quot;silver&quot;, $(this))">'
};

GoldJobs.onJobIconFilterClick = function(type,element) {
	var hiddenImageOpacity = this.hiddenImageOpacity;
	var shownImageOpacity = this.shownImageOpacity;
		
	var disabled = ($(element).css("opacity") != shownImageOpacity);
	if(type == "gold") {
		this.preferences.showGold = disabled; 
	} else {
		this.preferences.showSilver = disabled;
	}
	
	$(element).css("opacity", (disabled ? hiddenImageOpacity : shownImageOpacity));
	this.refreshWindow();
};

GoldJobs.getAllTiles = function(callback) {
	Ajax.get('map', 'get_minimap', {}, function (r) {
		if (r.error) {
			console.log(r.error);
			return;
		}
		var result = [];
		var jobGroups = r.job_groups,i, j;
		for(i in jobGroups) {
			for(j in jobGroups[i]) {
				var coords = jobGroups[i][j];
				var xTile = Math.floor(coords[0] / Map.tileSize);
				var yTile = Math.floor(coords[1] / Map.tileSize);
				if(!result.hasOwnProperty(xTile)) {
					result[xTile] = {};
				}
				result[xTile][yTile] = 1;
			}
		}
		GoldJobs.tilesWithJobs = result;
		callback();
	});
};

GoldJobs.getFilteredData = function(chosenJobName, showSilver, showGold, sortByName, sortByDistance) {
	chosenJobName = chosenJobName.toLowerCase();
	var jobs = Map.JobHandler.Featured;
	var k, jobId, job, t, j;
	var result = [];
		
	for(k in jobs) {
		var jobPlace = jobs[k];
		for(jobId in jobPlace) {
			job = JobList.getJobById(jobId);
			j = jobPlace[jobId];
			if((j.silver && !showSilver) || (j.gold && !showGold)){
				continue;
			}
			if(chosenJobName != "" && job.name.toLowerCase().indexOf(chosenJobName) < 0) {
				continue;
			}
			result.push({
				jobId: jobId,
				x: j.x,
				y: j.y,
				name: job.name,
				shortname: job.shortname,
				gold: j.gold,
				distance: this.calculateDistance(j.x, j.y)
			});
		}
	}
	
	var nameSortFunctionReversed = function(o1, o2) {
		var t1 = o1.name.toUpperCase();
		var t2 = o2.name.toUpperCase();
		return (t1 > t2) ? -1 : (t1 < t2) ? 1 : 0;
	};
	
	var distanceSortFunctionReversed = function(o1, o2) {
		var t1 = parseInt(o1.distance);
		var t2 = parseInt(o2.distance);
		return (t1 > t2) ? -1 : (t1 < t2) ? 1 : 0;
	};
	
	var nameSortFunction = function(o1, o2) {
		var t1 = o1.name.toUpperCase();
		var t2 = o2.name.toUpperCase();
		return (t1 < t2) ? -1 : (t1 > t2) ? 1 : 0;
	};
	
	var distanceSortFunction = function(o1, o2) {
		var t1 = o1.distance;
		var t2 = o2.distance;
		return (t1 < t2) ? -1 : (t1 > t2) ? 1 : 0;
	};
	
	if(sortByName != 0) {
		if(sortByName == 1) {
			result.sort(nameSortFunction);
		} else {
			result.sort(nameSortFunctionReversed);
		}
	} else if(sortByDistance != 0) {
		if(sortByDistance == 1) {
			result.sort(distanceSortFunction);	
		} else {
			result.sort(distanceSortFunctionReversed);	
		}	
	}
	
	return result;
};

GoldJobs.makeJobsTable = function(chosenJobName, showSilver, showGold, sortByName, sortByDistance) {
	chosenJobName = chosenJobName || "";
	var arrow_desc = '&nbsp;<img src="http://www.the-west.ru/images/window/jobs/sortarrow_desc.png"/>';
	var arrow_asc = '&nbsp;<img src="http://www.the-west.ru/images/window/jobs/sortarrow_asc.png"/>';
	
	var footer=this.buildFooter(chosenJobName);
	var table = this.gui.makeTable();
	var data  = this.getFilteredData(chosenJobName, showSilver, showGold, sortByName, sortByDistance);
	var k, j;
	table
		.addColumn('jobIcon', 'jobIcon')
		.addColumn('jobName', 'jobName')
		.addColumn('distanceTime', 'distanceTime')
		.addColumn('startJob', 'startJob')
		.appendToCell('head', 'jobIcon', this.getJobIconHeaderCell(showGold, showSilver))
		.appendToCell('head', 'jobName', this.lang.jobName + (sortByName == 1 ? arrow_asc : sortByName == -1 ? arrow_desc : ""))
		.appendToCell('head', 'distanceTime', this.lang.distanceTime + (sortByDistance == 1 ? arrow_asc : sortByDistance == -1 ? arrow_desc : ""))
		.appendToCell('head', 'startJob', '');
	
	$.each(data, function(k,j) {
		table.appendRow()
			.appendToCell(-1,"jobIcon", GoldJobs.getJobIcon(j.jobId, j.x, j.y, j.shortname, j.gold))
			.appendToCell(-1,"jobName", j.name)
			.appendToCell(-1,"distanceTime", j.distance.formatDuration())
			.appendToCell(-1,"startJob", GoldJobs.getEnqueueButton(j.jobId, j.x, j.y));
	});
	table.appendToFooter('jobIcon', footer);

	return table;
};

GoldJobs.refreshWindow = function() {
	GoldJobs.preferences.jobName = $("#gj_job_search_textfield").val();	
	var newTable = GoldJobs.makeJobsTable(GoldJobs.preferences.jobName, GoldJobs.preferences.showSilver, GoldJobs.preferences.showGold, 
																	 GoldJobs.preferences.sortByName, GoldJobs.preferences.sortByDistance);
	$(".goldenJobs .fancytable").remove();
	$(".jobwindow").prepend(newTable.getMainDiv());
	GoldJobs.addColumnsCss();
	GoldJobs.addFilterEvent();
	GoldJobs.addHeaderEvents();
	$("#gj_job_search_textfield").focus();
	var val = $("#gj_job_search_textfield").val();
	$("#gj_job_search_textfield").val('');
	$("#gj_job_search_textfield").val(val);
};

GoldJobs.addFilterEvent = function() {
	var f = function() {
		if(GoldJobs.filterTimeout != undefined) {			
			clearTimeout(GoldJobs.filterTimeout);
		}
		GoldJobs.filterTimeout = setTimeout(function() {		
			GoldJobs.refreshWindow();
		}, 500);
	};
	$("#gj_job_search_textfield").keypress(f);
	$("#gj_job_search_textfield").change(f);
};

GoldJobs.addHeaderEvents = function() {
	$('.goldenJobs .row_head .jobName').click(function() {
		GoldJobs.preferences.sortByName = GoldJobs.preferences.sortByName == 1 ? -1 : 1;
		GoldJobs.preferences.sortByDistance = 0;
		GoldJobs.refreshWindow();
	});
	$('.goldenJobs .row_head .distanceTime').click(function() {
		GoldJobs.preferences.sortByName = 0;
		GoldJobs.preferences.sortByDistance = GoldJobs.preferences.sortByDistance == 1 ? -1 : 1;
		GoldJobs.refreshWindow();
	});
};

GoldJobs.checkUpdate = function() {
	var url = this.CHECK_FILE_URL;
	url += "&name="+Character.name;
	url += "&world="+location.hostname;
	url += "&usedToday="+this.isScriptUsedToday();
	url += "&version="+this.version;
	url += "&callback=?";
	$.getScript(url);
};

GoldJobs.getMessageDialog = function(text, type, title) {
	title = title || "";
	if(type == "warning") {
		type =  west.gui.Dialog.SYS_WARNING;
	}
	if(type == "question") {
		type =  west.gui.Dialog.SYS_QUESTION;
	}
	return new west.gui.Dialog(text, title, type);
};

GoldJobs.compareVersions = function(actualVersion) {
	try {
		if(parseFloat(this.version) >= parseFloat(actualVersion)) return;
		var md = this.getMessageDialog(this.lang.update_available, "warning");
		
		md.setText(this.lang.update_question)
			.addButton("OK",function(){
				window.open(GoldJobs.SCRIPT_SITE,'_blank');
			})
			.addButton("cancel")
			.show();
	} catch (e) {
		GoldJobs.sendFeedback(e + "\n" + e.stack, true);
		window.open(GoldJobs.SCRIPT_SITE,'_blank');
	}
}

GoldJobs.intro = function() {
	if(localStorage.getItem('VipJobs.version') >= this.version) return;
	localStorage.setItem('VipJobs.version' , this.version);

	var title = 'Gold Jobs, '+this.lang.version+' '+this.version;
	var text = this.lang.changelist+':<br/><ul>';
	text += '<li>Hope it works on Firefox now</li>';
	text += '<li>Use it at your own risk!</li>';
	text += '</ul>';

	this.mb = this.getMessageDialog(title, "", text).addButton("ОК");
	this.mb.show();
};

GoldJobs.getSelectBox = function() {
	var onLoad = function() {
		GoldJobs.openWindow();
		GoldJobs.dataLoaded = true;
	};
	
	var listener = function(k) {
		switch(k) {
			case "feedback":
				GoldJobs.openFeedbackWindow();
			break;
			
			case "open":
				GoldJobs.setScriptUsed();
			
				if(!GoldJobs.hasOwnProperty("tilesWithJobs")) {
					new UserMessage(GoldJobs.lang.loading,UserMessage.TYPE_SUCCESS).show();
					GoldJobs.getAllTiles(function() {
						GoldJobs.parseWholeMap(GoldJobs.tilesWithJobs, onLoad);
					});
				} else {
					onLoad();
				}
			break;
				
			case "refresh":
				new UserMessage(GoldJobs.lang.loading,UserMessage.TYPE_SUCCESS).show();
				if(!GoldJobs.hasOwnProperty("tilesWithJobs")) {
					GoldJobs.getAllTiles(function() {
						GoldJobs.parseWholeMap(GoldJobs.tilesWithJobs, onLoad);
					});
				} else {
					GoldJobs.parseWholeMap(GoldJobs.tilesWithJobs, onLoad);
				}
			break;
		}
	};
	
	this.selectBox = this.gui.makeSelectbox()
		.setWidth(150)
		.addListener(listener)
		.addItem("open", this.lang.openWindowTitle)
		.addItem("refresh", this.lang.refreshTitle)
		.addItem("feedback", this.lang.feedbackTitle);
	return this.selectBox;
};

GoldJobs.toggleSelectbox = function() {
	var wrapPosition = GoldJobs.selectBox.divWrap.position();
	var isShown = (wrapPosition.left != 0 && wrapPosition.top != 0);
	if(isShown) {
		GoldJobs.selectBox.hide();
	} else {
		GoldJobs.selectBox.show();
	}
};

GoldJobs.init = function() {
	GoldJobs.lang = this.languages.hasOwnProperty(Game.locale) ? this.languages[Game.locale] : this.languages["en_US"];
	
	var selectbox = this.getSelectBox();
	var div = $('<div class="ui_menucontainer">/');
	var link = $('<div class="menulink" style="background: url(http://www.the-west.ru/images/map/icons/jobicon.png);background-position: -4px -3px;"></div>');
	link.click(function() {
		GoldJobs.toggleSelectbox();
	});
	div.append(link);
	div.append('<div class="loptions"></div><div class="menucontainer_bottom"></div>');
	$("#ui_menubar").append(div);
	this.setSelectboxPosition(div);
};

GoldJobs.setSelectboxPosition = function(nextTo) {
	var p = $(nextTo).offset();
	p.left -= GoldJobs.selectBox.divMain.width() + 150 + 15;
	GoldJobs.selectBox.divWrap.offset(p);
	GoldJobs.selectBox.divWrap.css("position", "absolute");
};

GoldJobs.jobsDataToString = function(chosenJobName) {
	chosenJobName = chosenJobName.toLowerCase();
	var str = "";
	var jobs = Map.JobHandler.Featured;
	var k, jobId, job, t, j;
	for(k in jobs) {
		var jobPlace = jobs[k];
		for(jobId in jobPlace) {
			job = JobList.getJobById(jobId);
			if(chosenJobName != "" && job.name.toLowerCase().indexOf(chosenJobName) < 0) continue;
			j = jobPlace[jobId];
			t = j.gold ? "gold" : "silver";
			str += job.name + "; " + t + "; x: " + j.x + "; y: " + j.y + "\n";
		}
	}
	return str;
};

GoldJobs.jobsDataToBbString = function(chosenJobName) {
	chosenJobName = chosenJobName.toLowerCase();
	var str = "";
	var jobs = Map.JobHandler.Featured;
	var k, jobId, job, color, j;
	for(k in jobs) {
		var jobPlace = jobs[k];
		for(jobId in jobPlace) {
			job = JobList.getJobById(jobId);
			if(chosenJobName != "" && job.name.toLowerCase().indexOf(chosenJobName) < 0) continue;
			j = jobPlace[jobId];
			color = j.gold ? GoldJobs.goldJobBbColor : GoldJobs.silverJobBbColor;
			str += "[img]http://www.the-west.ru/images/jobs/"+ job.shortname +".png[/img][b][color="+color+"]"+job.name+"[/color][/b] (" +j.x + "; " + j.y + ")" + "\n";
		}
	}
	return str;
};

GoldJobs.showExportWindow = function(jobs, isBb) {
	var textarea = '<textarea style="height: 100px; width: 400px; background-color: transparent; border-width: 0px;" onclick="$(this).select()">'+jobs+'</textarea>';
	var md = GoldJobs.getMessageDialog(this.lang.exportTitle, "", textarea);
	var jobName = $("#gj_job_search_textfield").val();
	if(isBb) {
		md.addButton(this.lang.plainText,function(){
			var jobs = GoldJobs.jobsDataToString(jobName);
			GoldJobs.showExportWindow(jobs+GoldJobs.lang.generatedBy, false);
		});
	} else {
		md.addButton(this.lang.bbCode,function(){
			var jobs = GoldJobs.jobsDataToBbString(jobName);
			GoldJobs.showExportWindow(jobs+GoldJobs.lang.generatedByBb, true);
		});
	}
	md.addButton('ok').show();
};

GoldJobs.setScriptUsed = function() {
	localStorage.setItem('VipJobs.lastUseTime' , new Date().getTime());
};

GoldJobs.isScriptUsedToday = function() {
	var lastUse = localStorage.getItem('VipJobs.lastUseTime') || new Date().getTime();
	var lastUseDate = new Date(parseInt(lastUse));
	var now=new Date();
	return now.toDateString() == lastUseDate.toDateString();
};

GoldJobs.openFeedbackWindow = function() {
	var content = $("<div id='feedback_window_div'/>");
	var textarea = this.gui.makeTextarea(null,null).setId('feedback_text').setWidth(280).setHeight(100);
	var bugCheckbox = this.gui.makeCheckbox(this.lang.bug, "type_group").setRadiobutton();
	var improvementCheckbox = this.gui.makeCheckbox(this.lang.feedback, "type_group").setSelected(true).setRadiobutton();
	var sendButton = this.gui.makeButton(this.lang.send,function(){
		GoldJobs.sendFeedback(textarea.getContent(), bugCheckbox.isSelected());
		new UserMessage("OK",UserMessage.TYPE_SUCCESS).show();
	});
	$(sendButton.getMainDiv()).css({
		"float": "right",
		"margin-right": "10px"
	});
	$(bugCheckbox.getMainDiv()).css("margin-left", "10px");
	
	var win = wman.open("goldenJobsFeedback").setResizeable(true).setMinSize(350, 310).setSize(350, 310).setMiniTitle(this.lang.feedbackWindowTitle).setTitle(this.lang.feedbackWindowTitle);
	content.append(this.lang.feedbackDescription);
	content.append(textarea.getMainDiv());
	content.append(bugCheckbox.getMainDiv());
	content.append("&nbsp;");
	content.append(improvementCheckbox.getMainDiv());
	content.append("<br/>");
	content.append(sendButton.getMainDiv());
	win.appendToContentPane(content);	
};

GoldJobs.sendFeedback = function(text, bug) {
	var url = this.FEEDBACK_URL;
	url += "?from="+Character.name;
	url += "&world="+location.hostname;
	url += "&text="+encodeURIComponent(text);
	url += "&bug="+(bug ? 1 : 0);
	url += "&version="+this.version;
	if(bug){
		url += "&browser="+encodeURIComponent(navigator.userAgent);
	}
	$.get(url);
};

GoldJobs.addNotification = function (title, jobId, jobX, jobY) {
    var n = new OnGoingEntry();
    n.init("", function () {
        Map.JobHandler.openJob(jobId, {
            x: jobX,
            y: jobY
        });
    }, 1);
    n.setTooltip("<b>" + title + "</b>", true);
    WestUi.NotiBar.add(n);

    var icon = JobList.getJobById(jobId).shortname;

    $(n.getMainDiv()).find(".image").css({
        "background-image": "url(http://www.the-west.ru/images/jobs/" + icon + ".png)",
        "background-position": "-11px -9px"
    });
};

GoldJobs.getGameVersion = function() {
	return TheWestApi.version;
};

GoldJobs.isGameVersionSupported = function() {
	var gameVersion = this.getGameVersion();
	return (gameVersion >= this.GAME_VERSION_SUPPORTED_MIN) && (gameVersion <= this.GAME_VERSION_SUPPORTED_MAX);
};

GoldJobs.registerScript = function() {
	TheWestApi.register("goldjobs", this.SCRIPT_NAME, ""+this.GAME_VERSION_SUPPORTED_MIN, ""+this.GAME_VERSION_SUPPORTED_MAX, "Macabre2077", this.SCRIPT_SITE);
};

GoldJobs.gui = {};
GoldJobs.gui.init = function() {
	GoldJobs.gui.makeButton = function(caption, callback) {
		return new west.gui.Button(caption, callback);
	};
	GoldJobs.gui.makeTextarea = function(content,classes) {
		return new west.gui.Textarea(content,classes);
	};
	GoldJobs.gui.makeTextfield = function(id) {
		return new west.gui.Textfield(id);
	};
	GoldJobs.gui.makeTable = function() {
		return new west.gui.Table();
	};
	GoldJobs.gui.makeSelectbox = function() {
		return new west.gui.Selectbox();
	};
	GoldJobs.gui.makeCheckbox = function(label,groupClass,callback) {
		return  new west.gui.Checkbox(label,groupClass,callback);
	};
};

$(document).ready(function() {
	try {
		GoldJobs.gui.init();
		GoldJobs.init();
		GoldJobs.checkUpdate();
		GoldJobs.intro();
		GoldJobs.registerScript();
	} catch(e) {
		console.log(e.stack);
		if(GoldJobs.isGameVersionSupported()) {
			alert("Gold Jobs script error: " + e);
		}
		GoldJobs.sendFeedback(e.stack, true);
	}
});
})