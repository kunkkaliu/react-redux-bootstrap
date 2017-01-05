export function isPromise(value) {
    if (value !== null && typeof value === 'object') {
        return value.promise && typeof value.promise.then === 'function';
    }
}

export function setCookie(name, value, expires) {
    var oDate = new Date();
    oDate.setDate(oDate.getDate() + expires);

    document.cookie = name + '=' + value + ';expires=' + oDate + ";path=/";
}

export function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

export function removeCookie(name) {
    setCookie(name, 'sss', -1);
}

const Format = {}
Format.date = function (time) {
    time = new Date(time)
    const between = (Date.now() - Number(time))/1000
    if (between < 3600) {
        return pluralize(~~(between / 60), ' 分钟前')
    } else if (between < 86400) {
        return pluralize(~~(between / 3600), ' 小时前')
    } else {
        return pluralize(~~(between / 86400), ' 天前')
    }
}

function pluralize (time, label) {
    return time + label
}

export {Format}






