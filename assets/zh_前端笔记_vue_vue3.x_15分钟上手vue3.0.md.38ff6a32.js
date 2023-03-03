import{_ as s,c as n,o as a,a as l}from"./app.bc6903c6.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"15分钟上手vue3.0","slug":"_15分钟上手vue3-0","link":"#_15分钟上手vue3-0","children":[]},{"level":2,"title":"创建项目","slug":"创建项目","link":"#创建项目","children":[]},{"level":2,"title":"Vue 3 新特性","slug":"vue-3-新特性","link":"#vue-3-新特性","children":[]},{"level":2,"title":"1、Composition API","slug":"_1、composition-api","link":"#_1、composition-api","children":[]}],"relativePath":"zh/前端笔记/vue/vue3.x/15分钟上手vue3.0.md","lastUpdated":1675867495000}'),e={name:"zh/前端笔记/vue/vue3.x/15分钟上手vue3.0.md"},p=l(`<h2 id="_15分钟上手vue3-0" tabindex="-1">15分钟上手vue3.0</h2><p><code>vue 3.0 </code>还没有正式发布，但是<code>Alpha</code>版本已经发布了。</p><p>虽然官方还不推荐在生产环境中直接使用<code>Vue 3</code>,但是提前学习总归是有好处的。</p><blockquote><p>嘴上喊着老子学不动了，双手还是很诚实的打开了\`\`\`Vue 3 文档</p></blockquote><h2 id="创建项目" tabindex="-1">创建项目</h2><p><code>Vue</code>官方很贴心的提供了一个github仓库，让我们能快速体验<code>Vue 3</code>的新特性：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">git clone https://github.com/vuejs/vue-next-webpack-preview.git vue3-start</span></span>
<span class="line"><span style="color:#A6ACCD;">cd vue3-start</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">npm install or yarn install</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>开发环境准备就绪后，启动命令：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">npm run dev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>在浏览器中打开<code>http://127.0.0.1:8080</code>,您可以看到一个简单的计数器页面：</p><blockquote><p>打开 package.json,当前使用的 vue 版本是：3.0.0-bata.2</p></blockquote><h2 id="vue-3-新特性" tabindex="-1">Vue 3 新特性</h2><p><code>Vue 3</code> 的设计目标是更快，更小，并更好的支持<code>TypeScript</code>.</p><p>一些新特性的包括：</p><blockquote><p>1、Composition API 2、Multiple root elements 3、Suspense 4、Multiple V-models 5、Reactivity 6、Teleport 7、Transition 8、Remove Filter 9、App configuration</p></blockquote><h2 id="_1、composition-api" tabindex="-1">1、Composition API</h2><p>Vue管方发布了<code>Composition API</code> 的官方插件，使广大用户可以在 <code>Vue2.x</code>中享<code>Function Base</code>带来的新体验。</p><p>而在 <code>vue 3</code> 中无需单独安装插件，开箱即用。</p><p>打开<code>App.vue</code>,你会开到<code>setup()</code>方法：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;img src=&#39;./logo.png&#39;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;h1&gt;Hello Vue 3!&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;button @click=&quot;inc&quot;&gt;Clicked {{ count }} times.&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setup() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const count = ref(0)</span></span>
<span class="line"><span style="color:#A6ACCD;">        const inc = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            count.value++</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">        return {</span></span>
<span class="line"><span style="color:#A6ACCD;">            count,</span></span>
<span class="line"><span style="color:#A6ACCD;">            inc</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;style scoped&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">img {</span></span>
<span class="line"><span style="color:#A6ACCD;">    width: 200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">h1 {</span></span>
<span class="line"><span style="color:#A6ACCD;">    font-family: Arial, Helvetica, sans-serif;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p><code>Composition API</code> 主要提供量大好处：</p><ol><li>清晰的代码结构</li><li>消除重复逻辑</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;counter&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;p&gt;count: {{ count }}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;p&gt;NewVal (count + 2): {{ countDouble }}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;button @click=&quot;inc&quot;&gt;Increment&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;button @click=&quot;dec&quot;&gt;Decrement&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;p&gt; Message: {{ msg }}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;button @click=&quot;changeMessage()&quot;&gt;Change Message&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { ref, computed, watch } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setup() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        /*---------------------------*/</span></span>
<span class="line"><span style="color:#A6ACCD;">        let count = ref(0)</span></span>
<span class="line"><span style="color:#A6ACCD;">        const countDouble = computed(() =&gt; count.value * 2)</span></span>
<span class="line"><span style="color:#A6ACCD;">        watch(count, newVal =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            console.log(&#39;count chaged&#39;, newVal)</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">        const inc = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            count.value += 1</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        const dec = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (count.value !== 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                count.value -= 1</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        /*---------------------------------*/</span></span>
<span class="line"><span style="color:#A6ACCD;">        let msg = ref(&#39;some text&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        watch(msg, newVal =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            console.log(&#39;msg changed&#39;, newVal)</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">        const changeMessage = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            msg.value = &#39;new Message&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        /*------------------------------*/</span></span>
<span class="line"><span style="color:#A6ACCD;">        return {</span></span>
<span class="line"><span style="color:#A6ACCD;">            count,</span></span>
<span class="line"><span style="color:#A6ACCD;">            inc,</span></span>
<span class="line"><span style="color:#A6ACCD;">            dec,</span></span>
<span class="line"><span style="color:#A6ACCD;">            countDouble,</span></span>
<span class="line"><span style="color:#A6ACCD;">            msg,</span></span>
<span class="line"><span style="color:#A6ACCD;">            changeMessage</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div>`,24),c=[p];function o(t,r,i,u,b,C){return a(),n("div",null,c)}const d=s(e,[["render",o]]);export{m as __pageData,d as default};
