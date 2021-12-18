
// for (let i = 0; i < 5; i ++) {
//   setTimeout(function(){
//     document.body.appendChild(document.createTextNode(i))
//   }, 500 * i)
// }

var set = new Set([1,2,3])
for (const i of set) {
  document.body.appendChild(document.createTextNode(i))
}