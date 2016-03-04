<!DOCTYPE html>
<html lang="ru">
<head>
	<meta content="text/html" charset="utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
	<title>YEUX - Store of interiors</title>
	<link href="font/font-awesome.css" rel="stylesheet" media="screen">
	<link href="style.css" rel="stylesheet" media="screen">
	<link rel="stylesheet" media="screen" href="particles-js.css">
	<script src="js/jquery-2.1.4.min.js"></script>
	<!--script src="content.js"></script-->
	<script src="get.js"></script>
	<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>
	<script type="text/javascript">
		google.maps.event.addDomListener(window, 'load', initGmap);

		function initGmap() {
			// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
			var mapOptions = {
				// How zoomed in you want the map to start at (always required)
				zoom: 14,
				disableDefaultUI: true,
				zoomControl: true,
				scrollwheel: false,
				draggable: false,
				disableDoubleClickZoom: false,
				// The latitude and longitude to center the map (always required)
				center: new google.maps.LatLng(50.4205814, 30.530504), // Kyiv
				styles: [{"stylers":[{"hue":"#ff1a00"},{"invert_lightness":true},{"saturation":-100},{"lightness":33},{"gamma":0.5}]}]
			};
			var mapElement = document.getElementById('map');
			// Create the Google Map using our element and options defined above
			var map = new google.maps.Map(mapElement, mapOptions);
			// Let's also add a marker while we're at it
			var marker = new google.maps.Marker({
				// origin: new google.maps.Point(0, 0),
				position: new google.maps.LatLng(50.4205814, 30.530504),
				map: map,
				icon: 'img/spot.png',
				title: 'YEUX'
			});
		}
	</script>
</head>
<body>
<script>
	var preLoaderMain = document.createElement('div');
	preLoaderMain.className = 'pre-loader-main';
	document.body.appendChild(preLoaderMain);
</script>
<button type="button" class="btn-navbar" data-toggle="collapse" data-target=".nav-wrapper-main" id="navbar-main">
	<span class="icon-bar"></span>
	<span class="icon-bar"></span>
	<span class="icon-bar"></span>
</button>
<div id="nav-wrapper-main">
	<nav>
		<ul class="main">
			<li>
				<a href="#home" data-page="0">Главная</a>
			</li>
			<li>
				<a href="#partners" data-page="4">Партнеры</a>
			</li>
			<li>
				<a href="#process" data-page="5">Процесс</a>
			</li>
			<li>
				<a href="#portfolio" data-page="6">Портфолио</a>
			</li>
			<li>
				<a href="#mail" data-page="7">Сообщение</a>
			</li>
			<li>
				<a href="#contact" data-page="8">Контакты</a>
			</li>
		</ul>
	</nav>
</div>
<section id="main" class="full white">
	<div class="vertical-middle">
		<div class="logo-main-holder">
			<img src="img/logo-main.png" alt="" id="logo-main">
			<!--div id="particles-js" class="particles-js"></div-->
		</div>
		<div class="right">
			<h2>Технологии встречаются с креативом</h2>
			<p>Store of interiors YEUX – место встречи успешных людей.<br /><br />Мы - компания молодых профессионалов, работающая на международном рынке. В наших руках сложные вещи приобретают удобную форму. Если вы не мыслите свою жизнь без правильных акцентов и современных идей, наш проект – это то, что вам нужно.</p>
		</div>
	</div>
	<a href="#" class="scroll-bottom animatescroll-link" onclick="buttonNext();"><i class="fa fa-caret-down"></i></a>

</section>
<section id="intro-1" class="full black">
	<div class="vertical-middle">
		<h2>Мы пространство, где инженеры работают под одной крышей с дизайнерами и мыслителями</h2>
	</div>
</section>
<section id="intro-2" class="full white">
	<div class="vertical-middle">
		<h2>Реализовывая и воплощая в жизнь немыслимые проекты</h2>
	</div>
</section>
<section id="intro-gallery" class="full black">
	<div class="image-holder">
		<img src="img/intro-gallery-1.jpg" alt="">
	</div>
	<div class="image-holder">
		<img src="img/intro-gallery-2.jpg" alt="">
	</div>
	<div class="image-holder">
		<img src="img/intro-gallery-3.jpg" alt="">
	</div>
</section>
<section id="partners" class="full">
	<div class="vertical-middle">
		<div class="content">
			<h2>Наши партнеры</h2>
			<div class="content-holder">
				<p><!-- Наведите курсор на один из логотипов для вывода информации о наших партнерах --></p>
			</div>
			<div class="partners-holder clearfix">
			</div>
		</div>
	</div>
</section>
<section id="progress" class="full">
	<div class="vertical-middle clearfix">
		<div class="content-slider clearfix">
			<div id="images-holder">
				<div class="controls"></div>
				<div class="slides-content clearfix">
				</div>
			</div>
			<div class="slider-info">
				<h3 class="slide-name"></h3>
				<p class="slide-desc"></p>
			</div>
		</div>
		<div class="right">
			<h2>Процессы и этапы нашей работы</h2>
			<p>Динамическое уравнение Эйлера, согласно уравнениям Лагранжа, влияет на составляющие гироскопического момента больше, чем центр сил, что не влияет при малых значениях коэффициента податливости. Отклонение горизонтально определяет колебательный гироинтегратор, исходя из общих теорем механики. Как уже указывалось, степень свободы различна. Векторная форма, в соответствии с основным законом</p>
		</div>
	</div>
</section>
<section id="portfolio" class="full">
	<div class="row-center">
		<div class="content-holder">
			<h2>Портфолио</h2>
			<p>Мы делам лучшие проекты, которымим гордимся. Каждая завершенная работа, непременно попадает в наше портфолио.Надемся что ваш заказ, так же попадет к нам в портфель! Так чего же вы ждете?</p>
			<button class="button-main btn-anim">начать проект
			</button>
		</div>
	</div>
	<div class="row-bottom">
		<div class="content-slider">
			<div class="controls clearfix"></div>
			<div class="portfolios-holder clearfix">
				<noscript></noscript>
			</div>
		</div>
	</div>
</section>
<section id="contact" class="full">
	<div class="vertical-middle">
		<div class="content">
			<form action="">
				<h2>Напишите нам для начала работы</h2>
				<input type="text" id="name" placeholder="Ваше имя" name="name">
				<input type="text" id="mail" placeholder="Ваш э-меил" name="email">
				<textarea id="message" placeholder="Ваше сообщение" name="message"></textarea>
				<div class="bottom-content clearfix">
					<button class="but button-send" onclick="">отправить</button>
					<span class="info">Контактный номер телефона<br>+ 3 044 435 35 35</span>
				</div>
			</form>
		</div>
	</div>
</section>
<section id="pre-footer">
	<div class="image-holder">
		<img src="img/pre-footer-background.jpg" alt="" class="background">
		<img src="img/pre-footer-logo.png" alt="" class="logo">
	</div>
	<h2>наши контакты</h2>
	<div id="map"></div>
	<!--div class="map-holder">
			<img src="img/map.jpg" alt="" class="map">
			<div class="content-holder">
				<img src="img/spot.png" alt="" id="spot">
				<table>
					<tr>
						<td>Искать:</td>
						<td class="text-right">Киев. ул. Патриса лумубы 32/32</td>
					</tr>
					<tr>
						<td>Звонить:</td>
						<td class="text-right">+ 3 044 325 55 55</td>
					</tr>
					<tr>
						<td></td>
						<td class="text-right">+ 3 063 222 22 22</td>
					</tr>
					<tr>
						<td>Писать:</td>
						<td class="text-right">Info@Yeux.com</td>
					</tr>
				</table>
			</div>
		</div-->
	<div id="footer">
		<div class="content-holder">
			<a href="#"><img src="img/social-vk.png" alt=""></a>
			<a href="#"><img src="img/social-fb.png" alt=""></a>
			<a href="#"><img src="img/social-tw.png" alt=""></a>
		</div>
	</div>
</section>
<div id="cache" class="hidden">
	<div>
		<!--video id="bgVideo" preload='load' autoplay='true' autoplay loop='loop'>
			<source src="video/intro.mp4" type="video/mp4">
		</video-->
		<!--div id="bgVideo">
			<div id="particles-js"></div>
		</div-->
		<video id="bgSlide-1" preload='load' autoplay='true' autoplay loop='loop'>
			<source src="video/intro.mp4" type="video/mp4">
		</video>
	</div>
	<img src="img/input-background-focus.png" alt="">
	<img src="img/icons/progress.png" alt="">
	<!--[if IE]> <style>section#main video {height: 100%;width: 100%;top:0;display:none;}</style> <![endif]-->
</div>
<script src="script.js"></script>
</body>
</html>