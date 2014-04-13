// Wait for device API libraries to load
//
// device APIs are available
var onDeviceReady = function () {
    // Onclick handler for the instapicsButton.  Populates the insstagram pictures on the
    // #insta-pg data page.
    $("#instapicsButton").on('click',function() {
       // Make the ajax call to instagram pulling recent images.
       $.ajax( {
       type: "GET",
       dataType: "jsonp",
       cache: false,
       url: "https://api.instagram.com/v1/tags/poker/media/recent?client_id=5db8267c7c3240edaf6fbaafd02858b3",
       success: function(response) {
         //- This is the success function.  We're going to build out the unordered list
         //  with an ID of #insta with the images, tags and comments that were returned
         //  by the call.
         var theInnerHtml = "";
         var myData = response.data;
         var image;
         var tags = [];
         var comments = [];
       
         // For each element in the data returned, grab the image, any tags and any comments
         // and build the display.
         for(i in myData) {
           image = myData[i].images.low_resolution.url;
              
           // We have the image url, add it to the tag we're currently working on
           theInnerHtml += "<li><img src='" + image + "' width = 25%>";
              
           // Now we've extracted the tags for the image, add them to the current tag
           theInnerHtml += "<p>" + tags + "</p>";
                            
           // Next, we'll extract the comments associated with the image and add them
           // to the current tag.
           comments = myData[i].comments.data;
           for (j in comments) {
             theInnerHtml += "<p>" + comments[j].text + "</p>";
           }
           // And finally before getting the next image, close off the current tag.
           theInnerHtml += "</li>"
         }
         $("#insta").html(theInnerHtml);
       },
       error: function(error) {
         var theInnerHtml = "";
         theInnerHtml = "<p>An error occurred attempting to retrieve data from Instagram</p>";
         theInnerHtml += "<p>Error:  " + error + "</p>"
         $("#insta").html(theInnerHtml);
       }
     })
   }),
    
   $("#device").on('click', function(){
                    
                    var element = document.getElementById('deviceProperties');
                    
                    element.innerHTML = 'Device Model: '    + device.model    + '<br />' +
                    
                    'Device Cordova: '  + device.cordova  + '<br />' +
                    
                    'Device Platform: ' + device.platform + '<br />' +
                    
                    'Device UUID: '     + device.uuid     + '<br />' +
                    
                    'Device Version: '  + device.version  + '<br />';
                    
                   });
    
    
   /* $("#loc-pg").on('click', function () {
                       
                       var output = document.getElementById('outloc');
                       
                       if (!navigator.geolocation){
                       
                       alert("whoops I failed");
                       
                       output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
                       
                       return;
                       
                       }
                        
                        function successloc(position) {
                        
                        alert("getting location");
                        
                        var latitude  = position.coords.latitude;
                        
                        var longitude = position.coords.longitude;
                        
                        output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
                        
                        var img = new Image();
                        
                        img.src = "http://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";
                        
                        output.appendChild(img);
                        
                        };
                        
                        function errorloc() {
                        
                        alert("got an error");
                        
                        output.innerHTML = "Unable to retrieve your location";
                        
                        };
                       
                       
                       output.innerHTML = "O hi!!";
                       
                       navigator.geolocation.getCurrentPosition(successloc, errorloc);
                       
                       alert("here!!!");
                       
                       });
    
    // onSuccess Geolocation
    
     
     var onSuccess = function () {
     
     alert('success');
     
     $("#loc-pg").on('click', function(){
     
     var element = document.getElementById('geolocation');
     
     element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
     
     'Longitude: '          + position.coords.longitude             + '<br />' +
     
     'Altitude: '           + position.coords.altitude              + '<br />' +
     
     'Accuracy: '           + position.coords.accuracy              + '<br />' +
     
     'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
     
     'Heading: '            + position.coords.heading               + '<br />' +
     
     'Speed: '              + position.coords.speed                 + '<br />' +
     
     'Timestamp: '          +                                   position.timestamp          + '<br />';
     
     });
     
     
     
     // onError Callback receives a PositionError object
     
     
     
     function onError(error) {
     
         alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
     
     }
     
     
     
     };
    
    $('#instagram-pg').on('pageinit', function(){
     
     });*/
    
    
};

document.addEventListener("deviceready", onDeviceReady, false);



