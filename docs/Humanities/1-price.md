---
id: price
title: 收入与成本曲线
sidebar_label: Revenue and cost curves
date: 2020-06-27
link: https://mp.weixin.qq.com/s/yMTDAgsCygTRSYnfZkuhHg
---

import Pic from '../../src/components/Pic';
import DocMetadataBanner from '../../src/components/DocMetadataBanner';

<DocMetadataBanner frontMatter={frontMatter} />

在很久之前的经济课上，有这样一幅图，展示了垄断竞争市场下的公司长期收益-成本曲线 (long-run cost and revenue curves of a monopolistically competitive firm)：

<Pic src="/img/./docs/Humanities/price/JGibibkelET6ibuaHjMuS5MicolBQqyfVOVicCqaPLWU7Zp0bwaW3la6ZicxyCx7mMpMuicFbMWZiaF7tlN8GCTjllE1vQ.png"></Pic>

然后，引发了某位问题男孩的问题：

> 为什么 AC 和 AR 曲线一定相切？

他随手画了这样一个反例：

<Pic src="/img/./docs/Humanities/price/JGibibkelET6ibuaHjMuS5MicolBQqyfVOVicRxNlLGN3pF0pZO1I42Eovwba3IRLxMFKTAZkKAicoLvgrrPjGFbDw7w.png"></Pic>

一时竟无人能反驳。当时我的证明误入歧途，因此未能当场给出答案。事实上，这个证明并不复杂。本文将要用数学证明两个命题：

- MC 曲线和 AC 曲线交点同时是 AC 的最小值；
- 在垄断竞争市场下，长期平均收益-成本曲线必定相切。

（实际上是为了多一些字数）

## 一、定义

“收入”指公司销售若干件商品而获得的收益，用 TR (Total Revenue) 表示。“成本”指公司为生产这些商品而在生产资料上的花费，用 TC (Total Cost) 表示。

“边际收入”与“边际成本”分别指公司每额外售出一件商品所带来的收入与成本，用 MR (Marginal Revenue) 和 MC (Marginal Cost) 表示。数学上，边际收入是总收入的导数；边际成本是总成本的导数。

“平均收入”指总收入除以总共销售的商品个数；“平均成本”指总成本除以总共生产的商品个数。

## 二、函数曲线方程

在垄断竞争市场下，收入曲线是一根先上升再下降的曲线（根据需求定律可得），成本曲线则是单调上升，但上升速度先变缓再变快（根据边际效益递减原则可得）。

因此，我们可以用二次函数和三次函数分别代表 TR 和 TC：

$$
\begin{aligned}
\mathit{TR}(x)&=mx^2+nx\\
\mathit{TC}(x)&=ax^3+bx^2+cx
\end{aligned}
$$

（这是一个非常简单的模型，但我们的教材采用了这样的模型）

同时注意到，由于处于长期，所有资源均可变，因此没有固定成本，两个函数的常数项均为 0。

然后，可得其他函数。

$$
\begin{aligned}
\mathit{AR}(x)&=\frac{\mathit{TR}(x)}{x}=mx+n\\
\mathit{MR}(x)&=\frac{\mathrm{d}\mathit{TR}(x)}{\mathrm{d}x}=2mx+n\\
\mathit{AC}(x)&=\frac{\mathit{TC}(x)}{x}=ax^2+bx+c\\
\mathit{MC}(x)&=\frac{\mathrm{d}\mathit{TC}(x)}{\mathrm{d}x}=3ax^2+2bx+c
\end{aligned}
$$

对于两个命题，我们都会给出一个使用以上假定表达式的数值证明，和一个抽象的函数式证明。

## 三、命题 1 的证明

我们首先证明 MC 和 AC 的交点同时是 AC 的最小值。联立两者的方程：

$$
\begin{aligned}
3ax^2+2bx+c&=ax^2+bx+c\\
x&=-\frac{b}{2a}
\end{aligned}
$$

同时，注意到由于 $\displaystyle\mathit{AC}(x)=ax^2+bx+c=a\left(x+\frac{b}{2a}\right)^2+c-\frac{b}{4a}$，它在 $\displaystyle -\frac{b}{2a}$ 处取最小值。因此得证。

用函数证明的话，在交点处，有如下关系：

$$
\begin{aligned}
\frac{\mathrm{d}\mathit{TC}(x)}{\mathrm{d}x}=\frac{\mathit{TC}(x)}{x}
\end{aligned}
$$

而 AC 的导数为：

$$
\begin{aligned}
\frac{\mathrm{d}}{\mathrm{d}x}\left(\frac{\mathit{TC}(x)}{x}\right)&=\frac{\dfrac{\mathrm{d}\mathit{TC}(x)}{\mathrm{d}x}x-\mathit{TC}(x)}{x^2}\\
&=\frac{\dfrac{\mathit{TC}(x)}{x}x-\mathit{TC}(x)}{x^2}\\
&=0
\end{aligned}
$$

因此 AC 在这一点取极值。这个极值显然是最小值。

## 四、命题 2 的证明

在平衡点处，有 MC=MR，AC=AR。这是由该市场的低进入壁垒导致的。详细的原理说明，足够成为一道 6 分的大题，此处不作阐释。联立方程：

$$
\begin{cases}
2mx+n=3ax^2+2bx+c\\
mx+n=ax^2+bx+c
\end{cases}
$$

不妨设 $\displaystyle p := \frac{b-m}{a}$, $\displaystyle q := \frac{c-n}{a}$。则原方程变为：

$$
\begin{cases}
3x^2+2px+q=0\\
x^2+px+q=0
\end{cases}
$$

已知该方程组有唯一解，也就是平衡点的横坐标。我们可以解出第一个方程，然后把解 $\displaystyle x=\frac{-p\pm \sqrt{p^2-3q}}{3}$ 代入第二个方程。

$$
\begin{aligned}
\frac{\left(-p\pm\sqrt{p^2-3q}\right)^2}{9}+\frac{-p^2\pm p\sqrt{p^2-3q}}{3}+q&=0\\
2p^2-3q\mp 2p\sqrt{p^2-3q}-3p^2\pm 3p\sqrt{p^2-3q}+9q&=0\\
p^2+6q\pm p\sqrt{p^2-3q}&=0\\
p^4-3p^2q&=p^4-12p^2q+36q^2\\
p^2&=4q
\end{aligned}
$$

一番变形之后，我们得到了结论 $p^2=4q$。通过它，可以算出 AC=AR，也就是第二个方程的判别式：

$$
\begin{aligned}
\Delta=p^2-4q=0
\end{aligned}
$$

判别式为 0，意味着方程有两个相同的解，也就对应着两曲线有唯一的交点。这样，我们证明了问题男孩画出的图形不存在，两曲线一定相切。

然后，我们可以用函数关系证明这一命题。当我写下它的证明时，发现这个结论几乎是显而易见的。

设平衡点为 $x_\text{E}$，由于 MC=MR 且 AC=AR：

$$
\begin{aligned}
\left.\frac{\mathrm{d}\mathit{TC}(x)}{\mathrm{d}x}\right|_{x=x_\text{E}}&=\left.\frac{\mathrm{d}\mathit{TR}(x)}{\mathrm{d}x}\right|_{x=x_\text{E}}=C'\\
\mathit{TC}(x_\text{E})&=\mathit{TR}(x_\text{E})=C
\end{aligned}
$$

不妨设它们分别为 $C′$ 和 $C$，就像上面所标出的一样。

要证明的是 AC 与 AR 相切，也就是它们在这一点的导数相等。（因为已知它们在这一点有交点）

$$
\begin{aligned}
\frac{\mathrm{d}}{\mathrm{d}x}\left(\frac{\mathit{TC}(x)}{x}\right)&=\frac{\dfrac{\mathrm{d}\mathit{TC}(x)}{\mathrm{d}x}x-\mathit{TC}(x)}{x^2}\\
\left.\frac{\mathrm{d}}{\mathrm{d}x}\left(\frac{\mathit{TC}(x)}{x}\right)\right|_{x=x_\text{E}}&=\frac{C'x_\text{E}-C}{x_\text{E}^2}\\
\frac{\mathrm{d}}{\mathrm{d}x}\left(\frac{\mathit{TR}(x)}{x}\right)&=\frac{\dfrac{\mathrm{d}\mathit{TR}(x)}{\mathrm{d}x}x-\mathit{TR}(x)}{x^2}\\
\left.\frac{\mathrm{d}}{\mathrm{d}x}\left(\frac{\mathit{TR}(x)}{x}\right)\right|_{x=x_\text{E}}&=\frac{C'x_\text{E}-C}{x_\text{E}^2}\\
\end{aligned}
$$

它们拥有完全一样的表达式，自然是相等的。

仔细一想，收入与支出函数的原函数和导函数在这一点都相等，那么这两个函数在这一点几乎是等价的，可以引申出很多好的性质，而 AC 和 AR 相切只是其中之一。
