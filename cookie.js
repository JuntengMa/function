/**
 * @description 获取cookie值
 * @author 未知
 */

function getCookie(name) {
  var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"))
  if (arr != null) return unescape(arr[2])
  return null
}

/**
 * @description 设置cookie值
 * @author 未知
 */

function setCookie(name, value, Hours) {
  var d = new Date()
  var offset = 8
  var utc = d.getTime() + d.getTimezoneOffset() * 60000
  var nd = utc + 3600000 * offset
  var exp = new Date(nd)
  exp.setTime(exp.getTime() + Hours * 60 * 60 * 1000)
  document.cookie =
    name +
    "=" +
    escape(value) +
    ";path=/;expires=" +
    exp.toGMTString() +
    ";domain=360doc.com;"
}
