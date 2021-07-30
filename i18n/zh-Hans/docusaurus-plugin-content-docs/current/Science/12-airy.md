---
id: airy
title: 圆孔衍射：迷の1.22
date: 2021-01-08
link: https://mp.weixin.qq.com/s/BKh6Wgf30bSYQLlJYIUiSw
---

import Pic from '../../../../../src/components/Pic';
import DocMetadataBanner from '../../../../../src/components/DocMetadataBanner';

<DocMetadataBanner frontMatter={frontMatter} />

我们上物理课时，学到了圆孔衍射中的“艾里斑”现象。

<Pic src="/zh-Hans/img/./docs/Science/airy/JGibibkelET6ibp22yfGQRTNG3uEC1ibHxbmsjjAJWEgDd5XJPMZiaBmTyucDbazZYgSXICVtickzaR9E2cQ79O921mQ.png"></Pic>

艾里斑是光透过一个孔后在光屏上形成的亮斑——上图中的中心亮斑。因为它的存在，任何一个点光源都不可能在通过光学仪器后仍然成一个完美的点的像，而一定会衍射成一个光斑。这就让“完美成像”变成了不可能——摄影中，会尤为注意这一点。但在这里，我们不深入探讨。

艾里斑的大小公式是：

$$
\begin{aligned}
\sin\theta=1.22\frac{\lambda}{d}
\end{aligned}
$$

其中 $d$ 为圆孔的直径，$θ$ 是角宽度。
那个 $1.22$ 实在看来让人难受，许多人（比如我）说不定会因为它做噩梦。它到底是从哪里冒出来的？为什么不能表示为关于 $π$、$\mathrm{e}$ 之类的方程？它究竟是因为时空扭曲作用产生的奇怪常数，还是某个变态超越方程的解？

万同学给了我们一个非常学术的推导过程：[瑞利判据中圆孔衍射公式推导](https://mp.weixin.qq.com/s/LeDrTI2JNmz7Sj5Qyw_Edg)，只可惜，这个推导过程实在是<span style={{color: 'red'}}><b>非人哉</b></span>，像我这种最弱的人是根本看不懂啊……因此，我决定自力更生，研究下艾里斑大小的详细推导过程。

为了看懂这个推导，除了一点数学基础，你只需要知道光是一种电磁波，产生于电场的简谐波动。因此，空间中的每一个点上都有一个光波，它的振幅（也就是电场强度）可以表示为

$$
\begin{aligned}
E(x,y,z)=E_0\cos(\omega t+\phi)
\end{aligned}
$$

这实际上就是一个最一般的余弦波模型，至于 $ω$ 和 $φ$ 的具体值，不难证明，如果光波长为 $λ$，速度为 $c$，$(x,y,z)$ 距离波源的距离为 $d$，那么

$$
\begin{aligned}
\omega=\frac{2\pi}{\lambda}c,\phi=\frac{2\pi}{\lambda}d
\end{aligned}
$$

这样可以保证距离波源 $kλ$ 的位置的波和原波是同相的，而每一个点上，波的频率都是 $\displaystyle \frac{c}{λ}$。

事实上，为了方便运算，我们更喜欢借用欧拉公式把余弦函数 $\cos x$ 变为指数函数 $\exp x$，然后要得到实际值时取实部即可。因此变形一下。

$$
\begin{aligned}
E(x,y,z)=E_0\mathrm{e}^{\mathrm{i}(\omega t+\phi)}=E_0\exp\left(\mathrm{i}\frac{2\pi}{\lambda}(ct+d)\right)
\end{aligned}
$$

注意到它把波动方程分成了两个部分的乘积，一个是空间相关的部分，一个是时间相关的部分。如果要表示振幅，我们只需要空间相关的部分。

$$
\begin{aligned}
E(x,y,z)=E_0\exp\left(\mathrm{i}\frac{2\pi}{\lambda}d\right)
\end{aligned}
$$

这个东西就是光波的复振幅。还有一点修正：由于能量守恒，球光波向外扩展时，每一层球都应该总能量相等，也就是能量反比于波源距离的平方。由于能量正比于振幅的平方，综合得到振幅反比于距离。

$$
\begin{aligned}
E(x,y,z)\propto \frac{1}{d}E_0\exp\left(\mathrm{i}\frac{2\pi}{\lambda}d\right)
\end{aligned}
$$

有了这个公式，我们就可以描述衍射时子波的相互干涉了。
假设小孔是在 $xOy$ 平面上，圆心位于原点，半径为 $r$ 的一个圆，那么光通过圆孔后，圆孔上的每一个点 $(x_0, y_0, 0)$ 都会成为新的子波源。这些波源发出的光最终抵达位于 $z$ 的光屏，我们想要的即是对于所有 $(x_0, y_0, 0)$，它们发出的子波在 $(x_1, y_1, z)$ 这一点的叠加波幅。

<Pic src="/zh-Hans/img/./docs/Science/airy/JGibibkelET6ibRwzz1eaiaia1qgic8cviaNiaWNaUVzRvTlqiblbm7oGUPHm4OlvC8iayHChKOONwJrtI3zfjcpbMOFzibxw.png"></Pic>

我们当然直接莽，先积分一下。

$$
\begin{aligned}
E(x_1,y_1,z)\propto \int \hspace{-9pt} \int_S \frac{E_0}{d}\exp\left(\mathrm{i}\frac{2\pi}{\lambda}d\right)\mathrm{d}x_0\mathrm{d}y_0,\hspace{1em}S:x_0^2+y_0^2< r^2
\end{aligned}
$$

菲涅尔经过实验，发现还要乘个修正项$\displaystyle -\frac{\mathrm{i}}{λ}$，不过这不影响正比的性质。

距离的公式是

$$
\begin{aligned}
d=\sqrt{z^2+(x_1-x_0)^2+(y_1-y_0)^2}
\end{aligned}
$$

如果就这么套进去，会发现待积函数是个指数上带根号，根号下又有平方的式子，太复杂，没法得到解析性质。因此，我们要先做一点近似。

首先，提取出一个 $z$。

$$
\begin{aligned}
d=z\sqrt{1+\left(\frac{x_1-x_0}{z}\right)^2+\left(\frac{y_1-y_0}{z}\right)^2}
\end{aligned}
$$

如果圆孔大小相比孔屏距离来说很小，那么后面两项都是极小项，可以利用一下泰勒展开。

$$
\begin{aligned}
d\rightarrow z\left(1+\frac{1}{2}\left(\frac{x_1-x_0}{z}\right)^2+\frac{1}{2}\left(\frac{y_1-y_0}{z}\right)^2\right)=z+\frac{(x_1-x_0)^2}{2z}+\frac{(y_1-y_0)^2}{2z}
\end{aligned}
$$

这样就把根式变成了几个值——一个大数 $z$ 和两个极小项——之和的形式。把它代回那个积分式。

$$
\begin{aligned}
E(x_1,y_1,z)&\propto \int \hspace{-9pt} \int_S \frac{E_0}{z}\exp\left(\mathrm{i}\frac{2\pi}{\lambda}\left(z+\frac{(x_1-x_0)^2}{2z}+\frac{(y_1-y_0)^2}{2z}\right)\right)\mathrm{d}x_0\mathrm{d}y_0\\
    &=\int \hspace{-9pt} \int_S \frac{E_0}{z}\exp\left(\mathrm{i}\frac{2\pi}{\lambda}z\right)\exp\left(\mathrm{i}\frac{2\pi}{\lambda}\frac{x_1^2-2x_0x_1+x_0^2}{2z}\right)\exp\left(\mathrm{i}\frac{2\pi}{\lambda}\frac{y_1^2-2y_0y_1+y_0^2}{2z}\right)\mathrm{d}x_0\mathrm{d}y_0
\end{aligned}
$$

由于 $z$, $x_1$, $y_1$ 都是定值，也可以提取出来，只剩下与 $x_0$, $y_0$ 相关的内容。

$$
\begin{aligned}
E(x_1,y_1,z)\propto\int \hspace{-9pt} \int_S E_0\exp\left(\mathrm{i}\frac{2\pi}{\lambda}\left(\frac{x_0^2-2x_0x_1}{2z}+\frac{y_0^2-2y_0y_1}{2z}\right)\right)\mathrm{d}x_0\mathrm{d}y_0
\end{aligned}
$$

这就是近场中的菲涅尔衍射积分，但它还是太复杂了。如果孔径很小，$x_0^2 + y_0^2$ 也会变成高阶无穷小项，可以忽略。这样剩下的就只是：

$$
\begin{aligned}
E(x_1,y_1,z)\propto\int \hspace{-9pt} \int_S E_0\exp\left(-\mathrm{i}\frac{2\pi}{z\lambda}(x_0x_1+y_0y_1)\right)\mathrm{d}x_0\mathrm{d}y_0
\end{aligned}
$$

这样问题就简单多了——这便是远场中的夫琅禾费衍射积分。

那么如何求这个二重积分呢？我们用敏锐的直觉注意到，这个积分长得神似双变量傅里叶变换：

$$
\begin{aligned}
F(u,v)=\int \hspace{-9pt} \int_{-\infty}^{\infty}f(x,y)\exp(-2\mathrm{i}\pi(ux+vy))\mathrm{d}x\mathrm{d}y
\end{aligned}
$$

我们最不好处理的部分就是原积分式中的那个圆形 $S: x^2 + y^2 < r^2$。但我们可以把它变成一个函数 $f(x_0, y_0)$，乘进式子里。

$$
\begin{aligned}
E(x_1,y_1,z)\propto\int \hspace{-9pt} \int f(x_0,y_0)\exp\left(-\mathrm{i}\frac{2\pi}{z\lambda}(x_0x_1+y_0y_1)\right)\,\mathrm{d}x_0\mathrm{d}y_0
\end{aligned}
$$

这样这个积分就完美符合傅里叶变换的样子了。对于圆孔，$f$ 的定义是：

$$
\begin{aligned}
f(x_0,y_0)=\begin{cases}1,&x_0^2+y_0^2\le r^2\\0,&x_0^2+y_0^2>r^2\end{cases}
\end{aligned}
$$

现在，我们只需要对小孔对应的 $f(x_0, y_0)$ 做傅里叶变换，就可以得到它在光屏上的衍射图案。这是个非常重要的观察：我们没必要做计算了，只需要查每种小孔形状对应的傅里叶变换即可。作为骄傲的物理学家，我们可以知其然而不知其所以然，直接抄数学表达式。

很不幸，圆的傅里叶变换没有初等表达，需要用一阶贝塞尔函数。

$$
\begin{aligned}
F(u,v)=\mathcal{F}\{f(x_0,y_0)\}=\frac{rJ_1(2\pi r\rho)}{\rho}
\end{aligned}
$$

其中 $ρ^2 = u^2 + v^2$。对比傅里叶变换式和我们的积分式，得到 $u$ 和 $v$ 的式子：

$$
\begin{aligned}
u=\frac{x_1}{z\lambda},\hspace{5pt}v=\frac{y_1}{z\lambda}
\end{aligned}
$$

从而得到 $ρ$：

$$
\begin{aligned}
\rho=\frac{1}{z\lambda}\sqrt{x_1^2+y_1^2}
\end{aligned}
$$

代入得到最终的函数：

$$
\begin{aligned}
E(x_1,y_1,z)\propto \frac{J_1\left(\dfrac{2\pi r}{z\lambda}\sqrt{x_1^2+y_1^2}\right)}{\sqrt{x_1^2+y_1^2}}
\end{aligned}
$$

现在，我们只要找到 $E = 0$ 的点，就能得到艾里斑的半径。很不幸，贝塞尔函数没有初等表达，更没有解析解。它的第一个数值解为 $x = 3.8317$。算一算：

$$
\begin{aligned}
\frac{2\pi r\sqrt{x_1^2+y_1^2}}{z\lambda}&=3.8317\\
\frac{\sqrt{x_1^2+y_1^2}}{z}=\sin\theta&=\frac{3.8317}{\pi}\frac{\lambda}{2r}=1.2197\frac{\lambda}{2r}
\end{aligned}
$$

Ta-da，证毕。

我们在推导中得到了一个很强的结论：小孔衍射相当于一个傅里叶变换，把孔隙的形状变换到光屏上的图案。有了这么好玩的工具，我们代点其他的缝隙形状进去，看看得到什么结果。单缝衍射的 $f$ 定义为：

$$
\begin{aligned}
f(x_0,y_0)=\begin{cases}1,&|x_0|\le r\\0,&|x_0|>r\end{cases}
\end{aligned}
$$

这是个方波，傅里叶变换之后的图案，是 $\text{sinc}$ 函数，整理之后为：

$$
\begin{aligned}
E(x_1,y_1,z)\propto \frac{\sin\left(\dfrac{2\pi r}{z\lambda}x_0\right)}{x_0}
\end{aligned}
$$

它的第一个零点的位置：

$$
\begin{aligned}
\frac{2\pi rx_0}{z\lambda}&=\pi\\
\frac{x_0}{z}=\sin\theta&=\frac{\lambda}{2r}
\end{aligned}
$$

此处的 $r$ 是半缝宽，因此 $2r$ 才是缝宽。我们的公式又和实验现象相符合，非常令人满足。

最后，我们画点图验证一下衍射公式。首先是振幅关于轴距离的分布。（光强的分布就是把此函数平方，但画出来的图看起来不够优美）
蓝线为圆孔衍射，黄线为单缝衍射，可以看到圆孔的衍射条纹要更宽一点，这个比值正是 $1.22$。

<Pic src="/zh-Hans/img/./docs/Science/airy/JGibibkelET694UQSTSxsmQibPBc8Mt8iczYRwERhIXETibSiaEh4HQ4UhU99w3dSbH9o6WqXN4o2BiclLhl7zR4Mibvgg.png"></Pic>

看起来非常科学。如果画个二维的振幅分布图：

<Pic src="/zh-Hans/img/./docs/Science/airy/JGibibkelET694UQSTSxsmQibPBc8Mt8iczYJq4v8PZG3qKtUagv25OS2dKialeysib7Er03xvfORYKZYSQCiabO1kobg.png"></Pic>

平方之后，得到实际的光强分布图：

<Pic src="/zh-Hans/img/./docs/Science/airy/JGibibkelET685a5rxPXLibElY6oEgLE59OBKFgG3E0fhyPeC1urPpKKCGaEvdWvICiaOfIMZPRlFEL2aiaDV22pINg.png">除了中心黄色亮斑和外面一圈红色光晕，你能看到第二个和第三个圈吗？</Pic>

（我的 Python 代码太丑陋了，就不展示了）

就这样，祝你做个好梦，祝梦里没有丑陋的贝塞尔函数和 1.22。

$$
\begin{aligned}
J_1(x) = \sum_{m=0}^\infty \frac{(-1)^m}{m! \Gamma(m+2)} {\left(\frac{x}{2}\right)}^{2m+1}\equiv\frac{1}{\pi} \int_0^\pi \cos (\tau - x \sin \tau) \,\mathrm{d}\tau
\end{aligned}
$$

<p style={{textAlign: 'center', color: 'gray', fontSize: 'small'}}>第一类贝塞尔函数：你瞅啥？</p>
