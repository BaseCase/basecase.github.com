(function() {

function make_that_map() {
  var start_pos = new google.maps.LatLng('37.6889102', '-122.4706087');
  var cur_pos = new google.maps.LatLng('41.588982','-93.810476');
  var dest_pos = new google.maps.LatLng('43.0849935', '-89.4064204');

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  });

  var cur_pos_pin = new google.maps.Marker({
    position: cur_pos,
    icon: {url: 'face.png', scaledSize: new google.maps.Size(40, 60)},
    map: map
  });

  var destination_pin = new google.maps.Marker({
    position: dest_pos,
    icon: {url: 'badger.png', scaledSize: new google.maps.Size(55, 80)},
    map: map,
  });

  set_map_bounds(map, [start_pos, cur_pos, dest_pos]);
  draw_route(map, start_pos, cur_pos);
}


function set_map_bounds(map, bounds) {
  var lat_lng_bounds = new google.maps.LatLngBounds();
  bounds.forEach(function(bound) {
    lat_lng_bounds.extend(bound);
  });

  map.setCenter(lat_lng_bounds.getCenter());
  map.fitBounds(lat_lng_bounds);
}


function draw_route(map, start_lat_lng, end_lat_lng) {
  // mostly unaltered copypasta that I was too lazy to refactor much :/
  var path = new google.maps.MVCArray();
  var service = new google.maps.DirectionsService();
  var poly = new google.maps.Polyline({
    map: map,
    strokeColor: '#2288FF',
    strokeWeight: 5
  });

  path.push(start_lat_lng);
  poly.setPath(path);

  service.route({
    origin: start_lat_lng,
    destination: end_lat_lng,
    travelMode: google.maps.DirectionsTravelMode.DRIVING
  }, function (result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      for (var i = 0, len = result.routes[0].overview_path.length; i < len; i++) {
        path.push(result.routes[0].overview_path[i]);
      }
    }
  });
}


window.make_that_map = make_that_map;
})();
