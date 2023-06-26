// Hero slider init
$('.js-main-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: false,
    autoplayTimeout: 10000,
    items: 1,
    navText: ['<svg version="1.1" width="25" height="25" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 492 492" style="enable-background:new 0 0 492 492;" xml:space="preserve"><path d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788C492,219.198,479.172,207.418,464.344,207.418z"/></svg>', '<svg version="1.1" width="25" height="25" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve"><path d="M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z"/></svg>'],
    dots: false,
    lazyLoad: true,
    responsive: {
        0: {
            items: 1,
            dots: true,
            nav: false,
        },
        1200: {
            items: 1,
            dots: false,
            nav: true,
        }
    }
});

// Courses slider init
$('.js-courses-slider').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    autoplay: true,
    autoplayTimeout: 10000,
    dots: true,
    items: 3,
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        992: {
            items: 3,
        }
    }
});

// Image Gallery Slider init
$('.js-gallery-slider').owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    autoplay: true,
    autoplayTimeout: 10000,
    dots: true,
    items: 5,
    responsive: {
        0: {
            items: 3,
        },
        576: {
            items: 3,
        },
        992: {
            items: 4,
        },
        1200: {
            items: 5,
        }
    }
});

// handle links with @href started with '#' only
$(document).on('click', '.js-scroll', function(e) {
    // target element id
    var id = $(this).attr('href');
    var headerHt = $('#mainNavbar').height();

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top - headerHt - 20;

    // animated top scrolling
    $('body, html').animate({ scrollTop: pos });

    $(".js-btn-close").trigger('click');
});

// Trigger offcanvas menu
$("[data-trigger]").on("click", function() {
    var trigger_id = $(this).attr('data-trigger');
    $(trigger_id).toggleClass("show");
    $('body').toggleClass("offcanvas-active");
});

// close button 
$(".js-btn-close").click(function(e) {
    $(".navbar-collapse").removeClass("show");
    $("body").removeClass("offcanvas-active");
});


// Sticky Menu Add Class
$(window).scroll(function() {
    var sticky = $('#mainNavbar'),
        scroll = $(window).scrollTop();

    if (scroll >= 95) sticky.addClass('is-fixed');
    else sticky.removeClass('is-fixed');
});

// Back to Top Jquery
$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        $('.js-top_btn').fadeIn()
    } else {
        $('.js-top_btn').fadeOut()
    }
});

$('.js-top_btn').on('click', function() {
    $('body,html').animate({
        scrollTop: 0
    }, 500)
});

$("#contactForm").on("submit", function(e) {

	var form = $(this)[0];
	var submitButton = $(this).find('button[type="submit"]');
	console.log('submitButton', submitButton);

	$(submitButton).text('Loading ...').prop('disabled', true);

	if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
	    form.classList.add('was-validated');
		submitButton.text('Inquire Us').prop('disabled', false);
	    return false;
    }

    var dataString = $(this).serialize();

    // alert(dataString); return false;

    $.ajax({
        type: "POST",
        url: "formmailer/mailer.php",
        data: dataString,
        success: function() {
            $("#contactForm").html("<div id='message' class='text-center'></div>");
            $("#message")
                .html("<h2>Thank you for contacting us!</h2>")
                .append("<p>We will be in touch soon.</p>")
                .hide()
                .fadeIn(1500);
        }
    });

    e.preventDefault();
});