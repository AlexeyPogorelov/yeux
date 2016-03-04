	/* GLOBAL */
var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0) || (navigator.maxTouchPoints));
if (isTouchDevice || isTouch) {
	$('body').css('overflow', 'auto');
};

var pagesState = {};
pagesState.fx = true;
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
	$(window).scroll(function () {
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


	/* LOCAL */
// partnersHover(partners);
// lexSlider.init(progress);
// lexPortfolio.init(portfolios);

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
	$(window).on('mousewheel DOMMouseScroll', function (e) {
		e.preventDefault();
		e.stopPropagation();
		// console.log(e)
		if (!pagesState.animatedBool && !portfolioLightbox.lightbox && !pagesState.tint && !pagesState.intro) {
			if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
				scrollPages.prevPage();
			} else {
				scrollPages.nextPage();
			}
		}
	});
	$(document).on('keydown', onKeyDown);
	function onKeyDown (e) {
		// console.log(e.which)
		switch (e.which) {
			case 38:
				if (pagesState.lightbox != 'text') {
					e.preventDefault();
				};
				if (!pagesState.lightbox && !pagesState.animatedBool && !pagesState.intro) {
					scrollPages.prevPage();
				}
				break;
			case 40:
				if (pagesState.lightbox != 'text') {
					e.preventDefault();
				};
				if (!pagesState.lightbox && !pagesState.animatedBool && !pagesState.intro) {
					scrollPages.nextPage();
				}
				break;
			case 37:
				if (pagesState.pages[pagesState.currentPage].id != "contact" && pagesState.lightbox != 'text') {
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
				if (pagesState.pages[pagesState.currentPage].id != "contact" && pagesState.lightbox != 'text') {
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
				if (pagesState.lightbox == 'portfolio') {
					portfolioLightbox.close();
				} else {
					$('<div>').addClass('reload').prependTo('body').animate({
							'opacity': 1
						}, function() {
							document.location.reload();
						});
				};
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
				.data('id', i)
				.attr('data-id', partners[i].id);
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
			partner.on('click', {'type': 'partnerEdit', 'el': partner}, admin.createLightbox);
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
				.css('position', 'relative')
				.data('baseId', this.cont[i].id)
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
			var editButton = $('<div>')
				.addClass('editButtonAdmin')
				.on('click', {'type': 'progressEdit', 'el': holder}, admin.createLightbox)
				.appendTo(holder);
			var addButton = $('<div>')
				.addClass('editButtonAdmin add')
				.on('click', {'type': 'progressAdd'}, admin.createLightbox)
				.appendTo(this.$slidesHolder);
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
		}
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
				var top;
				if (pagesState.pages[id] === undefined) {
					top = pagesState.pages[pagesState.pagesCount - 2].top + windowHeight;
					pagesState.currentPage = pagesState.pages.length;
				} else {
					top = pagesState.pages[id].top;
				}
				if (resize) {
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
	open: function (id) {
		if (!this.lightbox) {
			this.createBox(id);
		};
		cacheDom.$navButton.animate({'right': -26})
		this.currentPortfolio = id;
		pagesState.lightbox = 'portfolio';
	},
	close: function () {
		portfolioLightbox.animationClose();
		cacheDom.$navButton.animate({'right': 20})
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
		if (this.$controls) {
			this.$controls.animate({'top': '-100%'});
		} else {
			$('<div>').addClass('reload').prependTo('body').animate({
					'opacity': 1
				}, function() {
					document.location.reload();
				});
		};
	},
	generateHtml: function (id) {
		if (this.$contentHolder) {
			portfolioLightbox.$contentHolder.detach();
		};
		var $form = $('<form id="lightForm" method="post" enctype="multipart/form-data" action="' + host.glob + 'api/portfolios/' + lexPortfolio.cont[id].id + '/uploadPhotos">')
		var html = $('<div>')
			.addClass('content-holder')
			.css('left', '-50%');
		var descHolder = $('<div>')
			.addClass('description-holder')
			.data('baseId', lexPortfolio.cont[id].id);
		var header = $('<h2>')
			.html(lexPortfolio.cont[id].title)
			.appendTo(descHolder);
		var description = $('<span>')
			.html(lexPortfolio.cont[id].description)
			.appendTo(descHolder);
		// ADMIN
		var $buttonEditHeader = $('<div>')
			.addClass('editButtonAdmin zIndex')
			.on('click', {el: descHolder, type: 'textPortfolio', plg: this, baseId: lexPortfolio.cont[id].id}, admin.createLightbox)
			.appendTo(descHolder);
		var $buttonDelete = $('<button>')
			.html('Удалить портфолио')
			.on('click', function(e) {
				e.preventDefault();
				if (confirm('Вы действительно хотите удалить портфолио?')) {
						document.location.href = host.glob + 'admin#portfolio';
						$.post(host.glob + 'api/portfolios/' + lexPortfolio.cont[id].id + '/delete', null, function() {
						document.location.reload();
					})
				};
			})
			.appendTo($form);
		var $buttonAddImage = $('<input type="file" name="files[]" multiple >')
			.appendTo($form);
		var $uploadImages = $('<button type="submit">')
			.html('Догрузить изображения')
			.appendTo($form);
		// end ADMIN
		$form.appendTo(html);
		descHolder.appendTo(html);
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
			var image = $('<img>')
				.attr('src', host.portfolioOriginals + slides[i].image)
				.appendTo(slide)
				.data('baseId', slides[i].id)
				.css({
					'opacity': 0
				})
				.load(function() {
					$(this).data('height', this.height);
					$(this).data('width', this.width);
					$(this).data('size', true);
					portfolioLightbox.fitImage(this);
					$(this).animate({
						'opacity': 1
					});
					$(this).siblings('.progress').animate({
						'opacity': 0
					}, function() {
						$(this).detach();
					});
				});
			// ADMIN
			var $deletePhoto = $('<div>')
				.addClass('editButtonAdmin trash')
				.on('click', function(e) {
					if (confirm('Удалить данное изображение?')) {
						$.post(host.glob + 'api/portfolios/' + $(e.target).siblings('img').data('baseId') + '/deletePhoto', null, function() {
							$('<div>').addClass('reload').appendTo('body').animate({
								'opacity': 1
							}, function() {
								document.location.reload();
							});
						})
					};
				})
				.appendTo(slide);
			var $progress = $('<div>')
				.addClass('progress')
				.css({
					'opacity': 0,
					'top': windowHeight / 2 - 96,
					'left': windowWidth / 2 - 64
				})
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
		portfolioLightbox.$slidesHolder.find('img').each(function(){
			portfolioLightbox.fitImage(this);
		});
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
	var $bg = $('<div>').addClass('main-intro-animation');
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
			bgVideo.create($bg);
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
			$bg.one("animationend webkitAnimationEnd",
			function(event) {
				if (bgVideo.exist) {
					bgVideo.dom.$video.animate({
						'opacity': 1
					}, 1600);
				};
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
		this.dom.$video = $('video#bgVideo');
		// this.dom.$video.css({
		// 	'opacity': 0
		// });
		this.dom.$video.on('loadeddata', function() {
			this.created = true;
			bgVideo.play(this.dom.$video);
			this.dom.$video.animate({
				'opacity': 1
			});
			this.clone(el);
		}.bind(this));
		// this.play();
		this.dom.$video.appendTo(el);
	},
	clone: function(el) {
		this.dom.$clone = this.dom.$video.clone();
		this.dom.$clone.attr('id', 'bgSlide-1');
		this.dom.$clone.on('loadeddata', function() {
			bgVideo.play(this.dom.$clone);
			this.dom.$video.animate({
				'opacity': 1
			});
		}.bind(this));
		this.dom.$clone.appendTo('#intro-1');
		this.exist = true;
	},
	play: function(el) {
		// alert()
		el.get(0).play();
		// this.dom.$video.width(windowWidth);
		// this.dom.$video.height(windowHeight);
	}
};
var admin = (function() {
	var dom = {};
	var plg = {
		init: function() {
			this.cacheDom();
			// this.updateContent();
			// this.updateImages();
			// this.addEditButton();
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
				// console.log(albums[i]);
				// here id for photo sei incorrectly
				var $form = $('<form id="lightForm" method="post" enctype="multipart/form-data" action="' + host.glob + 'api/albums/intro-gallery/photo/' + albums[i].id + '/update">')
					.addClass('change-gal-frm')
					.insertBefore($(this));
				var submitImage = $('<button type="submit">')
					.html('Загрузить')
					.addClass('change-gal-but')
					.appendTo($form);
				var changeImage = $('<input type="file" name="image" >')
					.addClass('change-gal-inp')
					.appendTo($form);
			});
			var $form1 = $('<form id="lightForm" method="post" enctype="multipart/form-data" action="' + host.glob + 'api/albums/pre-footer/photo/' + albums[++cycleI].id + '/update">')
				.addClass('change-gal-frm')
				.insertBefore(dom.$preFooterImg);
			var submitImage = $('<button type="submit">')
				.html('Загрузить')
				.addClass('change-gal-but')
				.appendTo($form1);
			var changeImage = $('<input type="file" name="image" >')
				.addClass('change-gal-inp')
				.appendTo($form1);
			dom.$preFooterImg.load(function() {
				allLoaded ();
			});
			dom.$preFooterImg.attr('src', host.albums + albums[cycleI].image);
			cycleI++;
			// ADMIN
		},
		generateButton: function(type, el) {
			var $button = $('<div>')
				.addClass('editButtonAdmin')
				.on('click', {el: el, type: type, plg: this}, admin.createLightbox);
			return $button;
		},
		addEditButton: function() {
			for (snip in dom) {
				var data = dom[snip].data('type');
				// console.log(dom[snip].get(0))
				dom[snip]
					.css({
						'position': 'relative'
					})
					.append(this.generateButton(data, dom[snip]));
			};
			$('section#portfolio button')
				.off()
				.html('Добавить портфолио')
				.on('click', {type: 'portfolio', plg: this}, this.createLightbox);
			var addPartner = $('<button>')
				.html('Добавить партнера')
				.on('click', {type: 'partners', plg: this}, this.createLightbox);
			$('section#partners .content')
				.append(addPartner);
		},
		createLightbox: function(e) {
			$('.editButtonAdmin').detach();
			pagesState.lightbox = e.data.type;
			var $lightbox = $('<div>')
				.css({
					'overflow': 'auto',
					'zIndex': 9999
				})
				.addClass('admin')
				.attr('id', 'portfolioLightbox')
				.appendTo('body')
				.animate({
					'opacity': 1
				}, 200);
			portfolioLightbox.lightbox = $lightbox;
			$(window).off();
			// console.log(e.data.el.get(0)); // test
			switch (e.data.type) {
				case 'text':
				$lightbox
					.addClass('text');
				var $form = $('<form id="lightForm" method="post" action="' + host.glob + 'api/snippets/' + e.data.el.data('label') + '/update' + '">')
					.on('submit', function(e) {
						e.preventDefault();
						$('<div>').addClass('reload').appendTo($lightbox).animate({
							'opacity': 1
						}, function() {
							document.location.reload();
						});
						var val = $(this).serialize();
						$.post($(this).attr('action'), val, function(json) {
							console.log(json);
							//document.location.reload();
						})
						// console.log($( this ).serialize());
					});
				var $input = $('<textarea name="value">')
					.addClass('textSmall')
					.html(e.data.el.html())
					.appendTo($form);
				var $buttonSubmit = $('<button type="submit">')
					.html('Сохранить')
					.appendTo($form);
				var $buttonClose = $('<button>')
					.html('Отмена')
					.on('click', function(e) {
						e.preventDefault();
						$('<div>').addClass('reload').appendTo($lightbox).animate({
							'opacity': 1
						}, function() {
							document.location.reload();
						})
					})
					.appendTo($form);
				$form.appendTo($lightbox);
				break;
			case 'portfolio':
				$lightbox
					.addClass('portfolio');
				//
				var $form = $('<form id="lightForm" enctype="multipart/form-data" method="post" action="' + host.glob + 'api/portfolios/create">');
				var $inputName = $('<input type="text" name="title">')
					.addClass('textSmall')
					.attr('placeholder', 'Введите название работы')
					.appendTo($form);
				var $inputSnip = $('<input type="text" name="snip">')
					.addClass('textSmall')
					.attr('placeholder', 'Короткое описание')
					.appendTo($form);
				var $inputDesc = $('<textarea name="description">')
					.addClass('textSmall')
					.attr('placeholder', 'Полное описание')
					.appendTo($form);
				$('<label>')
					.html('Фотографии портфолио (можно загружать больше одного файла)')
					.appendTo($form);
				var imageLoader = $('<input type="file" name="files[]" multiple >')
					.appendTo($form);
				var $buttonSubmit = $('<button type="submit">')
					.html('Сохранить')
					.appendTo($form);
				var $buttonClose = $('<button>')
					.html('Отмена')
					.on('click', function(e) {
						e.preventDefault();
						$('<div>').addClass('reload').appendTo($lightbox).animate({
							'opacity': 1
						}, function() {
							document.location.reload();
						})
					})
					.appendTo($form);
				$form
					.on('submit', function(e) {
						if (!$inputName.val()) {
							e.preventDefault();
							$inputName.css({
								'border': '2px solid red'
							})
							alert('Введите название портфолио');
						} else {
							$inputName.css({
								'border': '1px solid #000'
							})
						};
						// if (!$inputSnip.val()) {
						// 	e.preventDefault();
						// 	$inputSnip.css({
						// 		'border': '2px solid red'
						// 	})
						// 	alert('Введите короткое описание (для отображения на главной)');
						// } else {
						// 	$inputSnip.css({
						// 		'border': '1px solid #000'
						// 	})
						// };
						if (!$inputDesc.val()) {
							e.preventDefault();
							$inputDesc.css({
								'border': '2px solid red'
							})
							alert('Введите описание портфолио');
						} else {
							$inputDesc.css({
								'border': '1px solid #000'
							})
						};
						if (!imageLoader.val()) {
							e.preventDefault();
							imageLoader.css({
								'border': '2px solid red',
								'paddingTop': '9px'
							})
							alert('Выберите изображения портфолио');
						} else {
							imageLoader.css({
								'border': '1px solid #000',
								'paddingTop': '10px'
							})
						};
						// var val = $(this).serialize();
						// $.post($(this).attr('action'), val, function(json) {
						// 	console.log(json);
						// })
					})
					.appendTo($lightbox);
				break;
			case 'partners':
				$lightbox
					.addClass('partners');
				var $form = $('<form id="lightForm" enctype="multipart/form-data" method="post" action="' + host.glob + 'api/partners/create' + '">');
				var $input = $('<textarea name="desc">')
					.attr('placeholder', 'Введите описание партнера')
					.addClass('textSmall')
					.appendTo($form);
				$('<label>')
					.html('Логотип:')
					.appendTo($form);
				var logoLoader = $('<input type="file" name="logo" >')
					.appendTo($form);
				$('<label>')
					.html('Фон:')
					.appendTo($form);
				var backgroundLoader = $('<input type="file" name="background" >')
					.appendTo($form);
				var $buttonSubmit = $('<button type="submit">')
					.html('Сохранить')
					.appendTo($form);
				var $buttonClose = $('<button>')
					.html('Отмена')
					.on('click', function(e) {
						e.preventDefault();
						$('<div>').addClass('reload').appendTo($lightbox).animate({
							'opacity': 1
						}, function() {
							document.location.reload();
						})
					})
					.appendTo($form);
				$form
					.on('submit', function(e) {
						if (!logoLoader.val()) {
							logoLoader.css({
								'border': '2px solid red',
								'paddingTop': '9px'
							});
							alert('Укажите путь к логотипу');
							e.preventDefault();
						};
					})
					.appendTo($lightbox);
				break;
			case 'partnerEdit':
				$lightbox
					.addClass('partners');
				var partnerData = {};
				for (var i = 0; i < partners.length; i++) {
					if (partners[i].id == e.data.el.attr('data-id')) {
						partnerData.id = partners[i].id;
						partnerData.background = partners[i].background;
						partnerData.desc = partners[i].desc;
						partnerData.logo = partners[i].logo;
						partnerData.weight = partners[i].weight;
						break;
					};
				};
				var $form = $('<form id="lightForm" enctype="multipart/form-data" method="post" action="' + host.glob + 'api/partners/' + partnerData.id + '/update' + '">');
				var $input = $('<textarea name="desc">')
					.addClass('textSmall')
					.html(partnerData.desc)
					.appendTo($form);
				$('<img>')
					.attr('src', host.partners + partnerData.logo)
					.appendTo($form);
				$('<label>')
					.html('Новый логотип:')
					.appendTo($form);
				var logoLoader = $('<input type="file" name="logo" >')
					.appendTo($form);
				if (partnerData.background) {
					$('<img>')
						.attr('src', host.partners + partnerData.background)
						.appendTo($form);
				} else{
					$('<img>')
						.attr('src', host.partners + 'defaultImage.jpg')
						.appendTo($form);
				};
				$('<label>')
					.html('Новый фон:')
					.appendTo($form);
				var backgroundLoader = $('<input type="file" name="background" >')
					.appendTo($form);
				var $buttonSubmit = $('<button type="submit">')
					.html('Сохранить')
					.appendTo($form);
				var $buttonDelete = $('<button>')
					.html('Удалить')
					.on('click', {id: e.data.el.attr('data-id')}, function (e) {
						e.preventDefault();
						if (confirm('Вы действительно хотите удалить?')) {
							$.post(host.glob + 'api/partners/' + e.data.id + '/delete', null, function() {
								document.location.reload();
							})
						};
					})
					.appendTo($form);
				var $buttonClose = $('<button>')
					.html('Отмена')
					.on('click', function(e) {
						e.preventDefault();
						$('<div>').addClass('reload').appendTo($lightbox).animate({
							'opacity': 1
						}, function() {
							document.location.reload();
						})
					})
					.appendTo($form);
				$form.appendTo($lightbox);
				break;
			case 'progressEdit':
				$lightbox
					.addClass('progress');
				// console.log(e.data.el.attr('data-id'))
				var progressData = {};
				for (var i = 0; i < progress.length; i++) {
					if (progress[i].id == e.data.el.data('baseId')) {
						progressData.id = progress[i].id;
						progressData.album_id = progress[i].album_id;
						progressData.description = progress[i].description;
						progressData.image = progress[i].image;
						progressData.title = progress[i].title;
					};
				};
				var $form = $('<form id="lightForm" enctype="multipart/form-data" method="post" action="' + host.glob + 'api/albums/progress/photo/' + progressData.id + '/update' + '">');
				var $inputTitle = $('<input name="title">')
					.addClass('textSmall')
					.val(progressData.title)
					.appendTo($form);
				var $inputDesc = $('<textarea name="description">')
					.addClass('textSmall')
					.html(progressData.description)
					.appendTo($form);
				$('<img>')
					.attr('src', host.albums + progressData.image)
					.appendTo($form);
				var backgroundLoader = $('<input type="file" name="image" >')
					.appendTo($form);
				var $buttonSubmit = $('<button type="submit">')
					.html('Сохранить')
					.appendTo($form);
				var $buttonDelete = $('<button>')
					.html('Удалить')
					.on('click', {id: e.data.el.data('baseId')}, function (e) {
						e.preventDefault();
						if (confirm('Вы действительно хотите удалить?')) {
							$.post(host.glob + 'api/albums/' + e.data.id + '/delete', null, function() {
								document.location.reload();
							})
						};
					})
					.appendTo($form);
				var $buttonClose = $('<button>')
					.html('Отмена')
					.on('click', function(e) {
						e.preventDefault();
						$('<div>').addClass('reload').appendTo($lightbox).animate({
							'opacity': 1
						}, function() {
							document.location.reload();
						})
					})
					.appendTo($form);
				$form
					.on('submit', function(e) {
						if (!$inputTitle.val()) {
							e.preventDefault();
							$inputTitle.css({
								'border': '2px solid red',
								'paddingTop': '9px'
							});
							alert('Введите название слайда');
						} else {
							$inputTitle.css({
								'border': '1px solid black',
								'paddingTop': '10px'
							});
						};
						if (!$inputDesc.val()) {
							e.preventDefault();
							$inputDesc.css({
								'border': '2px solid red',
								'paddingTop': '9px'
							});
							alert('Введите описание слайда');
						} else {
							$inputDesc.css({
								'border': '1px solid black',
								'paddingTop': '10px'
							});
						};
					})
					.appendTo($lightbox);
				break;
			case 'progressAdd':
				$lightbox
					.addClass('progress');
				// console.log(e.data.el.attr('data-id'))
				var $form = $('<form id="lightForm" enctype="multipart/form-data" method="post" action="' + host.glob + 'api/albums/progress/upload' + '">');
				var $inputTitle = $('<input name="title">')
					.addClass('textSmall')
					.attr('placeholder', 'Название слайда')
					.appendTo($form);
				var $inputDesc = $('<textarea name="description">')
					.attr('placeholder', 'Описание слайда')
					.addClass('textSmall')
					.appendTo($form);
				var backgroundLoader = $('<input type="file" name="image" >')
					.appendTo($form);
				var $buttonSubmit = $('<button type="submit">')
					.html('Сохранить')
					.appendTo($form);
				var $buttonClose = $('<button>')
					.html('Отмена')
					.on('click', function(e) {
						e.preventDefault();
						$('<div>').addClass('reload').appendTo($lightbox).animate({
							'opacity': 1
						}, function() {
							document.location.reload();
						})
					})
					.appendTo($form);
				$form
					.on('submit', function(e) {
						if (!$inputTitle.val()) {
							e.preventDefault();
							$inputTitle.css({
								'border': '2px solid red',
								'paddingTop': '9px'
							});
							alert('Введите название слайда');
						} else {
							$inputTitle.css({
								'border': '1px solid black',
								'paddingTop': '10px'
							});
						};
						if (!$inputDesc.val()) {
							e.preventDefault();
							$inputDesc.css({
								'border': '2px solid red',
								'paddingTop': '9px'
							});
							alert('Введите описание слайда');
						} else {
							$inputDesc.css({
								'border': '1px solid black',
								'paddingTop': '10px'
							});
						};
						if (!backgroundLoader.val()) {
							e.preventDefault();
							backgroundLoader.css({
								'border': '2px solid red',
								'paddingTop': '9px'
							});
							alert('Выберите изображение слайда');
						} else {
							backgroundLoader.css({
								'border': '1px solid black',
								'paddingTop': '10px'
							});
						};
					})
					.appendTo($lightbox);
				// here
				break;
			case 'textPortfolio':
				$lightbox
					.addClass('progress');
				// console.log(e.data.el.attr('data-id'))
				// alert()
				var portfolioData = {};
					// console.log(portfolios.length)
				for (var i = 0; i < portfolios.length; i++) {
					// console.log(e.data.el.data('baseId'))
					// console.info(portfolios[i].id)
					if (portfolios[i].id == e.data.el.data('baseId')) {
						portfolioData.id = portfolios[i].id;
						portfolioData.alias = portfolios[i].alias;
						portfolioData.cover = portfolios[i].cover;
						portfolioData.description = portfolios[i].description;
						portfolioData.photos = portfolios[i].photos;
						portfolioData.snip = portfolios[i].snip;
						portfolioData.title = portfolios[i].title;
					};
				};
				var $form = $('<form id="lightForm" enctype="multipart/form-data" method="post" action="' + host.glob + 'api/portfolios/' + portfolioData.id + '/update' + '">');
				var $inputHeader = $('<input name="title">')
					.addClass('textSmall')
					.val(portfolioData.title)
					.appendTo($form);
				var $inputSnippet = $('<input name="snip">')
					.addClass('textSmall')
					.val(portfolioData.snip)
					.appendTo($form);
				var $inputDesc = $('<textarea name="description">')
					.addClass('textSmall')
					.html(portfolioData.description)
					.appendTo($form);
				var $buttonSubmit = $('<button type="submit">')
					.html('Сохранить')
					.appendTo($form);
				var $buttonClose = $('<button>')
					.html('Отмена')
					.on('click', function(e) {
						e.preventDefault();
						$('<div>').addClass('reload').appendTo(portfolioLightbox.lightbox).animate({
							'opacity': 1
						}, function() {
							document.location.reload();
						})
					})
					.appendTo($form);
				$form
					.on('submit', function(e) {
						if (!$inputHeader.val()) {
							e.preventDefault();
							$inputHeader.css({
								'border': '2px solid red'
							})
							alert('Введите название портфолио');
						} else {
							$inputHeader.css({
								'border': '1px solid #000'
							})
						};
						if (!$inputDesc.val()) {
							e.preventDefault();
							$inputDesc.css({
								'border': '2px solid red'
							})
							alert('Введите описание портфолио');
						} else {
							$inputDesc.css({
								'border': '1px solid #000'
							})
						};
					})
					.appendTo($lightbox);
				break;
			case 'imagesParallax':
				$lightbox
					.addClass('parallax');
				console.log(e.data.el.attr('data-id'))
				// alert()
				var $form = $('<form id="lightForm" enctype="multipart/form-data" method="post" action="' + host.glob + 'api/portfolios/' + e.data.el.data('baseId') + '/update' + '">');
				var $buttonAddFirstImage = $('<input type="file" name="files[]" multiple >')
					.appendTo($form);
				var $buttonAddSecondImage = $('<input type="file" name="files[]" multiple >')
					.appendTo($form);
				var $buttonAddThirdImage = $('<input type="file" name="files[]" multiple >')
					.appendTo($form);
				var $buttonSubmit = $('<button type="submit">')
					.html('Сохранить')
					.appendTo($form);
				var $buttonClose = $('<button>')
					.html('Отмена')
					.on('click', function(e) {
						e.preventDefault();
						$('<div>').addClass('reload').appendTo(portfolioLightbox.lightbox).animate({
							'opacity': 1
						}, function() {
							document.location.reload();
						})
					})
					.appendTo($form);
				$form.appendTo($lightbox);
				break;
			};
		}
	};
	return plg;
})();
admin.init();
