
// wowjs
 new WOW().init();

function xulyxemthem(nutShow, nutClose, boxProduct) {
	// xu ly xem chi tiet product
	for (var i = 0; i < nutShow.length; i++) 
	{
		nutShow[i].onclick = function() 
		{
			var dataShow = this.getAttribute('data-show');
			var itemProduct = document.getElementById(dataShow);

			for (var k = 0; k < boxProduct.length; k++) 
			{
				boxProduct[k].style.display = 'none';
			}
			itemProduct.style.display = 'block';

			for (var ki = 0; ki < nutClose.length; ki++) 
			{
				nutClose[ki].onclick = function () 
				{
					itemProduct.style.display = 'none';
				}
			}
		}
	}
}
var nutShow = document.querySelectorAll('.products .box-img-text span.xemthem'),
	nutShow1 = document.querySelectorAll('.cacbox .box .box-text p span.xemthem'),
	nutClose = document.querySelectorAll('.products .chitiet > i'),
	nutClose1 = document.querySelectorAll('.cacbox .box .box-hidden > i'),
	boxProduct = document.querySelectorAll('.products .chitiet'),
	boxProduct1 = document.querySelectorAll('.cacbox .box .box-hidden');
	
xulyxemthem(nutShow, nutClose, boxProduct);
xulyxemthem(nutShow1, nutClose1, boxProduct1);

// xu ly slide 
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    autoplay: true,
    responsive:{
        0:{
            items:4
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
})
var collapse = document.querySelector('nav .collapse');
var nutLink = document.querySelectorAll('ul li.nav-item a.nav-link');
for (var i = 0; i < nutLink.length; i++) {
	nutLink[i].onclick = function () {
		collapse.classList.remove('show');
	}
} 
