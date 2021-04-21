/**
 * @description 文件流转化为base64
 * @author June_
 * @async true
 * @method const base64File = await fileByBase64(file)
 */

const fileByBase64 = (file) => {
  let fileByBase64 = new Promise((resolve, reject) => {
    var reader = new FileReader()
    reader.readAsDataURL(file[0] ? file[0] : file)
    reader.onload = function (e) {
      resolve(e.target.result)
    }
  })
  return fileByBase64
}

/**
 * @description url转化为blob
 */

const dataURLtoFile = (dataurl, filename) => {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], filename, { type: mime })
}

/**
 * @description blob转化为file
 */

const blobToFile = (theBlob, fileName) => {
  theBlob.lastModifiedDate = new Date()
  theBlob.name = fileName
  return theBlob
}

//调用
// var blob = dataURLtoBlob(base64Data);
// var file = blobToFile(blob, imgName);
