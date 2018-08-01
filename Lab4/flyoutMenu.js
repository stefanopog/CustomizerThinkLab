(function() {
  'use strict';

  var $fontAwesomeCSS = $('<link>', {type: 'text/css', rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'});
  var $semanticSideBarCSS = $('<link>', {type: 'text/css', rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/components/sidebar.min.css'});
  $('head').append($fontAwesomeCSS);
  $('head').append($semanticSideBarCSS);

  var mainStyle =
	  `
body {
	margin-top: 0 !important;
}
.menuButtonOverlay {
	position: fixed;
	top: 80px;
	left: 0;
	width: 40px;
	height: 40px;
	display: flex;
	background-color: #112964;
	z-index: 10;
	color: #fff;
	justify-content: center;
	align-items: center;
}
.menuButtonOverlay:hover {
	cursor: pointer;
}
.ui.sidebar {
	z-index: 3 !important;
	background-color: #112964;
	color: #fff;
}
.item {
	display: inline-flex;
	width: 100%;
	height: 40px;
	align-items: center;
	justify-content: center;
	transition: .2s all ease-in;
	color: #fff !important;
}
.item:hover {
	background-color: #dedede;
	cursor: pointer;
	transition: .2s all ease-out;
	color: #325c80 !important;
	text-decoration: none !important;
}
`;
  var $style = $('<style></style>', {type: 'text/css'});
  $style.html(mainStyle);
  $('body.lotusui').append($style);

  var innerMenu = `
<center ><i style="font-family: FontAwesome !important;" class="fa fa-volume-up fa-3x" aria-hidden="true"></i></center>
<a class="item" href="#">
team:news
</a>
<br />
<br />

<center ><i style="font-family: FontAwesome !important;" class="fa fa-info fa-3x" aria-hidden="true"></i></center>
<a class="item" href="#">
Meine RWE
</a>
<br />
<br />

<center ><i style="font-family: FontAwesome !important;" class="fa fa-th fa-3x" aria-hidden="true"></i></center>
<a class="item" href="#">
<strong>RWE</strong>apps
</a>
<br />
<br />

<center><i style="font-family: FontAwesome !important;" class="fa fa-link fa-3x" aria-hidden="true"></i></center>
<a id="toto"  class="item" href="#">
<strong>RWE</strong>connect
</a>
<br />
<br />

<hr />

<center ><i style="font-family: FontAwesome !important;" class="fa fa-folder-o fa-3x" aria-hidden="true"></i></center>
<a class="item" href="#">
Speiseplan
</a>
<br />
<br />

<center ><i style="font-family: FontAwesome !important;" class="fa fa-users fa-3x" aria-hidden="true"></i></center>
<a class="item" href="#">
HR Portal
</a>
<br />
<br />

<center ><i style="font-family: FontAwesome !important;" class="fa fa-phone fa-3x" aria-hidden="true"></i></center>
<a class="item" href="#">
Adressbuch
</a>
<br />
<br />
`;

  var $activeMenu = $('<div>', {class: 'menuButtonOverlay'});
  $activeMenu.html('<i style="font-family: FontAwesome !important;"  class="fa fa-bars" aria-hidden="true"></i>');
  var $menu = $('<div>', {class: 'ui sidebar thin left inverted vertical menu push'});
  $menu.html(innerMenu);

  $('body.lotusui').append($activeMenu);
  $('body.lotusui').append($menu);

  $activeMenu.click(function() {
    $('.ui.sidebar').sidebar({dimPage: false});
    $('.ui.sidebar').sidebar('toggle');
    console.log('____________');
    console.log($(this).text());
  });
  console.log('°°°°°°°°°°°°°°°°°°°°°°°°°');
  console.log($activeMenu);
})();
