import{_ as s,c as n,o as a,Q as p}from"./chunks/framework.30f3a391.js";const l=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/前端笔记/js学习记录/TypeScript/8. 类型推论.md","filePath":"src/前端笔记/js学习记录/TypeScript/8. 类型推论.md","lastUpdated":1683717698000}'),o={name:"src/前端笔记/js学习记录/TypeScript/8. 类型推论.md"},e=[p('<h3 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h3><p>这节介绍TypeScript里的类型推论。即，类型是在哪里如何被推断的。</p><h3 id="基础" tabindex="-1">基础 <a class="header-anchor" href="#基础" aria-label="Permalink to &quot;基础&quot;">​</a></h3><p>TypeScript里，在有些没有明确指出类型的地方，类型推论会帮助提供类型。如下面的例子</p><div class="language-TypeScript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">TypeScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>变量x的类型被推断为数字。这种推断发生在初始化变量和成员，设置默认参数值和决定函数返回值时。</p><p>大多数情况下，类型推论是直截了当地。</p><h3 id="最佳通用类型" tabindex="-1">最佳通用类型 <a class="header-anchor" href="#最佳通用类型" aria-label="Permalink to &quot;最佳通用类型&quot;">​</a></h3><p>当需要从几个表达式中推断类型时候，会使用这些表达式的类型来推断出一个最合适的通用类型。例如，</p><div class="language-TypeScript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">TypeScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> zoo </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Rhino</span><span style="color:#E1E4E8;">(), </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Elephant</span><span style="color:#E1E4E8;">(), </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Snake</span><span style="color:#E1E4E8;">()];</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> zoo </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Rhino</span><span style="color:#24292E;">(), </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Elephant</span><span style="color:#24292E;">(), </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Snake</span><span style="color:#24292E;">()];</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这里，我们想让zoo被推断为<code>Animal[]</code>类型，但是这个数组里没有对象是<code>Animal</code>类型的，因此不能推断出这个结果。为了更正，当候选类型不能使用的时候我们需要明确的指出类型：</p><div class="language-TypeScript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">TypeScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> zoo</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Animal</span><span style="color:#E1E4E8;">[] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Rhino</span><span style="color:#E1E4E8;">(), </span><span style="color:#B392F0;">newElephant</span><span style="color:#E1E4E8;">(), </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Snake</span><span style="color:#E1E4E8;">()];</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> zoo</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Animal</span><span style="color:#24292E;">[] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Rhino</span><span style="color:#24292E;">(), </span><span style="color:#6F42C1;">newElephant</span><span style="color:#24292E;">(), </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Snake</span><span style="color:#24292E;">()];</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果没有找到最佳通用类型的话，类型推断的结果为联合数组类型，<code>(Rhino | Elephant | Snake)[]</code>.</p><h3 id="上下文类型" tabindex="-1">上下文类型 <a class="header-anchor" href="#上下文类型" aria-label="Permalink to &quot;上下文类型&quot;">​</a></h3><p>TypeScript类型推论也可能按照相反的方向进行。这被叫做&quot;按上下文归类&quot;。按上下文归类会发生在表达式的类型与所处的位置相关时。比如：</p><div class="language-TypeScript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">TypeScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">window.</span><span style="color:#B392F0;">onmousedown</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">mouseEvent</span><span style="color:#E1E4E8;">) {</span></span>\n<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(mouseEvent.button); </span><span style="color:#6A737D;">// &lt;- Error</span></span>\n<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">window.</span><span style="color:#6F42C1;">onmousedown</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">mouseEvent</span><span style="color:#24292E;">) {</span></span>\n<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(mouseEvent.button); </span><span style="color:#6A737D;">// &lt;- Error</span></span>\n<span class="line"><span style="color:#24292E;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>这个例子会得到一个类型错误，TypeScript类型检查器使用<code>Window.onmousedown</code>函数的类型来推断右边函数表达式的类型。因此，就能推断出<code>mouseEvent</code>参数的类型了。如果函数表达式不是在上下文类型的位置，<code>mouseEvent</code>参数的类型需要指定为<code>any</code>,这样也不会报错了。</p><p>如果上下文类型表达式包含了明确的类型信息，上下文的类型被忽略。重写上面的例子：</p><div class="language-TypeScript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">TypeScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">window.</span><span style="color:#B392F0;">onmousedown</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">mouseEvent</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">) {</span></span>\n<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(mouseEvent.button;) </span><span style="color:#6A737D;">// &lt;- Now, no error is given</span></span>\n<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">window.</span><span style="color:#6F42C1;">onmousedown</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">mouseEvent</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">any</span><span style="color:#24292E;">) {</span></span>\n<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(mouseEvent.button;) </span><span style="color:#6A737D;">// &lt;- Now, no error is given</span></span>\n<span class="line"><span style="color:#24292E;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>这个函数表达式有明确的参数类型注解，上下文类型被忽略。这样的话就不会报错了，因为这里不会使用到上下文类型。</p><p>上下文归类会在很多情况下使用到。通常包含函数的参数，赋值表达式的右边，类型断言，对象成员和数组字面量和返回值语句。上下文类型也会做为最佳通用类型的候选类型。比如：</p><div class="language-TypeScript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">TypeScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createZoo</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Animal</span><span style="color:#E1E4E8;">[] {</span></span>\n<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Rhino</span><span style="color:#E1E4E8;">(), </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Elephant</span><span style="color:#E1E4E8;">(), </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Snake</span><span style="color:#E1E4E8;">()];</span></span>\n<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createZoo</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Animal</span><span style="color:#24292E;">[] {</span></span>\n<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Rhino</span><span style="color:#24292E;">(), </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Elephant</span><span style="color:#24292E;">(), </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Snake</span><span style="color:#24292E;">()];</span></span>\n<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>这个例子里，最佳通用类型有4个候选者：<code>Animal</code>, <code>Rhino</code>,<code>Elephant</code>和<code>Animal</code>会被做为最佳通用类型。</p>',23)];const c=s(o,[["render",function(s,p,l,o,c,t){return a(),n("div",null,e)}]]);export{l as __pageData,c as default};
