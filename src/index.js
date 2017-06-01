export const inBrowser = typeof window !== 'undefined'
export const UA = inBrowser && window.navigator.userAgent.toLowerCase()
export const isIE = UA && /msie|trident/.test(UA)
export const isIE9 = UA && UA.indexOf('msie 9.0') > 0
export const isEdge = UA && UA.indexOf('edge/') > 0
export const isAndroid = UA && UA.indexOf('android') > 0
export const isIOS = UA && /iphone|ipad|ipod|ios/.test(UA)

export function getUrlParam(key) {
    var search = location.search;
    var params = {};
    if (search.indexOf("?") != -1) {
        search = search.substr(1).split("&");
        for (var i = 0; i < search.length; i++) {
            var kv = search[i];
            params[kv.substring(0, kv.indexOf("="))] = decodeURI(kv.substr(kv.indexOf("=") + 1));
        }
    }
    return key !== undefined ? params[key] : params;
}

var date = {
    format(date, pattern){
        if(typeof date ==='string'){
            date=date.replace(/\-/g,'/');
        }
        date = new Date(date);
        if (!date.getTime()) {
            return;
        }
        function _pad(n) {
            return n < 10 ? '0' + n : n;
        }

        var obj = {
            yyyy: date.getFullYear(),
            MM: _pad(date.getMonth() + 1),
            dd: _pad(date.getDate()),
            hh: _pad(date.getHours()),
            mm: _pad(date.getMinutes()),
            ss: _pad(date.getSeconds())
        };

        return pattern.replace(/[yMdhms]+/g, function (p) {
            return obj[p] ? obj[p] : p;
        })
    }
}
export {date};