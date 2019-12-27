
var getDeviceInfo;

if (process.env['REACT_APP_PLATFORM'] === "electron" || process.env['REACT_APP_PLATFORM'] === "web") {
    getDeviceInfo = require('./deviceInfo').default;
}else{
    getDeviceInfo = require('./deviceInfoNative').default;
}

export {
    getDeviceInfo
}