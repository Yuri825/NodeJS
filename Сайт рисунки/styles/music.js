let audio = new Audio();
let souns = document.querySelectorAll('.soun');

$('.soun').click(function() {
	$(this).toggleClass('on');
	if($('.soun').hasClass('on')) {
			
		audio.src = '../music/' + this.dataset.path + '.mp3';
		 audio.autoplay = true;

		 for(let but of souns) {
			if(but.classList.contains('on')) {
				but.disabled = false;
			} else {
				but.disabled = true;
			}
		}
	} else {
		audio.src = '';
		for(let but of souns) {
			but.disabled = false;
		}
	}
});