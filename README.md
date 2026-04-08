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

## 开发说明

### Trellis使用

推荐优先通过 Claude Code 使用 Trellis：Claude Code 可以借助 hook 自动注入部分上下文；Codex 也能使用同一套 Trellis 工作流，但很多前置命令需要手动触发。

#### Quick start

```
# 1. 安装 Trellis
npm install -g @mindfoldhq/trellis@latest

# 2. 初始化（只需要执行一次）
trellis init -u your-name

# 3. 或者初始化多平台集成
trellis init --cursor --opencode --codex -u your-name
```

> 初始化流程中可能会出现 template 模板选择，直接选空白模板即可。

#### Trellis目录说明

- `.trellis/`：规范、任务、workspace、脚本等核心工作流目录
- `.claude/commands/trellis/`：Claude Code 的 Trellis 命令定义
- `.cursor/commands/`：Cursor 的 Trellis 命令镜像
- `.agents/skills/`：项目级共享 skills，Codex 可直接读取这里的 `SKILL.md`
- `.codex/`：Codex 项目级配置、hooks、agents（如果启用）

#### 常用工具配置

##### playwright-cli

用于程序自动开启浏览器测试页面。

```
# 安装工具
npm install -g @playwright/cli@latest

# 在对应的项目中配置 skills
playwright-cli install --skills
```

##### 搜索工具配置

`grok-search` 用于网页搜索与抓取；`mineru` 用于文档和复杂内容页提取。

- Tavily：每月有免费额度
- 官网：`https://www.tavily.com/`
- MinerU：可注册后生成 API token，用于提取微信公众号、小红书等正文
- 官网：`https://mineru.net/apiManage/token`

##### `.claude` MCP 配置示例

```json
{
  "mcpServers": {
    "grok-search": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "--from",
        "git+https://github.com/GuDaStudio/GrokSearch@grok-with-tavily",
        "grok-search"
      ],
      "env": {
        "GROK_API_URL": "grok-api-url",
        "GROK_API_KEY": "grok-api-key",
        "GROK_MODEL": "grok-4.1-fast",
        "TAVILY_API_KEY": "tavily-api-key",
        "TAVILY_API_URL": "https://api.tavily.com"
      }
    },
    "mineru": {
      "type": "http",
      "url": "https://mcp.mineru.net/mcp",
      "env": {
        "MINERU_API_TOKEN": "mineru token"
      }
    }
  }
}
```

#### Claude Code 工作流

```bash
# 1. 打开 Claude Code
claude

# 2. 开启 Trellis 会话
# 第一次进入建议手动执行；后续很多场景会通过 hook 自动补上下文
/trellis:start

# 3. 如果是前端任务，先读前端规范
/trellis:before-frontend-dev

# 4. 给出需求，并明确使用页面生成 skill
xxxxxxxx（需求）
使用 /trellis:generate-page 处理

# 5. 大任务可先讨论，再拆 Trellis task
/trellis:brainstorm

# 6. 完成开发、测试、修正
.....

# 7. 准备收尾时执行关闭任务流程
/trellis:close-task
```

#### Codex 工作流

Codex 侧使用 `$` 作为 skill / command 触发前缀。项目内共享 skill 放在 `.agents/skills/`，Codex 启动于仓库内时可以读取这些 skill。

常用命令对照：

- 开始会话：`$start`
- 前端任务前读取规范：`$before-frontend-dev`
- 后端任务前读取规范：`$before-backend-dev`
- 头脑风暴拆任务：`$brainstorm`
- 页面生成：`$generate-page`
- 收尾关单：`$close-task`

推荐流程：

```text
1. 在仓库根目录启动 Codex
2. 先执行 $start
3. 开始写代码前，按任务类型手动执行 $before-frontend-dev 或 $before-backend-dev
4. 如果任务较大，先执行 $brainstorm
5. 进入实现后，用 $generate-page 或其他 skill 辅助处理
6. 完成验证后执行 $close-task
```

> 和 Claude Code 不同，Codex 侧不要假设这些前置命令会自动执行；`before-*` 这类读取规范的步骤建议手动执行。

#### `generate-page` 使用说明

`generate-page` 用于根据输入材料，自动判断应该新增页面、更新已有页面，还是把内容并入现有页面结构。

支持的输入类型：

- 纯文本需求
- 本地文件或文件夹
- 本地图片
- 网页链接
- 微信公众号、小红书等内容平台链接

使用原则：

- 先读取当前项目规范，再决定页面落点
- 优先复用现有页面结构、导航模式、搜索数据模式
- 普通网页链接优先使用 `grok-search`
- 对微信公众号、小红书等链接，若 `grok-search` 只能拿到壳页、搜索页、登录页或正文结构明显不完整，再回退到 `mineru`
- 本地图片优先直接交给 Claude Code 多模态能力读取，不要先写 OCR 脚本
- 本地图片默认一次只处理 1 张，不做批量图片分析

典型用法：

```text
请基于这个课程草稿 <文件路径/文件夹路径> 新增一个专题页，使用 /trellis:generate-page 处理
```

```text
请把这个公众号链接 <链接> 整理成课程介绍页，若抓取不完整则回退 mineru，使用 /trellis:generate-page 处理
```

#### 什么时候用 `brainstorm`

当需求存在下面任一情况时，建议先用 `brainstorm`：

- 页面应该落到哪里不明确
- 一次会影响多个页面或多个入口
- 需要先拆 Trellis task 再逐个处理
- 需求中同时包含文本、图片、链接、文件夹等混合输入
