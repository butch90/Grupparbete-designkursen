 $(function() {

    function doAjax(method, id, data) {
    var url = '/';

    // if we have an id, add it to the url  RL
    if (id) {
      url += '/' + id;
    }

    // if we have no data, make it an empty object
    if (!data) {
      data = {};
    }

    return $.ajax({

      // type of request (POST, GET, PUT, DELETE)
      // method: method, //'GET',
      // // destination of request
      // url: url, // '/api/item',
      // // type of response
      // dataType: 'json',
      // // possibly data to send
      // cards: data // {}
    });
  }

  //   function getItem(id) {
  //   return doAjax('GET', id);
  // }
  //execute functions here
<<<<<<< HEAD
      $( "#980ti" ).on('click', function() {
          console.log( "<p> was clicked" );
           $("#label").html('TOP OF THE LINE,CLICK HERE FOR MORE INFO'); 
           function createPanel(id, title, content) {
    // our panel html
               var panelHtml =
                  '<div class="productPage">' +
                      '<h1>GTX980ti</h1>' +
                    '</div>'
              var panelHtml2 = 
                  '<div class="productPage">' +
                      '<h1>GTX980ti</h1>' +
                  '</div>'
          // $('.main').html('');
          $('.header').append(panelHtml2);
          // $('.main').prepend(panelHtml);
           // $(".header").html('<style background-image: url(img/gtx980ti.png/>');
           }
           createPanel();
           doAjax('GET','localhost:3000/cards').done(function() {

            console.log('hello again');

           });   

      }).hover(function () {
        $("#label").html('980ti: TOP OF THE LINE, CLICK HERE FOR MORE INFO');
        });
      $("#980").on('click', function() {
        console.log('980 was clicked');
        $("#label").html('3D-READY, GAMERS-CHOISE');
      }).hover(function () {
         $("#label").html('3D-READY, GAMERS-CHOISE');
      });
=======
$( "#980ti" ).on('click', function(event) {
    console.log( "<p> was clicked" );
     $("#label").html('TOP OF THE LINE,CLICK HERE FOR MORE INFO'); 
     createPanel(event.currentTarget.id);

     console.log(event.currentTarget.id);
}).hover(function () {
  $("#label").html('980ti: TOP OF THE LINE, CLICK HERE FOR MORE INFO');
  });

$("#980").on('click', function(event) {
  console.log('980 was clicked');

  createPanel(event.currentTarget.id);
  $("#label").html('3D-READY, GAMERS-CHOISE');
}).hover(function () {
   $("#label").html('3D-READY, GAMERS-CHOISE');
});

$("#970").on('click', function(event) {
  console.log('980 was clicked');

  createPanel(event.currentTarget.id);
  $("#label").html('3D-READY, GAMERS-CHOISE');
}).hover(function () {
   $("#label").html('3D-READY, GAMERS-CHOISE');
});

$("#960").on('click', function(event) {
  console.log('980 was clicked');

  createPanel(event.currentTarget.id);
  $("#label").html('3D-READY, GAMERS-CHOISE');
}).hover(function () {
   $("#label").html('3D-READY, GAMERS-CHOISE');
});
>>>>>>> 024a72f1875f40ed1c5ca71ac8e48d995594d68b
console.log('hello world'); 

function createPanel(id, title, content) {
  // our panel html
  var panelHtml =
    '<div class="productPage">' +
        '<h1> GTX-' + id + '</h1>' +
      '</div>';
  // var panelHtml2 = 
  //   '<div class="productPage">' +
  //       '<h1>' + id + '</h1>' +
  //   '</div>'

  $('.test').html('');
    // $('.header').append(panelHtml2);
  $('.test').prepend(panelHtml);

  $('.productPage').css('background-image', "url(img/gtx" + id + "Box.png)");
    // $(".header").html('<style background-image: url(img/gtx980ti.png/>');
  }
  
  doAjax('GET','localhost:3000/cards').done(function() {

  console.log('hello again');

}); 
//  $( document ).ready(function() {
//   // Handler for .ready() called.
//   console.log('hello world'); 
//   doAjax('GET');

//    var request = doAjax('GET', false, {});
  
//   request.done(function(response) {
//     console.log("success!", response);
//   });
//   request.fail(function(error) {
//     console.warn("error!", error);
//   });
// });

// doAjax('GET');

   // var request = doAjax('GET');
  
  // request.done(function(response) {
  //   console.log("success!", response);
  // });
  // request.fail(function(error) {
  //   console.warn("error!", error);
});
