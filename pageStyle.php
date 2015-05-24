<?php
function createHead($metaDeco = "Blaavogn"){
	//Forgive me lord for I have sinned
?>
<!DOCTYPE HTML>
<html xmlns='http://www.w3.org/1999/xhtml' xmlns:og='http://ogp.me/ns#' />
	<head> 
		<title><?php if($metaDeco != "Blaavogn"){echo $metaDeco." - "; }?>blaavogn</title>
		<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />

		<meta name='description' content='A website for my games' />
		<meta property='og:title' content='blaavogn.dk' />
		<meta property='og:type' content='website'/>
		<?php echo "<meta property='og:image' content='http://blaavogn.dk/img/".$metaDeco."_thumb.png' />"; ?>
		<meta property='og:url' content='http://www.blaavogn.dk' />
		<meta property='og:description' content='A website for my games' />

		<link rel='stylesheet' type='text/css' href='style.css' />
		<link rel='shortcut icon' href='img/site.ico' />
	</head>
	<body>
		<div id='content'>
			<div id='heading'>
				Blaavogn
			</div>
			<div id='menu'>
				<a href='index.php'>Games</a>
				<a href='scrapbook.php'>Scrapbook</a>
				<a href='about.php'>About</a>
			</div>

<?php
	
}
?>
