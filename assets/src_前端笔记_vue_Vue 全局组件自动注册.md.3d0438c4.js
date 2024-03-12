import{_ as s,c as n,o as a,Q as p}from"./chunks/framework.30f3a391.js";const l=JSON.parse('{"title":"Vue 全局组件自动注册","description":"","frontmatter":{},"headers":[],"relativePath":"src/前端笔记/vue/Vue 全局组件自动注册.md","filePath":"src/前端笔记/vue/Vue 全局组件自动注册.md","lastUpdated":1683717698000}'),o={name:"src/前端笔记/vue/Vue 全局组件自动注册.md"},e=[p('<h1 id="vue-全局组件自动注册" tabindex="-1">Vue 全局组件自动注册 <a class="header-anchor" href="#vue-全局组件自动注册" aria-label="Permalink to &quot;Vue 全局组件自动注册&quot;">​</a></h1><p>在 Vue 中，我们通过 <code>Vue.component(&#39;MyComponentName&#39;, { /* ... */ })</code> 的方式来进行全局组件注册，但如果需要全局注册的组件很多，这时代码就会变得比较臃肿，例如：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 注册 5 个全局组件</span></span>\n<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> ExampleComponent1 </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./components/exampleComponent1/index&#39;</span></span>\n<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> ExampleComponent2 </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./components/exampleComponent2/index&#39;</span></span>\n<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> ExampleComponent3 </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./components/exampleComponent3/index&#39;</span></span>\n<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> ExampleComponent4 </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./components/exampleComponent4/index&#39;</span></span>\n<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> ExampleComponent5 </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./components/exampleComponent5/index&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#E1E4E8;">Vue.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;ExampleComponent1&#39;</span><span style="color:#E1E4E8;">, ExampleComponent1)</span></span>\n<span class="line"><span style="color:#E1E4E8;">Vue.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;ExampleComponent2&#39;</span><span style="color:#E1E4E8;">, ExampleComponent2)</span></span>\n<span class="line"><span style="color:#E1E4E8;">Vue.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;ExampleComponent3&#39;</span><span style="color:#E1E4E8;">, ExampleComponent3)</span></span>\n<span class="line"><span style="color:#E1E4E8;">Vue.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;ExampleComponent4&#39;</span><span style="color:#E1E4E8;">, ExampleComponent4)</span></span>\n<span class="line"><span style="color:#E1E4E8;">Vue.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;ExampleComponent5&#39;</span><span style="color:#E1E4E8;">, ExampleComponent5)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 注册 5 个全局组件</span></span>\n<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> ExampleComponent1 </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./components/exampleComponent1/index&#39;</span></span>\n<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> ExampleComponent2 </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./components/exampleComponent2/index&#39;</span></span>\n<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> ExampleComponent3 </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./components/exampleComponent3/index&#39;</span></span>\n<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> ExampleComponent4 </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./components/exampleComponent4/index&#39;</span></span>\n<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> ExampleComponent5 </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./components/exampleComponent5/index&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#24292E;">Vue.</span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;ExampleComponent1&#39;</span><span style="color:#24292E;">, ExampleComponent1)</span></span>\n<span class="line"><span style="color:#24292E;">Vue.</span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;ExampleComponent2&#39;</span><span style="color:#24292E;">, ExampleComponent2)</span></span>\n<span class="line"><span style="color:#24292E;">Vue.</span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;ExampleComponent3&#39;</span><span style="color:#24292E;">, ExampleComponent3)</span></span>\n<span class="line"><span style="color:#24292E;">Vue.</span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;ExampleComponent4&#39;</span><span style="color:#24292E;">, ExampleComponent4)</span></span>\n<span class="line"><span style="color:#24292E;">Vue.</span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;ExampleComponent5&#39;</span><span style="color:#24292E;">, ExampleComponent5)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>下面我们就针对这块痛点，做些优化。</p><h2 id="循环注册" tabindex="-1">循环注册 <a class="header-anchor" href="#循环注册" aria-label="Permalink to &quot;循环注册&quot;">​</a></h2><p>回看上面的演示代码，最先能想到的优化方式，就是能不能做到批量注册，但查了 Vue 的手册，并没有看到组件批量注册的 API。</p><p>没办法，只能改变下思路，既然不能批量注册，那能不能做一层循环，在循环体内依次注册我们的组件呢？</p><p>答案当然是可以的，来看下我的实现代码：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> ExampleComponent1 </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./components/exampleComponent1/index&#39;</span></span>\n<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> ExampleComponent2 </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./components/exampleComponent2/index&#39;</span></span>\n<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> ExampleComponent3 </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./components/exampleComponent3/index&#39;</span></span>\n<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> ExampleComponent4 </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./components/exampleComponent4/index&#39;</span></span>\n<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> ExampleComponent5 </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./components/exampleComponent5/index&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">components</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>\n<span class="line"><span style="color:#E1E4E8;">    ExampleComponent1,</span></span>\n<span class="line"><span style="color:#E1E4E8;">    ExampleComponent2,</span></span>\n<span class="line"><span style="color:#E1E4E8;">    ExampleComponent3,</span></span>\n<span class="line"><span style="color:#E1E4E8;">    ExampleComponent4,</span></span>\n<span class="line"><span style="color:#E1E4E8;">    ExampleComponent5</span></span>\n<span class="line"><span style="color:#E1E4E8;">}</span></span>\n<span class="line"><span style="color:#E1E4E8;">Object.</span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">(components).</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>\n<span class="line"><span style="color:#E1E4E8;">    Vue.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(key, components[key])</span></span>\n<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> ExampleComponent1 </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./components/exampleComponent1/index&#39;</span></span>\n<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> ExampleComponent2 </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./components/exampleComponent2/index&#39;</span></span>\n<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> ExampleComponent3 </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./components/exampleComponent3/index&#39;</span></span>\n<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> ExampleComponent4 </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./components/exampleComponent4/index&#39;</span></span>\n<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> ExampleComponent5 </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./components/exampleComponent5/index&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">components</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>\n<span class="line"><span style="color:#24292E;">    ExampleComponent1,</span></span>\n<span class="line"><span style="color:#24292E;">    ExampleComponent2,</span></span>\n<span class="line"><span style="color:#24292E;">    ExampleComponent3,</span></span>\n<span class="line"><span style="color:#24292E;">    ExampleComponent4,</span></span>\n<span class="line"><span style="color:#24292E;">    ExampleComponent5</span></span>\n<span class="line"><span style="color:#24292E;">}</span></span>\n<span class="line"><span style="color:#24292E;">Object.</span><span style="color:#6F42C1;">keys</span><span style="color:#24292E;">(components).</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">key</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>\n<span class="line"><span style="color:#24292E;">    Vue.</span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">(key, components[key])</span></span>\n<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>首先组件还是要手动引入，引入之后我定义了一个 <code>components</code> 的对象，将引入组件的变量名存放在 <code>components</code> 对象里，最后通过 <code>Object.keys()</code> 方法循环对象并注册组件。</p><p>这个方法虽然减轻了一部分工作，但实际使用中，依旧还是比较麻烦，于是我又开始思考能否做到全自动注册。</p><h2 id="自动注册" tabindex="-1">自动注册 <a class="header-anchor" href="#自动注册" aria-label="Permalink to &quot;自动注册&quot;">​</a></h2><p>之前在阅读 <a href="https://github.com/PanJiaChen/vue-admin-template" target="_blank" rel="noreferrer">vue-admin-template</a> 的时候，学习到了一个语法 <code>require.context()</code> ，这是 Webpack 的一个 API ，它能做到遍历文件夹中的指定文件并自动引入。</p><p>既然能遍历指定文件，还能自动引入，这就已经解决了主要问题了，而我要做无非就是在遍历指定文件的同时，将其注册就可以了。</p><p>下面来看下实现代码：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Vue </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">componentsContext</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> require.</span><span style="color:#B392F0;">context</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./components&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">index</span><span style="color:#79B8FF;">.</span><span style="color:#DBEDFF;">vue</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">)</span></span>\n<span class="line"><span style="color:#E1E4E8;">componentsContext.</span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">component</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>\n<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 获取文件中的 default 模块</span></span>\n<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">componentConfig</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">componentsContext</span><span style="color:#E1E4E8;">(component).default</span></span>\n<span class="line"><span style="color:#E1E4E8;">    Vue.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(componentConfig.name, componentConfig)</span></span>\n<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Vue </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">componentsContext</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> require.</span><span style="color:#6F42C1;">context</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./components&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span><span style="color:#032F62;"> /index</span><span style="color:#005CC5;">.</span><span style="color:#032F62;">vue</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">)</span></span>\n<span class="line"><span style="color:#24292E;">componentsContext.</span><span style="color:#6F42C1;">keys</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">component</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>\n<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 获取文件中的 default 模块</span></span>\n<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">componentConfig</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">componentsContext</span><span style="color:#24292E;">(component).default</span></span>\n<span class="line"><span style="color:#24292E;">    Vue.</span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">(componentConfig.name, componentConfig)</span></span>\n<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>首先通过 <code>require.context()</code> 获取 ./components 目录下所有文件夹里的 index.vue 文件，然后循环依次读取文件中的 default 模块，并使用组件的 <code>name</code> 做为组件名进行组件注册。</p><blockquote><p>需要注意的是，组件必须设置 <code>name</code> 值，因为注册的组件名就是 <code>name</code> 值，所以还要确保不能重名。</p></blockquote><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>\n<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;ExampleComponent1&#39;</span></span>\n<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>\n<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;ExampleComponent1&#39;</span></span>\n<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>到此为止，我们已经实现组件的全局自动注册功能了，只需按照规范写好组件，放到 ./components 目录下即可，程序就会自动遍历并注册，无需我再手动操作。</p><h2 id="扩展" tabindex="-1">扩展 <a class="header-anchor" href="#扩展" aria-label="Permalink to &quot;扩展&quot;">​</a></h2><p>组件有另一种调用方式，也就是通过 js 调用，例如 ElementUI 里的 <a href="https://element.eleme.cn/#/zh-CN/component/notification" target="_blank" rel="noreferrer">Notification</a> 组件，它的调用就是通过 <code>this.$notify()</code> 的方式调用，而 <code>$notify</code> 方法是 ElementUI 挂载到 Vue 原型链上的一个全局方法。</p><p>针对这种通过 js 调用的组件，我们需要在原有组件同目录下增加一个 js 文件，里面的代码如下：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Vue </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">component</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./main.vue&#39;</span><span style="color:#E1E4E8;">).default</span></span>\n<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">constructor</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Vue.</span><span style="color:#B392F0;">extend</span><span style="color:#E1E4E8;">(component)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">exampleComponent1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">options</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>\n<span class="line"><span style="color:#E1E4E8;">    options </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> options </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> {}</span></span>\n<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> instance </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">constructor</span><span style="color:#E1E4E8;">({</span></span>\n<span class="line"><span style="color:#E1E4E8;">        data: options</span></span>\n<span class="line"><span style="color:#E1E4E8;">    })</span></span>\n<span class="line"><span style="color:#E1E4E8;">    instance.vm </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> instance.</span><span style="color:#B392F0;">$mount</span><span style="color:#E1E4E8;">()</span></span>\n<span class="line"><span style="color:#E1E4E8;">    instance.dom </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> instance.vm.$el</span></span>\n<span class="line"><span style="color:#E1E4E8;">    document.body.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(instance.dom)</span></span>\n<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> instance.vm</span></span>\n<span class="line"><span style="color:#E1E4E8;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>\n<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">install</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">Vue</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>\n<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">Vue</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">[</span><span style="color:#9ECBFF;">`$${</span><span style="color:#E1E4E8;">component</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}`</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> exampleComponent1</span></span>\n<span class="line"><span style="color:#E1E4E8;">    }</span></span>\n<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Vue </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">component</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./main.vue&#39;</span><span style="color:#24292E;">).default</span></span>\n<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">constructor</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Vue.</span><span style="color:#6F42C1;">extend</span><span style="color:#24292E;">(component)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">exampleComponent1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">options</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>\n<span class="line"><span style="color:#24292E;">    options </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> options </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> {}</span></span>\n<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> instance </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">constructor</span><span style="color:#24292E;">({</span></span>\n<span class="line"><span style="color:#24292E;">        data: options</span></span>\n<span class="line"><span style="color:#24292E;">    })</span></span>\n<span class="line"><span style="color:#24292E;">    instance.vm </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> instance.</span><span style="color:#6F42C1;">$mount</span><span style="color:#24292E;">()</span></span>\n<span class="line"><span style="color:#24292E;">    instance.dom </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> instance.vm.$el</span></span>\n<span class="line"><span style="color:#24292E;">    document.body.</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(instance.dom)</span></span>\n<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> instance.vm</span></span>\n<span class="line"><span style="color:#24292E;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>\n<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">install</span><span style="color:#24292E;">: </span><span style="color:#E36209;">Vue</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>\n<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">Vue</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">[</span><span style="color:#032F62;">`$${</span><span style="color:#24292E;">component</span><span style="color:#032F62;">.</span><span style="color:#24292E;">name</span><span style="color:#032F62;">}`</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> exampleComponent1</span></span>\n<span class="line"><span style="color:#24292E;">    }</span></span>\n<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>这时候，我们还需要修改一下自动注册的代码。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Vue </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">componentsContext</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> require.</span><span style="color:#B392F0;">context</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./components&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">index</span><span style="color:#79B8FF;">.</span><span style="color:#DBEDFF;">(vue</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">js)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">)</span></span>\n<span class="line"><span style="color:#E1E4E8;">componentsContext.</span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">component</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>\n<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 组件配置信息</span></span>\n<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">componentConfig</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">componentsContext</span><span style="color:#E1E4E8;">(component).default</span></span>\n<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#9ECBFF;">/</span><span style="color:#79B8FF;">.</span><span style="color:#DBEDFF;">vue</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(component)) {</span></span>\n<span class="line"><span style="color:#E1E4E8;">        Vue.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(componentConfig.name, componentConfig)</span></span>\n<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>\n<span class="line"><span style="color:#E1E4E8;">        Vue.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(componentConfig)</span></span>\n<span class="line"><span style="color:#E1E4E8;">    }</span></span>\n<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Vue </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">componentsContext</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> require.</span><span style="color:#6F42C1;">context</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./components&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span><span style="color:#032F62;"> /index</span><span style="color:#005CC5;">.</span><span style="color:#032F62;">(vue</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">js)</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">)</span></span>\n<span class="line"><span style="color:#24292E;">componentsContext.</span><span style="color:#6F42C1;">keys</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">component</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>\n<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 组件配置信息</span></span>\n<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">componentConfig</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">componentsContext</span><span style="color:#24292E;">(component).default</span></span>\n<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#032F62;">/</span><span style="color:#005CC5;">.</span><span style="color:#032F62;">vue</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">test</span><span style="color:#24292E;">(component)) {</span></span>\n<span class="line"><span style="color:#24292E;">        Vue.</span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">(componentConfig.name, componentConfig)</span></span>\n<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>\n<span class="line"><span style="color:#24292E;">        Vue.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(componentConfig)</span></span>\n<span class="line"><span style="color:#24292E;">    }</span></span>\n<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>在循环依次读取文件中的 default 模块的时候，判断一下文件是 vue 文件还是 js 文件，如果是 vue 文件，则进行组件注册，如果是 js 文件，则将组件挂载到 Vue 原型链上。</p><p>上面这个 Demo，在实际使用中，就可以通过 <code>this.$ExampleComponent1()</code> 的方式调用组件了。</p><h2 id="最后" tabindex="-1">最后 <a class="header-anchor" href="#最后" aria-label="Permalink to &quot;最后&quot;">​</a></h2><p>全局组件自动注册的功能也加入到 <a href="https://gitee.com/eoner/vue-automation/" target="_blank" rel="noreferrer">vue-autumation</a> 中，这是一个基于 Vue CLI 3 制作的 Vue 脚手架，能方便快速进行业务开发，欢迎大家关注。</p>',30)];const c=s(o,[["render",function(s,p,l,o,c,t){return a(),n("div",null,e)}]]);export{l as __pageData,c as default};
