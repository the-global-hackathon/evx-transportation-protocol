<template>
  <div class="here-map">
    <div ref="map" id="map"></div>
  </div>
</template>

<script>
export default {
  name: "HereMap",
  data() {
    return {
      map: {},
      platform: {},
      router: {},
      geocoder: {},
      directions: [],
      ui: null
    };
  },
  props: {
    appId: String,
    appCode: String,
    lat: String,
    lng: String,
    width: String,
    height: String
  },
  created: function() {
    this.platform = new H.service.Platform({
      app_id: this.appId,
      app_code: this.appCode,
      useHTTPS: true,
      useCIT: true
    });
    this.router = this.platform.getRoutingService();
    this.geocoder = this.platform.getGeocodingService();
  },
  mounted: function() {
    var pixelRatio = window.devicePixelRatio || 1;
    let defaultLayers = this.platform.createDefaultLayers({
      tileSize: pixelRatio === 1 ? 256 : 512,
      ppi: pixelRatio === 1 ? undefined : 320
    });
    this.map = new H.Map(this.$refs.map, defaultLayers.normal.map, {
      pixelRatio: pixelRatio,
      zoom: 5,
      center: { lat: -23.5489, lng: -46.6388 }
    });
    let behavior = new H.mapevents.Behavior(
      new H.mapevents.MapEvents(this.map)
    );
    this.ui = H.ui.UI.createDefault(this.map, defaultLayers);
    this.LoadMapLocations();
  },
  methods: {
    AddMarkerToGroup(group, location, icon) {
      console.log(location);
      var marker = new H.map.Marker(
        { lat: location.Latitude, lng: location.Longitude },
        { icon: icon }
      );
      marker.setData(location.Data);
      group.addObject(marker);
    },
    route(start, range) {
      var params = {
        mode: "fastest;car;traffic:enabled",
        range: range,
        rangetype: "time",
        departure: "now"
      };
      this.map.removeObjects(this.map.getObjects());
      this.getCoordinates(start).then(
        geocoderResult => {
          params["start"] = geocoderResult[0].lat + "," + geocoderResult[0].lng;
          this.router.calculateIsoline(
            params,
            data => {
              if (data.response) {
                var center = new H.geo.Point(
                    data.response.center.latitude,
                    data.response.center.longitude
                  ),
                  isolineCoords = data.response.isoline[0].component[0].shape,
                  linestring = new H.geo.LineString(),
                  isolinePolygon,
                  isolineCenter;
                isolineCoords.forEach(coords => {
                  linestring.pushLatLngAlt.apply(linestring, coords.split(","));
                });
                isolinePolygon = new H.map.Polygon(linestring);
                isolineCenter = new H.map.Marker(center);
                this.map.addObjects([isolineCenter, isolinePolygon]);
                this.map.setViewBounds(isolinePolygon.getBounds());
              }
            },
            error => {
              console.error(error);
            }
          );
        },
        error => {
          console.error(error);
        }
      );
    },
    getCoordinates(query) {
      return new Promise((resolve, reject) => {
        this.geocoder.geocode(
          { searchText: query },
          data => {
            if (data.Response.View[0].Result.length > 0) {
              data = data.Response.View[0].Result.map(location => {
                return {
                  lat: location.Location.DisplayPosition.Latitude,
                  lng: location.Location.DisplayPosition.Longitude
                };
              });
              resolve(data);
            } else {
              reject({ message: "No data found" });
            }
          },
          error => {
            reject(error);
          }
        );
      });
    },
    addMarkersToMap(locations, defaultIconUrl) {
      var scale = window.devicePixelRatio;
      var icon = new H.map.Icon(defaultIconUrl, {
        size: { w: 45 * scale, h: 50 * scale }
      });

      var group = new H.map.Group();
      this.map.addObject(group);
      var self = this;
      var position;
      group.addEventListener(
        "tap",
        function(evt) {
          position = evt.target.getPosition();
          var bubble = new H.ui.InfoBubble(evt.target.getPosition(), {
            content: evt.target.getData()
          });
          self.ui.addBubble(bubble);
        },
        false
      );
      var addmarker = this.AddMarkerToGroup;
      locations.forEach(function(location) {
        addmarker(group, location, icon);
      });
    },
    LoadMapLocations() {
      let locations = [
        {
          Name: "Rio de Janeiro",
          Latitude: -22.9035,
          Longitude: -43.2096,
          Data: "Rio de Janeiro"
        },
        {
          Name: "Curitiba",
          Latitude: -25.4284,
          Longitude: -49.2733,
          Data: "Curitiba"
        },
        {
          Name: "Brasília",
          Latitude: -15.7801,
          Longitude: -47.9292,
          Data: "Brasília"
        },
        {
          Name: "Ouro Preto",
          Latitude: -20.3856,
          Longitude: -43.5035,
          Data: "Ouro Preto"
        },
        {
          Name: "Belo Horizonte",
          Latitude: -19.8157,
          Longitude: -43.9542,
          Data: "Belo Horizonte"
        }
      ];
      this.addMarkersToMap(
        locations,
        "https://image.flaticon.com/icons/png/512/33/33622.png"
      );
    },
    ZoomToLocation(lat, long, zoom) {
      console.log("zoom to location ");
      this.map.setCenter({ lat: lat, lng: long });
      this.map.setZoom(zoom);
    }
  }
};
</script>


<style scoped></style>
