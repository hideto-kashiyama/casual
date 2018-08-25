 
   //DOMの準備ができたら呼ばれる。
  $(function() {
 
      	$(".pulldown li").hover(function() {
      		$(this).children('ul').show();
      	}, function() {
      		$(this).children('ul').hide();
      	});
      	
   });

 
 var atag;//再生中のaudioタグ を格納　停止　一時停止用

 var renflag = false;　//連続再生ボタンが押されたら true
 var randflag = false  //ランダム再生ボタンが押されたら true

// 日英再生間隔
 function je_interval(tval) {
     
     //tval*1000秒空けて再生
                 var d1 = new Date();
                    while (true) {    
                    if (new Date() - d1 > tval*1000) {
                       break;
                    }

                   }
  
 }
 
 //音量調整
 function vol(audio_tag) {
  
       var volume = document.getElementById("volume");
         
        //volume.addEventListener('input', function() {
   
          var volumeValue = parseInt(volume.value) / 100;//'0.' + volume.value;  //volume.value/100; //
         
          audio_tag.get(0).volume = volumeValue;
        
         //}, false);
     
 }
 
  //再生速度調整
 /*function spd(audio_tag) {
     
　　    var spd = document.getElementById("speed");
        
        //spd.addEventListener("change", function() {
            
             var spdValue = (spd.value.length == 1)  ? '0' :  spd.value;
           
           audio_tag.get(0).playbackRate = spdValue;
        
        //}, false);
     
 }*/
 
 function rentest() {
     
     document.getElementById('jtext').innerHTML = stockList;
 }
 
 //個別再生 
function tan(key) {
    
     radio_loop= $("input[name='loop']:checked").val();　//ループ再生の値取得 0 :しない 1 :する
     
       //ループ再生しない
       if ( radio_loop==0 ) {
                    
         tan_tan(key);
                    
       } else {  //ループ再生する
           
           tan_loop(key);
           
       }
        
}
 
//個別再生 loopなし　ren() rand()こちらを使う
function tan_tan(key) {
    
   
    　       //  $("#play_this").html($(".hoge li").eq(key).html());
    　         
    　         $("#play_this").html($(".hoge li").eq(key).find("a").html());

    radio_a= $("input[name='je']:checked").val();　//再生対象の値 aje :日英 ae:英
     
    if ( radio_a=="aje") {　//再生対象の値 aje :日英
       
      //日本語再生
       console.log(key);
       
     　$(".hoge div").eq(key).find("audio.jp").get(0).play();
     　$(".hoge div").eq(key).find("audio.en").get(0).load();
     
     　　　atag= $(".hoge div").eq(key).find("audio.jp"); //停止　一時停止用
     　　　
     　　　if (typeof(atag) === "null") { //undefined
     　　　    　console.log("存在しない");
     　　　    // 再生停止(終了）
　　　　　　　　　　　cancelAudio();
　　　　　　　　　　　
     　　　}else{
     　　　 　　   console.log(key+"存在");
     　　　    　console.log("j_start")
     　　　    　;
     　　　    　vol(atag); // //音量設定
     　　　
     　　　     on_event();//ボタン無効にする 
             on_event1();//ボタン無効にする 
             on_event2();//ボタン無効にする 
             
        //イベントリスナー
       $(".hoge div").eq(key).find("audio.jp").one('ended',function() {
           console.log("j_end");
           　var selectVal;
           　
            selectVal = $("#select_time").val(); //日英再生間隔秒数取得
           
             je_interval(selectVal);//日英再生間隔秒数セット
     　　
     　　//英語再生
       console.log(key);
        $(".hoge div").eq(key).find("audio.en").get(0).play();
         console.log("e_start");
          atag= $(".hoge div").eq(key).find("audio.en"); //停止　一時停止用
          
              vol(atag); // //音量設定
          　　//spd(atag); //再生速度設定
          
             //イベントリスナー
              $(".hoge div").eq(key).find("audio.en").on('ended',function() {
                  
                    if (renflag) { //連続再生ボタンが押されていたら
                    var selectVal;
                    } else if (randflag) { //ランダム再生ボタンが押されていたら
                    var selectVal;
                    } else {
               
                         off_event();//ボタン有効にする   
                         off_event1();//ボタン有効にする
                         off_event2();//ボタン無効にする 
                     //イベントリスナー解除
                           $(".hoge div").eq(key).find("audio.jp").off('ended');
                           $(".hoge div").eq(key).find("audio.en").off('ended');
                    }    
                           
            });                 
                        
          });
          
     　}; //atagが存在した場合の処理
     　
    } else {  //再生対象の値 ae :英
        
        　$(".hoge div").eq(key).find("audio.en").get(0).play();
     　　
     　　　atag= $(".hoge div").eq(key).find("audio.en"); //停止　一時停止用
     　　　
     　　　　 　 vol(atag); // //音量設定
          　　spd(atag); //再生速度設定
     　　　
     　  　　 on_event();//ボタン無効にする 
             on_event1();//ボタン無効にする 
     　   　　on_event2();//ボタン無効にする 
     　   　　
     　　　   //イベントリスナー
           $(".hoge div").eq(key).find("audio.en").on('ended',function() {
     　　  
     　　    if (renflag) { //連続再生ボタンが押されていたら
                    
                    } else if (randflag) { //ランダム再生ボタンが押されていたら
                        
                    } else {
               
                         off_event();//ボタン有効にする   
                          off_event1();//ボタン有効にする
                          off_event2()            //イベントリスナー解除
                          $(".hoge div").eq(key).find("audio.en").off('ended');
                          
                    }    
        
           });
           
    }
    
}
 
 //個別再生 ループあり
function tan_loop(key) {
    
  radio_a= $("input[name='je']:checked").val();　//再生対象の値 aje :日英 ae:英
    
   if ( radio_a=="aje") {　//再生対象の値 aje :日英
   
  //日本語再生
 　$(".hoge div").eq(key).find("audio.jp").get(0).play();
 　　
 　　　atag= $(".hoge div").eq(key).find("audio.jp"); //停止　一時停止用
 　　　vol(atag); // //音量設定
 　　　
         on_event();//ボタン無効にする 
         on_event1();//ボタン無効にする 
         on_event2();//ボタン無効にする 
    //イベントリスナー
   $(".hoge div").eq(key).find("audio.jp").on('ended',function() {
       
       var selectVal = $("#select_time").val(); //日英再生間隔秒数取得
       
 　  　 je_interval(selectVal);//日英再生間隔秒数セット
 　　 
 　　//英語再生
    $(".hoge div").eq(key).find("audio.en").get(0).play();
    
      atag= $(".hoge div").eq(key).find("audio.en"); //停止　一時停止用
      
              vol(atag); // //音量設定
          　　//spd(atag); //再生速度設定 英語のみ摘要
      
                //イベントリスナー
                $(".hoge div").eq(key).find("audio.en").on('ended',function() {
                    
                    //日本語再生
                     $(".hoge div").eq(key).find("audio.jp").get(0).play();
                     　　
                     atag= $(".hoge div").eq(key).find("audio.jp"); //停止　一時停止用
                     
               });
 
    });
   
   } else {  //再生対象の値 ae :英
   
           　$(".hoge div").eq(key).find("audio.en").get(0).play();
             　　
             　　　atag= $(".hoge div").eq(key).find("audio.en"); //停止　一時停止用
             　　 vol(atag); // //音量設定
          　　　　//　spd(atag); //再生速度設定 英語のみ摘要
             　　　
             　  　　 on_event();//ボタン無効にする 
                     on_event1();//ボタン無効にする 
                      on_event2();//ボタン無効にする 
                      
             //イベントリスナー
              $(".hoge div").eq(key).find("audio.en").on('ended',function() {
                  
                  
                     $(".hoge div").eq(key).find("audio.en").get(0).play();
                     　　
                     atag= $(".hoge div").eq(key).find("audio.en"); //停止　一時停止用
                  
   
              });
              
   }
   
  }
  
//連続再生
function ren() {
    
     renflag = true;　//連続再生ボタンが押された
     
     var radio_loop= $("input[name='loop']:checked").val();　//ループ再生の値取得 0 :しない 1 :する
     var audio_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];　//".hoge div"の要素のインデックス
    
     var i = 0;
     
     　　　
              tan_tan(audio_array[i]);  //eq()の一番目を再生。
         
     　　　
     　　　
         //イベントリスナー
        　$(".hoge div audio.en").on('ended',function() {
        　    
        　   if (i < audio_array.length-1) {
        　     
        　     　  i++;
        　     　  
        　     　  tan_tan(audio_array[i]);　//eq()の次を一回再生
        　     　  
        　   } 
        　   
        　  　   //イベントリスナー 最後の再生が終わったら
        　  　  // console.log(i);
        　  　 //  console.log($(this));
        　  　 //  console.log($(".hoge div").last().find("audio.en").first());
        　  　    //if ($(this).is(".hoge div:last-child audio.en")) {
        　  　    
        　  　    
        　  　    //最後に再生するもの（配列の最後の要素）にクラスを動的に付ける　last_audioクラス
                        var lasti = audio_array.length-1;
                        
                        var lasttag = $(".hoge div").eq(audio_array[lasti]); //  最後のaudio
                        
                        $(lasttag).addClass("last_audio"); //　last_audioクラス
                        
                    //最後の再生が終わったら
                     if ($(this).is(".hoge div.last_audio audio.en")) { 
              
                            console.log("hit!");
                            
                      //ループ再生しない
                     if ( radio_loop==0 ) {
        　            
                         //イベントリスナー解除
                        $("div.audio_set audio").off('ended');
                        off_event();//ボタン有効にする   
                      　off_event1();//ボタン有効にする
                        off_event2()
                        renflag = false;
                        $(".hoge div.last_audio").removeClass("last_audio"); //動的に追加したクラスを削除
                         
                     } else {  //ループ再生する
           
                        i = 0; //頭に戻る
     
                         tan_tan(audio_array[i]);  //eq()の一番目を再生。
           
                     }  
                         
        　    } 
            
         　});
         　
 }
 
 //配列をシャッフルする
 function shuffle(array) {
            
          var n = array.length, t, i;
        
          while (n) {
            i = Math.floor(Math.random() * n--);
            t = array[n];
            array[n] = array[i];
            array[i] = t;
          }
        
          return array;
          
        }


//ランダム再生
function rand() {
    
    randflag = true //ランダム再生ボタンが押された
    
   var radio_loop= $("input[name='loop']:checked").val();　//ループ再生の値取得 0 :しない 1 :する
   
   var audio_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];　　//".hoge div"の要素のインデックス
   
    audio_array=shuffle(audio_array); //配列をシャッフル

     var i = 0;
    
     tan_tan(audio_array[i]);  //シャッフルした配列の一番目を再生。
   
         //イベントリスナー
        　$(".hoge div audio.en").on('ended',function() {
        　    
                    if (i < audio_array.length-1) {
                 
                         i++;
                    　　 
                        tan_tan(audio_array[i]); //シャッフルした配列の次を再生。
                        
                    } 
                    
                        //最後に再生するもの（配列の最後の要素）にクラスを動的に付ける　last_audioクラス
                        var lasti = audio_array.length-1;
                        
                        var lasttag = $(".hoge div").eq(audio_array[lasti]); //  最後のaudio
                        
                        $(lasttag).addClass("last_audio"); //　last_audioクラス
                        
                    //最後の再生が終わったら
                     if ($(this).is(".hoge div.last_audio audio.en")) {
                         console.log("hit!");
                                 //ループ再生しない 
                    　        if ( radio_loop==0 ) {
                    　      
                                    //イベントリスナー解除
                                    $("div.audio_set audio").off('ended');
                                    off_event();//ボタン有効にする   
                                    off_event1();//ボタン有効にする
                                    off_event2();//ボタン有効にする
                                    randflag=false;
                                    $(".hoge div.last_audio").removeClass("last_audio"); //動的に追加したクラスを削除
                                    
                             } else {  //ループ再生する
                         
                                 //audio_array=shuffle(audio_array); //配列をシャッフル
            
                                  i = 0; //頭に戻る
                                  
                                  tan_tan(audio_array[i]);  //シャッフルした配列の一番目を再生
                                  
                             }
                    }
                          
          });

}

// 再生停止(終了）
function cancelAudio(){
    
  $("div.audio_set audio").off('ended');
 
  atag.get(0).pause();
  atag.get(0).currentTime = 0;
  
   //イベントリスナー解除
　　$("div.audio_set audio").off('ended');
　　
    off_event();//ボタン有効にする   
    off_event1();//ボタン有効にする
    off_event2();  
    renflag = false;
    randflag=false;
    $(".hoge div.last_audio").removeClass("last_audio"); //動的に追加したクラスを削除
    
}  

function radio_click(){
    
     var str = $('[name="link"]:checked').val();
     
     if (str==0) {
         
          $('#testpage').hide();
          $('#practis').show();
          
     } else {
         
         $('#practis').hide();
         $('#testpage').show();
         
     }
   
    
}

var pause_flag=false;

function pause_resume(){
  
 if (pause_flag) {
     
     var elem = document.getElementById("atxt");
     elem.innerHTML = "<a style='color: blue;'>pause</a>";  
     
     resume();
     
     pause_flag=false;
     
 } else {
  
     pause();
   
     pause_flag=true;
     
 }
    
}

 // 一時停止
function pause(){
    
　	atag.get(0).pause();
　	$("#pr_chg i").removeClass("fa-pause-circle");

    $("#pr_chg i").addClass("fa-play-circle");
    
     var elem = document.getElementById("atxt");
     elem.innerHTML = "<a style='color: red;'>resume</a>";  
     
    　  on_event();//ボタン無効にする 
        on_event1();//ボタン無効にする 
        on_event2();
    
 } 


   // 一時停止後再開
function resume(){
    
       	$("#pr_chg i").removeClass("fa-play-circle");

        $("#pr_chg i").addClass("fa-pause-circle");
        
        atag.get(0).play();
		
     var elem = document.getElementById("atxt");
     elem.innerHTML = "<a style='color: blue;'>pause</a>";  
     
   } 

//</li>タグ無効にする
function on_event(){
    
  $('.hoge a').on('click', myHandler);
  
//  $(".hoge").attr('disabled', true);
 
}

//無効になった<li>タグを有効にする
function off_event(){
    
 $('.hoge a').off('click', myHandler);
  // $(".hoge").attr('disabled', false);

}

function myHandler(e){
    e.preventDefault();
}

//連続再生ボタン無効にする
function on_event1(){

  $("#globalMenu1").attr('disabled', true);
  
}

//ボタン無効になったボタンを有効にする
function off_event1(){

  $("#globalMenu1").attr('disabled', false);

}

//ランダム再生ボタン無効にする
function on_event2(){

   $("#globalMenu2").attr('disabled', true);

}

//ボタン無効になったボタンを有効にする
function off_event2(){

  $("#globalMenu2").attr('disabled', false);

}


//ここからテストページ用コード その�����は練習ページと共用=====================================================================


//テスト用個別再生 loopなし　ren_test() rand_test()こちらを使う
function tan_tan_test(key) {
    
    
        var jparray = $("#master_array p.jp_array")
        var enarray = $("#master_array p.en_array")
        
          // 日本語テキスト表示
       　$("#jpOutput").text(jparray[key].innerText);
       　
       　
    // radio_a= $("input[name='je']:checked").val();　//再生対象の値 aje :日英 ae:英
    
       //日本語再生
     　$(".hoge div").eq(key).find("audio.jp").get(0).play();
     　
        　　　atag= $(".hoge div").eq(key).find("audio.jp"); //停止　一時停止用
     　　　
     　　   　vol(atag); // //音量設定
     　　　
     　　　     on_event();//ボタン無効にする 
             on_event1();//ボタン無効にする 
             on_event2();//ボタン無効にする 
             
        //イベントリスナー
       $(".hoge div").eq(key).find("audio.jp").one('ended',function() {
           
           　var selectVal;
           　
            selectVal = $("#select_time").val(); //日英再生間隔秒数取得
           
             je_interval(selectVal);//日英再生間隔秒数セット
             
             //英語テキスト表示
     　　　　　$("#enOutput").text(enarray[key].innerText);
     　　
     　　//英語再生
        $(".hoge div").eq(key).find("audio.en").get(0).play();
        
        
          atag= $(".hoge div").eq(key).find("audio.en"); //停止　一時停止用
          
              vol(atag); // //音量設定
          　　spd(atag); //再生速度設定
          
             //イベントリスナー
              $(".hoge div").eq(key).find("audio.en").on('ended',function() {
                 
                  
                       
                    if (renflag) { //連続再生ボタンが押されていたら
                    var selectVal;
                    } else if (randflag) { //ランダム再生ボタンが押されていたら
                    var selectVal;
                    } else {
               
                         off_event();//ボタン有効にする   
                         off_event1();//ボタン有効にする
                         off_event2();//ボタン無効にする 
                     //イベントリスナー解除
                          // $(".hoge div").eq(key).find("audio.jp").off('ended');
                           //$(".hoge div").eq(key).find("audio.en").off('ended');
                          
                   }    
                    
                      
            });                 
                        
        });
        
}

  var correctflag=false;

 //正解ボタン押されたら
 function correct() {
  
   $("#pin").get(0).play();
   
   correctflag=true;
   incorrectflag=false;
 
 }
 
 var incorrectflag=false;
 //不正解ボタン押されたら
 function incorrect() {
     
     $("#bu")[0].play();
    
      incorrectflag=true;
    　correctflag=false;
    　
 }
 
 var gokei = 0; //合計点数

//連続テスト
function ren_test() {
    
     var radio_loop= $("input[name='loop']:checked").val();　//ループ再生の値取得 0 :しない 1 :する
     var audio_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];　//".hoge div"の要素のインデックス
    
   　 var loopflag = false;
    
     var i = 0;
     gokei = 0;//正解数合計
     var tensu = 0; //点数
     
       //点数を配列に順次格納する
        var tenarry = new Array();
        
     tan_tan_test(audio_array[i]);  //eq()の一番目を再生。日本語、英語再生
         
 //イベントリスナー 英語再生終了待ち
　$(".hoge div audio.en").on('ended',function() {
        　    
            　off_event3();//正解ボタン有効にする
            　off_event4();//不正解ボタン有効にする
    
　if (i < audio_array.length-1) {
        　       
       //イベントリスナー　　正解、不正解ボタンクリック待ち
       $(".cbutton").one('click' , function() {
                
                　　　on_event3();//正解ボタン無効にする
    　　　　　　　　　　　　　　　on_event4();//不正解ボタ無効にする
                       
                        //英語テキスト消す
     　　                $("#enOutput").text(" ");
                 
                    var master_id = $($(".hoge").get(i)).attr("id");
                    
                    if (correctflag) {
                        
                           tenarry[i] = 1;
                           $("#answer_" + master_id).val(1);
                          
                    } else if (incorrectflag) {
                    
                          tenarry[i] = 0;
                          console.log("hit_bu!")
                      $("#answer_" + master_id).val(0);
                      
                      
                    }  
                    
                 　 gokei=gokei+ parseInt(tenarry[i].toString()); //合計正解数
                 　 
                    $('#disp').text(audio_array.length +"問中/"+ gokei + "問正解！");
                    
                        if (gokei==audio_array.length) {//100点になったら。
                            alert(gokei);
            　                                 console.log("hit_100");
              　　　　　　　　　　　　　　　　　　　　　　 	 setTimeout( function() {
                                                 
                                                tensu = Math.round((gokei/audio_array.length)*100); //点数計算
                                                 
                                            	 	alert("全問正解しました。終了します。");
               	
                                            	 gokei= 0;	
                                            	 
                                            	}, 300);  //0.3秒後にalert表示
                                            	
                                            
                                           　//テキスト消す
                                              $("#enOutput").text(" ");
                                              $("#jpOutput").text(" ");
                                              $('#disp').text(" ");
                                              
                                             //イベントリスナー解除
                                            $("div.audio_set audio").off('ended');
                                            off_event();//ボタン有効にする   
                                          　off_event1();//ボタン有効にする
                                            off_event2()
                                            
                                            $(".hoge div.last_audio").removeClass("last_audio"); //動的に追加したクラスを削除
                                           
                                            on_event3();//正解ボタン無効にする
    　　　　　　　　　                   　  　　　　　　　on_event4();//不正解ボタ無
               
                              }
                              
                    if ( loopflag) { //ループテスト時
           
                         　while( parseInt(tenarry[i].toString())!== 0 ) { //点数が 0　の配列にたどり着くまで１を足し続ける。
                            
                             　 i++;
                             console.log("hit_loop"+i);
                        　  
                            }
                            
                    } else {
                        
                        i++;
                    }
  
                　//0.5秒空けて再生
                 var d1 = new Date();
                    while (true) {
                    if (new Date() > 500) {
                       break;
                    }

                   }
                  
         tan_tan_test(audio_array[i]);　//eq()の次を一回再生
              
       });   //イベントリスナー　　正解、不正解ボタンクリック待ち 終了 
             
   } 　 // if (i < audio_array.length-1)　の閉じ括弧
   
   
        　  
        　    　    //最後に再生するもの（配列の最後の要素）にクラスを動的に付ける　last_audioクラス
                        var lasti = audio_array.length-1;
                        
                        var lasttag = $(".hoge div").eq(audio_array[lasti]); //  最後のaudio
                        
                        $(lasttag).addClass("last_audio"); //　last_audioクラス
                        
         //最後の再生が終わったら
         if ($(this).is(".hoge div.last_audio audio.en")) { 
          
                         off_event3();//正解ボタン有効にする
            　            off_event4();//不正解ボタン有効にする
                           
                             //イベントリスナー　　正解、不正解ボタンクリック待ち
                            $(".cbutton").one('click' , function() {
                                    
                                    　on_event3();//正解ボタン無効にする
    　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　on_event4();//不正解ボタ無
                                 
                                   var master_id = $($(".hoge").get(i)).attr("id");
                                      
                                   if (correctflag) {
                                        console.log("hit_last!")
                                           tenarry[i] = 1;
                                            $("#answer_" + master_id).val(1);
                                           
                                           
                                            
                                    } else if (incorrectflag) {
                                    
                                          tenarry[i] = 0;
                                          console.log("hit_last_bu!")
                                           $("#answer_" + master_id).val(0);
                                      
                                    }  
                                    
                                  gokei=gokei+ parseInt(tenarry[i].toString()); //合計正解数
                                  
                                  $('#disp').text(audio_array.length +"問中/"+ gokei + "問正解！");

                                if (loopflag) { //ループ時
                                  
                                   if (gokei==audio_array.length) {//100点になったら。
                                   
            　                             $("div.audio_set audio").off('ended');
                                       
                                            console.log("hit_100");
                                            
              　　　　　　　　　　　　   　　　　　　　　 	 setTimeout( function() {
                                                 
                                                tensu = Math.round((gokei/audio_array.length)*100); //点数計算
                                                 
                                            	 	alert("全問正解しました。終了します。");
               	
                                            	 gokei= 0;	
                                            	 
                                            	}, 300);  //0.3秒後にalert表示
                                            	
                                           　//テキスト消す
                                              $("#enOutput").text(" ");
                                              $("#jpOutput").text(" ");
                                              $('#disp').text(" ");
                                              
                                             //イベントリスナー解除
                                            $("div.audio_set audio").off('ended');
                                            off_event();//ボタン有効にする   
                                          　off_event1();//ボタン有効にする
                                            off_event2()
                                           
                                            $(".hoge div.last_audio").removeClass("last_audio"); //動的に追加したクラスを削除
                                           
                                           　on_event3();//正解ボタン無効にする
    　　　　　　　　　                     　　　　　　on_event4();//不正解ボタ無
               
                                       }//100点になったら。　の閉じ括弧
                                       
                                }　//if (loopflag) { //ループ時 の閉じ括弧
                           
       //ループしない
      if ( radio_loop==0 ) {
          
                               tensu = Math.round((gokei/audio_array.length)*100); //点���計算  
                               
                                             setTimeout( function() {
                                                 
                                            	alert("全問終了しました。"+audio_array.length +"問中/"+ gokei + "問正解！（"+ tensu + "点）");
                                            	
                                            	 gokei= 0;	
                                            	 
                                            	}, 300);  //0.3秒後にalert表示
                                            	
                                            	//今日の日付データを変数hidukeに格納
                                                    var hiduke=new Date(); 
                                                    //年・月・日・曜日を取得する
                                                    var year = hiduke.getFullYear();
                                                    var month = hiduke.getMonth()+1;
                                                    var day = hiduke.getDate();
                                                    
                                                    var nowdt=year+"年"+month+"月"+day+"日 ";
                                     	
         	  $("#c").val(nowdt + "実施、「" + $('h1').text() +"」"+tensu+"点");//テスト結果表題
           　                                 	 
              $("#p").val(tensu);//点数
                                            	
                                           　//テキスト消す
                                              $("#enOutput").text(" ");
                                              $("#jpOutput").text(" ");
                                              $('#disp').text(" ");
                                              
                                             //イベントリスナー解除
                                            $("div.audio_set audio").off('ended');
                                            off_event();//ボタン有効にする   
                                          　off_event1();//ボタン有効にする
                                            off_event2()
                                         
                                            $(".hoge div.last_audio").removeClass("last_audio"); //動的に追加したクラスを削除
                                           
                                           　on_event3();//正解ボタン無効にする
    　　　　　　　　　                     　　　　　　on_event4();//不正解ボタ無
                                         
          } else {  //ループする 100点になるまで繰り返す
          
           loopflag = true;//ループするflag
          
               if (gokei==audio_array.length) {//100点になったら。
               
            　        　　 $("div.audio_set audio").off('ended');
                                  console.log("hit_100");
              　　　　　　　　　　　　　　　　　　　　　　 	 setTimeout( function() {
                                                 
                                                tensu = Math.round((gokei/audio_array.length)*100); //点数計算
                                                 
                                            	 	alert("全問正解しました。終了します。");
               	
                                            	 gokei= 0;	
                                            	 
                                            	}, 300);  //0.3秒後にalert表示
                                            	
                                            
                                           　//テキスト消す
                                              $("#enOutput").text(" ");
                                              $("#jpOutput").text(" ");
                                              $('#disp').text(" ");
                                              
                                             //イベントリスナー解除
                                            $("div.audio_set audio").off('ended');
                                            off_event();//ボタン有効にする   
                                          　off_event1();//ボタン有効にする
                                            off_event2()
                                            
                                            $(".hoge div.last_audio").removeClass("last_audio"); //動的に追加したクラスを削除
                                           
                                           　on_event3();//正解ボタン無効にする
    　　　　　　　　　                     　　　　　　on_event4();//不正解ボタ無
               
              }//100点になったら　の閉じ括弧
           
                          i = 0; //頭に戻る  
                          
                      　while( parseInt(tenarry[i].toString())!== 0 ) { //点数が 0　の配列にたどり着くまで１を足し続ける。
                        
                         　 i++;
                         　 
                         console.log("hit_loop"+i);
                    　  }
                      
                        tan_tan_test(audio_array[i]);  //eq()のi番目を再生
                 
    　　　　}//ループする、しない　の閉じ括弧
    　　　
      
         });   //イベントリスナー　　正解、不正解ボタンクリック待ち 終了
         
     }  //最後の再生が終わったら　の閉じ括弧  
    
　});//英語再生終了待ちイベントリスナー 終了　

}


//テスト結果保存
function test_save() {
    
    $('#test_post').submit();
    
}


function tango(v) {
    
   alert(v);      
}



// 再生停止(終了）テスト時
function cancelAudio_test(){

  atag.get(0).pause();
  atag.get(0).currentTime = 0;
  
   //テキスト消す
 $("#enOutput").text(" ");
 $("#jpOutput").text(" ");
  $('#disp').text(" ");
                                              
    //イベントリスナー解除
     $("div.audio_set audio").off('ended');
     off_event();//ボタン有効にする  
     off_event1();//ボタン有効にする
    off_event2()
    loopflag = false;
     $(".hoge div.last_audio").removeClass("last_audio"); //動的に追加したクラスを削除
                    　
                    　on_event3();//正解ボタン無効にする
    　　　　　　　　　　　　　　　on_event4();//不正解ボタ
    
    }  


   
   //正解ボタン無効にする
function on_event3(){

  $("#cb").attr('disabled', true);
  
}

//無効になった正解ボタンを有効にする
function off_event3(){

  $("#cb").attr('disabled', false);

}

    //不正解ボタン無効にする
function on_event4(){

  $("#icb").attr('disabled', true);
  
}

//無効になった不正解ボタンを有効にする
function off_event4(){

  $("#icb").attr('disabled', false);

} 
   

 
