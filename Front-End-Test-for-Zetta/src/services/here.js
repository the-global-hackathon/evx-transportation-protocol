// Initialize here
var app_id = {};
var app_code = {};
var platform = new H.service.Platform({
  app_id: this.appId,
  app_code: this.appCode,
  useCIT: true,
  useHTTPS: true
});

export default platform;
