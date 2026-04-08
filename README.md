# AI教育培训

一个轻量可运行的原创落地页项目，用于展示“AI教育培训 / AI实战训练营”方向的课程定位与招生结构。

## 本地开发与预览

### 预览当前可部署输出

```bash
npm start
```

该命令会先运行 Eleventy 构建，再用本地静态服务器预览生成后的 `_site/` 输出。

默认访问地址：

```bash
http://127.0.0.1:3000/
```

### 开发模式

```bash
npm run dev
```

该命令使用 Eleventy 开发服务器，适合在编辑 `site/` 模板、布局和数据时实时预览。

## 部署说明

### GitHub Pages 当前流程

当前仓库通过 GitHub Actions 构建并发布 GitHub Pages：

1. 推送到 `main`
2. GitHub Actions 执行 `npm ci`
3. GitHub Actions 执行 `npm run build`
4. 将生成的 `_site/` 目录上传为 GitHub Pages artifact
5. 通过 `actions/deploy-pages` 发布站点

对应工作流文件：

```text
.github/workflows/pages.yml
```

### GitHub Pages 仓库设置

在 GitHub 仓库页面打开：

```text
Settings -> Pages -> Build and deployment -> Source
```

保持来源为：

```text
GitHub Actions
```

### 当前开发要求

- `_site/` 是当前 Eleventy 构建输出目录
- 页面 URL 和输出结构保持不变
- 日常开发仍然编辑 `site/` 和 `public/`
- `_site/` 仅作为生成产物，不需要手动提交用于 GitHub Pages 发布

## 目录说明

- `site/`
  - Eleventy 源目录
  - 已迁移页面、布局、includes、共享数据的真实来源
- `_site/`
  - Eleventy 生成后的静态输出
  - GitHub Actions 会将其作为 GitHub Pages 部署 artifact
- `public/`
  - 迁移期保留的旧页面参考与共享静态资源来源
  - `styles.css`、`brand-logo.svg`、`screenshots/` 等资源会通过 Eleventy 复制到 `_site/`
- `server.js`
  - 本地预览生成输出的原生 Node 静态文件服务
- `package.json`
  - Eleventy 构建与预览脚本配置

## 当前内容

- `site/index.html`
  - 首页真实来源
  - 包含课程定位、痛点、模块、学习路径、FAQ、CTA
- `site/codex-first-lesson.html`
  - Codex 第一期教学提案真实来源
  - 包含问卷分析、原创预热文案、Mac/Windows 安装方法、课程大纲
- `_site/`
  - 当前构建后的可部署站点输出

## 适合继续扩展

- 接报名表单
- 增加课程详情页
- 增加讲师介绍和案例区
- 改成企业内训版或小红书引流承接页
