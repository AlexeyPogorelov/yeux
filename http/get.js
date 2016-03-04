	/* GET PORTFOLIOS */
var progress, partners, portfolios, snippets, albums;
var loadingProgress = {
	'status': 0,
	loaded: function() {
		if (++this.status == 5) {
			// alert()
			if (admin.addEditButton) {
				admin.addEditButton();
			};
		};
	}
};
$(document).ready(function() {
	$.get(host.glob + 'api/snippets', null, function (data) {
		snippets = data;
		admin.updateContent(snippets);
		loadingProgress.loaded();
	});
	$.get(host.glob + 'api/albums/intro-gallery/show', null, function (data) {
		albums = data;
		admin.updateImages(albums);
		loadingProgress.loaded();
	});
	$.get(host.glob + 'api/portfolios', null, function (data) {
		portfolios = data;
		lexPortfolio.init(portfolios);
		loadingProgress.loaded();
	});
	$.get(host.glob + 'api/partners', null, function (data) {
		partners = data;
		partnersHover(partners);
		loadingProgress.loaded();
	});
	$.get(host.glob + 'api/albums/progress/show', null, function (data) {
		progress = data;
		lexSlider.init(progress);
		loadingProgress.loaded();
	});
})

var defImage = 'defaultImage.jpg';
var host = {};
host.glob = 'http://yeux.1gb.ua/';
host.portfolioThumbs = host.glob + 'uploads/portfolio/thumbs/';
host.portfolioOriginals = host.glob + 'uploads/portfolio/originals/';
host.partners = host.glob + 'uploads/partners/';
host.albums = host.glob + 'uploads/albums/';

var lang = {
	"prevPortfolio": ['Previous project', 'Предыдущий проект', 'Попереднiй проект'],
	"nextPortfolio": ['Next project', 'Следующий проект', 'Наступний проект'],
	"moveMouseToPartner": ['Move mouse under logo for more information', 'Наведите курсор на один из логотипов для вывода информации о наших партнерах', 'Наведiть курсор на один iз логотипiв для виводу  iнформацiї о наших партнерах']
}