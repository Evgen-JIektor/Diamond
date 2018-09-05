 $(document).ready(function () {

    /*--------------- главная полоса выбора брилианта ------*/
     
    $('.slider-search-diamond').slick({
      slidesToShow: 10,
      slidesToScroll: 1,
    });
     
     
     /*---------------карточка товара - слайдер -------------*/

         
    $('.menu-diamond-all').hover(function(){
        $('.menu-diamond').slideToggle("fast"); 
    });
    $('.menu-jewelry-all').hover(function(){
        $('.menu-jewelry').slideToggle("fast"); 
    });
     
     
    $('.slider-card-product').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.nav-slider-card-product'
    });
     
    $('.nav-slider-card-product').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider-card-product',
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      arrows: false
    });
     
     
     /*---------------карточка товара - металл ----------------------*/
     
     
     $('.color-product-card .items-color .item').click(function(){
         $('.color-product-card .items-color .item').removeClass('active');
         $(this).addClass('active');
      });   
         
     
    /*---------------карточка товара - размер ----------------------*/
     
     $('.size-product-card .items-size .item').click(function(){
         $('.size-product-card .items-size .item').removeClass('active');
         $(this).addClass('active');
     });
     
     
     /*---------------Форма бриллианта ----------------------*/
     
     $('.block-form-diamond .form-diamond').click(function(){
         $('.block-form-diamond .form-diamond').removeClass('active');
         $(this).addClass('active');
         var form_diamond = $(this).find('.name-diamond').html();
         $('.form-diamond-table').html(form_diamond);
     });
     
     
     /*---------------Размер в каратах ----------------------*/
     
     $('.block-calculator .block-size .item').click(function(){
         $('.block-calculator .block-size .item').removeClass('active');
         $(this).addClass('active');
         var size_diamond = $(this).find('.item-name').html();
         $('.size-diamond-table').html(size_diamond + 'карат');
     });
     
     
     /*---------------Цвет бриллианта----------------------*/
     
     $('.block-color .item').click(function(){
         $('.block-color .item .item-img').removeClass('active');
         $(this).find('.item-img').addClass('active');
         var color_diamond = $(this).find('.item-name').html();
         $('.color-diamond-table').html(color_diamond);
     });
     
     
     /*---------------Чистота бриллианта----------------------*/
     
      $('.block-purity .item').click(function(){
         $('.block-purity .item .item-img').removeClass('active');
         $(this).find('.item-img').addClass('active');
        var purity_diamond = $(this).find('.item-name').html();
         $('.purity-diamond-table').html(purity_diamond);
     });
     
     
     /*---------------Флюоресценция----------------------*/
     
     $('.block-flr-diamond .flr-diamond').click(function(){
         $('.block-flr-diamond .flr-diamond').removeClass('active');
         $(this).addClass('active');
         var flr_diamond = $(this).find('.item-text').html();
         $('.flr-diamond-table').html(flr_diamond);
     });
     
     
    /*---------------------------  ползунок цены в фильтре -------------------------------*/
     
     
    $("#slider-filter-price").slider({
        min: 0,
        max: 1000,
        values: [0,1000],
        range: true,
        stop: function(event, ui) {
            $("input#minCost-1").val($("#slider-filter-price").slider("values",0));
            $("input#maxCost-1").val($("#slider-filter-price").slider("values",1));
        },
        slide: function(event, ui){
            $("input#minCost-1").val($("#slider-filter-price").slider("values",0));
            $("input#maxCost-1").val($("#slider-filter-price").slider("values",1));
        }
    });

    $("input#minCost-1").change(function(){
        var value1=$("input#minCost-1").val();
        var value2=$("input#maxCost-1").val();

        if(parseInt(value1) > parseInt(value2)){
            value1 = value2;
            $("input#minCost").val(value1);
        }
        $("#slider-filter-price").slider("values",0,value1);	
    });


    $("input#maxCost-1").change(function(){
        var value1=$("input#minCost-1").val();
        var value2=$("input#maxCost-1").val();

        if (value2 > 1000) { value2 = 1000; jQuery("input#maxCost-1").val(1000)}

        if(parseInt(value1) > parseInt(value2)){
            value2 = value1;
            $("input#maxCost-1").val(value2);
        }
        $("#slider-filter-price").slider("values",1,value2);
    });


     $("#slider-filter-price").slider("values",0, 0);
     
  /*----------------------------  ползунок карта в фильтре -----------------------------*/
     
     
    $("#slider-filter-carat").slider({
        min: 0,
        max: 1000,
        values: [0,1000],
        range: true,
        stop: function(event, ui) {
            $("input#minCost-2").val($("#slider-filter-carat").slider("values",0));
            $("input#maxCost-2").val($("#slider-filter-carat").slider("values",1));
        },
        slide: function(event, ui){
            $("input#minCost-2").val($("#slider-filter-carat").slider("values",0));
            $("input#maxCost-2").val($("#slider-filter-carat").slider("values",1));
        }
    });

    $("input#minCost-2").change(function(){
        var value1=$("input#minCost-2").val();
        var value2=$("input#maxCost-2").val();

        if(parseInt(value1) > parseInt(value2)){
            value1 = value2;
            $("input#minCost-2").val(value1);
        }
        $("#slider-filter-carat").slider("values",0,value1);	
    });


    $("input#maxCost-2").change(function(){
        var value1=$("input#minCost").val();
        var value2=$("input#maxCost").val();

        if (value2 > 1000) { value2 = 1000; jQuery("input#maxCost-2").val(1000)}

        if(parseInt(value1) > parseInt(value2)){
            value2 = value1;
            $("input#maxCost-2").val(value2);
        }
        $("#slider-filter-carat").slider("values",1,value2);
    });


    $("#slider-filter-carat").slider("values",0, 0);
     

    /*-----------------------------------  ползунок среза в фильтре ----*/     
     
     
    $("#slider-filter-shearing").slider({
        min: 0,
        max: 4,
        values: [0,4],
        range: true

    });  
     
    $("#slider-filter-shearing").slider("values",0, 0);
     
     
   /*----------------------------------  ползунок цвета в фильтре ------*/    
     
     
    $("#slider-filter-color").slider({
        min: 0,
        max: 7,
        values: [0,7],
        range: true

    });  
     
    $("#slider-filter-color").slider("values",0, 0);
     
     
   /*----------------------------------  ползунок чмстоты в фильтре -------*/
     
     
    $("#slider-filter-purity").slider({
        min: 0,
        max: 8,
        values: [0,8],
        range: true

    });  
     
    $("#slider-filter-purity").slider("values",0, 0);
     
     
   /*-------------------------------------выбор формы камня в фильтре-------*/ 
     
     
     $('.block-filter .item .icon-block').click(function(){
         $('.block-filter .item .icon-block').removeClass('active');
         $(this).addClass('active');
     });
     
     
    /*--------------------------- разворачивание фильтра ------------------*/      
     
     
     $('.button-filter').click(function(){
         $('.block-filter').slideToggle();
     });
   

});



