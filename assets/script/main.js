// jQuery
//1.スマホheaderのドロワーメニュー
$(function () {
  const $header = $('header');
  // ドロワーボタンの開閉
  $('#js__drawer_button').on('click', function () {
    $header.toggleClass('header__drawer_open');
  });
  // ドロワーメニュー内リンクをクリックしたら閉じる
  $('.header__nav a[href^="#"]').on('click', function () {
    if ($header.hasClass('header__drawer_open')) {
      $header.removeClass('header__drawer_open');
    }
  });
});
//スマホでメニューを開いた状態 → PC表示に戻す(リセット)
$(window).on('resize', function () {
  if (window.innerWidth > 768) {
    $('header').removeClass('header__drawer_open');
  }
});
//2.タブメニュー
$(function(){
  // 初期状態
  $('.courses__tab_content01').show();
  $('.courses__tab_content02').hide();

  $('.courses__tab_button01').addClass('active').removeClass('inactive');
  $('.courses__tab_button02').addClass('inactive').removeClass('active');

  // 学年別をクリック
  $('.courses__tab_button01').on('click', function(){
    $('.courses__tab_content01').fadeIn();
    $('.courses__tab_content02').hide();
    $('.courses__tab_button01').addClass('active').removeClass('inactive');
    $('.courses__tab_button02').addClass('inactive').removeClass('active');
  });

  // 目的別をクリック
  $('.courses__tab_button02').on('click', function(){
    $('.courses__tab_content02').fadeIn();
    $('.courses__tab_content01').hide();
    $('.courses__tab_button02').addClass('active').removeClass('inactive');
    $('.courses__tab_button01').addClass('inactive').removeClass('active');
  });
});