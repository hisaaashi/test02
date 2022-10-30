$(function() {



  // #から始まるURLがクリックされた時
  jQuery('a[href^="#"]').click(function() {
    // .headerクラスがついた要素の高さを取得
    let header = jQuery(".header").innerHeight();
    let speed = 300;
    let id = jQuery(this).attr("href");
    let target = jQuery("#" == id ? "html" : id);
    // トップからの距離からヘッダー分の高さを引く
    let position = jQuery(target).offset().top - header;
    // その分だけ移動すればヘッダーと被りません
    jQuery("html, body").animate(
      {
        scrollTop: position
      },
      speed
    );
    return false;
  });


  // スクロール検知
  jQuery(window).on("scroll", function() {
    // トップから100px以上スクロールしたら
    if (100 < jQuery(this).scrollTop()) {
      // is-showクラスをつける
  jQuery('.to-top').addClass( 'is-show' );
    } else {
      // 100pxを下回ったらis-showクラスを削除
    jQuery('.to-top').removeClass( 'is-show' );
    }
  });

  // ヘッダーナビアンダーバー
  // jQuery('.header__inner ul li a').click(function() {
  //   jQuery('.header__inner ul li a').removeClass( 'is-active' );
  //   jQuery(this).addClass( 'is-active' );
  //   return false;
  // });


  // googleform
  let $form = $ ( '#js-form' )
  $form.submit(function(e) { 
    $.ajax({ 
      url: $form.attr('action'), 
      data: $form.serialize(), 
      type: "POST", 
      dataType: "xml", 
      statusCode: { 
        0: function() { 
          //送信に成功したときの処理 
          $form.slideUp()
          $( '#js-success' ).slideDown()
        }, 
        200: function() { 
          //送信に失敗したときの処理 
          $form.slideUp()
          $( '#js-error' ).slideDown()
        }
      } 
    });
    return false; 
  }); 

  // formの入力確認
  let $submit = $( '#js-submit' )
  $( '#js-form input, #js-form textarea' ).on( 'change', function() {
    if(
      $( '#js-form input[id="your-name"]' ).val() !== "" &&
      $( '#js-form input[id="your-furigana"]' ).val() !== "" &&
      $( '#js-form input[type="checkbox"]' ).prop( 'checked' ) === true
    ) {
      // すべて入力された時
      $submit.prop( 'disabled', false )
      $submit.addClass( 'is-active' )
    } else {
      // 入力されていない時
      $submit.prop( 'disabled', true )
      $submit.removeClass( 'is-active' )
    }
  })
})


jQuery('.drawer-icon').on('click',function(e) {
	e.preventDefault();
	// aタグなどをクリックした時の標準の動きを無効化するためのもの

	jQuery('.drawer-icon').toggleClass('is-active');
	jQuery('.drawer-content').toggleClass('is-active');
	jQuery('.drawer-background').toggleClass('is-active');

	return false;
});