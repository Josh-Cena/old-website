---
id: marathon
title: 从基普乔格与马拉松讲起
sidebar_label: Kipchoge and marathon
---

export const Pic = ({children, src}) => (
    <div style={{textAlign: 'center'}}>
        <img src={src} />
        <p style={{color: 'gray', fontSize: 'small'}}>{children}</p>
    </div>);

> First published on Oct 18, 2019
>
> Link: https://mp.weixin.qq.com/s/klXTROBbvXdgvJm5kSjZVg

决定来蹭一波热点...…虽然有点晚了。

众所周知，2019年10月12日，来自肯尼亚的跑者埃鲁德·基普乔格突破了马拉松记录（并且这个被打破的记录也是他本人创的），跑进2小时大关；为了纪念这一里程碑式的时刻，也为了和高中的机械运动专题相关联，本文就来看看基普乔格跑步中的一些问题。

<Pic src="/img/./docs/Science/marathon/JGibibkelET694Ria3mjfEqTNZLFNOnResRe9zkgb2ws19U9UDwI0l2Bc88mcoeGZFiclYiaPmQRcA6ZhICj2Lic5Org.jpeg">此为真实数据；但为了使内容更加有趣，我们决定使用一些更“刺激”的数据</Pic>

注：本文所用符号：

- $d$, $f(t)$——位移；$d_0$——初始位移
- $v$, $f'(t)$——速度；$v_0$——初始速度
- $a$, $f''(t)$——加速度
- $t$——时间；$\Delta t$, $dt$——t的微分
- $T$——时刻

## 一、瞬时速度与从d-t图到v-t图

无论如何，人类也不可能跑出严格的匀速运动——虽然在较大的尺度上，基普乔格的确做到了速度基本一致，但在秒的尺度上，一定是一步一步，有快有慢。假设基普乔格起步时的运动情况如下图：

<Pic src="/img/./docs/Science/marathon/JGibibkelET694Ria3mjfEqTNZLFNOnResRoc4iabuQZ1tUV7EGFiahicbaWks1fgS1ASt5pH8LIAyscJwBcMLX5pDmA.png"></Pic>

其中横坐标表示时间；纵坐标表示位移。所以，每一个点 (T,d) 代表了一个时刻T和对应的基普乔格的位移d。因为此图展示了d随着t变化而变化的规律，所以叫做d-t图。

**问题1、通过d-t图，可以得到基普乔格在每一个时刻的位移；那么，如何求出他在这个时刻的瞬时速度？**

这个问题乍一看十分不着实际——速度怎么能脱离时间而存在？“瞬时”这个词就好像拍了一张照片，如果是位移，还比较容易知道；但怎么能从照片上知道他的速度呢？速度必须是与时间一同存在的。

为了解决这个问题，我们可以假设他跑了极短的一段时间 $\Delta t$，短到比任何一个你能想到的数都接近0，但不等于0。在如此短的时间内，他基本是在作匀速运动；我们也认为，这个速度就是他在 $t_0$ 的瞬时速度，即

$$\begin{aligned}
v=\lim_{\Delta t\to 0}\frac{\Delta d}{\Delta t}
\end{aligned}$$

在上一篇文章[关于误差传递与导数运算的发现](../Science/derivative)中，已经介绍了导数的概念，一般式为：

$$\begin{aligned}
f'(x)=\lim_{\Delta x\to 0}\frac{\Delta f(x)}{\Delta x}
\end{aligned}$$

这两个式子长得何其相像！那么，如果我们把 $t$ 当作自变量，$d$ 当作 $t$ 的函数，$v$ 就是 $d$ 的导函数。它在几何上表示为在 $t=t_0$ 点附近的一段曲线的切线，如这样：

<Pic src="/img/./docs/Science/marathon/JGibibkelET694Ria3mjfEqTNZLFNOnResRsveSn75UGBGC6AaVEbUeezmNMPdSgz9jxHAicy8mJxoIaUoldXv1icTw.png"></Pic>

每一个时刻 $t$ 都能对应一个瞬时速度 $v$。如果画出 $v$ 关于 $t$ 变化的曲线，就会长下图这样：

<Pic src="/img/./docs/Science/marathon/JGibibkelET694Ria3mjfEqTNZLFNOnResRrVOUAoxd5pbVsxYIHgqDal2QiajN8xFxnKiaH4642lYKibl5UArNRnZQA.png"></Pic>

这张图叫做v-t图。

所以，从d-t图画出v-t图的过程，本质上是一个求导，即微分的过程。

（由于是一元函数，导数和微分的区别不做深究）

## 二、时间段中的位移与从v-t图到d-t图

**问题2、通过上一节的v-t图，可以知道基普乔格在任意两个时刻 $T_1$ 与 $T_2$ 间的速度变化情况；那么，如何求出他在这段时间中的位移？**

显然，由于速度在不停变化，不可能用$d=vt$直接得出结果。

我们想象一个场景：如果一个人在第一秒的速度为$1\,\text{m/s}$，第二秒为$2\,\text{m/s}$，第三秒为$1.3\,\text{m/s}$，那么，他在这三秒内的总位移就是$1+2+1.3=4.3\,\text{m}$。所以，总位移可以用每一个做匀速运动的时间内的位移之和来计算。

我们在上一节中已经做出了假设：在足够短的时间中，所有运动都是匀速直线的。所以，用同样的思路，如果设 $\Delta t$ 表示一个无限小时间，则基普乔格在 $T_1$ 处的速度为 $v_0$，$T_1+\Delta t$ 处的速度为 $v_1$，$T_1+2\Delta t$ 处的速度为 $v_2$……一直到 $T_1+n\Delta t$ 的速度为 $v_n$，其中 $n$ 满足 $n\cdot \Delta t=T_2-T_1$，那么他的总位移就是

$$\begin{aligned}
d=v_0\Delta t+v_1\Delta t+v_2\Delta t+\dots+v_n\Delta t=\sum_{i=0}^n v_i\cdot\Delta t
\end{aligned}$$

在第一节中，我们把一个整体切成极小的部分来分析，称之为微分；在这里，我们则把无数个极小的部分拼成一个整体，这种过程叫做积分——准确地说，此处我们在讨论一定范围内的无数个极小部分之和，是定积分。在 平面几何大宝鉴：祖暅原理的平面几何运用 中，便运用了定积分的思想，可以在那里找到一种比较几何的积分推导方法。定积分在几何上的意义便为曲线与x轴围成的图形面积，如下图。

<Pic src="/img/./docs/Science/marathon/JGibibkelET68Teov07Bqc25LmIXQc6ZjMQALOhrsJ2jjwWYzfWXfNBnIBMBLxlxicLIWTLO81rfNQj8ia7Gt2vNPg.png"></Pic>

由于牵涉到无限小、无限大，再用传统的sigma显得不大合适；所以，便用summa符号表示积分。

$$\begin{aligned}
d=\int_{T_1}^{T_2} v\cdot\mathrm{d}t
\end{aligned}$$

summa就是那个拉长的曲线。它的右下角的数表示积分下界，即 $v_0$ 对应的时刻，$T_1$；右上角是积分上界，即 $v_n$ 对应的时刻，$T_2$。它表示把从 $T_1$ 到 $T_2$ 间所有的 $v_t$ 乘积相加。由于是无限项相加，$t$ 又是无限小量，所以结果可以是一个数。

所以，求某个时间中的位移，便是求定积分的过程。

而如果想从v-t图还原出d-t图，便要做不定积分。一般形式是

$$\begin{aligned}
d=\int v\,\mathrm{d}t
\end{aligned}$$

通过这种方法，可以通过导函数构建出原函数；但这个原函数并不确定。因为细心的话，可以发现，在求导的过程中，损失了一部分信息——即该点的实际纵坐标。所以，积分后的函数，可以上下平移。

这也解释得通——如果知道每一个时刻的速度，也只能知道位移的变化，而不能知道位移的绝对大小，因为起始位置不一定为0。

## 三、速度的变化

**问题3、如果我们拿着一个测速仪站在冲来的基普乔格面前，可以求出他在这一刻的所有运动情况，如果基普乔格的运动情况不再发生突然改变，能不能重复出他的整个运动过程？**

首先，这个测速仪肯定测得出他的加速度。加速度 $a$ 的定义为速度 $v$ 的变化与时间 $t$ 的比值，也就是速度的变化率。毫无疑问，瞬时加速度 $a$ 是 $v$ 的导数，就好像 $v$ 是 $d$ 的导数一样。

如果 $a$ 为定值，通过这个方程组：

$$\begin{cases}
v_1=v_0+at\\
d=d_0+\dfrac{v_0+v_1}{2}t
\end{cases}$$

可以得到：

$$\begin{aligned}
d=d_0+vt+\frac 12at^2
\end{aligned}$$

它的意思是，如果知道d-t图上的一点 $(T,d_0)$，以及在这一点的导数 $v$，以及导数的导数 $a$（定值），就可以通过此公式得到任意时间 $t$ 后的位移 $d$。写得稍微一般化一点，由于 $d_0=d(T)$, $v=d'(T)$, $a=d''(T)$，可以得到

$$\begin{aligned}
d(T+t)=d(T)+d'(T)t+\frac 12d''(T)t^2
\end{aligned}$$

下一步，如果 $a$ 不是定值呢？如果测速仪还测出了加速度的变化率、加速度变化率的变化率，等等，就又会有 $a$ 的导数 $a'$，$a'$ 的导数 $a''$……此时又怎么调整公式？泰勒告诉我们，有：

$$\begin{aligned}
d(T+t)&=\frac{1}{0!}d(T)+\frac{1}{1!}d'(T)t+\frac{1}{2!}d''(T)t^2+\frac{1}{3!}d'''(T)t^3+\dots\\
&=\sum_{i=0}^\infty d^{(i)}(T)t^i
\end{aligned}$$

其中 $d$ 右上角的 $(i)$ 表示 $d$ 的 $i$ 阶导数，即 $d$ 有 $i$ 个“$'$”。这便是大名鼎鼎的泰勒展开。

如果上面的代数式太抽象，我们可以用一些手段来看出它的本质。首先，如果设 $T=0$ 的话，就可以消去它；其次，设 $\displaystyle \frac{1}{i!}d^{(i)}(T)=m_i$；经过这两步，函数式变成了这样：

$$\begin{aligned}
d(t)=m_0+m_1t+m_2t^2+m_3t^3+\dots
\end{aligned}$$

这不就是一个多项式函数么！在知道曲线在 $(T,d_0)$ 点的各阶导数的情况下，$m_0$, $m_1$ 等等都是定值。这样，所有的函数就都可以用多项式函数来无限近似了。

用这种方法，你也可以跑出和基普乔格一模一样的成绩——只要基普乔格不在中途突然改变加速度。不然的话，只要函数在某一点不连续，泰勒展开就会失效。形象化地说，就是你不可能知道他之后是怎么跑的——是要喝水而减了速？还是突然加速？

通过以上三个问题，我们在机械运动和微积分间建立起了联系，用一种模式化的思路，把看似琐碎的问题变为了纯粹的理论推导，并可以直接代入对应的微积分公式求解，充分体现了数学之美。事实上，微积分的发明，本来就是作为辅助物理研究的数学工具——数学作为一种描述宇宙工具，还有无限的魅力。
