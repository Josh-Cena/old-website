---
id: dna
title: DNA中那几个碱基的故事
sidebar_label: All about that base in the DNA
---

> First published on Dec 3, 2020
>
> Link: https://mp.weixin.qq.com/s/S4_N5f-4BM7x8tFZTUS0xA

这是你以为的 DNA 的样子：

Image

实际上 DNA 可能长这样：

Image

DNA 的二级结构描述的是碱基之间的相互连接关系。我们常说 DNA 的二级结构就是碱基通过一一配对，形成一个线性的分子，但实际上可能大多数时候，事情并不是那么完美。这是为什么？

蛋白质中，氨基酸主链的肽键组成了一级结构，而主链的扭曲形成了它的二级结构，侧链间的氢键、双硫桥键等作用形成了三级结构。同样地，在 DNA 中，为了研究二级结构，我们也要先从它的一级结构——碱基间的连接关系入手。

众所周知，DNA 中存在四种碱基：腺嘌呤 (Adenine, A)、胸腺嘧啶 ( Thymine, T)、胞嘧啶 (Cytosine, C)、鸟嘌呤 (Guanine, G)，其中C和T有一个环，叫嘧啶 (Pyrimidine, Py)；G和A有两个环，叫嘌呤 (Purine, Pu)。

Image

沃森和克里克告诉我们，A和T、C和G分别能用氢键配对。

Image

这叫做沃森-克里克配对 (Watson-Crick base pair)，是中学里学的配对方法，也是最常见的。沃森-克里克配对只允许碱基一一对应，因此一定能形成经典的双螺旋结构。

Image

但是，这几个碱基看起来能建立氢键的位点很多（因为杂原子很多），这样的配对方法真的唯一吗？

沃森和克里克之后十年，卡斯特·胡斯坦 (Karst Hoogsteen) 发现了所谓的**胡斯坦配对 (Hoogsteen base pair)**。起初，它只是沃森-克里克配对中的嘧啶绕糖苷键转半圈，翻个面之后的构象：

Image

两种配对中的嘌呤都是<span style={{color:'blue'}}>N3</span>-<span style={{color:'red'}}>C4</span>面参与成键；沃森-克里克配对中，嘧啶用<span style={{color:'blue'}}><b>N1</b></span>和<span style={{color:'red'}}>C6</span>所连基团成键，在胡斯坦配对中，因为翻了个面，变成了用<span style={{color:'green'}}><b>N7</b></span>和<span style={{color:'red'}}>C6</span>所连基团成键。

如果只是把碱基转一下，是不会影响双螺旋结构的——一一对应的碱基，仍然是一一对应。虽然胡斯坦碱基对的C1'碳间距较窄，糖苷键角较大（从两个结构式的对比中可以感受得到），但这不影响 DNA 的宏观结构。不过实际上，因为胡斯坦配对允许在碱基的另一个侧面上成键，我们就可以把更多的碱基拧到一起。

用Py代表嘧啶C/T，Pu代表嘌呤G/A，-代表沃森-克里克配对，·代表胡斯坦配对，那么一般在 DNA 中，是Py-Pu配对；我们可以再加一个碱基，变成Pu·(Pu-Py)或Py·(Pu-Py)。

Image

Image

这样，自然地，我们就可以造出**三螺旋 DNA**。

Image

通过在双螺旋中加入一条**三链形成寡核苷酸 (Triplex-forming oligonucleotide, TFO)**，就可以形成一个局部的三螺旋结构。RNA 聚合酶无法正常在三螺旋上工作，因此这一段 DNA 的转录就被抑制了。这可能能被用在癌症治疗中——通过设计靶向性的 TFO 来关闭某些基因的表达。

DNA 也有可能通过核糖链条的局部翻转形成分子内三螺旋，这被称为 H-DNA。

Image

因为这种结构不够稳定，因此未在生物体内 (in vivo) 被证实。但已经在体外 (in vitro) 通过抗体技术被观测到。

除了三聚体，胡斯坦配对甚至还允许四聚体的形成。我们可以用四个鸟嘌呤首尾相连，形成**鸟嘌呤四合体 (Guanine tetrad)**。

Image

这种四合体常见于G含量较高的DNA片段中。此时鸟嘌呤不再和胞嘧啶两两成键，而是在同一根链上由四个鸟嘌呤自成键。每个四聚体都是一个片状的结构，而若干个这样的片状结构叠起来，就形成了一个**鸟嘌呤四联体 (Guanine quadruplex)**。

Image

最右边的子图中的箭头代表核糖链的走向，不同的聚合方式可能有不同的走向，但总的结构大致相同。而这样一个“结”，在双螺旋中的样子是这样的：

Image

它同样阻碍了 RNA 聚合酶的工作，终止了基因转录。这就是为什么在设计质粒时，往往需要控制GC含量，因为虽然GC可以带来更高的分子热稳定性，但同时也会导致更多的阻碍表达的缠结。不过G4在生物DNA中有大量非随机的分布，可见它在天然 DNA 结构中也能发挥作用。在染色体末端（端粒）常常有几个G四聚体，就像一条绳子两段打结，保护了末端的 DNA 结构。

鸟嘌呤可以成G·G键，胞嘧啶也可以成C·C键。

Image

在一条C含量较高的核糖链上，胞嘧啶用C·C键相互耦合，也会形成一个缠结，叫做**I-基序 (I-motif DNA)**。

Image

I-基序也对 DNA 转录起了阻碍作用。但对它的研究不如对G4的研究充分，因此我们对它在生物体内的存在情况和实际作用并不是非常了解。

Image

总而言之，胡斯坦配对允许了更多样的碱基配对方法，无论是三个碱基还是四个，亦或是C·C、G·G这样的配对，都是可行的。这样非典型的配对导致了各种各样的 DNA 二级结构，如 DNA 三螺旋、G四聚体、I基序等等。它们都使得DNA无法被正常转录。生物学家们仍然在探究它们在生物体内具体的作用。在未来，这些结构可能会被运用于癌症与其他基因相关的疾病的治疗中。



## 参考资料.

Daniela Rhodes, Hans J. Lipps, G-quadruplexes and their regulatory roles in biology, Nucleic Acids Research, Volume 43, Issue 18, 15 October 2015, Pages 8627–8637, doi: 10.1093/nar/gkv862

Jain, Aklank et al. “DNA triple helices: biological consequences and therapeutic potential.” Biochimie vol. 90,8 (2008): 1117-30. doi:10.1016/j.biochi.2008.02.011

Kolesnikova, Sofia, and Edward A Curtis. “Structure and Function of Multimeric G-Quadruplexes.” Molecules (Basel, Switzerland) vol. 24,17 3074. 24 Aug. 2019, doi:10.3390/molecules24173074

Nikolova, Evgenia N et al. “A historical account of Hoogsteen base-pairs in duplex DNA.” Biopolymers vol. 99,12 (2013): 955-68. doi:10.1002/bip.22334
