# 测试 generate-page 命令

## Goal

在下次会话中实际运行 `/trellis:generate-page`，验证它是否能够基于当前项目规范自动识别页面类型、给出合理落点建议，并在完成后输出命令自检结论。

## Requirements

- 使用一份真实输入进行测试（文本、本地文件路径或网页链接均可）
- 命令执行前应先读取当前前端规范与现有页面结构
- 若输入存在歧义，命令应先给出推荐类型与备选方案
- 若输入明确，命令应直接进入页面生成或修改流程
- 结果输出中必须包含“命令自检”区块

## Acceptance Criteria

- [ ] 能识别当前项目中的相关页面类型，而不是写死为固定三类
- [ ] 能说明本次输入被映射到哪类页面，以及原因
- [ ] 若发生页面修改，能列出实际修改的文件
- [ ] 输出中包含命令自检结果
- [ ] 若发现结构变化，能提示命令定义可能需要更新

## Technical Notes

- 命令定义文件：`.claude/commands/trellis/generate-page.md`
- Cursor 镜像命令：`.cursor/commands/trellis-generate-page.md`
- 当前项目页面源目录：`public/`
- 发布镜像目录：`docs/`
