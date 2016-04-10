$(window).load(function(){

    
    //slider-products

    $('.product-slider').owlCarousel({
        items: 5,
        margin: 0,
        nav: false,
        mouseDrag: false,
        dots: false,
        responsive:{
            0:{
                items: 2,
                nav: true,
                dots: true
            },
            550:{
                items: 3,
                nav: true,
                dots: true
            },
            768:{
                items: 4
            },
            1200:{
                items: 5
            }
        }
    });

    //slider-sections-products

    $('.section-product-slider').owlCarousel({
        items: 4,
        margin: 0,
        nav: false,
        mouseDrag: false,
        dots: false,
        responsive:{
            0:{
                items: 2,
                nav: true,
                dots: true
            },
            768:{
                items: 3
            },
            1200:{
                items: 4
            }
        }
    });

    //product img thumbs

    $('.product-content-top-gallery-thumbs-list').owlCarousel({
        items: 4,
        margin: 0,
        nav: false,
        mouseDrag: false,
        nav: true,
        dots: false,
        responsive:{
            768:{
                items: 3
            },
            1200:{
                items: 4
            }
        }
    });

    









});



$(function(){

    // response content

    $('.layout-header').each(function(index, el) {
        var tel = $('.header-middle .header-middle_tels-num').text();
        $('.header-top-content-tell-small .header-middle_tels-num').text(tel);
        var call = $('.header-middle .header-middle_tels-link').clone();
        $('.header-top-content-call-button-small').append(call);
    });

    $('.front-product-sections-content-tabs').each(function(index, el) {
        var title = $(this).find('.front-product-sections-content-tabs_but.active').text();
        $(this).find('.front-product-sections-content-tabs_title-small').text(title);
    });

    $('.js-section-product-but').click(function(event) {
        $(this).closest('.front-product-sections-content-tabs').removeClass('active');
        var title = $(this).text();
        $(this).closest('.front-product-sections-content-tabs-content-small').siblings('.front-product-sections-content-tabs_title-small').text(title);
    });

    $('.front-product-sections-content-tabs_title-small').click(function(event) {
        $(this).closest('.front-product-sections-content-tabs').toggleClass('active');
    });

    $('.front-blog-content').each(function(index, el) {
        var link = $(this).find('.front-blog-content-text_link').clone();
        $(this).append(link);
    });

    $('.product-top-filters').each(function(index, el) {
        var view = $(this).find('.product-top-filters-list-views').clone();
        $('.catalog-filter-small-top').append(view);
    });

    $('.catalog-content-sidebar-filters').each(function(index, el) {
        var filters = $(this).clone();
        $('.js-cat-small-drop-filters').append(filters);
    });

    $('.js-cat-small-drop-filters .catalog-content-sidebar-filters_panel').addClass('closed');

    $('.product-content-top-info').each(function(index, el) {
        var rating = $(this).find('.product-content-top-info-main-title-rating-rate').clone();
        $(this).find('.product-content-top-info-main_code').after(rating);        
    });


    $('.product-content-bottom').each(function(index, el) {
        var revTitle = $(this).find('.product-content-bottom-head-reviews_title').text();
        $(this).find('.js-tab-reviews-but').text(revTitle);
        var revContent = $(this).find('.product-content-bottom-content-reviews').clone();
        $(this).find('.js-product-tab-rev-content').append(revContent);
    });

    $('.js-tab-reviews-but').click(function(event) {
        $('.product-content-bottom-head-reviews').addClass('active');
    });

    $('.js-product-tab-but:not(.js-tab-reviews-but)').click(function(event) {
        $('.product-content-bottom-head-reviews').removeClass('active');
    });

    $('.product-content').each(function(index, el) {
        var tabButton1 = $(this).find('.js-product-tab-but-1').text();
        var tabButton2 = $(this).find('.js-product-tab-but-2').text();
        var tabButton3 = $(this).find('.js-product-tab-but-3').text();
        var tabText1 = $(this).find('.js-product-tab-box-1').html();
        var tabText2 = $(this).find('.js-product-tab-box-2').html();
        //console.log(tabText1,tabText2)
        $(this).find('.js-product-small-tab-button-1').text(tabButton1);
        $(this).find('.js-product-small-tab-button-2').text(tabButton2);
        $(this).find('.js-product-small-tab-button-3').text(tabButton3);
        $(this).find('.js-product-small-tab-text-1').html(tabText1);
        $(this).find('.js-product-small-tab-text-2').html(tabText2);
    });

    $('.open-blog-content').each(function(index, el) {
        var title = $(this).siblings('.blog-title').clone();
        var created = $(this).siblings('.blog-created').clone();
        $(this).find('.open-blog-content_small-title').append(title, created);
    });

    enquire.register("screen and (max-width: 767px)", {

        deferSetup : true,

        match : function() {

            fullMainBlog = $('.main-blog-info .front-blog-content-text_link');
            fullMainBlog.remove();
            $('.main-blog_img').after(fullMainBlog);      

        },
        unmatch : function() {

            $('.main-blog_img + .front-blog-content-text_link').remove();
            $('.main-blog-info').append(fullMainBlog);
            
        }  

    });

    enquire.register("screen and (max-width: 767px)", {

        deferSetup : true,

        match : function() {

            $('.blog-list-item').each(function(index, el) {
                full = $(this).find('.blog-list-item-bottom .blog-list-item-bottom_created');
                $(this).find('.blog-list-item_title').after(full); 
            });

                 

        },
        unmatch : function() {
            
            $('.blog-list-item').each(function(index, el) {
                full = $(this).find('.blog-list-item_title + .blog-list-item-bottom_created');
                $(this).find('.blog-list-item_title + .blog-list-item-bottom_created').remove();
                $(this).find('.blog-list-item-bottom').prepend(full);
            });
            
        }  

    });










	//langs dropdown

	$('.header-top-content_langs-current').click(function(event) {
		$(this).closest('.header-top-content_langs').toggleClass('active fadeIn');
	});

	//search dropdown

	$('.header-middle_search-cats-button').click(function(event) {
		$(this).closest('.header-middle_search-cats').toggleClass('active');
	});

    $('.header-middle_search-cats-dropdown_item').click(function(event) {
    	var curSection = $(this).text();
    	$(this).closest('.header-middle_search-cats').find('.header-middle_search-cats-button').text(curSection);
		$(this).closest('.header-middle_search-cats').removeClass('active');
	});

	//top section dropdown

	$('.header-bottom_category-menu-button').click(function(event) {
		$(this).closest('.header-bottom_category-menu').toggleClass('active');
	});

	//front-slider

	$('.front-slider-content-slider').bxSlider({
		controls: false,
		infiniteLoop: false,
	    pagerCustom: '.front-slider-content-thumbs'
	});

	//add fav product

	$('.product-list-item_add-fav').click(function(event) {
		$(this).toggleClass('active');
	});

	// catalog filter active link

	$('.catalog-content-sidebar-filters-list_link').click(function(event) {
		$(this).toggleClass('active');
	});

	//catalog filter hide panel

	$('.catalog-content-sidebar-filters_title').click(function(event) {
		$(this).closest('.catalog-content-sidebar-filters_panel').toggleClass('closed');
	});

	//select style

	$(".form-select").chosen({
	    disable_search: true,
	    width: "100%"
	});

	//product img zoom

	$(".zoom-img").elevateZoom({
        gallery:'zoom-thumbs', cursor: 'pointer',
        galleryActiveClass: 'active',
        imageCrossfade: true
    });

    //other colors popup

    $('.js-more-colors-popup').click(function(event) {
        event.stopPropagation();
    });    

    $('.js-more-colors-but').click(function(event) {
        $('.js-more-colors-popup').toggleClass('active');
        return false;
    });

    $('body').click(function(event) {
        $('.js-more-colors-popup').removeClass('active');
    });

    //one click popup

    $('.js-one-click-popup').click(function(event) {
        event.stopPropagation();
    });    

    $('.js-one-click-button').click(function(event) {
        $(this).toggleClass('active');
        $('.js-one-click-popup').toggleClass('active');
        return false;
    });

    $('body').click(function(event) {
        $('.js-one-click-popup, .js-one-click-button').removeClass('active');
    });

    //product info tabs

    $('.product-content-bottom-head-tabs').delegate('.js-product-tab-but:not(.active)', 'click', function() {
      $(this).addClass('active').siblings().removeClass('active').closest('.product-content-bottom').find('.js-product-tab-box').eq($(this).index()).fadeIn(200).siblings('.js-product-tab-box').hide();
    });

    //review rating

    $('#example-f').barrating({
        wrapperClass: 'br-wrapper-f',
        showSelectedRating: false
    });

    // add review popup

    $('.js-add-review-popup').click(function(event) {
        event.stopPropagation();
    });    

    $('.js-add-review-but').click(function(event) {
        $(this).toggleClass('active');
        $('.js-add-review-popup').toggleClass('active');
        return false;
    });

    $('body, .js-add-review-cancel').click(function(event) {
        $('.js-add-review-but, .js-add-review-popup').removeClass('active');
    });

    //product counts

    $('.js-counts-but-down').click(function () {
        var $input = $(this).siblings('.js-counts-field');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.js-counts-but-up').click(function () {
        var $input = $(this).siblings('.js-counts-field');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    //product info puopups

    $('.js-product-info-popup').click(function(event) {
        event.stopPropagation();
    }); 

    $('.js-product-info-but-1').click(function(event) {
        $(this).toggleClass('active').closest('.product-content-top-payment-box').siblings('.product-content-top-payment-box').find('.js-product-info-but').removeClass('active');
        $('.js-product-info-popup-1').toggleClass('active').siblings('.js-product-info-popup ').removeClass('active');
        return false;
    });
    $('.js-product-info-but-2').click(function(event) {
        $(this).toggleClass('active').closest('.product-content-top-payment-box').siblings('.product-content-top-payment-box').find('.js-product-info-but').removeClass('active');
        $('.js-product-info-popup-2').toggleClass('active').siblings('.js-product-info-popup ').removeClass('active');
        return false;
    });
    $('.js-product-info-but-3').click(function(event) {
        $(this).toggleClass('active').closest('.product-content-top-payment-box').siblings('.product-content-top-payment-box').find('.js-product-info-but').removeClass('active');
        $('.js-product-info-popup-3').toggleClass('active').siblings('.js-product-info-popup ').removeClass('active');
        return false;
    });
    $('.js-product-info-but-4').click(function(event) {
        $(this).toggleClass('active').closest('.product-content-top-payment-box').siblings('.product-content-top-payment-box').find('.js-product-info-but').removeClass('active');
        $('.js-product-info-popup-4').toggleClass('active').siblings('.js-product-info-popup ').removeClass('active');
        return false;
    });

    $('.js-product-info-popup-closed, body').click(function(event) {
        $('.js-product-info-popup, .js-product-info-but').removeClass('active');
    });

    //login/reg popup

    $('.js-login-reg-popup').click(function(event) {
        event.stopPropagation();
    }); 

    $('.js-login-reg-but').click(function(event) {
       $('.js-login-reg').toggleClass('active');
       return false;
    });

    $('body').click(function(event) {
        $('.js-login-reg').removeClass('active');
    });

    //tels popup

    $('.js-tels-popup').click(function(event) {
        event.stopPropagation();
    }); 

    $('.js-tels-but').click(function(event) {
       $('.js-tels-box').toggleClass('active');
       return false;
    });

    $('body').click(function(event) {
        $('.js-tels-box').removeClass('active');
    });

    //product change colors

    $('.product-content-top-info').each(function(index, el) {
       var name = $(this).find('.js-pr-color-but.active').attr('data-color');
       var img = $(this).find('.js-pr-color-but.active').attr('data-img');
       $(this).find('.js-pr-color-name').text(name);
       $(this).find('.js-pr-color-current').attr('src', img);
    });

    $('.js-pr-color-but').click(function(event) {
        $(this).addClass('active');
        $('.js-pr-color-but').not(this).removeClass('active');
        var name = $(this).attr('data-color');
        var img = $(this).attr('data-img');
        $('.js-pr-color-name').text(name);
        $('.js-pr-color-current').attr('src', img);
    });

    //sections product tabs

    $('.front-product-sections-content-tabs').delegate('.js-section-product-but:not(.active)', 'click', function() {
      $(this).addClass('active').siblings().removeClass('active').closest('.front-product-sections-content').find('.js-section-product-box').eq($(this).index()).addClass('active').siblings('.js-section-product-box').removeClass('active');
    });

    //hover fade

    $('.front-blog-content-text_link, .sections-sort-view-all_link').hover(function() {
        $(this).addClass('fadeIn');
    }, function() {
        $(this).removeClass('fadeIn');
    });

    //cart product remove

    $('.js-cart-product-remove').click(function(event) {
        $(this).closest('.cart-content-list-product').fadeOut('200', function() {
            $(this).remove();
        });
    });

    //clear cart all

    $('.js-clear-cart-all').click(function(event) {
        $('.cart-content-list, .cart-content-labels').fadeOut('200', function() {
            $(this).remove();
        });
    });

    //delete compare item
    $(".js-compare-remove").click(function () {
        var i = $(this).closest(".compare-content-cell").index();
        var productsCount = $(this).closest('.compare-content-row').find('.compare-content-cell').length;
        $(".compare-content-row").each(function (index, element) {
            $(this).find(".compare-content-cell").eq(i).fadeOut(300, function () {
                $(this).remove();
            });
        });
        if (productsCount <= 2) {
            $(this).closest('.compare-content').fadeOut(300);
        }
        return false;
    });

    //checkout form tabs

    $('.checkout-content-user-tabs').delegate('.checkout-content-user-tabs_button:not(.active)', 'click', function() {
      $(this).addClass('active').siblings().removeClass('active').closest('.checkout-content-user').find('.checkout-content-user-box').eq($(this).index()).fadeIn(200).siblings('.checkout-content-user-box').hide();
    });

    //tels inputmask

    $('.checkout-content-user').each(function(index, el) {
        $(".js-tel-code").inputmask("(999)");
        $(".js-tel-number").inputmask("9999999");
    });


    //call popup
    
    $('.js-call-popup').click(function(event) {
        event.stopPropagation();
    }); 

    $('.js-call-but').click(function(event) {
       event.preventDefault();
       $('.js-call-popup').toggleClass('active');
       return false;
    });

    $('body').click(function(event) {
        $('.js-call-popup').removeClass('active');
    });

    //checkout poduct list wrapper

    $('.js-checkout-products').each(function(index, el) {
        var divs = $(this).find('> div'),
        k = 0,
        cntInGroup = 3; // elemets counts

        divs.each(function(i){
            if(i % cntInGroup == 0){
                k++;
            }
            $(this).addClass('tmp' + k);
        });
        for(i = 1; i <= divs.length + 1 / cntInGroup; i++){
            $('.tmp' + i).wrapAll('<div class="product-wrapper"></div>');
        }
    });

    //checkout products slider

     $('.js-checkout-products').each(function(index, element) {
        if($(this).find('.product-wrapper').length > 1){
          $(this).owlCarousel({
                items: 1,
                margin: 0,
                nav: true,
                mouseDrag: false,
                dots: true
            });
        }
    });

    // small menu sections open

    $('.js-small-menu-section-button').click(function(event) {
        event.preventDefault();
        var href = $(this).attr('href');
        var title = $(this).text();
        var menu = $(this).next('.dropdown-menu-small-menu-item-submenu').clone();
        $('.dropdown-menu-small').addClass('section-view');
        $('.js-small-menu-current-section-link').attr('href', href).text(title);
        $('.js-small-menu-section-current-menu').append(menu);
    });

    $('.js-small-menu-section-back').click(function(event) {
        $('.js-small-menu-section-current-menu').find('nav').remove();
        $('.dropdown-menu-small').removeClass('section-view');
    });

    // small menu open

    $('.header-middle_smart-menu-button').click(function(event) {
        $('.dropdown-menu-small').toggleClass('open');
        $('.snall-menu-overlay').toggleClass('visible');
    });

    // catalog small sort link active

    $('.catalog-filter-small-dropdown-sort_link').click(function(event) {
        $(this).toggleClass('active');
    });

    // catalog small filters open

    $('.js-cat-small-button-filters').click(function(event) {
        $(this).toggleClass('active');
        $(this).siblings('div').removeClass('active');
        $('.js-cat-small-drop-filters').toggleClass('active');
        $('.js-cat-small-drop-sort').removeClass('active');
    });

    $('.js-cat-small-button-sort').click(function(event) {
        $(this).toggleClass('active');
        $(this).siblings('div').removeClass('active');
        $('.js-cat-small-drop-sort').toggleClass('active');
        $('.js-cat-small-drop-filters').removeClass('active');
    });

    $('.js-cat-filter-closed-but').click(function(event) {
        $(this).closest('.catalog-filter-small-dropdown').removeClass('active');
        $('.catalog-filter-small-top-buttons_but').removeClass('active');
    });

    //small product tabs

    $('.js-product-small-tab-button').click(function(event) {
        $(this).closest('.product-content-bottom-small-box').toggleClass('active');
        $(this).closest('.product-content-bottom-small-box').siblings('div').removeClass('active');
    });








    


    









    

























});


