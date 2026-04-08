# 课程生成工作流整理

## 课程页面生成skill更新

1. 接入了mineru mcp，如果使用grok-search获取微信公众号或小红书无法正常提取内容的时候，调用mineru进行文章提取
   - 微信公众号测试链接： https://mp.weixin.qq.com/s/UBHz9ohHkxev9-yVnU5Z-A
2. 如果用户的输入中包含了本地的文件，其中存在图片类文件，直接将图片传给cc的大模型而不是通过编写ocr脚本读取
   - test/文件夹有两张图片可以测试
   - 每次单独传一张图片，不要进行批量操作
   - 如果不能直接将本地图片通过claude code传给大模型，后续再找其他方式处理，本次任务不处理

## skill同步codex

目前项目接入了codex，需要将之前生成的skill同步给codex，包括close-task，generate-page等等

## README补充

需要补充trellis工作流教程，基于当前README.md中trellis的进行补充和优化，需要包括codex的使用方式(使用$作为命令前缀；执行任务前需要手动$before-要求读取规范等等,可以查询trellis最新文档查看使用方式)
还有如何使用generate-page skill
