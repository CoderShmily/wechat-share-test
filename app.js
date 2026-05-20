// 模拟 Vue/React 等 SPA：页面加载后再改标题和 meta
(function () {
  var newTitle = '我在996交易行发布了一个商品';
  var newOgTitle = '金刚石 · ￥1.00（JS 改过的标题）';
  var newDesc = '这是加载后由 JavaScript 写入的描述';

  document.title = newTitle;

  setMeta('property', 'og:title', newOgTitle);
  setMeta('property', 'og:description', newDesc);

  document.getElementById('headline').textContent = newTitle;
  document.getElementById('live-title').textContent = document.title;
  document.getElementById('live-og-title').textContent =
    document.querySelector('meta[property="og:title"]').content;
})();

function setMeta(attr, key, value) {
  var el = document.querySelector('meta[' + attr + '="' + key + '"]');
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}
