document.querySelectorAll('.sub-block-header').forEach((el) => el.addEventListener("click", (e) => {
	if(e.target.classList.contains('active')){
		e.target.classList.remove('active')
	}else{
		e.target.classList.add('active')
	}
}));

document.querySelector('.open-menu').addEventListener("click", () => {
	switchMenu();
});

document.querySelector('.close-menu').addEventListener("click", (e) => {
	switchMenu();
});

document.querySelector('.overflow-block').addEventListener("click", (e) => {
	switchMenu();
});

function switchMenu(){
	if(document.querySelector('.open-menu').classList.contains('active')){
		document.querySelector('.open-menu').classList.remove('active');
		document.querySelector('.close-menu').classList.remove('active');
		document.querySelector('.mobile-menu-block').classList.remove('active');
		document.querySelector('.mobile-menu-sub-block').classList.remove('active');
		document.querySelector('body').classList.remove('overflowed');
		document.querySelector('.overflow-block').classList.remove('active');
	}else{
		document.querySelector('.open-menu').classList.add('active');
		document.querySelector('.close-menu').classList.add('active');
		document.querySelector('.mobile-menu-block').classList.add('active');
		document.querySelector('.mobile-menu-sub-block').classList.add('active');
		document.querySelector('body').classList.add('overflowed');
		document.querySelector('.overflow-block').classList.add('active');
	}
}	

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.up-button').fadeIn();
    } else {
        $('.up-button').fadeOut();
    }
});

$('.search-button').click(()=>{
	$('.search-panel-block').slideToggle();
})

$('.up-button').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});

$(function() {
	if (typeof Swiper === 'function') {
		const swipers = {};
		$( ".swiper" ).each(function(index) {
			let _swiper = $(this),
			_parent = _swiper.parent(),
			id = _swiper.data('id');

			if (_swiper.hasClass('swiper-banner')) {
				swipers[`id${id}`] = new Swiper(`.swiper-banner`, {
					centeredSlides:true,
					centerInsufficientSlides:true,
					centeredSlidesBounds:true,
					slidesPerView: 1,
					pagination: {
						el: '.swiper-pagination',
					},
							    // Navigation arrows
					navigation: {
						nextEl: '.swiper-next',
						prevEl: '.swiper-prev',
					},
					autoplay:true,
					loop:true,
					pagination: {
				        el: ".swiper-pagination",
				        clickable: true,
				        renderBullet: function (index, className) {
				          return '<span class="' + className + '">' + "</span>";
				        },
				    }    
				});
			} else if (_swiper.hasClass('swiper-vendor')) {
				swipers[`id${id}`] = new Swiper(`[data-id="${id}"]`, {
					slidesPerView: 2,
					  spaceBetween: 11,
					  // using "ratio" endpoints
					  breakpoints: {
				    // when window width is >= 320px
					    320: {
					      slidesPerView: 2,
					      spaceBetween: 20
					    },
					    // when window width is >= 480px
					    480: {
					      slidesPerView: 3,
					      spaceBetween: 30
					    },
					    // when window width is >= 640px
					    640: {
					      slidesPerView: 4,
					      spaceBetween: 40
					    }
					  }
				});
			}else if (_swiper.hasClass('swiper-card')) {
				swipers[`id${id}`] = new Swiper(`[data-id="${id}"]`, {
					slidesPerView: 'auto',
				});
			}else if (_swiper.hasClass('mobile-swiper')) {
				if ($(window).width() <= 743) {
					swipers[`id${id}`] = new Swiper(`[data-id="${id}"]`, {
						spaceBetween: 11,
						slidesPerView: 2,
						pagination: {
							el: '.swiper-pagination',
						},
						    // Navigation arrows
						navigation: {
							nextEl: '.swiper-next',
							prevEl: '.swiper-prev',
						},
						autoplay:true
					});
				}
			} else {
				swipers[`id${id}`] = new Swiper(`[data-id="${id}"]`, {
					slidesPerView: 'auto',
					loop:true,
					pagination: {
						el: '.swiper-pagination',
					},
					    // Navigation arrows
					navigation: {
						nextEl: '.swiper-next',
						prevEl: '.swiper-prev',
					},
					autoplay:true
				});
			}				

		});

		$(window).on('load resize orientationchange', function() {
			$('.swiper').each(function(){
				let $carousel = $(this),
				id = $carousel.data('id');
		            /* Initializes a swiper carousel only on mobile screens */
		            // swiper on mobile
				if($carousel.hasClass('mobile-swiper')){
					if ($(window).width() > 743) {
						if ($carousel.hasClass('swiper-initialized')) {
							swipers[`id${id}`].destroy();
						}
					}
					else{
						if (!$carousel.hasClass('swiper-initialized')) {
							swipers[`id${id}`] = new Swiper(`[data-id="${id}"]`, {
								slidesPerView: 2,
							});
						}
					}
				}
			});
		});
	}
});		