import{_ as s,c as n,o as a,a as p}from"./app.bc6903c6.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":3,"title":"v-imgLazy","slug":"v-imglazy","link":"#v-imglazy","children":[]}],"relativePath":"zh/前端笔记/vue/vue2.x/封装Vue图片懒加载指令.md","lastUpdated":1675867495000}'),e={name:"zh/前端笔记/vue/vue2.x/封装Vue图片懒加载指令.md"},l=p(`<h3 id="前言" tabindex="-1">前言</h3><p>ok，兄弟们。前面一篇文章就说过要用指令的方式来实现图片的懒加载。其实，前端发展这么多年，要实现图片懒加载非常简单，配合上Vue的指令，30行轻轻松松实现一个高复用的Vue指令。一起来看看吧。</p><h3 id="v-imglazy" tabindex="-1">v-imgLazy</h3><p>这里我是用intersectionObserber API去实现的。</p><blockquote><p>intersectionObserver 对象的observe()方法向intersectionObserver对象监听的目标集合添加一个元素。一个监听者有一组阈值和一个根，但是可以监视多个目标元素，以查看这些元素可见区域的变化。</p></blockquote><p>简单来说可以监听dom元素进出可视区域，并且可以控制具体的变化。</p><p>具体的使用请看<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API" target="_blank" rel="noreferrer">IntersectionObserver API</a></p><p>新建一个directive用来存放自定义指令</p><blockquote><p>directive/imgLazy.js</p></blockquote><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">import baseImg form &#39;@/assets/logo.png&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 创建一个监听器</span></span>
<span class="line"><span style="color:#A6ACCD;">let obserer = new IntersectionObserver((entries)=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">    // entries 是所有呗监听对象的集合</span></span>
<span class="line"><span style="color:#A6ACCD;">    entries.forEach(entry) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if(entry.isIntersecting){</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 当被监听元素到临界值且未加载图片时触发。</span></span>
<span class="line"><span style="color:#A6ACCD;">            !entry.target.isLoaded &amp;&amp; showImage(entry.target,entry.target.data_src)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function showImage(el,imgSrc){</span></span>
<span class="line"><span style="color:#A6ACCD;">    const img = new Image();</span></span>
<span class="line"><span style="color:#A6ACCD;">    img.src = imgSrc;</span></span>
<span class="line"><span style="color:#A6ACCD;">    img.onload = () =&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">        el.src = imgSrc;</span></span>
<span class="line"><span style="color:#A6ACCD;">        el.isLoaded = true;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 这里用inserted 和 bind 都行，因为IntersectionObserver时异步的，以防意外还是用inserted好一点</span></span>
<span class="line"><span style="color:#A6ACCD;">    //inserted和bind的区别在于inserted时元素已经插入页面，能够直接获取到dom元素的位置信息。</span></span>
<span class="line"><span style="color:#A6ACCD;">    inserted(el,binding) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 初始化时展示默认图片</span></span>
<span class="line"><span style="color:#A6ACCD;">        el.src = baseImg;</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 将需要加载的图片地址绑定在dom上</span></span>
<span class="line"><span style="color:#A6ACCD;">        el.data_src = binding.value;</span></span>
<span class="line"><span style="color:#A6ACCD;">        observer.observe(el)</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    unbind(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 停止监听</span></span>
<span class="line"><span style="color:#A6ACCD;">        observer.disconnect();</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p>在main.js中使用，注册全局指令</p><blockquote><p>main.js</p></blockquote><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">import imgLazy from &#39;@/directive/imgLazy.js&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Vue.directive(&#39;imgLazy&#39;,imgLazy)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>在组件中定义directives使用，给当前组件注册指令</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">import imgLazy from &#39;@/directive/imgLazy.js&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //...</span></span>
<span class="line"><span style="color:#A6ACCD;">    directives: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        imgLazy: imgLazy,</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>组件中使用</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&#39;container&#39;&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div v-for=&quot;(item,index) in imgSrc&quot; :key=&quot;index&quot; &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;img v-imgLazy=&quot;item&quot;  /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import imgLazy from &#39;@/directive/imgLazy.js&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    directives: { imgLazy: imgLazy,},</span></span>
<span class="line"><span style="color:#A6ACCD;">    data() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return {</span></span>
<span class="line"><span style="color:#A6ACCD;">            imgSrc: [&quot;https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1091405991,859863778&amp;fm=26&amp;gp=0.jpg&quot;,&quot;https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2396395246,715775841&amp;fm=26&amp;gp=0.jpg&quot;,&quot;https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=224866248,765861809&amp;fm=26&amp;gp=0.jpg&quot;,&quot;https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2670715487,1547868437&amp;fm=26&amp;gp=0.jpg&quot;,&quot;https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2988957523,3295751190&amp;fm=26&amp;gp=0.jpg&quot;,&quot;https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2698110318,782174384&amp;fm=26&amp;gp=0.jpg&quot;,&quot;https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1102788601,953675482&amp;fm=26&amp;gp=0.jpg&quot;,&quot;https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1091405991,859863778&amp;fm=26&amp;gp=0.jpg&quot;,&quot;https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2396395246,715775841&amp;fm=26&amp;gp=0.jpg&quot;,&quot;https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=224866248,765861809&amp;fm=26&amp;gp=0.jpg&quot;,&quot;https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2670715487,1547868437&amp;fm=26&amp;gp=0.jpg&quot;,&quot;https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2988957523,3295751190&amp;fm=26&amp;gp=0.jpg&quot;,&quot;https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2698110318,782174384&amp;fm=26&amp;gp=0.jpg&quot;,&quot;https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1102788601,953675482&amp;fm=26&amp;gp=0.jpg&quot;,&quot;https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2004055534,3969071219&amp;fm=26&amp;gp=0.jpg&quot;,]</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;style lang=&quot;scss&quot; scoped&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">img {</span></span>
<span class="line"><span style="color:#A6ACCD;">    width: 200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    height: 200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>intersectionObserver API 的兼容性方面基本上处理ie都兼容，所以说你如果想要在ie上实现懒加载就只能自己计算每一个元素了。</p>`,18),r=[l];function t(c,i,o,b,m,u){return a(),n("div",null,r)}const d=s(e,[["render",t]]);export{A as __pageData,d as default};
