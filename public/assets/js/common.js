/**
 * 延时跳转，默认1秒后跳转
 * @param url
 * @param time
 */
function timeJump(url, time) {
    let t = arguments[1] ? arguments[1] : 1500;
    setTimeout("location.href=\""+url+"\";", t);
}