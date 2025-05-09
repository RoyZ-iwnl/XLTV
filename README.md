# 血狼破军 X 6657 烂梗收集站

本仓库旨在收集、整理与分享血狼破军 X 6657的各种烂梗，欢迎大家积极贡献新内容，让梗库变得更加丰富！

## 项目地址

[XLTV.TOP](https://XLTV.TOP)

---

## 目录

- [项目简介](#项目简介)
- [如何贡献/提交 PR](#如何贡献提交-pr)
- [添加新烂梗的步骤](#添加新烂梗的步骤)
- [查重提示](#查重提示)
- [鸣谢与来源](#鸣谢与来源)

---

## 项目简介

本项目收录并持续更新血狼破军6657相关的烂梗，所有梗均存储于 [`js/data.js`](js/data.js) 文件中，便于管理与展示。欢迎各位热心网友补充新梗，合力建设更全面的烂梗资料库！

---

## 如何贡献/提交 PR

1. **Fork 本仓库**  
   点击右上角的 Fork 按钮，将项目复制到你的账户下。

2. **Clone 到本地**  
   ```bash
   git clone https://github.com/RoyZ-iwnl/XLTV.git
   ```

3. **新建分支**  
   ```bash
   git checkout -b add-new-meme
   ```

4. **编辑 [`js/data.js`](js/data.js)**  
   按照下文的[添加新烂梗的步骤](#添加新烂梗的步骤)进行操作。

5. **提交并推送**  
   ```bash
   git add js/data.js
   git commit -m "feat: 新增某某梗"
   git push origin add-new-meme
   ```

6. **发起 Pull Request**   
   在 GitHub 页面上，点击 "Compare & pull request"，填写说明后提交。

---

## 添加新烂梗的步骤

1. 打开 [`js/data.js`](js/data.js) 文件。
2. 在 `memes: [ ... ]` 数组的末尾（倒数第二行，`]` 之前），添加你的新梗，格式如下：

   ```javascript
   "你要添加的新梗内容",
   ```

   **示例：**
   ```javascript
   "Don刻：谁是合约大C？维神：别别别",
   ```

3. **注意事项：**
   - 每条梗必须用英文半角逗号 `,` 隔开。
   - 请确保梗内容用双引号 `"` 包裹。
   - 一次可添加多条，建议每条单独一行，便于查阅和管理。

---

## 查重提示

在添加新烂梗前，请**务必自行查重**，避免重复收录。
- 可以直接在 [`js/data.js`](js/data.js) 文件中使用浏览器搜索（Ctrl+F / Cmd+F）。
- 若内容高度相似，也建议合并或精简。

---

## 鸣谢与来源

- 网站灵感来源：[sb6657.cn](https://sb6657.cn/)
- 梗内容主要收集自各大视频以及评论区，包括但不限于B站、抖音、微博等。

  > 其他来源链接：  
  > - [玩机器、Machine指示宫监手入侵明日方舟模组评论区](https://www.bilibili.com/video/BV1gJi2Y5E3N/)  
  > - [AI血狼破军教你深情朗诵性价比6657烂梗](https://www.bilibili.com/video/BV1ZwNTepEC3/)

感谢所有参与贡献的朋友！