
import {AfterViewInit, Component, ElementRef, ViewChild, OnInit} from '@angular/core';





@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  title ='basics';
  @ViewChild('mapRef', {static: true }) mapElement: ElementRef;
  data =  { "data" : [{ "id": "id", "subject": "subject", "name":"name"}] } ;

  @ViewChild('gmap', {static: false}) gmapElement: any;
  map: google.maps.Map;

 ngOnInit() {   
    this.renderMap();
  }
  

 renderMap() {
    
  window['initMap'] = () => {
    this.loadMap();     
  }
  if(!window.document.getElementById('google-map-script')) {
    var s = window.document.createElement("script");
    s.id = "google-map-script";
    s.type = "text/javascript";
    s.src = "";
   //https://maps.googleapis.com/maps/api/js?key=AIzaSyD2OeS6LkQLeLrdnn_K0Sku1o3R71hOzsU&callback=initMap   
    window.document.body.appendChild(s);
  } else {
    this.loadMap();
  }
}

 loadMap = () => {
  var map = new window['google'].maps.Map(this.mapElement.nativeElement, {
    center: {lat: 24.5373, lng: 81.3042},
    zoom: 8
  });
  
  var marker = new window['google'].maps.Marker({
    position: {lat: 24.5373, lng: 81.3042},
    map: map,
    title: 'Hello World!',
    draggable: true,
    animation: window['google'].maps.Animation.DROP,
  });
  
  var contentString = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h3 id="thirdHeading" class="thirdHeading">W3path.com</h3>'+
  '<div id="bodyContent">'+
  '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>'+
  '</div>'+
  '</div>';
  
  var infowindow = new window['google'].maps.InfoWindow({
    content: contentString
  });
  
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  
}



}