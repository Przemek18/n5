$('body').append($("<input/>",{class:"standard",type:"submit",value:"Ustawienia standardowe"}));
$('body').append($("<div></div>",{class:"heder1"}));
$('.heder1').html("<h1>Wybierz komendę do redagowania</h1>");
$('body').append($("<div></div>",{class:"bottom1"}));
$('.bottom1').append($("<input/>",{class:"bottomm",type:"submit",value:'Styl "Noc"',id:"noc"}));
$('.bottom1').append($("<input/>",{class:"bottomm",type:"submit",value:'Styl "Morze"',id:"morze"}));
$('.bottom1').append($("<input/>",{class:"bottomm",type:"submit",value:'Styl "Militarny"',id:"militar"}));
$('.bottom1').append($("<input/>",{class:"bottomm",type:"submit",value:'Styl "Bezowy"',id:"bez"}));
$('body').append($("<div></div>",{class:"heder2"}));
$('.heder2').html("<h1>Rezultat wykonania</h1>");
$('body').append($("<div></div>",{class:"result"}));
$('.result').html("- tło:<br><br>- tekst:<br><br>- tło tekstu:<br><br>- wybrany styl:");

$('.standard').click(function(){standard();});
$('#noc').click(function(){noc();});
$('#morze').click(function(){morze();});
$('#militar').click(function(){militar();});
$('#bez').click(function(){bez();});

function events()
{
	$('.standard').css({'pointer-events':'auto','background':'grey'});
	$('.bottomm').css({'pointer-events':'auto','background':'grey'});
}

function standard()
{
	events();
	$('body').css({'background':'white','color':'black'});
	$('h1').css({'background':'white'});
	alert('przywrócono ustawienia standardowe !');
	$('.result').html("- tło:<br><br>- tekst:<br><br>- tło tekstu:<br><br>- wybrany styl:");
	$('.standard').css({'background':'green'});
	$('.standard').css({'pointer-events':'none'});
}

function noc()
{
	events();
	$('body').css({'background':'black','color':'white'});
	$('h1').css({'background':'black'});
	alert('zmieniono styl !');
	$('.result').html("- tło: czarny<br><br>- tekst: biały<br><br>- tło tekstu: brak<br><br>- wybrany styl: \"Noc\"");
	$('#noc').css({'background':'green','pointer-events':'none'});
}

function morze()
{
	events();
	$('body').css({'background':'lightblue','color':'blue'});
	$('h1').css({'background':'aqua'})
	alert('zmieniono styl !');
	$('.result').html("<span>- tło: jasnoniebieski</span><br><br><span>- tekst: niebieski</span><br><br><span>- tło tekstu: morski</span><br><br><span>- wybrany styl: \"Morze\"</span>");
	$('#morze').css({'background':'green','pointer-events':'none'});
}

function militar()
{
	events();
	$('body').css({'background':'#666633','color':'darkred'});
	$('h1').css({'background':'olive'});
	alert('zmieniono styl !');
	$('.result').html("<span>- tło: błotny</span><br><br><span>- tekst: bordowy</span><br><br><span>- tło tekstu: oliwkowy<span><br><br><span>- wybrany styl: \"Militarny\"</span>");
	$('span').css({'background':'olive'});
	$('#militar').css({'background':'green','pointer-events':'none'});
}

function bez()
{
	events();
	$('body').css({'background':'#FF66CC','color':'#66FF66'});
	$('h1').css({'background':'#9966CC'});
	alert('zmieniono styl !');
	$('.result').html("<span>-tło: różowy</span><br><br><span>- tekst: zielony</span><br><br><span>- tło tekstu: fioletowy</span><br><br><span>- wybrany styl: \"Bezowy\"</span>");
	$('span').css({'background':'#9966CC'});
	$('#bez').css({'background':'green','pointer-events':'none'});
}