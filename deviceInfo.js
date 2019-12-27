var reactDeviceDetect = require('react-device-detect');
export default function getDeviceInfo(){
    return reactDeviceDetect.deviceDetect();
}