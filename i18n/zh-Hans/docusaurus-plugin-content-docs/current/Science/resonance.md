---
id: resonance
title: 优雅地绘制共振式
---

export const Pic = ({children, src}) => (
    <div style={{textAlign: 'center'}}>
        <img src={src} />
        <p style={{color: 'gray', fontSize: 'small'}}>{children}</p>
    </div>);

> First published on Nov 5, 2020
>
> Link: https://mp.weixin.qq.com/s/JkPWJCHHlBQxe7ChLlvOVg

高中学习的共振式的定义是：同等正确的路易斯结构式。而“正确的路易斯结构式”的定义是：

- 电子总数正确；
- 每个原子符合八隅规则，除了氢有一对电子，铝、硼有三对，第三周期以后可以有四对以上；
- 形式电荷最少，且负电位于电负性最大的原子上。

用这些法则的确可以画出一些共振结构式，但算不上是系统的方法论。不过高中的共振结构式要求本就不高，可能上限就是硝酸根的共振：

<Pic src="/zh-Hans/img/./docs/Science/resonance/JGibibkelET680Ra3uH0XI6hAS7AdlpxLnpZwCp61J5UE9cDW0vNQdsHCLEFibl8q47dQ06koibaGEBsibEibR16EEkg.png"></Pic>

这种高度对称的结构，一眼就可以看出来对应的共振式。但大多数时候，共振不是那么显然。比如要写出这个的所有共振结构：

<Pic src="/zh-Hans/img/./docs/Science/resonance/JGibibkelET680Ra3uH0XI6hAS7AdlpxLn74F5cTicED0z1az3qmpkJxticPov6OSga0icZCdK04eqbD8cp3usDpH8Q.png"></Pic>

用凑的方法就有些心有余而力不足。

而且“同等正确”的这个要求，也是值得商榷的。按照课本的要求，这个东西是不存在共振结构的：

<Pic src="/zh-Hans/img/./docs/Science/resonance/JGibibkelET680Ra3uH0XI6hAS7AdlpxLn0CiadnlRMyBmDicnBDJgtSLzZpoxQrUdJAyxsYtG2XibDCwvaOianO6Geg.png"></Pic>

但这样就不能解释为何它有一个比类似结构的分子都大的偶极矩。

因此，我们可以先给出一些系统的生成共振结构的方法论。主要有这么几条：

- 如果有缺电子原子A和一个带孤对电子的原子B相连，则孤对电子可以变成一对A-B成键电子：

<Pic src="/zh-Hans/img/./docs/Science/resonance/JGibibkelET69ShcnLs75tB087dvUNf6P4cLFpwM9TJ0Tl1Q3cPz3LoicU8tXibJROjRhyotpW5Ysyfgpy7QxRoQSw.png"></Pic>

- 如果有缺电子原子A临近双键B=C，则可以把双键转移到A上，使C缺电子：

<Pic src="/zh-Hans/img/./docs/Science/resonance/JGibibkelET69ShcnLs75tB087dvUNf6P46KdJSVoLPx9xEbCSjt4GicH3vndS8MnW3K5eAmBwD5R0cY2lcwnCjMg.png"></Pic>

- 如果有孤对电子原子A临近双键B=C，则可以把孤对电子沿双键推到另一端的原子C上：

<Pic src="/zh-Hans/img/./docs/Science/resonance/JGibibkelET69ShcnLs75tB087dvUNf6P4wYScVpoicMBPAw9BGbbEklMOYgcdksJDy8v8hlkPIBK2M8icaSOwQI5A.png"></Pic>

- 芳香环中的电子可以转动：

<Pic src="/zh-Hans/img/./docs/Science/resonance/JGibibkelET69ShcnLs75tB087dvUNf6P4q0uS4X3PbJgrpkia5AOIkCFEEISdhdu0ewheziaiagxEy3sNXd9tkH3lQ.png"></Pic>

- 双键本身也可以被推到一端的原子上：

<Pic src="/zh-Hans/img/./docs/Science/resonance/JGibibkelET69ShcnLs75tB087dvUNf6P4ufYib2uhFf9icyTkz22EowzlrbmqgLaXiackLdia72vgo4nFnhqJ7a156Q.png"></Pic>

注意，它们生成的并不是像硝酸根那样平凡的完全*等价*的结构，而是可能有贡献度大小之分的结构。但那些贡献度比较小的结构也不能被忽略，而它们往往决定了化合物的性质。比如在上例中的杯烯Calicene：

<Pic src="/zh-Hans/img/./docs/Science/resonance/JGibibkelET69ShcnLs75tB087dvUNf6P4gKzgjzHYod2StlQ0M7u4VOUibD2NJYjgYqfd6RWdGNwz2KmJtDH0NRQ.png"></Pic>

它看似是个非极性的分子，实际上却有着很大的偶极矩。这就是因为它有如下共振：

<Pic src="/zh-Hans/img/./docs/Science/resonance/JGibibkelET69ShcnLs75tB087dvUNf6P4qJCibsGm8vAHFeOibywlnicy2kRLX3jXjsZUZ1aawymtbEiaiaL4JiaYN8iaw.png"></Pic>

这样产生了电荷分离，理论上应该使得结构能量升高，但实际上这样生成了环戊二烯阴离子和环丙烯阳离子两个部分，两者都是芳香的体系（分别有6个和2个π电子），因此它的能量反而不高，对最终分子形态贡献很大。结论是，杯烯中存在明显的正电中心和负电中心，表现为一个大的偶极矩。

从这个例子我们可以看出，评价一个路易斯结构的好坏不能仅仅根据几条规则，更要看它的整体能量，尤其是有没有可能生成芳香体系。开头所给出的规则只是在大多数情况下能使得分子能量最低。

再比如，环戊二烯酮：

<Pic src="/zh-Hans/img/./docs/Science/resonance/JGibibkelET69ShcnLs75tB087dvUNf6P4SFE9e3r9fc2P5MnzWnKVobIFZP59ojz2TibE6rQabvmXicBZd95EDnLg.png"></Pic>

同样由于双键被推到一端之后，生成了一个反芳香的分子，使得整个体系非常不稳定，因此它无法被制备出来。这种电荷分离的结构一般会被忽视，但此处它对分子化学性质有很大影响。（顺便，有很多naïve的学生会在合成路径设计中用环戊二烯酮作底物，而不知道它们根本不存在）

最后，以6-（二甲氨基）富烯的共振来说明这个方法论的实用。

第一步，N上的孤对电子靠近一个双键，可以一路推到另一端的碳上：

<Pic src="/zh-Hans/img/./docs/Science/resonance/JGibibkelET69ShcnLs75tB087dvUNf6P43pgdOCibjyDxYt0aibERAS8KFwwFKFKhro4G6QB38ZJpsQkCXa9tuazw.png"></Pic>

接下来，就是快乐的芳香环转圈时间：

<Pic src="/zh-Hans/img/./docs/Science/resonance/JGibibkelET69ShcnLs75tB087dvUNf6P4h2LeYfjsQXPp7vW7cicxCibQPZuRSXfld5Eeia3nyr8nSFtcNnqHwdNicw.png"></Pic>

因此它一共有六个共振结构，成一个超大的离域体系。


## 参考资料

The Art of Writing Reasonable Organic Reaction Mechanisms. 2nd Edition. Robert B. Grossman. Springer (2003).

👆没错，我只是这本神书的搬运工
