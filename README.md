# SPA 标题演示：源代码 vs 检查

用静态页模拟「服务器先给壳子，JS 加载后再改 `<title>` / og meta」。

## 本地预览

```bash
cd spa-title-demo
python3 -m http.server 8080
```

浏览器打开 http://127.0.0.1:8080 ，然后：

1. **右键 → 显示网页源代码** → 看到 `分享页`、`你的分享标题`
2. **右键 → 检查 → Elements** → 看到 JS 改后的标题和 og 内容

## 部署到 GitHub Pages

1. 在 GitHub 新建仓库，把本目录 `spa-title-demo` 里的文件推上去（或把整个仓库根目录设为本文件夹内容）。
2. 仓库 **Settings → Pages → Build and deployment → Source** 选 **Deploy from a branch**。
3. Branch 选 `main`，文件夹选 `/ (root)` 或 `/docs`（若你把文件放在 `docs/` 下）。
4. 等几分钟后访问：`https://<你的用户名>.github.io/<仓库名>/`

## 部署到 Gitee Pages

1. Gitee 新建仓库并推送同样文件。
2. 仓库 **服务 → Gitee Pages** → 启动（选 master/main 分支、根目录）。
3. 访问 Gitee 提供的 Pages 地址。

## 和真实 996 分享页的关系

| 现象 | 本 demo | 真实分享页 |
|------|---------|------------|
| 源代码里 title | `分享页` | `分享页` |
| 检查里 title | JS 改后的文案 | 根据商品 ID 动态设置 |
| 微信分享卡片 | 往往仍读**首次 HTML** 的 og | 同上，爬虫一般不执行 JS |

**注意**：微信、QQ 分享预览通常**不会执行**你页面里的 JS，所以即使 Elements 里 og:title 已变，分享卡片仍可能显示源代码里的「你的分享标题」。要分享卡片正确，需要在**服务端**按商品 ID 输出不同的 HTML，或用服务端渲染 / 预渲染。
