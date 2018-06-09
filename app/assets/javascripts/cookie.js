
$(document).ready(
        function() {
            
var vcookie = $.cookie('v_cookie');   //ボリューム
var scookie = $.cookie('s_cookie');   //スピード
var tcookie = $.cookie('tm_cookie');   //再生間隔 
var lcookie = $.cookie('loop_cookie');//ループ再生

//ボリューム
   if(vcookie){
        
      $('#volume').val(vcookie);
      $('#value').text(vcookie);
      
     } else {
        
       $('#volume').val(50);
       $('#value').text(50);
       $.cookie('v_cookie', 50, {path:'/'}); 
   
     }
     
     var elem = document.getElementById('volume');
             var target = document.getElementById('value');
             
              var rangeValue = function (elem, target) {
                return function(evt){
                  target.innerHTML = elem.value;
                }
              }
       elem.addEventListener('input', rangeValue(elem, target));
       
     
     $('#volume').change(function(){
        
         $.cookie('v_cookie', $('#volume').val(), {path:'/'}); 
       
     });  
  
//スピード

 if(scookie){
        
      $('#select_speed').val(scookie);
     
      
     } else {
        
       $('#select_speed').val("1.0");
       
       $.cookie('s_cookie', 0); 
   
     }
     
     $('#select_speed').change(function(){
        
         $.cookie('s_cookie', $('#select_speed').val(), {path:'/'}); 
       
     }); 
 /*if(scookie){
        
      $('#speed').val(scookie);
      $('#value1').text(scookie);
      
     } else {
        
       $('#speed').val(1.0);
       $('#value1').text(1.0);
       $.cookie('s_cookie', 1.0, {path:'/'}); 
   
     }
     
      var elem1 = document.getElementById('speed');
          var target1 = document.getElementById('value1');
          var rangeValue1 = function (elem1, target1) {
          return function(evt){
          target1.innerHTML = elem1.value;
          
            }
          }
          elem1.addEventListener('input', rangeValue1(elem1, target1));
         
     
     $('#speed').change(function(){
        
         $.cookie('s_cookie', $('#speed').val() , {path:'/'}); 
        
     });  */
     
//再生間隔 
    if(tcookie){
        
      $('#select_time').val(tcookie);
     
      
     } else {
        
       $('#select_time').val(0);
       
       $.cookie('tm_cookie', 0); 
   
     }
     
     $('#select_time').change(function(){
        
         $.cookie('tm_cookie', $('#select_time').val(), {path:'/'}); 
       
     }); 
     
 //ループ再生    
 
     if (lcookie) {
         
            $('.radio_group input[name="loop"][value="' + lcookie + '"]').prop("checked", true);
 
          } else {
              
              $('.radio_group input[name="loop"][value="0"]').prop("checked", true);
        
          }
     
     $("input[name='loop']:radio").change( function() {
        
         $.cookie('loop_cookie', $("input:radio[name='loop']:checked").val(), {path:'/'}); 
         
     }); 
    
  
  });   