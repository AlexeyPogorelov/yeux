	/* GLOBAL */
var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0) || (navigator.maxTouchPoints));
if (isTouchDevice || isTouch) {
	$('body').css('overflow', 'auto');
};

var pagesState = {};
	pagesState.lastScrollTime = new Date().getTime() - 1000;
var windowWidth = $(window).width();
var windowHeight = $(window).height();
var cacheDom = {};
$(window).load(function(){
	scrollPages.init();
	/* pre-loader */
	menuChange();
	scrollPages.resize(true);
	// scrollPages.toPage(scrollPages.getIdFromHash(), true);
	introAnimation.init();
	// $('.pre-loader-main').animate({opacity: 0}, 800, function () {
	// 	$(this).detach();
	// });

	/* PARALLAX */
	$(window).on('scroll', function () {
		var scrollTop = $(window).scrollTop();
		var scrollVisible = scrollTop + windowHeight;
		/* PARALLAX gallerey */
		if (scrollVisible >= pagesState.parralax1.a.top && scrollTop <= pagesState.parralax1.c.top + pagesState.parralax1.c.holderHeight) {
			cacheDom.$introImagesMassive.eq(0).css("transform", 'translateY(' + (pagesState.parralax1.a.top - scrollVisible) / pagesState.parralax1.a.mult + 'px)');
			cacheDom.$introImagesMassive.eq(1).css("transform", 'translateY(' + (pagesState.parralax1.b.top - scrollVisible) / pagesState.parralax1.b.mult + 'px)');
			cacheDom.$introImagesMassive.eq(2).css("transform", 'translateY(' + (pagesState.parralax1.c.top - scrollVisible) / pagesState.parralax1.c.mult + 'px)');
		}
		/* PARALLAX pre-footer */
		if (scrollVisible >= pagesState.parralax2.top && scrollTop <= pagesState.parralax2.top + pagesState.parralax2.holderHeight) {
			cacheDom.$preFooterImg.css("transform", 'translateY(' + (pagesState.parralax2.top - scrollVisible) / pagesState.parralax2.mult + 'px)');
		}
	});


	/* SEND MAIL */

	$('section#contact form').on('submit', function(e) {
		e.preventDefault();

		var data = $(this).serialize();
		$.post('/form/send', data, function () {
			$('<div>')
				.addClass('reload')
				.appendTo('body')
				.html('<h2>Ваше сообщение отправлено успешно</h2>')
				.css({
					'textAlign': 'center'
				})
				.animate({
					'opacity': 1
				}, 500, function () {
					$('section#contact form input').val('');
					setTimeout(function(){
						document.location.reload();
					}, 1500)
				});
		});
	})
});


	/* CACHE DOM */

	cacheDom.$sections = $('section');
	cacheDom.$introImagesMassive = $('#intro-gallery > .image-holder img');
	cacheDom.$preFooterImg = $('#pre-footer img.background');
	cacheDom.$navButton = $('button#navbar-main');
	cacheDom.$menuItems = $('#nav-wrapper-main ul > li');

	/* IF RESIZE */

	$(window).resize(function () {
		windowWidth = $(window).width();
		windowHeight = $(window).height();
		lexSlider.resize();
		lexPortfolio.resize();
		if (portfolioLightbox.lightbox) {
			portfolioLightbox.resize();
		}
		scrollPages.resize(pagesState.currentPage, true);
		// introAnimation.resize();
	});

	/* HISTORY */
	function menuChange (e) {
		if (e) {e.preventDefault()};
		pagesState.currentPage = parseInt(pagesState.currentPage);
		switch (pagesState.currentPage) {
			case 0:
				cacheDom.$menuItems
					.eq(0)
					.addClass('active')
					.siblings()
					.removeClass('active');
				break;
			case 1:
				cacheDom.$menuItems
					.eq(0)
					.addClass('active')
					.siblings()
					.removeClass('active');
				break;
			case 2:
				cacheDom.$menuItems
					.eq(0)
					.addClass('active')
					.siblings()
					.removeClass('active');
				break;
			case 3:
				cacheDom.$menuItems
					.eq(0)
					.addClass('active')
					.siblings()
					.removeClass('active');
				break;
			case 4:
				cacheDom.$menuItems
					.eq(1)
					.addClass('active')
					.siblings()
					.removeClass('active');
				break;
			case 5:
				cacheDom.$menuItems
					.eq(2)
					.addClass('active')
					.siblings()
					.removeClass('active');
				break;
			case 6:
				cacheDom.$menuItems
					.eq(3)
					.addClass('active')
					.siblings()
					.removeClass('active');
				break;
			case 7:
				cacheDom.$menuItems
					.eq(4)
					.addClass('active')
					.siblings()
					.removeClass('active');
				break;
			case 8:
				cacheDom.$menuItems
					.eq(5)
					.addClass('active')
					.siblings()
					.removeClass('active');
				break;
			default:
				cacheDom.$menuItems
					.removeClass('active');
				break;
		}
		return false;
	}
	$(window).on('popstate', menuChange);
	$(window).on('hashchange', function() {
		if (pagesState.pages[pagesState.currentPage].black) {
			cacheDom.$navButton.addClass('white');
		} else {
			cacheDom.$navButton.removeClass('white');
		};
	});

	/* SCROLL FUNCTIONS */
	$('#portfolio button.button-main').on('click', function() {
		scrollPages.toPage(7);
		pagesState.currentPage = 7;
		menuChange();
	})
	// $(document).on("scrollstart", function(e){
	// 	e.preventDefault();
	// 	e.stopPropagation();
	// 	console.log(e)
	// });
	//$(window).on('mousewheel DOMMouseScroll', function (e) {
	//	e.preventDefault();
	//	e.stopPropagation();
	//	// console.log(e)
	//	if (!pagesState.animatedBool && !portfolioLightbox.lightbox && !pagesState.tint && !pagesState.intro) {
	//		if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
	//			scrollPages.prevPage();
	//		} else {
	//			scrollPages.nextPage();
	//		}
	//	}
	//});

	$(window).on('mousewheel wheel', function (e) {
		e.preventDefault();
		e.stopPropagation();
		var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;
		// console.log(e)
		// console.log(delta)
		// console.log(e.originalEvent.wheelDelta)
		// console.info(e.originalEvent.wheelDeltaY)
		// console.log(pagesState.lastScrollTime - 50 < new Date().getTime())
		// console.log(pagesState.animatedBool)
		// console.log(" --- ")
		if ( !pagesState.animatedBool && !portfolioLightbox.lightbox && !pagesState.tint && !pagesState.intro && pagesState.lastScrollTime - 50 < new Date().getTime() ) {
			if (delta > 40) {
				scrollPages.prevPage();
			} else if (delta < -40) {
				scrollPages.nextPage();
			}
		}
		pagesState.lastScrollTime = new Date().getTime();
	});

	$(window).on('DOMMouseScroll', function (e) {
		e.preventDefault();
		e.stopPropagation();
		var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail || -e.originalEvent.deltaY;
		// console.log(e)
		// console.log(delta)
		// console.log(e.originalEvent.wheelDelta)
		// console.info(e.originalEvent.wheelDeltaY)
		if (!pagesState.animatedBool && !portfolioLightbox.lightbox && !pagesState.tint && !pagesState.intro && pagesState.lastScrollTime - 50 < new Date().getTime()) {
			if (delta > 0) {
				scrollPages.prevPage();
			} else if (delta < -0) {
				scrollPages.nextPage();
			}
		}
		pagesState.lastScrollTime = new Date().getTime();
	});

	$(document).on('keydown', onKeyDown);
	function onKeyDown (e) {
		switch (e.which) {
			case 38:
				e.preventDefault();
				if (!pagesState.lightbox && !pagesState.animatedBool && !pagesState.intro) {
					scrollPages.prevPage();
				}
				break;
			case 40:
				e.preventDefault();
				if (!pagesState.lightbox && !pagesState.animatedBool && !pagesState.intro) {
					scrollPages.nextPage();
				}
				break;
			case 37:
				if (pagesState.pages[pagesState.currentPage].id != "contact") {
					e.preventDefault();
				}
				if (pagesState.pages[pagesState.currentPage].id == "progress") {
					lexSlider.prevSlide();
				} else if (pagesState.pages[pagesState.currentPage].id == "portfolio") {
					if (pagesState.lightbox) {
						portfolioLightbox.prevSlide();
					} else {
						lexPortfolio.prevSlide();
					}
				}
				break;
			case 39:
				if (pagesState.pages[pagesState.currentPage].id != "contact") {
					e.preventDefault();
				}
				if (pagesState.pages[pagesState.currentPage].id == "progress") {
					lexSlider.nextSlide();
				} else if (pagesState.pages[pagesState.currentPage].id == "portfolio") {
					if (pagesState.lightbox) {
						portfolioLightbox.nextSlide();
					} else {
						lexPortfolio.nextSlide();
					}
				}
				break;
			case 27:
				e.preventDefault();
				if (pagesState.lightbox) {
					portfolioLightbox.close();
				}
				break;
			case 33:
				e.preventDefault();
				if (!pagesState.lightbox && !pagesState.animatedBool && !pagesState.intro) {
					scrollPages.prevPage();
				}
				break;
			case 34:
				e.preventDefault();
				if (!pagesState.lightbox && !pagesState.animatedBool && !pagesState.intro) {
					scrollPages.nextPage();
				}
				break;
			case 36:
				e.preventDefault();
				if (!pagesState.lightbox && !pagesState.animatedBool && !pagesState.intro) {
					pagesState.currentPage = 0;
					scrollPages.toPage(0);
				}
				break;
			case 35:
				e.preventDefault();
				if (!pagesState.lightbox && !pagesState.animatedBool && !pagesState.intro) {
					pagesState.currentPage = pagesState.pagesCount - 1;
					scrollPages.toPage(pagesState.currentPage);
				}
				break;
		}
	}
	$('textarea').focusin(function() {
		$(document).off();
	});
	$('textarea').focusout(function() {
		$(document).on('keydown', onKeyDown);
	});

	/* MENU */
	pagesState.menuItems = [];
	var navigationMain = (function() {
		var plg = {
			openMenu: function() {
				$('.logo-main-holder').css({'zIndex': 2});
				$('.tint-page').detach();
				$('<div class="tint-page"></div>').appendTo('body');
				$('.tint-page')
					.stop(true, true)
					.animate({
						opacity: '1'
					}).on('click', function() {
						navigationMain.closeMenu();
					});
				$('#nav-wrapper-main')
					.stop(false, false)
					.animate({right: 0});
				pagesState.tint = true;
			},
			closeMenu: function() {
				$('.tint-page')
					.stop(true, true)
					.animate({
						opacity: '0'
					}, function () {
						$(this).detach();
					});
				$('#nav-wrapper-main')
					.stop(false, false)
					.animate({right: -370});
				$('#navbar-main').removeClass('active');
			pagesState.tint = false;
			}
		};
		return plg;
	})();

	$('#navbar-main').on('click', function () {
		if ($(this).hasClass('active')) {
			navigationMain.closeMenu($(this));
		} else {
			navigationMain.openMenu();
			$(this).addClass('active');
		}
	});

	cacheDom.$menuItems.each(function(index) {
		pagesState.menuItems.push($(this)
			.on('click', function () {
				pagesState.currentPage = $(this).find('a').attr('data-page');
				menuChange();
				scrollPages.toPage(pagesState.currentPage);
				navigationMain.closeMenu();
			}));
		$(this).find('a').on('click', function(e) {
			e.preventDefault();
		})
	});


	/* PARTNERS */

	var partnersHover = function (partners) {
		// settings
		var speed = 400;
		// cache Dom
		var $container = $('#partners');
		var $info = $container.find('p').html('<h4>' + lang.moveMouseToPartner[1] + '</h4>');
		var $partnersHolder = $container.find('.partners-holder');
		// build partners
		for (var i = 0; i < partners.length; i++) {
			var partner = $('<div>')
				.addClass('image-holder')
				.data('id', i);
			var bgSrc = host.partners;
			if (partners[i].background) {
				bgSrc += partners[i].background;
			} else {
				bgSrc += defImage;
			};
			$('<img>')
				.addClass('pic')
				.attr('src', bgSrc)
				.appendTo(partner);
			var logoHolder = $('<div>')
				.addClass('logo-holder')
				.appendTo(partner);
			var logoSrc = host.partners;
			if (partners[i].logo) {
				logoSrc += partners[i].logo;
			} else {
				logoSrc += defImage;
			};

			$('<img>')
				.addClass('logo')
				.attr('src', logoSrc)
				.appendTo(logoHolder);
			partner.mouseenter(function () {
				$info.stop(false, false).animate({'opacity': 0}, function () {
					$info.html(partners[$(this).data('id')].desc);
					$info.animate({'opacity': 1});
				}.bind(this));
			});
			partner.mouseleave(function () {
				$info.stop(false, false).animate({'opacity': 0}, function () {
					$info.html('<h4>' + lang.moveMouseToPartner[1] + '</h4>');
					$info.animate({'opacity': 1});
				}.bind(this));
			});
			partner.appendTo($partnersHolder);
		}
		return;
	};

/* SLIDER on page */

var lexSlider = {
	'container': '#images-holder',
	'slidesHolder': '.slides-content',
	'image': '.image-holder',
	'header': '#progress .slide-name',
	'desc': '#progress .slide-desc',
	'controls': '.controls',
	'cls': ['slider-control-diactive', 'slider-control-active'],
	init: function (progress) {
		this.cont = progress;
		this.defineSlides();
		this.chacheDom();
		this.buildImages();
		this.resize();
		this.createButtons();
		this.toSlide(0);
	},
	chacheDom: function () {
		this.$container = $(this.container);
		this.$slidesHolder = this.$container.find(this.slidesHolder);
		this.$image;
		this.$header = $(this.header);
		this.$desc = $(this.desc);
		this.$controls = this.$container.find(this.controls);
	},
	defineSlides: function () {
		this.slidesCount = this.cont.length;
		this.currentSlide = 0;
	},
	buildImages: function () {
		for (var i = 0; i < this.slidesCount; i++) {
			var holder = $('<div>')
				.addClass(this.image.substr(1));
			var imgSrc = host.albums;
			if (this.cont[i].image) {
				imgSrc += this.cont[i].image;
			} else {
				imgSrc += defImage;
			};
			var img = $('<img>')
				.attr('src', imgSrc)
				.appendTo(holder);
			holder.appendTo(this.$slidesHolder);
		}
		this.$image = this.$container.find(this.image);
	},
	prevSlide: function () {
		if (this.currentSlide) {
			lexSlider.toSlide(--this.currentSlide);
		} else{
			this.currentSlide = this.slidesCount - 1;
			lexSlider.toSlide(this.currentSlide);
		}
	},
	nextSlide: function () {
		if (++this.currentSlide >= this.slidesCount) {
			lexSlider.toSlide(0);
			this.currentSlide = 0;
		} else{
			lexSlider.toSlide(this.currentSlide);
		}
	},
	toSlide: function (id, resize) {
		this.$slidesHolder.stop(true, true).animate({
			left: this.containerWidth * -id
		});
		if (!resize) {
			this.$controls
				.find('div')
				.attr('class', lexSlider.cls[0])
				.eq(id)
				.attr('class', lexSlider.cls[1]);
			this.$header
				.stop(true, true)
				.animate({
					'opacity': 0
				}, 'fast', function () {
					lexSlider.$header.html(lexSlider.cont[id].title);
				})
				.animate({
					'opacity': 1
				}, 'fast');
			this.$desc
				.stop(true, true)
				.animate({
					'opacity': 0
				}, 'fast', function () {
					lexSlider.$desc.html(lexSlider.cont[id].description);
				})
				.animate({
					'opacity': 1
				}, 'fast');
		}
		this.currentSlide = id;
	},
	createButtons: function () {
		for (var i = 0; i < this.slidesCount; i++) {
			var but = $('<div>');
			if (i) {
				but.addClass(this.cls[0]);
			} else {
				but.addClass(this.cls[1]);
			}
			but.attr('slide-id', i);
			but.on('click', lexSlider.buttonClick);
			but.appendTo(this.$controls);
		}
		var controlsHeight = this.slidesCount * 16;
		this.$controls.css({
			'marginTop': -controlsHeight / 2
		});
	},
	buttonClick: function () {
		if ($(this).attr('slide-id') != lexSlider.currentSlide) {
			lexSlider.toSlide($(this).attr('slide-id'));
		}
	},
	resize: function () {
		if (this.$container) {
			this.containerWidth = this.$container.width();
		};
		this.$slidesHolder.width(this.containerWidth * this.slidesCount);
		this.$image.width(this.containerWidth);
		this.toSlide(this.currentSlide, true);
	}
};

	/* PORTFOLIOS HOLDER */
var lexPortfolio = {
	'container': '#portfolio .content-slider',
	'slidesHolder': '.portfolios-holder',
	'portfolio': '.portfolio-item',
	'image': '.image-holder',
	'header': '.name',
	'desc': '.desc',
	'controls': '.controls',
	'cls': ['slider-control-diactive', 'slider-control-active'],
	'maxSlides': 10,
	init: function (portfolios) {
		this.defineSlides(portfolios);
		this.chacheDom();
		this.buildPortfolios();
		this.resize();
		this.createButtons();
	},
	chacheDom: function () {
		this.$container = $(lexPortfolio.container);
		this.$slidesHolder = this.$container.find(this.slidesHolder);
		this.$image;
		this.$header = $(this.header);
		this.$desc = $(this.desc);
		this.$controls = this.$container.find(this.controls);
	},
	defineSlides: function (portfolios) {
		this.currentSlide = 0;
		this.cont = portfolios;
		this.slidesCount = this.cont.length;
		if (this.slidesCount % 2) {
			this.holderCount = this.slidesCount + 1;
		} else {
			this.holderCount = this.slidesCount;
		}
		if (this.holderCount > this.maxSlides) {
			this.paginator = true;
		}
	},
	buildPortfolios: function () {
		function buildPortfolio (i) {
			var portfolioItem = $('<div>')
				.addClass(lexPortfolio.portfolio.substr(1));
			var holder = $('<div>')
				.addClass(lexPortfolio.image.substr(1));
			var coverImg = host.portfolioThumbs;
			if (lexPortfolio.cont[i].cover) {
				coverImg += lexPortfolio.cont[i].cover.image;
			} else{
				coverImg += defImage;
			};
			var img = $('<img>')
				.attr('src', coverImg)
				.appendTo(holder);
			var name = $('<div>')
				.addClass('name')
				.html(lexPortfolio.cont[i].title);
			var desc = $('<div>')
				.addClass('desc')
				.html(lexPortfolio.cont[i].snip);
			holder.appendTo(portfolioItem);
			name.appendTo(portfolioItem);
			desc.appendTo(portfolioItem);
			//temp
			if (i == Math.ceil(lexPortfolio.slidesCount / 2)) {
				portfolioItem.css('clear', 'both');
			}
			if (i % 2) {
				// portfolioItem.css('clear', 'left');
			} else {
				// portfolioItem.css('clear', 'left');
			}
			portfolioItem.attr('portfolio-id', i);
			portfolioItem.on('click', lexPortfolio.portfolioClick);
			portfolioItem.appendTo(lexPortfolio.$slidesHolder);
		}
		for (var i = 0; i < this.slidesCount; i++) {
			buildPortfolio (i);
		}
		if (this.slidesCount != this.holderCount) {
			buildPortfolio (0);
			}
		this.$portfolio = this.$container.find(this.portfolio);
	},
	prevSlide: function () {
		if (lexPortfolio.currentSlide) {
			lexPortfolio.toSlide(--lexPortfolio.currentSlide);
		} else {
			lexPortfolio.currentSlide = Math.ceil(lexPortfolio.slidesCount / lexPortfolio.maxSlides) - 1;
			lexPortfolio.toSlide(lexPortfolio.currentSlide);
		}
	},
	nextSlide: function () {
		if (++lexPortfolio.currentSlide >= Math.ceil(lexPortfolio.slidesCount / lexPortfolio.maxSlides)) {
			lexPortfolio.toSlide(0);
			lexPortfolio.currentSlide = 0;
		} else {
			lexPortfolio.toSlide(this.currentSlide);
		};
	},
	toSlide: function (id, resize) {
		this.$slidesHolder.stop(true, true).animate({
			left: this.containerWidth * -id
		});
		this.currentSlide = id;
		if (!resize) {
			this.$controls
				.find('div')
				.attr('class', lexPortfolio.cls[0])
				.eq(id)
				.attr('class', lexPortfolio.cls[1])
		};
	},
	createButtons: function () {
		if (this.slidesCount > this.maxSlides) {
			for (var i = 0; i < Math.ceil(this.slidesCount / this.maxSlides); i++) {
				var but = $('<div>');
				if (i) {
					but.addClass(this.cls[0]);
				} else {
					but.addClass(this.cls[1]);
				};
				but.attr('slide-id', i);
				but.on('click', lexPortfolio.buttonClick);
				but.appendTo(this.$controls);
			};
		};
	},
	buttonClick: function () {
		if ($(this).attr('slide-id') != lexPortfolio.currentSlide) {
			lexPortfolio.toSlide($(this).attr('slide-id'));
		};
	},
	portfolioClick: function () {
		var id = $(this).attr('portfolio-id');
		portfolioLightbox.open(id);
	},
	resize: function () {
		this.$container.width(windowWidth);
		this.containerWidth = this.$container.width();
		if (this.paginator) {
			this.$slidesHolder.width(this.containerWidth * this.maxSlides / 2);
			this.$portfolio.width(this.containerWidth / (this.maxSlides / 2));
		} else {
			this.$slidesHolder.width(this.containerWidth * this.holderCount / 2);
			this.$portfolio.width(this.containerWidth / (this.holderCount / 2));
		};
		this.toSlide(this.currentSlide, true);
	}
};

	var scrollPages = (function () {
		pagesState.currentPage;
		pagesState.pages = [];
		speed = 800;
		var plg = {
			init: function () {
				this.definePages();
				this.resize();
			},
			definePages: function () {
				pagesState.pagesCount = 0;
				for (var i = 0; i < cacheDom.$sections.length; i++) {
					if (cacheDom.$sections.eq(i).attr('id') == "intro-gallery") {
						pagesState.parralax1 = {};
						pagesState.parralax1.id = i;
					}
					if (cacheDom.$sections.eq(i).attr('id') == "pre-footer") {
						pagesState.parralax2 = {};
						pagesState.parralax2.id = i;
					}
					if (true) {
						pagesState.pages.push({
							'i': i,
							'id': cacheDom.$sections[i].id,
							'classes': cacheDom.$sections[i].classList,
							'top': cacheDom.$sections[i].offsetTop,
							'black': cacheDom.$sections.eq(i).hasClass('black'),
							'full': true
						});
						pagesState.pagesCount++;
					}
				}
			},
			toPage: function (id, resize) {
				if (id === undefined) {
					id = this.getIdFromHash();
				}
				if ( isTouchDevice || isTouch ) return
				var top;
				if (pagesState.pages[id] === undefined) {
					top = pagesState.pages[pagesState.pagesCount - 2].top + windowHeight;
					pagesState.currentPage = pagesState.pages.length;
				} else {
					top = pagesState.pages[id].top;
				}
				if (pagesState.prevPage == 0 && id == 1 && !pagesState.fx) {
					introAnimation.oneTwo();
				} else if (pagesState.prevPage == 1 && id == 2 && !pagesState.fx) {
					introAnimation.twoThree();
				} else if (resize) {
					pagesState.animatedBool = true;
					$('html, body')
						.stop(false, false)
						.animate({'scrollTop': top}, speed, function () {
							pagesState.animatedBool = false;
						});
				} else if (!resize) {
					pagesState.animatedBool = true;
					$('html, body')
						.stop(false, false)
						.animate({'scrollTop': top}, speed, function () {
							if (pagesState.pages[id]) {
								window.location.hash = pagesState.pages[id].id;
							}
							pagesState.animatedBool = false;
						});
				};
			},
			nextPage: function () {
				pagesState.prevPage = pagesState.currentPage;
				if (++pagesState.currentPage >= pagesState.pagesCount) {
					--pagesState.currentPage;
				} else {
					this.toPage(pagesState.currentPage);
				}
			},
			prevPage: function () {
				pagesState.prevPage = pagesState.currentPage;
				if (--pagesState.currentPage < 0) {
					pagesState.currentPage = 0;
				} else {
					this.toPage(pagesState.currentPage);
				}
			},
			getIdFromHash: function (hash) {
				var id;
				var curHash = hash || window.location.hash.substr(1);
				for (var i = 0; i < pagesState.pages.length; i++) {
					if (pagesState.pages[i].id == curHash) {
						pagesState.currentPage = i;
						return i;
					} else {
						id = 0;
						pagesState.currentPage = 0;
					}
				};
				pagesState.prevPage = 0;
				return id;
			},
			resize: function () {
				for (var i = 0; i < pagesState.pages.length; i++) {
					pagesState.pages[i].top = cacheDom.$sections[i].offsetTop;
					if (pagesState.pages[i].full) {
						cacheDom.$sections.eq(i).height(windowHeight);
					}
				}
				this.toPage(pagesState.currentPage, true);
				// parallax
				if ( !pagesState.parralax1 ) {
					return;
				}
				pagesState.parralax1.a = {};
				pagesState.parralax1.a.holderHeight = cacheDom.$sections.eq(pagesState.parralax1.id).find('.image-holder').eq(0).height();
				pagesState.parralax1.a.top = cacheDom.$sections[pagesState.parralax1.id].offsetTop;
				pagesState.parralax1.a.imgHeight = cacheDom.$sections.eq(pagesState.parralax1.id).find('.image-holder').eq(0).find('img').height();
				pagesState.parralax1.a.mult = (windowHeight + pagesState.parralax1.a.holderHeight) / (pagesState.parralax1.a.imgHeight - pagesState.parralax1.a.holderHeight);

				pagesState.parralax1.b = {};
				pagesState.parralax1.b.holderHeight = cacheDom.$sections.eq(pagesState.parralax1.id).find('.image-holder').eq(1).height();
				pagesState.parralax1.b.top = pagesState.parralax1.a.top + pagesState.parralax1.a.holderHeight;
				pagesState.parralax1.b.imgHeight = cacheDom.$sections.eq(pagesState.parralax1.id).find('.image-holder').eq(1).find('img').height();
				pagesState.parralax1.b.mult = (windowHeight + pagesState.parralax1.b.holderHeight) / (pagesState.parralax1.b.imgHeight - pagesState.parralax1.b.holderHeight);

				pagesState.parralax1.c = {};
				pagesState.parralax1.c.holderHeight = cacheDom.$sections.eq(pagesState.parralax1.id).find('.image-holder').eq(2).height();
				pagesState.parralax1.c.top = pagesState.parralax1.a.top + pagesState.parralax1.a.holderHeight + pagesState.parralax1.b.holderHeight;
				pagesState.parralax1.c.imgHeight = cacheDom.$sections.eq(pagesState.parralax1.id).find('.image-holder').eq(2).find('img').height();
				pagesState.parralax1.c.mult = (windowHeight + pagesState.parralax1.c.holderHeight) / (pagesState.parralax1.c.imgHeight - pagesState.parralax1.c.holderHeight);

				pagesState.parralax2.holderHeight = cacheDom.$sections.eq(pagesState.parralax2.id).find('.image-holder').height();
				pagesState.parralax2.top = cacheDom.$sections[pagesState.parralax2.id].offsetTop;
				pagesState.parralax2.imgHeight = cacheDom.$sections.eq(pagesState.parralax2.id).find('.background').height();
				pagesState.parralax2.mult = (windowHeight + pagesState.parralax2.holderHeight) / (pagesState.parralax2.imgHeight - pagesState.parralax2.holderHeight);
			}
		};
		return plg;
	})();
	
	/* PORTFOLIOS INNER */
var portfolioLightbox = {
	'lightboxId': 'portfolioLightbox',
	'icons': ['img/icons/back-icon-main.png', 'img/icons/farword-icon-main.png'],
	'touchState': {
		touchStart: {},
		touchEnd: {}
	},
	open: function (id) {
		if (!this.lightbox) {
			this.createBox(id);
		};
		cacheDom.$navButton.animate({'right': -26});
		this.currentPortfolio = id;
		pagesState.lightbox = 'portfolio';
	},
	close: function () {
		portfolioLightbox.animationClose();
		cacheDom.$navButton.animate({'right': 20});
		portfolioLightbox.$contentHolder.animate({'left': '-50%'}, function() {
			portfolioLightbox.lightbox
				.fadeOut(function () {
					$(this).detach();
					portfolioLightbox.lightbox = false;
			});
		});
		window.location.hash = 'portfolio';
		pagesState.lightbox = false;
	},
	createBox:  function (id) {
		this.lightbox = $('<div>')
			.attr('id', this.lightboxId);
		this.lightbox
			.appendTo('body')
			.addClass('closed')
			.animate({
				opacity: '1'
			}, 'fast', this.loadPortfolio.bind(this, id));
		//
		this.lightbox.on('touchstart', function (e) {

			portfolioLightbox.touchState.touchStart.timeStamp = e.timeStamp;

		});
		this.lightbox.on('touchmove', function (e) {

			e.preventDefault();
			portfolioLightbox.touchState.touchEnd.xPos = e.originalEvent.touches[0].clientX;
			portfolioLightbox.touchState.touchEnd.yPos = e.originalEvent.touches[0].clientY;

			if (!portfolioLightbox.touchState.touchStart.xPos) {
				portfolioLightbox.touchState.touchStart.xPos = portfolioLightbox.touchState.touchEnd.xPos;
			}
			if (!portfolioLightbox.touchState.touchStart.yPos) {
				portfolioLightbox.touchState.touchStart.yPos = portfolioLightbox.touchState.touchEnd.yPos;
			}

		});
		this.lightbox.on('touchend', function (e) {
			if (pagesState.animatedBool) {
				return;
			}
			var distance = 70,
				speed = 200,
				deltaX = portfolioLightbox.touchState.touchEnd.xPos - portfolioLightbox.touchState.touchStart.xPos,
				deltaY = portfolioLightbox.touchState.touchEnd.yPos - portfolioLightbox.touchState.touchStart.yPos;

			if (deltaX > distance || deltaX < -distance) {
				if (deltaX < 0) {
					portfolioLightbox.nextSlide();
				} else {
					portfolioLightbox.prevSlide();
				}
			}

			portfolioLightbox.touchState.touchEnd.xPos = null;
			portfolioLightbox.touchState.touchEnd.yPos = null;
			portfolioLightbox.touchState.touchStart.xPos = null;
			portfolioLightbox.touchState.touchStart.yPos = null;
			deltaX = null;
			deltaY = null;

		});
	},
	loadPortfolio: function (id, change) {
		if (change) {
			this.$currHtml = this.lightbox.append(this.generateHtml(id));
			this.$contentHolder.animate({'left': '15%'});
			this.lightbox.append(this.createSlider(lexPortfolio.cont[id].photos));
			this.$currHtml.append(this.createSliderButtons(true));
			this.resize();
		} else {
			this.lightbox.append(this.createButtons());
			this.$currHtml = this.lightbox.append(this.generateHtml(id));
			this.$contentHolder.animate({'left': '15%'});
			this.lightbox.append(this.createSlider(lexPortfolio.cont[id].photos));
			this.$currHtml.append(this.createSliderButtons());
			this.$slidesHolder.animate({
				'opacity': '1'
			});
			this.animationOpen();
			this.resize();
		};
		window.location.hash = 'portfolio=' + lexPortfolio.cont[id].alias;
	},
	animationOpen: function () {
		this.$controls.css('top', '-100%').animate({'top': '0'});
	},
	animationClose: function () {
		this.$controls.animate({'top': '-100%'});
	},
	generateHtml: function (id) {
		if (this.$contentHolder) {
			portfolioLightbox.$contentHolder.detach();
		};
		var html = $('<div>')
			.addClass('content-holder')
			.css('left', '-50%');
		var descHolder = $('<div>')
			.addClass('description-holder')
			.appendTo(html);
		var header = $('<h2>')
			.html(lexPortfolio.cont[id].title)
			.appendTo(descHolder);
		var description = $('<span>')
			.html(lexPortfolio.cont[id].description)
			.appendTo(descHolder);
		this.$contentHolder = html;
		return html;
	},
	createButtons: function () {
		var controls = $('<div>')
			.addClass('controls');
		var prevPortfolio = $('<div>')
			.addClass('prev-portfolio')
			.html(lang.prevPortfolio[1])
			.append('<img>')
			.one('click', portfolioLightbox.prevPortfolio)
			.appendTo(controls);
		var close = $('<div>')
			.addClass('close')
			.on('click', portfolioLightbox.close)
			.appendTo(controls);
		var nextPortfolio = $('<div>')
			.addClass('next-portfolio')
			.html(lang.nextPortfolio[1])
			.append('<img>')
			.on('click', portfolioLightbox.nextPortfolio)
			.appendTo(controls);
		this.$controls = controls;
		this.$prevPortfolioButton = prevPortfolio;
		this.$nextPortfolioButton = nextPortfolio;
		return controls;
	},
	createSlider: function (slides) {
		var slidesHolder = $('<div>')
			.addClass('slides-holder')
			.addClass('clearfix');
		for (var i = 0; i < slides.length; i++) {
			var slide = $('<div>')
				.addClass('image-holder');
			var fitedImage = $('<div>')
				.addClass('realImage')
				.appendTo(slide)
				.css({
					'background-image': 'url(' + host.portfolioOriginals + slides[i].image + ')',
					'opacity': 0
				});
			var image = $('<img>')
				.attr('src', host.portfolioOriginals + slides[i].image)
				.appendTo(slide)
				.css({
					'opacity': 0
				})
				.load(function() {
					// $(this).data('height', this.height);
					// $(this).data('width', this.width);
					// $(this).data('size', true);
					// portfolioLightbox.fitImage(this);
					$(this).siblings('.realImage').animate({
						'opacity': 1
					});
					$(this).siblings('.progress').animate({
						'opacity': 0
					}, function() {
						$(this).detach();
					});
				});
			if (image.get(0).naturalWidth) {
				fitedImage.animate({
					'opacity': 1
				});
			}
			var $progress = $('<div>')
				.addClass('progress')
				.css({
					'opacity': 0
				})
				.append('<div class="icon">')
				.appendTo(slide)
				.animate({'opacity': .2}, 100);
			slide.appendTo(slidesHolder);
		};
		this.slidesCount = slides.length;
		this.currentSlide = 0;
		this.$slidesHolder = slidesHolder;
		return slidesHolder;
	},
	fitImage: function(img) {
		var imageWidth, imageHeight;
		if ($(img).data('size')) {
			imageWidth = $(img).data('width');
			imageHeight = $(img).data('height');
		} else {
			imageWidth = $(img).width();
			imageHeight = $(img).height();
			$(img).data('width', imageWidth);
			$(img).data('height', imageHeight);
			$(img).data('size', true);
		};
		if (windowHeight - 60 - imageHeight > windowWidth - imageWidth) {
			$(img).css({
				'width': 'auto',
				'height': '100%'
			});
		} else {
			$(img).css({
				'width': '100%',
				'height': 'auto'
			});
		};
	},
	resize: function () {
		portfolioLightbox.$slidesHolder.width(windowWidth * portfolioLightbox.slidesCount);
		portfolioLightbox.$slidesHolder.find('.image-holder').width(windowWidth).height(windowHeight - 60);
		// portfolioLightbox.$slidesHolder.find('img').each(function(){
		// 	portfolioLightbox.fitImage(this);
		// });
		portfolioLightbox.toSlide(portfolioLightbox.currentSlide, true);
	},
	prevPortfolio: function () {
		var id = parseInt(portfolioLightbox.currentPortfolio);
		var newSlide;
		if (id > 0) {
			newSlide = id - 1;
		} else {
			newSlide = lexPortfolio.cont.length - 1;
		};
		portfolioLightbox.$prevPortfolioButton.off();
		portfolioLightbox.$slidesHolder.animate({
			'opacity': '0'
		}, function () {
			$(this).detach();
		});
		portfolioLightbox.$contentHolder.animate({
			'left': '-50%'
		}, function () {
			// portfolioLightbox.$contentHolder.detach();
			portfolioLightbox.loadPortfolio(newSlide, true);
			portfolioLightbox.$prevPortfolioButton.on('click', portfolioLightbox.prevPortfolio);
			portfolioLightbox.currentPortfolio = newSlide;
		});
	},
	nextPortfolio: function () {
		var id = parseInt(portfolioLightbox.currentPortfolio);
		var newSlide = id + 1;
		if (newSlide < lexPortfolio.cont.length) {
			newSlide = id + 1;
		} else {
			newSlide = 0;
		};
		portfolioLightbox.$nextPortfolioButton.off();
		portfolioLightbox.$slidesHolder.animate({
			'opacity': '0'
		}, function () {
			$(this).detach();
		});
		portfolioLightbox.$contentHolder.animate({
			'left': '-50%'
		}, function () {
			// portfolioLightbox.$contentHolder.detach();
			portfolioLightbox.loadPortfolio(newSlide, true);
			portfolioLightbox.$nextPortfolioButton.on('click', portfolioLightbox.nextPortfolio);
			portfolioLightbox.currentPortfolio = newSlide;
		});
	},
	createSliderButtons: function (change) {
		if (change) {
			if (this.slidesCount <= 1) {
				this.prevSlideButton.animate({
					'opacity': 0
				});
				this.nextSlideButton.animate({
					'opacity': 0
				});
			} else {
				this.prevSlideButton.animate({
					'opacity': 0.4
				});
				this.nextSlideButton.animate({
					'opacity': 0.4
				});};
		} else {
			var prevSlide = this.prevSlideButton = $('<div>')
				.addClass('prevSlide')
				.on('click', this.prevSlide.bind(this));
			var nextSlide = this.nextSlideButton = $('<div>')
				.addClass('nextSlide')
				.on('click', this.nextSlide.bind(this));
			if (this.slidesCount <= 1) {
				prevSlide.css({
					'opacity': 0
				});
				nextSlide.css({
					'opacity': 0
				});
			};
			return prevSlide.add(nextSlide);
		};
	},
	toSlide: function (id, resize) {
		this.$slidesHolder.stop(false, false).animate({
			left: windowWidth * -id
		});
		this.currentSlide = id;
	},
	prevSlide: function () {
		if (this.currentSlide) {
			this.toSlide(--this.currentSlide);
		} else{
			this.currentSlide = this.slidesCount - 1;
			this.toSlide(this.currentSlide);
		};
	},
	nextSlide: function () {
		if (++this.currentSlide >= this.slidesCount) {
			this.toSlide(0);
			this.currentSlide = 0;
		} else{
			this.toSlide(this.currentSlide);
		};
	},
	getIdFromAlias: function (portfolios) {
		var curHash = window.location.hash.substr(11);
		for (var i = 0; i < portfolios.length; i++) {
			if (portfolios[i].alias == curHash) {
				return i;
			};
		};
	}
}
function buttonNext () {
	scrollPages.nextPage();
}
$.fn.animateRotate = function(angle, duration, easing, complete) {
	var args = $.speed(duration, easing, complete);
	var step = args.step;
	return this.each(function(i, e) {
		args.complete = $.proxy(args.complete, e);
		args.step = function(now) {
		  $.style(e, 'transform', 'rotate(' + now + 'deg)');
		  if (step) return step.apply(e, arguments);
		};
		$({deg: 0}).animate({deg: angle}, args);
	});
};
var introAnimation = (function () {
	var speed = 800;
	var $bg = $('<div>').addClass('main-intro-animation').append( $('<div>').attr('id', 'particles-js').addClass('particles-js') );
	var $back = $('<div>').addClass('back').appendTo( $bg );
	var $wg = $('<div>').addClass('intro1-animation');
	var $white = $('.pre-loader-main');
	var $logo = $('.logo-main-holder');
	var $contentMain = $('section#main .right');
	var $contentInt1 = $('section#intro-1 .vertical-middle');
	var $contentInt2 = $('section#intro-2 .vertical-middle');
	var plg = {
		init: function() {
			// this.resize();
			this.createBlock();
			var hashOnStart = window.location.hash;
			var regPort = /portfolio=/;
			if (regPort.test(hashOnStart)) {
				pagesState.animatedBool = true;
				$bg.css({'opacity': 0});
				$('.pre-loader-main').css('zIndex', 999).animate({opacity: 0}, 1500, function () {
					$(this).detach();
					$back.css({
						'opacity': 0.8
					});
					$logo.css({
						'opacity': 1
					});
					$contentMain.css({
						'opacity': 1,
						'top': 0
					});
					$bg.css({'zIndex': 1, 'opacity': 1});
					if (bgVideo.exist) {
						bgVideo.dom.$video.css({
							'opacity': 1
						});
					};
					// demo test //
					portfolioLightbox.open(portfolioLightbox.getIdFromAlias(portfolios));
					scrollPages.toPage(scrollPages.getIdFromHash('portfolio'), true);
					// demo test up
					//else Portfoloo has been delated

					pagesState.animatedBool = false;
				});
			} else if (!hashOnStart || hashOnStart == '#main') {
				pagesState.animatedBool = true;
				pagesState.intro = true;
				this.start();
			} else {
				$('.pre-loader-main').animate({opacity: 0}, 1500, function () {
					$(this).detach();
					$back.css({
						'opacity': 0.8
					});
					$logo.css({
						'opacity': 1
					});
					$contentMain.css({
						'opacity': 1,
						'top': 0
					});
					$bg.css({'zIndex': 1});
					if (bgVideo.exist) {
						bgVideo.dom.$video.css({
							'opacity': 1
						});
					};
					pagesState.animatedBool = false;
				});
			};
			// this.start();
		},
		createBlock: function() {
			$bg.appendTo('#main');
			bgVideo.create();
		},
		start: function() {
			pagesState.animatedBool = true;
			$bg.addClass('intro');
			// $bg.css('will-change', 'auto');
			$contentMain.css({
				'position': 'relative',
				'opacity': 0,
				'top': windowHeight / 2
			});
			$logo.css({
				'zIndex': 9999,
				'opacity': 0
			});
			$back.animate({
				'opacity': 0
			}, 1400).animate({
				'opacity': 0.8
			}, 1400);
			$bg.one("animationend webkitAnimationEnd",
			function(event) {
				if (bgVideo.exist) {
					bgVideo.dom.$video.animate({
						'opacity': 1
					}, 1600);
				};
				// console.log(this)
				// $(this).addClass('ready');
				$logo.animate({
					'opacity': 1
				}, 1200, 'swing');
				$contentMain.animate({
					'opacity': 1,
					'top': 0
				}, 1200, 'swing');
				$bg.removeClass('intro');
				$('.pre-loader-main').animate({opacity: 0}, 500, function () {
					$(this).detach();
					$bg.css({
						'zIndex': 1
					});
					$('.scroll-bottom').animate({'opacity': 1}, 900);
					pagesState.animatedBool = false;
					pagesState.intro = false;
				});
			});
		},
		oneTwo: function() {
			pagesState.animatedBool = true;
			$bg.addClass('oneTwo');
			if (bgVideo.exist) {
				bgVideo.dom.$clone.stop(true, true).css({
					'opacity': 0
				});
				// console.log(bgVideo.dom.$video);
				bgVideo.dom.$video.stop(false, false).animate({
					'opacity': 0
				});
			};

			$contentMain.animate({
				'opacity': 0,
				'top': -windowHeight
			}, 1200, 'swing', function() {
				$contentMain.css({
					'opacity': 1,
				});
			});
			$logo.animate({
				'opacity': 0
			}, 800, 'swing');
			$contentInt1.css({
				'position': 'relative',
				'opacity': 0,
				'top': '100%'
			});
			$bg.one("animationend webkitAnimationEnd", function(){
				$bg.removeClass();
				pagesState.prevPage = 0;
				pagesState.currentPage = 1;
				window.location.hash = pagesState.pages[1].id;
				if (bgVideo.exist) {
					bgVideo.dom.$clone.animate({
						'opacity': 1
					}, 1800);
				};
				$contentInt1.animate({
					'top': '0',
					'opacity': 0.5
				}, 1000);
				$contentInt1.animate({
					'top': '0',
					'opacity': 1
				}, 200, function() {
					$contentMain.css({
						'opacity': 1,
						'top': 0
					});
					$logo.css({
						'opacity': 1
					});
					$bg.addClass('main-intro-animation');
					if (bgVideo.exist) {
						bgVideo.dom.$video.css({
							'opacity': 1
						});
					};
					pagesState.animatedBool = false;
				});
			});
		},
		twoThree: function() {
			pagesState.animatedBool = true;
			$wg.appendTo('body').addClass('animate');
			$contentInt2.css({
				'position': 'relative',
				'opacity': 0,
				'top': '100%'
			});
			$wg.one("animationend webkitAnimationEnd",
			function() {
				$wg.detach();
				$wg = $('<div>').addClass('intro1-animation');
				pagesState.prevPage = 1;
				pagesState.currentPage = 2;
				window.location.hash = pagesState.pages[2].id;
				pagesState.fx = true;
				$contentInt2.animate({
					'top': '0',
					'opacity': 0.5
				}, 1000);
				$contentInt2.animate({
					'opacity': 1
				}, 200, function() {
					pagesState.animatedBool = false;
				});
			});
		},
		resize: function() {
		}
	}
	return plg;
})();
var bgVideo = {
	'dom': {},
	init: function() {
		//
	},
	create: function(el) {
		this.dom.$video = $('#particles-js');
		this.dom.$clone = $('#bgSlide-1');
		this.exist = true;
		// this.dom.$video.css({
		// 	'opacity': 0
		// });
		//this.dom.$video[0].play();
		//this.dom.$clone[0].play();
		// this.dom.$video.on('canplay loadeddata', function() {
		this.dom.$video.on('load', function() {
			// this.play();
			$(this).animate({
				'opacity': 1
			});
		});
		this.dom.$clone.on('canplay loadeddata', function() {
			this.play();
			$(this).animate({
				'opacity': 1
			});
		});
		// this.play();
		this.dom.$video.appendTo('section#main .main-intro-animation');
		this.dom.$clone.appendTo('#intro-1');

		$('<script>').attr('src', 'particles.js').appendTo('body');
		$('<script>').attr('src', 'app.js').appendTo('body');
	},
	// clone: function(el) {
	// 	this.dom.$clone = this.dom.$video.clone();
	// 	this.dom.$clone.attr('id', 'bgSlide-1');
	// 	this.dom.$clone.on('loadeddata', function() {
	// 		bgVideo.play(this.dom.$clone);
	// 		this.dom.$video.animate({
	// 			'opacity': 1
	// 		});
	// 	}.bind(this));
	// 	this.dom.$clone.appendTo('#intro-1');
	// 	this.exist = true;
	// },
	play: function(el) {
		el.get(0).play();
		// alert()
		// this.dom.$video.width(windowWidth);
		// this.dom.$video.height(windowHeight);
	}
};
setTimeout(function () {
	//document.getElementById('bgVideo').play();
	document.getElementById('bgSlide-1').play();
}, 1500)
setTimeout(function () {
	//document.getElementById('bgVideo').play();
	document.getElementById('bgSlide-1').play();
}, 6500)
setTimeout(function () {
	//document.getElementById('bgVideo').play();
	document.getElementById('bgSlide-1').play();
}, 15000)


var admin = (function() {
	var dom = {};
	var plg = {
		init: function() {
			this.cacheDom();
		},
		cacheDom: function() {
			dom.$mainHeader = $('section#main h2').data('type', 'text');
			dom.$mainContent = $('section#main p').data('type', 'text');
			dom.$mainIntro1 = $('section#intro-1 h2').data('type', 'text');
			dom.$mainIntro2 = $('section#intro-2 h2').data('type', 'text');
			dom.$introGallery = $('section#intro-gallery img').data('type', 'images');
			dom.$partners = $('section#partners h2').data('type', 'text');
			dom.$progressHeader = $('section#progress h2').data('type', 'text');
			dom.$progressContent = $('section#progress .right p').data('type', 'text');
			dom.$portfolioHeader = $('section#portfolio h2').data('type', 'text');
			dom.$portfolioContent = $('section#portfolio p').data('type', 'text');
			dom.$contactHeader = $('section#contact h2').data('type', 'text');
			dom.$contactPhone = $('section#contact span.info').data('type', 'text');
			dom.$preFooterImg = $('section#pre-footer img.background').data('type', 'image');
			dom.$preFooterHeader = $('section#pre-footer h2').data('type', 'text');
		},
		updateContent: function(snippets) {
			if (snippets.hasOwnProperty('main.header')) {
				dom.$mainHeader.html(snippets['main.header'].value);
				dom.$mainHeader.data('label', snippets['main.header'].label);
			};
			if (snippets.hasOwnProperty('main.content')) {
				dom.$mainContent.html(snippets['main.content'].value);
				dom.$mainContent.data('label', snippets['main.content'].label);
			};
			if (snippets.hasOwnProperty('intro_1.content')) {
				dom.$mainIntro1.html(snippets['intro_1.content'].value);
				dom.$mainIntro1.data('label', snippets['intro_1.content'].label);
			};
			if (snippets.hasOwnProperty('intro_2.content')) {
				dom.$mainIntro2.html(snippets['intro_2.content'].value);
				dom.$mainIntro2.data('label', snippets['intro_2.content'].label);
			};
			if (snippets.hasOwnProperty('partners.content')) {
				dom.$partners.html(snippets['partners.content'].value);
				dom.$partners.data('label', snippets['partners.content'].label);
			};
			if (snippets.hasOwnProperty('progress.header')) {
				dom.$progressHeader.html(snippets['progress.header'].value);
				dom.$progressHeader.data('label', snippets['progress.header'].label);
			};
			if (snippets.hasOwnProperty('partners.content')) {
				dom.$progressContent.html(snippets['progress.content'].value);
				dom.$progressContent.data('label', snippets['progress.content'].label);
			};
			if (snippets.hasOwnProperty('portfolio.header')) {
				dom.$portfolioHeader.html(snippets['portfolio.header'].value);
				dom.$portfolioHeader.data('label', snippets['portfolio.header'].label);
			};
			if (snippets.hasOwnProperty('portfolio.content')) {
				dom.$portfolioContent.html(snippets['portfolio.content'].value);
				dom.$portfolioContent.data('label', snippets['portfolio.content'].label);
			};
			if (snippets.hasOwnProperty('contact.header')) {
				dom.$contactHeader.html(snippets['contact.header'].value);
				dom.$contactHeader.data('label', snippets['contact.header'].label);
			};
			if (snippets.hasOwnProperty('contact.phone')) {
				dom.$contactPhone.html(snippets['contact.phone'].value);
				dom.$contactPhone.data('label', snippets['contact.phone'].label);
			};
			if (snippets.hasOwnProperty('preFooter.header')) {
				dom.$preFooterHeader.html(snippets['preFooter.header'].value);
				dom.$preFooterHeader.data('label', snippets['preFooter.header'].label);
			};
			// if (snippets.hasOwnProperty('perFooter.img')) {
			// 	dom.$preFooterImg.html(snippets['perFooter.img'].value);
			// 	dom.$preFooterImg.data('label', snippets['perFooter.img'].label);
			// 	dom.$preFooterImg.data('baseId', snippets['perFooter.img'].id);
			// };
		},
		updateImages: function(albums) {
			var cycleI = 0, loaded = 0;
			function allLoaded () {
				if (++loaded == cycleI) {
					scrollPages.resize(true);
				};
			};
			dom.$introGallery.each(function(i) {
				$(this).load(function() {
					allLoaded ();
				});
				$(this).attr('src', host.albums + albums[i].image);
				cycleI = i;
			});
			dom.$preFooterImg.load(function() {
				allLoaded ();
			});
			dom.$preFooterImg.attr('src', host.albums + albums[cycleI].image);
			cycleI++;
			// ADMIN
		}
	};
	return plg;
})();
admin.init();



