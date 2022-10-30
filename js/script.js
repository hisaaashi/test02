// スムーススクロール
jQuery('a[href^="#"]').click(function () {
  let header = jQuery(".js-header").innerHeight();
  let speed = 300;
  let id = jQuery(this).attr("href");
  let target = jQuery("#" == id ? "html" : id);
  let position = jQuery(target).offset().top - header;
  if ("fixed" !== jQuery(".js-header").css("position")) {
    position = jQuery(target).offset().top;
  }
  if (0 > position) {
    position = 0;
  }
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    speed
  );
  return false;
});

// トップへ戻る
jQuery(".js-top").click(function () {
  jQuery("body,html").animate(
    {
      scrollTop: 0,
    },
    300
  );
  return false;
});

// スクロール検知
jQuery(window).on("scroll", function () {
  if (100 < jQuery(this).scrollTop()) {
    jQuery(".js-top").addClass("is-show");
  } else {
    jQuery(".js-top").removeClass("is-show");
  }
});
