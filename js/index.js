
// wowjs
 new WOW().init();

// xu ly xem chi tiet product
var nutShow = document.querySelectorAll('.products .box-img-text span.xemthem'),
	nutClose = document.querySelectorAll('.products .chitiet > i'),
	boxProduct = document.querySelectorAll('.products .chitiet');

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

// xu ly slide 
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    // autoplay: true,
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
