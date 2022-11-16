$(function(){


  $('.top-btn').click(function(){
    // animateメソッドを用いて、
    // アニメーション付きでスクロールするようにしてください。
    $('html, body').animate({
      'scrollTop':0
    },'500');
  
  });

  $('.intro-btn').click(function(){
    // animateメソッドを用いて、
    // アニメーション付きでスクロールするようにしてください。
    $('html, body').animate({
      'scrollTop':$('#introduction').offset().top
    },'500');
  
  });

  $('.story-btn').click(function(){
    // animateメソッドを用いて、
    // アニメーション付きでスクロールするようにしてください。
    $('html, body').animate({
      'scrollTop':$('#story').offset().top
    },'500');
  
  });

  $('.chara-btn').click(function(){
    // animateメソッドを用いて、
    // アニメーション付きでスクロールするようにしてください。
    $('html, body').animate({
      'scrollTop':$('#characters').offset().top
    },'500');
  
  });
  $('.trailer-btn').click(function(){
    // animateメソッドを用いて、
    // アニメーション付きでスクロールするようにしてください。
    $('html, body').animate({
      'scrollTop':$('#trailer').offset().top
    },'500');
  
  });




// 動きのきっかけとなるアニメーションの名前を定義  枠線が伸びて出現
function lineAnime(){

  //ふわっと動くきっかけのクラス名と動きのクラス名の設定
  $('.lineTrigger').each(function(){ //lineTriggerというクラス名が
      var elemPos = $(this).offset().top-50; //要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('lineanime');
      // 画面内に入ったらfadeInというクラス名を追記
      }else{
        $(this).removeClass('lineanime');
      // 画面外に出たらfadeInというクラス名を外す
      }
      });
  
  
  }//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定
  
  // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
      lineAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述


// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

  //ふわっと動くきっかけのクラス名と動きのクラス名の設定
  $('.zoomInTrigger').each(function(){ //fadeInUpTriggerというクラス名が
      var elemPos = $(this).offset().top-50; //要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('zoom-in');
      // 画面内に入ったらfadeInというクラス名を追記
      }else{
        $(this).removeClass('zoom-in');
      // 画面外に出たらfadeInというクラス名を外す
      }
      });
  
  
  }//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定
  
  // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
      fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述


});