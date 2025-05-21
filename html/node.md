# HTML 标签 `dl` `dt` `dd`
HTML 中的 `<dl>`, `<dt>`, 和 `<dd>` 标签是用于创建 **描述列表（Description List）** 的标签，通常用于展示术语及其定义或描述。以下是它们的含义和缩写：

1. **`<dl>`**  
   - **全称**：**Description List**（描述列表）  
   - **作用**：定义一个描述列表，包含一组术语（`<dt>`）及其描述（`<dd>`）。

2. **`<dt>`**  
   - **全称**：**Description Term**（描述术语）  
   - **作用**：定义描述列表中的术语（通常是标题或关键词）。

3. **`<dd>`**  
   - **全称**：**Description Details**（描述详情）  
   - **作用**：定义描述列表中术语的具体描述或解释。

### 示例代码：
```html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language，用于创建网页的标准标记语言。</dd>
  
  <dt>CSS</dt>
  <dd>Cascading Style Sheets，用于描述网页的样式和布局。</dd>
</dl>
```

### 显示效果：
- **HTML**  
  HyperText Markup Language，用于创建网页的标准标记语言。  
- **CSS**  
  Cascading Style Sheets，用于描述网页的样式和布局。

### 适用场景：
- 词汇表（Glossary）
- 问答（Q&A）
- 键值对（如元数据）
- 任何需要 **术语-描述** 结构的场景

这些标签有助于语义化 HTML，使内容更清晰，同时便于搜索引擎和屏幕阅读器解析。