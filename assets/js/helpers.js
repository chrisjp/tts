/**
 * Change the URL parameters in the browser address bar on the fly
 * Source: https://stackoverflow.com/a/10997390/403476
 *
 * @param {string} url      A valid URL, typically window.location.href
 * @param {string} param    The name of the parameter to add/change
 * @param {string} paramVal The value param should have
 * @return {string}         url with updated parameters
 */
export function updateURLParameter(url, param, paramVal)
{
    var TheAnchor = null;
    var newAdditionalURL = "";
    var tempArray = url.split("?");
    var baseURL = tempArray[0];
    var additionalURL = tempArray[1];
    var temp = "";

    if (additionalURL) {
        var tmpAnchor = additionalURL.split("#");
        var TheParams = tmpAnchor[0];
            TheAnchor = tmpAnchor[1];
        if(TheAnchor)
            additionalURL = TheParams;

        tempArray = additionalURL.split("&");

        for (var i=0; i<tempArray.length; i++) {
            if(tempArray[i].split('=')[0] != param) {
                newAdditionalURL += temp + tempArray[i];
                temp = "&";
            }
        }
    }
    else {
        var tmpAnchor = baseURL.split("#");
        var TheParams = tmpAnchor[0];
            TheAnchor  = tmpAnchor[1];

        if (TheParams)
            baseURL = TheParams;
    }

    if (TheAnchor) paramVal += "#" + TheAnchor;

    var rows_txt = temp + "" + param + "=" + paramVal;
    return baseURL + "?" + newAdditionalURL + rows_txt;
}

/**
 * Update the URL in the browser's address bar
 * To be called after updateURLParameter()
 *
 * @param {string} newUrl
 */
export function setNewUrl(newUrl)
{
    if (window.history.replaceState) {
       // prevents browser from storing history with each change:
       window.history.replaceState('', document.getElementsByTagName('title')[0].innerHTML, newUrl);
    }
}

/**
 * Calculate the time passed relative to a date in the past
 * Only going up to hours as unlikely to be keeping data for a longer period
 *
 * @param {Date} thisDate the current date
 * @param {Date} pastDate the date we are calculating against
 * @return {string} 
 */
export function timeSince(thisDate, pastDate)
{
    var secondsPast = (thisDate.getTime() - pastDate.getTime()) / 1000;
    if (secondsPast < 60) {
        return parseInt(secondsPast) + ' seconds ago';
    }
    if (secondsPast < 3600) {
        return parseInt(secondsPast/60) + ' minutes ago';
    }
    else {
        return parseInt(secondsPast/3600) + ' hours ago';
    }
}

/**
 * Count bytes of text string
 * Source: https://stackoverflow.com/a/12203648/403476
 * 
 * @param {string} s
 * @return {number} 
 */
export function byteCount(s) {
    return encodeURI(s).split(/%..|./).length - 1;
}

/**
 * Return a string containing x random characters
 * Source: https://stackoverflow.com/a/12203648/403476
 * 
 * @param {number} length
 * @return {number} 
 */
export const random = (length = 16) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let str = '';
    for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return str;
}