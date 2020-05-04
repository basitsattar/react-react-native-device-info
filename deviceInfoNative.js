var reactNativeDeviceInfo = require('react-native-device-info');
export default function getDeviceInfo() {
    var { getUniqueId, getVersion, getSystemName, getSystemVersion, getBundleId, getModel, isTablet, getBrand, getBuildNumber } = reactNativeDeviceInfo;
    return {
        deviceId: getUniqueId(),
        version: getVersion(),
        systemName: getSystemName(),
        systemVersion: getSystemVersion(),
        bundleId: getBundleId(),
        model: getModel(),
        isTablet: isTablet(),
        brand: getBrand(),
        buildNumber: getBuildNumber(),
        isMobileApp: true
    }
}
