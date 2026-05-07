# GamePulse 游戏攻略站

这是一个无需构建工具的静态游戏攻略网站模板，适合年轻玩家风格。你买好域名后，可以把整个 `game-guide-site` 文件夹直接部署到任意静态托管平台。

## 本地预览

```bash
cd game-guide-site
python3 -m http.server 8080
```

然后在浏览器打开 <http://localhost:8080>。

## 部署方式

### Netlify / Vercel / Cloudflare Pages

1. 新建静态站点项目。
2. 上传或指定本目录作为项目目录。
3. 构建命令留空。
4. 发布目录填写 `game-guide-site`；如果平台项目根目录已经是本文件夹，则发布目录填写 `.`。
5. 发布后，在平台的域名设置里绑定你的域名。
6. 到域名服务商后台添加平台提示的 CNAME 或 A 记录，等待 DNS 生效。

### 普通服务器

把本目录里的 `index.html` 和 `assets` 文件夹上传到 Web 服务根目录即可，例如 Nginx 的 `/var/www/html`。

## 后续可替换内容

- 修改 `index.html` 中的攻略卡片、版本情报和投稿说明。
- 修改 `assets/styles.css` 中的颜色变量来调整品牌色。
- 修改 `assets/app.js` 接入真实搜索接口、投稿接口或统计服务。
