const contentIndex = require("./contentIndex");

const catalogIds = [
  "lesson-01",
  "lesson-02",
  "lesson-03",
  "lesson-04",
  "lesson-05",
  "lesson-06",
  "lesson-07",
  "rtk-install-guide"
];

module.exports = {
  latestUpdates: [
    {
      date: "4月2日",
      category: "新增",
      text: "第七课 · Skills推荐与使用：整理官方与第三方 Skills 的优先安装顺序和搭配思路",
      url: "lesson-07.html"
    },
    {
      date: "4月1日",
      category: "更新",
      text: "RTK 安装与配置教程：补齐安装、初始化与配置说明，适合作为最新工具页入口",
      url: "rtk-install-guide.html"
    },
    {
      date: "4月1日",
      category: "新增",
      text: "第六课 · 模型对比：国产vs国外大模型，2026年3月最新数据",
      url: "lesson-06.html"
    },
    {
      date: "4月1日",
      category: "更新",
      text: "第二课新增：定时任务、Skills管理、全局规则、推理深度档位",
      url: "lesson-02.html"
    },
    {
      date: "3月30日",
      category: "更新",
      text: "首页视觉升级：新增正派青年AIGC品牌标识，统一站点风格",
      url: "#brand-panel"
    },
    {
      date: "3月30日",
      category: "新增",
      text: "第四课 · Agent：用大白话解释Agent是什么、为什么非做不可",
      url: "lesson-04.html"
    }
  ],
  catalogItems: catalogIds.map((id) => contentIndex.byId[id]).filter(Boolean)
};
