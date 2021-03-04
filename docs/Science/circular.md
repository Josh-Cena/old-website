---
id: circular
title: （卑微的）圆周运动公式推导
sidebar_label: Circular motion
---

export const Pic = ({children, src}) => (
    <div style={{textAlign: 'center'}}>
        <img src={src} />
        <p style={{color: 'gray', fontSize: 'small'}}>{children}</p>
    </div>);

> First published on Feb 2, 2020
>
> Link: https://mp.weixin.qq.com/s/WwQxhkLN5sg9i3-V-6LnpQ

<Highlight>

**\*在符号表示中，我们将会区分向量和标量。斜体表示标量；粗体表示向量。**
</Highlight>

定义：每一个二维向量都能表示成一个矩阵：

$$\begin{aligned}
\mathbf{m}=\begin{bmatrix}x\\y\end{bmatrix}
\end{aligned}$$

如果将向量 $\mathbf{m}$ 的起点置于平面直角坐标系的原点，那么它的终点即处在 $(x,y)$ 的位置。$x$ 和 $y$ 的值，实际上代表了 $\mathbf{m}$ 在 $x$ 轴和 $y$ 轴上的分量的权。

<Pic src="https://mmbiz.qpic.cn/mmbiz_png/JGibibkelET69yytpLPRrIXo9ibG2yhdyRagF8b6WBCW5A4GBt13YurqTn9MicMbn41GPMeebNkK16jutDJqNfH3sA/640?wx_fmt=png"></Pic>

我们研究作匀速圆周运动的物体从 $\mathbf{P}_i$ 到 $\mathbf{P}_f$ 的加速度。作一个（奇怪的）要求——不使用导数，而只凭极限的思想解决问题（虽然实际上和导数只差一步之遥）。

首先，列出最基本的加速度公式：

$$\begin{aligned}
\mathbf{a}=\lim_{\Delta t\to 0}\frac{\Delta\mathbf{v}}{\Delta t}
\end{aligned}$$

讨论的语境，是时间变化无限小。但现在不必关心。
第一步，是用向量矩阵表示出初速度和终速度。

$$\begin{aligned}
\mathbf{v}_i&=\begin{bmatrix}v\sin\theta_i\\-v\cos\theta_i\end{bmatrix}\\
\mathbf{v}_f&=\begin{bmatrix}v\sin\theta_f\\-v\cos\theta_f\end{bmatrix}
\end{aligned}$$

其中 $v$ 表示物体一直维持的速率，是标量。至于这样两个矩阵是如何得出的，是来自非常基础的几何学和三角学，只要略作几条垂线，再倒角即可，不再赘述。将 $\Delta\mathbf{v}=\mathbf{v}_f-\mathbf{v}_i$ 代入原公式：

$$\begin{aligned}
\mathbf{a}=\lim_{\Delta t\to 0}\frac{1}{\Delta t}\begin{bmatrix}v(\sin\theta_f-\sin\theta_i)\\v(\cos\theta_i-\cos\theta_f)\end{bmatrix}
\end{aligned}$$

注意到矩阵中可以提取出一个 $v$；更重要的是，为了消除棘手的 $\sin(a)-\sin(b)$ 这样的东西，使用和差化积公式：

$$\begin{aligned}
\sin\alpha-\sin\beta&=2\cos\frac{\alpha+\beta}{2}\sin\frac{\alpha-\beta}{2}\\
\cos\alpha-\cos\beta&=2\sin\frac{\alpha+\beta}{2}\sin\frac{\alpha-\beta}{2}
\end{aligned}$$

（其实，当用上这一武器时，我们已经是在推导导数公式）

将原式变形成如下：

$$\begin{aligned}
\mathbf{a}=\lim_{\Delta t\to 0}\frac{v}{\Delta t}\begin{bmatrix}2\cos\dfrac{\theta_f+\theta_i}{2}\sin\dfrac{\theta_f-\theta_i}{2}\\2\sin\dfrac{\theta_f+\theta_i}{2}\sin\dfrac{\theta_f-\theta_i}{2}\end{bmatrix}
\end{aligned}$$

为了简便运算，我们令 $\Delta\theta=\theta_f-\theta_i$。

$$\begin{aligned}
\mathbf{a}=\lim_{\Delta t\to 0}\frac{v}{\Delta t}\begin{bmatrix}2\cos\left(\dfrac{\Delta\theta}{2}+\theta_i\right)\sin\left(\dfrac{\Delta\theta}{2}\right)\\2\sin\left(\dfrac{\Delta\theta}{2}+\theta_i\right)\sin\left(\dfrac{\Delta\theta}{2}\right)\end{bmatrix}
\end{aligned}$$

注意到，在时间无限小的语境下，$Δθ$ 同样趋近于0。此时，有公式：

$$\begin{aligned}
\lim_{\Delta\theta\to 0}\sin\Delta\theta=\Delta\theta
\end{aligned}$$

运用这一公式：

$$\begin{aligned}
\mathbf{a}=\lim_{\Delta t\to 0}\frac{v}{\Delta t}\begin{bmatrix}2\cos\left(\dfrac{\Delta\theta}{2}+\theta_i\right)\dfrac{\Delta\theta}{2}\\2\sin\left(\dfrac{\Delta\theta}{2}+\theta_i\right)\dfrac{\Delta\theta}{2}\end{bmatrix}
\end{aligned}$$

末尾的除以 $2$ 和开头的系数 $2$ 相抵消，剩下 $Δθ$，将其提取出来。

$$\begin{aligned}
\mathbf{a}=\lim_{\Delta t\to 0}\frac{\Delta\theta}{\Delta t}v\begin{bmatrix}\cos\left(\dfrac{\Delta\theta}{2}+\theta_i\right)\\\sin\left(\dfrac{\Delta\theta}{2}+\theta_i\right)\end{bmatrix}
\end{aligned}$$

出现了喜闻乐见的无穷小相比的形式；同时，在矩阵中留下的 $Δθ$，我们也不需要它了，因为 $Δθ$ 是 $θ$ 的高阶无穷小，将其抹去。
令 $\displaystyle\omega=\lim_{\Delta t\to 0}\frac{\Delta\theta}{\Delta t}$ 为角度的变化率，则原式的最终形态为：

$$\begin{aligned}
\mathbf{a}=\omega v\begin{bmatrix}\cos\theta_i\\\sin\theta_i\end{bmatrix}
\end{aligned}$$

作一处小小的修正——由于物体作顺时针运动，$θ_i$ 要比 $θ_f$ 大，此时的 $ω$ 是一个负值，显然不符合我们“角速度是正值”的直观感受。因此我们简单地将右侧取相反数：

$$\begin{aligned}
\mathbf{a}=\omega v\begin{bmatrix}-\cos\theta_i\\-\sin\theta_i\end{bmatrix}
\end{aligned}$$

最后一个小小的惊喜：向量 $\begin{bmatrix}-\cos\theta_i\\-\sin\theta_i\end{bmatrix}$ 其实是一个单位向量，它的长度为 $1$！而它所指的方向，在图上是：

<Pic src="https://mmbiz.qpic.cn/mmbiz_png/JGibibkelET6icmuYj8IdictjCd2fiaDpVdZmW4OX5chESjEcrrAbbQMG0VQGOibWdQN8ib4b7OC7wzrOHJUVfy2zSdJA/640?wx_fmt=png"></Pic>

如果起点在 $\mathbf{P}_i$ 的位置，就正是一条指向圆心的向量。得证加速度的方向指向圆心。

另一方面，消去单位向量后，

$$\begin{aligned}
\left\Vert\mathbf{a}\right\Vert=\omega v
\end{aligned}$$

圆周运动的公式初见端倪。证明为何 $v=ωr$ 则非常简单——由于运动一周后，走过了 $2π$ 的角度和 $2πr$ 的圆周长，易得在这段时间 $t$ 中，

$$\begin{cases}
2\pi=\omega t\\
2\pi r=vt
\end{cases}$$

下式除以上式即可。再把 $\displaystyle \omega=\frac{v}{r}$ 代回原式，就得到了

$$\begin{aligned}
a=\frac{v^2}{r}
\end{aligned}$$

写作此文，仅供测试公式编辑器，因此使用了更加繁琐的方法。如果会用向量求导，知道链式法则，直接求导岂不美哉。
