import{_ as e,c as t,o as i,a as n}from"./app.bc6903c6.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"需求","slug":"需求","link":"#需求","children":[{"level":3,"title":"keep-alive","slug":"keep-alive","link":"#keep-alive","children":[]},{"level":3,"title":"弹框","slug":"弹框","link":"#弹框","children":[]},{"level":3,"title":"嵌套路由（B 页面为 A 页面的子路由，需要在 A 页面里增加<router-view />）","slug":"嵌套路由-b-页面为-a-页面的子路由-需要在-a-页面里增加-router-view","link":"#嵌套路由-b-页面为-a-页面的子路由-需要在-a-页面里增加-router-view","children":[]}]}],"relativePath":"zh/前端笔记/vue/vue2.x/缓存某个页面的操作.md","lastUpdated":1675867495000}'),a={name:"zh/前端笔记/vue/vue2.x/缓存某个页面的操作.md"},l=n(`<h2 id="需求" tabindex="-1">需求</h2><p>缓存 A 页面，进入 B 页面进行一些操作后，返回 A 页面能继续之前的操作 场景： 1、列表页，根据条件搜索、翻页后，点击某条记录进编辑页操作，操作完毕后退回列表页，要保持之前的搜索条件和页数 2、表单页，一些下拉选择框里的数据是读取别的模块的记录，一般会在表单里放个快捷入口，点击跳转过去进行新增或编辑，操作完毕后返回表单，需要保留之前表单已填数据</p><h3 id="keep-alive" tabindex="-1">keep-alive</h3><pre><code>优势：
1、体验上最佳，keep-alive 天然为组件缓存而提供
2、可以实现更为复杂的缓存效果，例如 A 页面-&gt;B 页面需要将 A 页面缓存，A 页面-&gt;C 页面不需要对 A 页面缓存
劣势：
1、对 A、B 两个页面的路由配置有一定要求，例如 B 页面需要与 A 页面同级或者是 A 页面的下级
2、对开发人员理解 keep-alive 的机制有一定要求
</code></pre><h3 id="弹框" tabindex="-1">弹框</h3><pre><code>优势：
1、弹框的思路就是将 A、B 两个页面变成一个页面，所以不存在需不需要缓存 A 页面的问题，因为始终都在 A 页面
劣势：
1、无法直接访问 B 页面的内容，当然也可以通过给 A 页面路由增加 query 的方式，实现访问自动打开弹框，但实际上列表页也已经加载好了，无形中增加了不必要的网络请求
</code></pre><h3 id="嵌套路由-b-页面为-a-页面的子路由-需要在-a-页面里增加-router-view" tabindex="-1">嵌套路由（B 页面为 A 页面的子路由，需要在 A 页面里增加<code>&lt;router-view /&gt;</code>）</h3><pre><code>优势：
1、和弹框相比，B 页面有独立的路由地址，可以直接访问
劣势：
1、由于 B 页面是子路由，所以即便直接访问，A 页面的生命周期依旧会触发，与弹框方案的问题类似（当然这个问题可以通过 if 条件去限制，但代码会比较臃肿）
</code></pre><p>cookie 等数据缓存方案不在讨论范围内</p>`,9),r=[l];function o(_,d,c,p,s,v){return i(),t("div",null,r)}const u=e(a,[["render",o]]);export{h as __pageData,u as default};
