
$( ".inner-switch" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
      $( "body" ).removeClass( "dark" );
      
      $( ".inner-switch" ).removeClass( "fas fa-cloud-moon" );
      $( ".inner-switch" ).addClass( "fas fa-sun" ).css('color','#f09713');

    } else {
      $( "body" ).addClass( "dark" );
      $( ".inner-switch" ).removeClass( "fas fa-sun" );
      $( ".inner-switch" ).addClass( "fas fa-cloud-moon" ).css('color', '#ffffff');;
      $( ".inner-switch" ).text( "" );
      $( "parallax" ).css('background-color','rgba(0,0,0,0.1)');

    }
});
  var totalamount= 3999 ;          
$("#formCheck-1").click(function() {
   
   if ($(this).is(':checked')) {
       totalamount += 300;
               
   }
   else{
       totalamount -= 300;
   }
   $('#adi').html(": &#9875;" +totalamount);
});
$("#formCheck-2").click(function() {
   if ($(this).is(':checked')) {
       totalamount += 100;
       }
       else{
       totalamount -= 100;
           }
           $('#adi').html(": &#9875;" +totalamount);                    
   });
$("#formCheck-3").click(function() {
   if ($(this).is(':checked')) {
       totalamount += 500;  
    }  
   else{
       totalamount -= 500;
   }
   $('#adi').html(": &#9875;" +totalamount);                        
   });

$(".btn").click(function() {
    $('.bill').html("&#9875;" +totalamount);
    $('.bill1').html("&#9875;" +totalamount1);
});

var counter=0,totalamount1=0;

var m1=0,m2=0,m3=0,n1=0,n2=0,n3=0;
$(".btn").click(function() {
     if ($("#formCheck-1").is(':checked')) {
      $(".module1").html("Carbon Fiber Fins");
      $(".m1price").html("&#9875;300");
      m1=1;
              }          
});              
$(".btn").click(function() {
     if ($("#formCheck-2").is(':checked')) {
      $(".module2").html("Helmet Flashlight");
      $(".m2price").html("&#9875;100");
      m2=1;
              }
}); 
 $(".btn").click(function() {
     if ($("#formCheck-3").is(':checked')) {
      $(".module3").html("Extra Oxygen Capsule");
      $(".m3price").html("&#9875;500");
      m3=1;
              }
});
$(".btn").click(function() {
if(counter<1){
    window.location.href='#popup1';
   counter++
   totalamount1=totalamount;
   n1=m1;
   n2=m2;
   n3=m3;
}
else{
    window.location.href='#popup2';

}
});  
$(".btn").click(function() {
  if(n1==1){
    $(".module11").html("Carbon Fiber Fins");
      $(".m11price").html("&#9875;300");
  }
});   
$(".btn").click(function() {
  if(n2==1){
      $(".module12").html("Helmet Flashlight");
      $(".m12price").html("&#9875;100");
  }
});   
$(".btn").click(function() {
  if(n3==1){
      $(".module13").html("Extra Oxygen Capsule");
      $(".m13price").html("&#9875;500");
  }
});