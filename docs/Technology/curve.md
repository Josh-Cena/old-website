---
id: curve
title: 如何画一条等宽的曲带
sidebar_label: Drawing a strip with constant width
---

export const Pic = ({children, src}) => (
<div style={{textAlign: 'center'}}>
<img src={src} />
<p style={{color: 'gray', fontSize: 'small'}}>{children}</p>
</div>);

> First published on Mar 28, 2021
>
> Link: https://mp.weixin.qq.com/s/s3iIqw9Y1PCi5Hf2LNybyQ

我有一个设计师朋友。某天他问我，“如果有一条曲线，怎么把它变成一条有宽度而且处处等宽的形状？”

我随手把它向上平移了$w$单位：

<Pic src="/img/./docs/Technology/curve/JGibibkelET6iciboqnuqzqicjhaVaiaP0M8OPaCibYG1wC82cSia2AktbibML4mNlvvUELmDlVGUYWe18pJ34TsmGwN6rw.png"></Pic>

他说，你这没用。我说我这有用。他掏出尺子一量，告诉我这样的带子并不是处处等宽：只有在顶点处宽度才是$w$，其他地方都小于$w$。

<Pic src="/img/./docs/Technology/curve/JGibibkelET6iciboqnuqzqicjhaVaiaP0M8OPMsnr0HUBMXEGyJYibJCiahPMhB4vwibe7UGAwdDtg9W2o2JhhE0Ln918Q.png"></Pic>

这是因为带子的宽度是按法向而不是竖直方向计算的。如果从一个点作它的法线、切线、和竖直方向的线，那么会形成一个矩形的两边和对角线，而矩形中，对角线比边要长。因此，简单把每个点都向同一个方向移动不能解决问题。

<Pic src="/img/./docs/Technology/curve/JGibibkelET69mw1C8w0EJZaKxowiauwe7RbJD9xmx5fGmrB1Px3hx4R8ylic3uWicwfsEaxXbRdBZglYgxb4LKenJQ.png"></Pic>

我说，看来是我大意了。不过不用慌，我们可以按点来考虑，每个点的移动方向都和它的位置有关。因此，从曲线上选一点$\color{red}{\text{A}(m,f(m))}$，过它作曲线的切线和法线，确定它的像$\color{blue}{\text{A'}}$。

<Pic src="/img/./docs/Technology/curve/JGibibkelET69w0T0FNq0ePrzyFPsSXYX4bvlgeuG6PWGpAgX1c5wD7huEgfYSeFsELjJtqQSPrhGnkjxE0DfGqA.png"></Pic>

然后，由于切线斜率$k_1=f'(m)$，而法线斜率是它的负倒数$k_2=-\frac{1}{f'(m)}$。这样就不难算出两条虚线段的长。

$$
\begin{aligned}
\cos\theta&=\pm\sqrt{\frac{1}{1+\tan^2\theta}}=\pm\frac{f'(m)}{\sqrt{1+f'(m)^2}},\\\sin\theta&=\tan\theta\cos\theta=\mp\frac{1}{\sqrt{1+f'(m)^2}}
\end{aligned}
$$

因为做了开方操作，产生了 ± 号——这个 ± 号是合理的，因为我们没有确定过曲线的移动方向。比如图中的情况，就是$cos$取负号，$sin$取正号；而如果朝反方向移动，两个符号就要反过来。

得到两条线段长后，就不难得到$\color{blue}{\text{A'}}$的坐标了。

$$
\begin{aligned}
\color{red}{(m,f(m))}\mapsto\color{blue}{\left(m\pm w\frac{f'(m)}{\sqrt{1+f'(m)^2}},f(m)\mp w\frac{1}{\sqrt{1+f'(m)^2}}\right)}
\end{aligned}
$$

这个坐标看起来很像回事。只要在曲线上多采一点坐标，就可以用 Python 画一条曲线出来。为了检验公式的正确性，我选择了$y=x^2$，将这条曲线向外平移 1 个单位。

```python
import numpy as np
import matplotlib.pyplot as plt
w = 1
x = np.linspace(-5,5,1001)
y = x ** 2
d = 2 * x
nx = x + w * d / np.sqrt(1 + d ** 2)
ny = y - w / np.sqrt(1 + d ** 2)

plt.figure(figsize=(6, 6))
plt.xlim([-15, 15])
plt.ylim([-4, 26])
plt.plot(x, y)
plt.plot(nx, ny)
plt.show()
```

<Pic src="/img/./docs/Technology/curve/JGibibkelET69kvA5qMPE6En5bAQibJ83DGnbSpOr7fgyNDC5NlA2dfuU0aGtBI8hBj0pEPuWy5MpRiaCRiaIxvapiaA.png"></Pic>

结果看起来很令人信服。如果认真分析这条曲线，就知道它已经不是二次函数了。在靠近顶点的地方，它的形状会无限接近一个圆弧。因此，这样的变换并不是相似的，但它具有保圆性和保线性（可以证明）。

我问朋友，这样满意了吗？他拿过程序，把$w$改成了-1，想让它朝反方向移动。结果输出了这样的图形：

<Pic src="/img/./docs/Technology/curve/JGibibkelET69kvA5qMPE6En5bAQibJ83DGJDL3N2QibsvckPS2zsC7Tyyib6vghq6wNc6de3AM9asgnZJp1Sg2iaelQ.png"></Pic>

他说，没有人能接受下面的那个“扭结”。我说，这其实是因为数学模型还不完整。稍微分析一下每个点的移动过程，就知道有些点“越界了”。

<Pic src="/img/./docs/Technology/curve/JGibibkelET69kvA5qMPE6En5bAQibJ83DGY9sBQr42eLUDdkOO9nT3QFkrXrhv3vp6Qiar4KTDDdyaKpOhVtt8cQw.png"></Pic>

他问，那这怎么解决呢？我告诉他，这些点其实在平移后，像并不应该存在——这个变换过程不是信息对称的，顶点附近的点的信息丢失了。更具体地说，如果一个点在顶点左边，而它的像在顶点右边，那这个点就被从另一边移过来的点“盖住了”，反之亦然。

<Pic src="/img/./docs/Technology/curve/JGibibkelET69kvA5qMPE6En5bAQibJ83DGq8picRxFBPghiccSAtCEllout6Bc7zmuSRiasicHgfCx1Aj0XzSqm2fSPg.png"></Pic>

因此，我给程序打了个补丁，增加了一层过滤器过滤掉这些消失的点。

```python
import numpy as np
import matplotlib.pyplot as plt

w = -1
x = np.linspace(-5,5,1001)
y = x ** 2
d = 2 * x
nx = x + w * d / np.sqrt(1 + d ** 2)
ny = y - w / np.sqrt(1 + d ** 2)
kept = ((x < 0) & (nx < 0)) | ((x > 0) & (nx > 0))

plt.figure(figsize=(6, 6))
plt.xlim([-15, 15])
plt.ylim([-4, 26])
plt.plot(x, y)
plt.plot(nx[kept], ny[kept])
plt.show()
```

<Pic src="/img/./docs/Technology/curve/JGibibkelET69kvA5qMPE6En5bAQibJ83DGZ99Sl7ODHaRdcz1ict7WxxXGicnZzTHOuXicf99UXsCrYhJjH4oT5GIcw.png"></Pic>

这样输出的结果，满意了吗？我问他。他说，可以。

下一步，就是画出$f(x)=\sin x$。由于我们知道曲线向一个方向移动后，和原曲线并不是相似的，因此为了使图形整体有对称性，我们可以把它向两个方向都移动 $w/2$ 个单位。于是我改了一下参数，调整了过滤器的表达式，就得到了这样的曲线。

<Pic src="/img/./docs/Technology/curve/JGibibkelET69kvA5qMPE6En5bAQibJ83DGVViavdaFU5DyjlKUpYN0pgBwxHqu7t4ymVUCXW3CZX5icawIMBjGlkCg.png"></Pic>

事实上，许多矢量绘图软件得到的效果就是这样的，比如 TeX 中的 TikZ，如果把线粗设成 2cm，画出的就是这样的曲线：

<Pic src="/img/./docs/Technology/curve/JGibibkelET6iczCS5DbIFTyRXwqNhiczPUlrqmqkia6qSTxTKuAiaf6WiagdEmZELE3WmPRW6ic6Eunib3naeuVjm7ouCw.png"></Pic>

但他仔细看了看，觉得拐点太尖了，显得不自然。只要控制好宽度，应该不会得到那样的尖角。问题是，多大的移动距离会产生尖角？就拿$y=x^2$来说，当$w$不大时，它向内缩也不会产生尖角。比如$w=0.2$：

<Pic src="/img/./docs/Technology/curve/JGibibkelET69kvA5qMPE6En5bAQibJ83DGvgkgrgnxH2IeGdQluSpiakDphiaiadNPttAqBB449p3XibxwGqwRXjWCcg.png"></Pic>

那么临界情况是什么？事实上，尖角正是来自于“消失的点”：如果两条从左右分别移动而来的曲线交汇了，那么就会出现尖角，因此还是要从点消失的条件出发。在抛物线的例子里，如果一个点坐标为$(m,m^2)$，而它的像的横坐标 > 0，那么它消失了。代入变换公式：

$$
\begin{aligned}
m-w\frac{2m}{\sqrt{1+4m^2}}&>0\\
w\frac{2}{\sqrt{1+4m^2}}&>1\\
w^2-\frac{1}{4}&>m^2
\end{aligned}
$$

使它无解的条件是$w<0.5$。因此只要移动距离小于$0.5$，就不会有消失的点。
一般地说，如果$f'(k)=0$，那么找一点$(m,f(m)),m < k$，假设它在变换后消失了，代入变换公式：

$$
\begin{aligned}
m-w\frac{f'(m)}{\sqrt{1+f'(m)^2}}&>k\\
\text{i. } f'(x)>0: \frac{m-k}{f'(m)}&>\frac{w}{\sqrt{1+f'(m)^2}}\\
\text{ii. } f'(x)<0: \frac{m-k}{f'(m)}&<\frac{w}{\sqrt{1+f'(m)^2}}\\
\end{aligned}
$$

注意到，情况 i 的大于号左边为负，右边为正，因此肯定无解。这对应的是“凸曲线向外移”的情况。而我们要做的就是找到情况 ii 中使得$m$无解的$w$取值范围。如果把 ii 的不等式整理成一个函数$g(m)$平移$w$个单位的表达式：

$$
\begin{aligned}
\frac{\sqrt{1+f'(m)^2}}{f'(m)}(m-k)-w<0
\end{aligned}
$$

就不难理解，要求的是$w$的范围，使得在$m=k$附近，$g(m)-w$恒为正。那么把$g(m)$求个导，找它的最小值点。

$$
\begin{aligned}
g'(m)=\frac{\sqrt{f'(m)^2+1}}{f'(m)}-\frac{f''(m)(m-k)}{f'(m)^2\sqrt{f'(m)^2+1}}&=0\\
f'(m)^3+f'(m)-f''(m)(m-k)&=0
\end{aligned}
$$

经过一堆不太严谨的操作，我们发现，它的解正是$m=k$：也就是，随着$w$的增加，第一个消失的点不是别的点，正是顶点——这在多试验几种形状之后，也可以观察到。那么，只要求出在$m=k$处的$g(m)$的值，就知道$w$的最大值。但此时，$\frac{m-k}{f'(m)}$是一个 0/0 型的极限，因此掏出洛必达法则。

$$
\begin{aligned}
\lim_{m\to k}\frac{m-k}{f'(m)}\sqrt{1+f'(m)^2}=\frac{1}{f''(k)}\sqrt{1+f'(k)^2}=\frac{1}{f''(k)}
\end{aligned}
$$

这便是$w$的最大值。

:::note
如果你对曲率了解的话，你会知道，我们推导出的正是函数在$x=k$这一点的密切圆半径：

$$
\begin{aligned}
r=\frac{\left(1+f'(k)^2\right)^{3/2}}{|f''(k)|}
\end{aligned}
$$

而由于$f'(k)=0$，分子为 1，化简便得正文中的公式。
:::

如果代入$k=0$，就可以算出 0.5，和前文推导一致。对于$y=\sin x$，由于$f$有周期性质，不妨设$k=\frac{\pi}{2}$。

$$
\begin{aligned}
w_{\max}=\frac{1}{-\sin(\pi/2)}=-1
\end{aligned}
$$

——这里算出了一个负数，因为实际上在$x=\frac{\pi}{2}$的左侧，$f'(x)>0$，此时的移动方向和上面推导中假设的方向相反。无论如何，我们知道只要 sin 曲线的移动距离小于 1，就不会有尖角出现。之前给出的图中，平移距离为 1，刚好是临界情况。验算一下，当平移距离为 0.8 时：

<Pic src="/img/./docs/Technology/curve/JGibibkelET69kvA5qMPE6En5bAQibJ83DGibNjImfHAqS9xNOzAFHIb8Ig0ObumIsp5DRCZUZnFdsJeKZ9Qqa4UOA.png"></Pic>

此时曲线是平滑的。当然，这时已经觉得曲线“开始变尖”了。

他点点头，表示理解了。突然，他想起什么似的，在纸上画了个圆：“你这里讲的方法只能解决函数$y=f(x)$的等距移动，那么如果曲线不能用函数表示，就不能找到它的导数，又该怎么处理？”

<Pic src="/img/./docs/Technology/curve/JGibibkelET6ibuNBXDj8aYE7peXQibSYqcm3iaMiaqyzuHTqNnsPPeXf6Z4w2UrWfxhlA2p0QvhJj6FAlHvFV4oIlSQ.png"></Pic>

我说，只要把导数换成隐函数的导数即可。

$$
\begin{aligned}
\color{red}{(m,n)}\mapsto\color{blue}{\left(m\pm w\frac{f'(m,n)}{\sqrt{1+f'(m,n)^2}},n\mp w\frac{1}{\sqrt{1+f'(m,n)^2}}\right)}
\end{aligned}
$$

圆太无聊了，我们代一个心形曲线进去（参数形式便于编程）：

$$
\begin{aligned}
&\begin{cases}x=16\sin^3 t\\y=13\cos t-5\cos 2t-2\cos 3t-\cos 4t\end{cases}\\
&\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{4\sin 4t+6\sin 3t+10\sin 2t-13\sin t}{48\sin^2 t\cos t}
\end{aligned}
$$

就能得到变换后的坐标。

```python
import numpy as np
import matplotlib.pyplot as plt

t = np.linspace(0, 2 * np.pi, 1000)
x = 16 * (np.sin(t)**3)
y = 13 * np.cos(t) - 5 * np.cos(2*t) - 2 * np.cos(3*t) - np.cos(4*t)
d = (4 * np.sin(4*t) + 6 * np.sin(3*t) + 10 * np.sin(2*t) - 13 * np.sin(t)) / (48 * np.sin(t)**2 * np.cos(t))
w = 1
nx1 = x + w * d / np.sqrt(1 + d ** 2)
ny1 = y - w / np.sqrt(1 + d ** 2)
nx2 = x - w * d / np.sqrt(1 + d ** 2)
ny2 = y + w / np.sqrt(1 + d ** 2)
kept = ((x < 0) & (nx2 < 0)) | ((x > 0) & (nx2 > 0))

plt.figure(figsize=(6, 6))
plt.xlim([-20, 20])
plt.ylim([-20, 20])
plt.plot(x, y)
plt.plot(nx1[kept], ny1[kept])
plt.plot(nx2[kept], ny2[kept])
plt.show()
```

<Pic src="/img/./docs/Technology/curve/JGibibkelET69kvA5qMPE6En5bAQibJ83DGia6ia7Up7dUkCnMpj8fVckceZN1W275KdOKB9FGKLwXFGquUQ4DicxPibQ.png"></Pic>

他说，这张图虽然总的感觉对了，但 (1) 两条曲线有上下交错；(2) 黄曲线在顶点处断了，没有形成和蓝曲线对应的尖角。

问题 (1) 是因为，当$w=1$时，曲线上下两部分都“向下”移动，但上半部分“向内”移动，而下半部分“向外”移动，因此拼出了一条不连续的黄曲线；$w=-1$时，得到的绿曲线同理。解决方法，是我们把两组$(nx,ny)$在$t=\frac{\pi}{2}$和$t=\frac{3\pi}{2}$的拐点处切分重组，变成一条外侧曲线和一条内侧曲线。

```python
import numpy as np
import matplotlib.pyplot as plt

t = np.linspace(0, 2 * np.pi, 1000)
x = 16 * (np.sin(t)**3)
y = 13 * np.cos(t) - 5 * np.cos(2*t) - 2 * np.cos(3*t) - np.cos(4*t)
d = (4 * np.sin(4*t) + 6 * np.sin(3*t) + 10 * np.sin(2*t) - 13 * np.sin(t)) / (48 * np.sin(t)**2 * np.cos(t))
w = 1
nx1 = x + w * d / np.sqrt(1 + d ** 2)
ny1 = y - w / np.sqrt(1 + d ** 2)
nx2 = x - w * d / np.sqrt(1 + d ** 2)
ny2 = y + w / np.sqrt(1 + d ** 2)
kept = ((x < 0) & (nx2 < 0)) | ((x > 0) & (nx2 > 0))
nx1_recombined = np.concatenate((nx1[t < np.pi / 2], nx2[kept & (np.pi / 2 < t) & (t < 3*np.pi / 2)], nx1[t > 3*np.pi / 2]))
ny1_recombined = np.concatenate((ny1[t < np.pi / 2], ny2[kept & (np.pi / 2 < t) & (t < 3*np.pi / 2)], ny1[t > 3*np.pi / 2]))
nx2_recombined = np.concatenate((nx2[kept & (t < np.pi / 2)], nx1[(np.pi / 2 < t) & (t < 3*np.pi / 2)], nx2[kept & (t > 3*np.pi / 2)]))
ny2_recombined = np.concatenate((ny2[kept & (t < np.pi / 2)], ny1[(np.pi / 2 < t) & (t < 3*np.pi / 2)], ny2[kept & (t > 3*np.pi / 2)]))

plt.figure(figsize=(6, 6))
plt.xlim([-20, 20])
plt.ylim([-20, 20])
plt.plot(x, y)
plt.plot(nx1_recombined, ny1_recombined)
plt.plot(nx2_recombined, ny2_recombined)
plt.show()
```

<Pic src="/img/./docs/Technology/curve/JGibibkelET69kvA5qMPE6En5bAQibJ83DGsX6HVeiaKJeQ9l30icjlRXZiaytj7ITYrLsO3Eph1HTfn6MpEEg9psVrw.png"></Pic>

而问题 (2) 更加棘手一点，因为数学上，原曲线在这个突变点左右两边都是垂直向下的，因此向外平移后，它们就应该在顶点的位置无限向下垂直延伸而不该相交。

<Pic src="/img/./docs/Technology/curve/JGibibkelET69kvA5qMPE6En5bAQibJ83DGNjFOj3BhdNUKmurPHPrF81uCFagXj807pJgdKR7C7PR4w2GrXoRurw.png"></Pic>

从逆变换的角度想，这个尖角对应了一个图形向内移动后丧失信息的情况，所以逆变换就无法恢复这部分信息。

<Pic src="/img/./docs/Technology/curve/JGibibkelET69kvA5qMPE6En5bAQibJ83DGaM9xibhjbaAf4BXpeSIoZuOSicBNEiabMgw7Dh8JZGtRJt7hKcs7oy4mQ.png">有多根曲线和蓝曲线对应</Pic>

我用 TikZ 给他画了个曲线，说明现有的程序也处理不了这种情况：

<Pic src="/img/./docs/Technology/curve/JGibibkelET6iczCS5DbIFTyRXwqNhiczPUlxYvlKH5LqxPqsvh2iakNzpib5tDg0UCYA7J3A0FWc4rQQOGCZ2aVicGEQ.png"></Pic>

他表示理解。不过他想了一会儿，说，那我们不妨用圆弧补上这段空白——从一对多的对应中挑选一条符合要求的曲线，总比留下一块空洞好。于是，我在拼接曲线时，又多拼了一个半圆进去。

<Pic src="/img/./docs/Technology/curve/JGibibkelET69kvA5qMPE6En5bAQibJ83DGlSNqsOhERZ6SsgcjhIs8DAfF4ddOIIomkH99dm0yL3ZocRNicV72dLg.png"></Pic>

对于这个结果，他挺满意。于是，我们非常愉快地完成了这次合作。
