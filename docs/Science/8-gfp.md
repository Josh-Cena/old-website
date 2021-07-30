---
id: gfp
title: 天然GFP中的大设计
sidebar_label: Grand design in wild-type GFP
date: 2020-10-01
link: https://mp.weixin.qq.com/s/VrFpvUU5W4GUlqhXtYigZQ
---

import Pic from '../../src/components/Pic';
import DocMetadataBanner from '../../src/components/DocMetadataBanner';

<DocMetadataBanner frontMatter={frontMatter} />

在我的青春还没有结束的时候（误），曾经在有机所周老师（我现在便在他的实验室搬砖）的课上近距离接触了绿色荧光蛋白（Green Fluorescent Protein, GFP），并且人生中第一次体验了柱子——那应该是迄今为止最美妙的一次过柱子经历了。

<Pic src="/img/./docs/Science/gfp/JGibibkelET68AwHGVOouGOOX77FpeckPQMJZ7HczzaF7jibcOiajtmSKD1GJQX58l7JsSwOdzgmspoRrIwBFTTcLQ.jpeg">应该不是我的手</Pic>

但是，由于当时我们都太弱了，周老师并没有给我们深入科普 GFP 的结构和机理……本文便来填补这一空白。同时，我们也会为每一步结论提供相应的实验证据。

## 一、绿色荧光蛋白的生色团

野生型绿色荧光蛋白（Aequorea）的原始氨基酸序列如下 [^1]：

<Pic src="/img/./docs/Science/gfp/JGibibkelET68AwHGVOouGOOX77FpeckPQyaG4EfvutoHKJWnMjIYFA8dSNLFpabZs8hiaFoblMLlpLx4uHhLEg1w.png"></Pic>

已知的是，在大肠杆菌中人工表达的以上蛋白可以发光。因此，GFP 的生色团和其他荧光蛋白不同，不是一个另外合成然后塞进蛋白里的外加基团，而是由肽链本身折叠形成的。

在确定这一点后，就可以对肽链本身下手。用木瓜蛋白酶部分裂解肽链，发现其中一个六肽 FSYGVQ （64-69）碎片也有同样的光谱特性 [^2]，从而大大缩小了研究范围。

接下来，生色团的结构本身被确定了，实际上起关键作用的是三肽 Ser65-Tyr66-Gly67。

<Pic src="/img/./docs/Science/gfp/JGibibkelET68AwHGVOouGOOX77FpeckPQtXINUZ4zxPPx3RtXtuExm5iaLG00vCF6Qz34MgvS6xH7PKXZVPqg5bA.png">Ser65-Tyr66-Gly67</Pic>

它可以转化为一个对羟基亚苄咪唑啉酮 (_p_-hydroxybenzylidene-imidazolinone)，具体的折叠机理如下 [^1]：

<Pic src="/img/./docs/Science/gfp/JGibibkelET68AwHGVOouGOOX77FpeckPQ22hdq0ST03DnjxEN5HdicwQvQqmFHMBHlhJI2nGwESicxBcRkDPGIyQg.png"></Pic>

这是个亲核进攻—脱水环化，然后氧化的过程。支持氧化机理的观察包括：

- 无氧环境下表达的蛋白没有荧光，但除此之外和正常的蛋白相同；
- 通入氧气后，蛋白逐渐正常发出荧光，并且在溶菌后的上清中同样如此（也就是说，氧化过程不需要任何细胞中的酶）；
- 氧化可形成一个稳定的咪唑酮离域 π 键体系，而该自发氧化过程在其他类似的咪唑酮中也有被观察到。

上述生物合成过程中，唯一的底物便是氧化使用的氧气，并且没有使用任何外部的酶，这意味着绿色荧光蛋白几乎只要能被表达出来，就能正常工作，无论环境，无论物种，为它的广泛适用性提供了基础。

当然，上述反应并不是 Ser-Tyr-Gly 三肽固有的性质，因为在许多序列包含同样的三肽的蛋白中，这个生色团并没有形成。因此，该过程的确需要 GFP 的其他残基参与催化。

虽然看起来唯一用来组成生色团的只有酪氨酸（提供了“对羟基亚苄”的部分；“咪唑啉酮”则是由肽骨架环化形成的），但实际上，另外两个残基对于生色团的形成也几乎必不可少。

所有的突变体都包含了 Gly67 这个看似无害的甘氨酸，因为只有简单的甘氨酸不会在亲核进攻羰基时产生空间位阻；Ser65 丝氨酸则主要起稳定作用，有时突变成苏氨酸；而可能令人惊讶的是，Tyr66 酪氨酸并不是无可替代，用同样有芳香性的色氨酸或组氨酸都可得到类似的离域 π 键体系，从而得到荧光蛋白，虽然荧光要弱得多。

## 二、生色团的发光机理

我们继续研究生色团本身。生色团的吸收和发射光谱如下 [^2]：

<Pic src="/img/./docs/Science/gfp/JGibibkelET68AwHGVOouGOOX77FpeckPQwnoS8g5yJxpFK4iaP7mb8dCa7ObsdH3icYU8umZyLI96UQc49ITBJbaw.png"></Pic>

吸收谱线在 395nm（紫外）和 475nm（蓝光）有两个峰，并且 395nm 的吸收度要高得多。发射谱线（用 395nm 激发）则只有 508nm（绿光）一个峰。

现有如下实验事实：

- 475nm 激发的发射谱线峰值位于 503nm 而非 508nm；
- 在碱性环境中（几乎使蛋白质变性的 pH），475nm 吸收度和发射峰明显增加，395nm 则明显下降；
- 用 395nm 短暂照射样品后，发射峰从 460nm 转移到 508nm 需要 10 皮秒，而增加体系粘度，降低温度，或将氢用氘取代后，该转移速度明显变慢。

以上观察引出了几个推论：

- 发光过程中至少存在两种物质，拥有不同的光谱特性；
- 这两种物质通过质子转移互相转化；
- 质子是在激发态下发生脱离的——460nm 峰代表了质子化的生色团，508nm 则是去质子化的生色团。

因此，生色团的发光机理是一个类福斯特循环（Förster cycle）的过程：

<Pic src="/img/./docs/Science/gfp/JGibibkelET68AwHGVOouGOOX77FpeckPQyuiaUaFibwh4icvuIU8x5Spia7N2xTlvB9BaQqVW5U0tuZeiaNjCOXvcNWg.png"></Pic>

其中活性氢是苯酚的羟基氢。我们将四种物质从左上角开始顺时针编号为(1)、(2)、(3)、(4)。激发过程如下：

1. (1) 吸收 395nm 的紫外光被激发成 (2)；
2. (2) 失去一个质子（因为苯酚在激发态下酸性强得多）；
3. (3) 放出一个 509nm 的光子回到基态 (4)；
4. (4) 得到一个质子变回中性。

另一条可行的路径是 (4) 直接被 475nm（图中为 470nm）光子激发到 (3)，然后放出 509nm 光子回到 (4)，其中没有质子参与。

由于未激发情况下 (1) 物质较多（(1):(4)=6:1），所以 395nm 的吸收度要比 470nm 高。但是有趣的是，因为 (4) 的碱性要比 (2) 的酸性弱（可参考上图的箭头相对长度），持续用 395nm 照射后，395nm 的吸收明显下降。其原因是因为 (1) 的浓度下降而 (4) 的浓度上升。

至于为何对羟基亚苄咪唑啉酮有荧光性质，则和它超大的离域 π 键体系有关。离域体系越大，离域电子越容易被激发，波长也越长，而这个生色团的离域体系大到发射波长位于可见光波段。（与之对比的是萘的发射波长为 310nm。）

此处，也可以解释这个现象：

<Pic src="/img/./docs/Science/gfp/JGibibkelET68AwHGVOouGOOX77FpeckPQcq8tXulaEGniaib6iaeRhEuKakAQMsC4HC9vWkTZgSibQ9FHoXlgweDMiaw.jpeg"></Pic>

在我们的实验中，用可见光照射样品呈黄色。作者的假说是，这是由于样品吸收了 470nm 的蓝光，因此呈黄色，也就是蓝色的补色。

## 三、GFP 的二级、三级结构

上面的机理漂亮得让人觉得只要有个生色团就可以发荧光。但实际上，失活的 GFP 的光谱特性和正常蛋白有显著不同，并且只要对正常蛋白略作删减（氮端或碳端截短 5~9 个残基），便会失去荧光。这启示我们，GFP 的正常工作和它其余的残基形成的二级、三级结构有很大关系。

<Pic src="/img/./docs/Science/gfp/JGibibkelET68AwHGVOouGOOX77FpeckPQ7Kb4cUicRicUF5gicjg5hb3KASmlEWNUKvd4icrhL9B7OVjYa9PoYIL8tQ.jpeg"></Pic>

GFP 的整体结构是一个由 11 个 β-折叠接成的圆柱形“灯罩”，里面则是由三个 α-螺旋把生色团“灯泡”固定在正当中，就像一个台灯。这样的结构防止了生色团被任何杂分子作用而失活（比如被氧气淬灭）。同时这也有力地支持了生色团自组装的机理，因为没有任何酶和底物能够进入重重包裹。（氧化需要的氧分子被包含在一个小缺口里。[^3]）

<Pic src="/img/./docs/Science/gfp/JGibibkelET68AwHGVOouGOOX77FpeckPQlAlxtKakF7YnVOZKm7paHBG732kFBbTMLa9myibwRZqlciaBI0N1Ff1A.png"></Pic>

而生色团周围，则有几个氨基酸和它以氢键相连。

<Pic src="/img/./docs/Science/gfp/JGibibkelET68AwHGVOouGOOX77FpeckPQJo6DibHicxZdz06CPv611yxjMnjG15KsWV4AOILwM6XB9tncem9hEefA.png"></Pic>

还有一些以水分子和其他氨基酸间接和生色团相连的氨基酸未标出。上面标出的五个氨基酸的用处各不相同。[^3]

- Thr203 通过和氧原子产生氢键，协助稳定酚盐阴离子 (4) 的形态。如果突变成非极性的异亮氨酸（羟基变为甲基），则 475nm 峰消失，只剩 395nm 峰，说明此时阴离子 (4) 由于不稳定，会立即转变为中性的 (1) 而不会吸收 475nm 的光子。
- Glu222 和 Ser65 产生氢键，形成一个负电中心。这个负电阻止了 Tyr66 的电离，稳定了中性分子 (1) 的状态。如果 Glu222 突变为甘氨酸，或者 Ser65 突变成缬氨酸、丙氨酸等非极性氨基酸，则 395nm 峰降低而 475nm 峰升高，说明此时更多的生色团处于阴离子 (4) 状态。
- Arg96 参与催化了成环过程，也通过自己的正电（这一正电又通过其它几个相邻的氨基酸加以固定），稳定了阴离子 (4) 在羰基上的部分负电。（见下面的共振图）

<Pic src="/img/./docs/Science/gfp/JGibibkelET68AwHGVOouGOOX77FpeckPQmgbFog1hibwfgLqjibv6KIzWswWAMibyzuhiaialQ5Mn931RH5pDFK4jxzw.png"></Pic>

- His148 和 Gln94 稳定了生色团结构并扩大了离域体系。

这几个氨基酸协同固定住了生色团的各个构象，使上文介绍的循环中的各步转化可以稳定地发生。

---

通过上文的描述，可以感受到天然 GFP 精妙的结构：三个氨基酸组成的生色团，由几个氨基酸用氢键加以稳定，再被 α-螺旋和 β-折叠层层包裹，在 238 个残基中组成了一个可以被两个波长激发并放出绿光的“小台灯”。进一步，调整几个氨基酸，便可以让它的吸收波长和放射波长发生变化，造出一系列不同性质，不同颜色的荧光蛋白。GFP 最出众的一点，在于它完全“自给自足”，无需外界的酶或特殊底物，便可以完成自组装，令人感叹其蕴含的“大设计”。

## 参考资料.

[^1]: Tsien, R. Y., Annu. Rev. Biochem. USA (1998) 67, 509-544
[^2]: Chalfie, M., Photochem. Photobiol. (1995) 62, 651-656
[^3]: Ormö, M. et al., Science (1996) 273, 1392-1395
