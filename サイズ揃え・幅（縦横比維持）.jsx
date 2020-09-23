/**
 * 選択した複数オブジェクトの幅を、その中の最前面オブジェクトに揃える。
 * このとき、各オブジェクトの縦横比は変えないようにする。
 * @date 2020-09-23
 * @author 高橋道久（@neriu）
 */

var selectedObj = activeDocument.selection;

// 選択オブジェクトが2つ以上なければ何もしない
if (selectedObj.length <= 1) {
  alert('オブジェクトを２つ以上選択してください。');
} else {
  // この幅に揃える
  var w = selectedObj[0].width;

  for (var i = 0; i < selectedObj.length; i++) {
    // 縦横比
    var ratio = w / selectedObj[i].width;

    // 変更後の高さ
    var h = selectedObj[i].height * ratio;

    // 変更
    selectedObj[i].width = w;
    selectedObj[i].height = h;
  }
}
