---
id: bee
title: 辣 鸡 化学题 | 一切为了蜜蜂
sidebar_label: All for the bees
---

import useBaseUrl from '@docusaurus/useBaseUrl';

export const Pic = ({children, src}) => (
    <div style={{textAlign: 'center'}}>
        <img src={src} />
        <p style={{color: 'gray', fontSize: 'small'}}>{children}</p>
    </div>);

> First published on Feb 11, 2020
>
> Link: https://mp.weixin.qq.com/s/JDL99tg0AVufYazP6TfGkw

在某个平行时空中，还有四天就是英国化学奥赛了......但很不幸，在我们的时空，这并没有发生。所以，我花了半个小时，研究了一道 辣 鸡 化学题。

由于有机化学还是初学，只对邢其毅的《基础有机化学》（大本）比较熟悉，全文的参考都来自于此。《有机反应机理的书写艺术》（Art）也在看，但还比较陌生......很多机理比较凌乱，跳了加质子、脱质子之类的小步骤，但希望没有大错误。

本题来自英国化学奥赛UKChO2019第4题。先感受一下：

<Pic src={useBaseUrl("img/./docs/Science/bee/JGibibkelET6ic8fRiawIMic3jFWfS9o4SpMyc12XdWAmKlWL8hXbgTZcwwksxJaibMcUuXI8z0cKibBVyrTH2Y8DFFfA.png")}></Pic>

<Pic src={useBaseUrl("img/./docs/Science/bee/JGibibkelET6ic8fRiawIMic3jFWfS9o4SpMyXBc8Z7O0QPPebXDIfBEFgEtA7d9ys0WxTUaqk10lt7iaKuQ6dUEjHOw.png")}></Pic>

<Pic src={useBaseUrl("img/./docs/Science/bee/JGibibkelET6ic8fRiawIMic3jFWfS9o4SpMyVhmhibMYOAmibVYUsTNNziaTcjVYgzaRMtZ6cPmgZmRt7fuJcbJpibw6GA.png")}></Pic>

英奥赛近年来在不停地尝试创新题目，更加综合，更考察素养，更贴合时事；但结果却是越来越难......想想将近十年前的题，还是这样的：

<Pic src={useBaseUrl("img/./docs/Science/bee/JGibibkelET6ic8fRiawIMic3jFWfS9o4SpMy8fVKC6C3emfNPLhFERKNo8kMScbhxOaPwSMGk1UyhcMo1XKp69v7Mg.png")}>实在太有代表性了，令人印象深刻（来自2012年第3题）</Pic>

2019年的有机大题套路相当多变，有一些看起来很想当然的反应，实际上的确存在；还有一些，则是如果题没有读清楚就直接爆炸。我们每个问题分别分析。

(a) 求噻虫嗪的化学式。分子式已经给出，看图说话即可，不可多得的送分题。C<sub>8</sub>H<sub>10</sub>ClN<sub>5</sub>O<sub>3</sub>S

<Pic src={useBaseUrl("img/./docs/Science/bee/JGibibkelET6ic8fRiawIMic3jFWfS9o4SpMydeQEQu6HQeKpuUp91frJbPo6vShSgOfkW35f0ZhhWJGqTHiaQjLuP0g.jpeg")}></Pic>

(b) 首先求甘油 (glycerol) 和三氯氧磷 (phosphorus oxychloride) 反应产物。猜都能猜到，$\ce{POCl3}$ 是氯化羟基的，变成1,2,3-三氯丙烷。同样没什么难度。（能够方便地卤代羟基的还有 PX<sub>5</sub>, PX<sub>3</sub>, SOCl<sub>2</sub> 等；大本说，二氯亚砜由于发生的是 S<sub>N</sub>i 反应，并不会翻转）*参考：大本P288*

## A.

<Pic src={useBaseUrl("img/./docs/Science/bee/JGibibkelET6ic8fRiawIMic3jFWfS9o4SpMyFzZDDDAV6KzpQDibFor8MbGXAsWvDp60QQsZD4qEpm8wgCeNqLFwImw.png")}></Pic>

第二个，乍看去考的是取代与消除的竞争反应；但细品，既然生成三个异构体，那就只有消除了（三个取代产物也行；但到了下一问就说不过去了；更何况题目中说 CaO 是一种碱，也算提示不要往亲核试剂上想）。A的完整结构式长这样：

<Pic src={useBaseUrl("img/./docs/Science/bee/JGibibkelET6ic8fRiawIMic3jFWfS9o4SpMyvtPvqT8YJ8p3YLgOhDF7TYZNx8AEQIHicJCOTgH5Jcz92ialBxg3aDXA.png")}></Pic>

显然，消除的是 Cl<sup>1</sup> 与 H<sup>2</sup> 或者 H<sup>4</sup> 与 Cl<sup>5</sup>，分别生成2,3-二氯丙烯与1,3-二氯丙烯。B'与B''几何异构，而细想2,3-二氯丙烯是没有顺反异构体的，那就只剩顺-1,3-二氯丙烯和反-1,3-二氯丙烯了。顺式占绝大多数，因为对交叉是优势构象。*参考：大本P252*

## B.

<Pic src={useBaseUrl("img/./docs/Science/bee/JGibibkelET6ic8fRiawIMic3jFWfS9o4SpMyfQhPZS1Vd3ibjtzTxqY7YeTob4Gpw7iahuZgnTVfwmqMCVNLBibia9S5Qw.png")}></Pic>

## B'.

<Pic src={useBaseUrl("img/./docs/Science/bee/JGibibkelET6ic8fRiawIMic3jFWfS9o4SpMy36v7mBLZfo25dHcH4ItYXXLXDalVSwib9NUMhjLcu8IytY0MduZiaSIw.png")}></Pic>

## B''.

<Pic src={useBaseUrl("img/./docs/Science/bee/JGibibkelET6ic8fRiawIMic3jFWfS9o4SpMyrMhQxOO65EcY6gzlVQzf9cCHlJA1gVXGxl8sI08V5pdPAFZeqoMicFw.png")}></Pic>

（什么扎伊采夫规则？什么产率？都不要想了，出题人说的永远是对的）

<Pic src={useBaseUrl("img/./docs/Science/bee/JGibibkelET6ic8fRiawIMic3jFWfS9o4SpMy6dl5oGAeQxDzxZBnoVJyffncP5AwLUCmZqDzWNNKB5Cwk61kicTTVWg.jpeg")}></Pic>

(c) 也是送分题，不会共振规则也能蒙出来。

<Pic src={useBaseUrl("img/./docs/Science/bee/JGibibkelET6ic8fRiawIMic3jFWfS9o4SpMyh4ya5guASL8QFa5r99uich2GW5prfESDPgPRTTlhSCULzBAwD4o4HLQ.png")}></Pic>

<Pic src={useBaseUrl("img/./docs/Science/bee/JGibibkelET6ic8fRiawIMic3jFWfS9o4SpMyMlG2ZDOiaWS3pZ8qRQicZO8zViau86qsTqODTdk0xx8UacjVvib6JKSfhA.jpeg")}></Pic>

(d) 从此开始，就到处都是坑了……硝酸中的亲电试剂，硝酸本身怎么看都不像能接受孤对电子的样子。

<Pic src={useBaseUrl("img/./docs/Science/bee/JGibibkelET6ic8fRiawIMic3jFWfS9o4SpMyl554iaGSsSRejxeq1Wqdtd1xVo9xapC4Wg475S6a5agoh4KWyiaob4ag.png")}>怎么看怎么别扭</Pic>

为了从中搞出一个亲电试剂，不得不考虑一些正离子，比如硝酰（氢离子、氧鎓离子这种就不用说了）。拔掉羟基后，NO<sub>2</sub><sup>+</sup> 是肯定会共振中和电荷的。所以，答案是：<img src={useBaseUrl("img/./docs/Science/bee/JGibibkelET6ic8fRiawIMic3jFWfS9o4SpMyJiaFVCvdia4BqlYvkTJymZ1wQibjunhTVTUbqox9oeKGZFe0gZNr5OtqQ.png" />（这是一个极强的亲电试剂，甚至还有一整本书来描述它的作用原理）

(e) 胍 (guanidine) 当亲核试剂使的话，任何一个氮上的孤对电子都可以进攻硝酰，所以答案不止一个。为了和最后产物的结构一致，选择这种路径。

## E.

<Pic src={useBaseUrl("img/./docs/Science/bee/JGibibkelET6ic8fRiawIMic3jFWfS9o4SpMyQVRJOUNXVpt8YmlKebTa4ozsoyVyVkl4we7QRf9CyWWC8RiclB9ougw.png")}></Pic>

接下来加入甲胺 (CH<sub>3</sub>NH<sub>2</sub>, methylamine)，不晓得干什么的，大概猜到是甲基化用的；我们目前处于最后产物的中下方，注意到最左边的氮在产物中同一位置多了一个甲基，考虑是不是此时要添一个甲基，不然就再无机会。（口胡×1）为什么不在对称的氮上也加甲基？可以和产物对比，发现两环连接处只有一个碳，容不下多出的一个甲基。

## F.

<Pic src={useBaseUrl("img/./docs/Science/bee/JGibibkelET6ic8fRiawIMic3jFWfS9o4SpMyzHKYVnraYLgnY1GiatqP3StXpAKREA5Dqv9sfI8jWj9DLRECKbhKJFA.png")}>虽然不知道 NH<sub>2</sub><sup>+</sup> 作为史上最烂没有之一（p<i>K</i><sub>b</sub>=+35）的基团是怎么在另一个胺的排挤下离开的，但只有这样说得过去</Pic>

然后加入了甲醛和碳酸氢钠......在碳酸氢钠上纠结了很久，究竟是干什么的？大概是当碱用的吧。还有一个人名反应——曼尼希 (Mannich) 反应——和这个有点相像。但在那里，胺基进攻甲醛生成醇后，还会进一步在酸的作用下脱水。那这里的碱，大概就是防止这一步发生了。所以，是胺基亲核进攻甲醛生成醇的过程。（口胡×2）同时，G的化学式告诉我们，多了2个碳和2个氧，隐隐感到此处需要在两个对称的氮上同时操作。

## G.

<Pic src={useBaseUrl("img/./docs/Science/bee/JGibibkelET6ic8fRiawIMic3jFWfS9o4SpMyt9R5DqyT3wCn2w3rbaGEQypUhwF6OvFnjrj7AqrYRe1VukLuE29C5Q.png")}>能够理解为什么要用碳酸氢钠这样比较弱的碱，因为进攻羰基需要氢离子存在，此处未写出详细机理</Pic>

最后醇醇缩合成内醚，基本操作。

## H.

<Pic src={useBaseUrl("img/./docs/Science/bee/JGibibkelET6ic8fRiawIMic3jFWfS9o4SpMyW2UDIRrBV0p7OEY5cLKYxl1sIErhQnXk54KKCUwInibA6f1nE9kadFg.png")}></Pic>

这样，最后一步简单的 S<sub>N</sub>2，氯离去，就得到了产物。基本可以确定，口胡的内容都是正确的。

但不止于此，本题还提供了一种替代方案。

<Pic src={useBaseUrl("img/./docs/Science/bee/JGibibkelET6ic8fRiawIMic3jFWfS9o4SpMymJw9d7HWc4S6kxH8U2NpUJQ1T8cM44Am6pjBd2tu5a5NyKfWty2k5w.jpeg")}></Pic>

(f) 开始的第一问便造成了暴击——溴究竟是如何与丙醛反应的？我以为是溴加成羰基的双键，但显然根据化学式，I应该是溴代产物；结果翻阅大本，发现了这么一个机理：*参考：大本P480*

## I.

<Pic src={useBaseUrl("img/./docs/Science/bee/JGibibkelET6ic8fRiawIMic3jFWfS9o4SpMy8hlClgkr94MnGSIEALKKa9DHLbBqASRHiccbOWbPEPcYo6GXEr26Exg.png")}></Pic>

原来是羰基的活泼的α-氢发生取代......而且如果此空填错，基本就没有做对的可能性了。

再往后，加入了硫脲 (thiourea) （这题目真是百花齐放），看分子式可以知道是一个简单的取代；但怎么取代就得三思。

<Pic src={useBaseUrl("img/./docs/Science/bee/JGibibkelET6ic8fRiawIMic3jFWfS9o4SpMyVDBhEIvOuRvVItyuAsFJjBic5DXGZ7bK0icVTlpDa9vVBNicNx6w2LBpw.png")}></Pic>

Naïve! 

第二个坑又紧随其后——如果像这么取代，硫就会在环的外面了，没法进环。为了让它进环，只能这样互变一下，让硫去进攻：

## J.

<Pic src={useBaseUrl("img/./docs/Science/bee/JGibibkelET6ic8fRiawIMic3jFWfS9o4SpMysXEvTEQry2LxuanB9m3dJC6hywf0xdkEDKAILS1HLZUpLZbXhwkJvA.png")}></Pic>

(g) 盲猜从J到K的脱水是胺基与羰基氧的脱水，而且看起来很像话：

<Pic src={useBaseUrl("img/./docs/Science/bee/JGibibkelET6ic8fRiawIMic3jFWfS9o4SpMy0nWrZ9EbuT3dT4Q4DmSE9u7sW0icy7NZuKoRJoMibaa2N8LPKB9xibBxQ.png")}></Pic>

本质上是羰基被胺基亲核加成的机理，再脱水生成席夫碱 (Schiff base，即亚胺)。但K还有一个要求，要有芳香性；现在的环上有一个 sp<sup>3</sup> 碳，无论如何都不会芳香，因此再略一互变。

## K.

<Pic src={useBaseUrl("img/./docs/Science/bee/JGibibkelET6ic8fRiawIMic3jFWfS9o4SpMytp6LibGN0Yfeax3ErRhWjxAOZgE84xNk0Ckk7oAA4mNawDDytOccS8Q.png")}></Pic>

有了两个双键和一个硫原子，正好六个π电子，符合休克尔 (Hückel) 规则。

(h) 随后加入的盐酸与亚硝酸钠，就更加陌生了。这个反应，如果没有接触过，就绝对想不到；但只要晓得，识别度还是很高的，尤其是在后续加热有氮气逸出的情况下：芳香一级胺 Ar-NH<sub>2</sub> 的叠氮化 (Diazotization) 反应。其中要用到亲电试剂 NO<sup>+</sup> ，产生原理和前文的 NO<sub>2</sub><sup>+</sup> 类似。

<Pic src={useBaseUrl("img/./docs/Science/bee/JGibibkelET6ic8fRiawIMic3jFWfS9o4SpMyfibeiak7yp3jHFaD6EGibHjLSz0lYPWichib8HSXMKSJ4Fa5sUbatAr49ew.png")}></Pic>

## L.

<Pic src={useBaseUrl("img/./docs/Science/bee/JGibibkelET6ic8fRiawIMic3jFWfS9o4SpMyjtxOt064cjEiajLXQH8O5OEuMyYCDGM9YdXfm7cia9me0rqFypCyfibWg.png")}></Pic>

然后再加热，氮气逸出。

## M.

<Pic src={useBaseUrl("img/./docs/Science/bee/JGibibkelET6ic8fRiawIMic3jFWfS9o4SpMyDic0RL9flickAINImnzTP5ED3S5ymXcib7m545iczyEzhIvNVAgCbb4Sbg.png")}></Pic>

（如此大费周章，只为了把胺基换成氯......还不如RMB置换法）

最后一步加入的*N-氯代丁二酰亚胺*是一种氯化剂。

> 能将芳醛氯化而芳环不受影响。在苯胺、N-烷基苯胺的氯代（邻位为主），a-氨基吡啶氯代，a-苯硫基酰胺脱氢氯代和降解氯化，以及环戊二烯单氯化反应中都比用氯气、次氯酸叔丁酯、氯胺T等的产率更高。作为氧化剂，可将二醇氧化成内酯，伯(仲)醇氧化为醛（酮），B-羟基酮氧化成B-二酮等。在酸性条件下能选择性断裂色氨酸形成的肽键。也可用于烯丙胺、B，R-不饱和氨基酸极其衍生物的合成。
>
> 百度百科相关词条

本段可谓是相当难了，很容易被剃光头；而最后一段难度不逊于此。主要原因，在于是史上（至少是从2003年起）首次考察自由基反应机理（真正考机理的题目本来就不多）；而在此之前，离子型反应占据了99%的内容，再加上一些狄尔斯-阿尔德 (Diels-Alder) 之类的极少数协同反应。自由基说起来只是引发-增长-终止三步，但可以做不少文章。

<Pic src={useBaseUrl("img/./docs/Science/bee/JGibibkelET6ic8fRiawIMic3jFWfS9o4SpMyVhmhibMYOAmibVYUsTNNziaTcjVYgzaRMtZ6cPmgZmRt7fuJcbJpibw6GA.png")}></Pic>

(i) & (j) 由于涉及循环，从何处下手就很成问题。按照 Art 的观点，研究机理的第一步一定是为原子标号。

<Pic src={useBaseUrl("img/./docs/Science/bee/JGibibkelET6ic8fRiawIMic3jFWfS9o4SpMyK2YgmaYDuUTSRnyTXU6CDFiawMJricRT0cgI621SdUwPIfEZYEyiaC0CA.png")}>符合增/断键最少的规则。由于有大量氯原子，氯究竟来自何方不好下定论，所以未标出。须成键：S<sup>1</sup>-C<sup>5</sup>; C<sup>2</sup>-Cl; C<sup>6</sup>-Cl；断键：C<sup>5</sup>-Cl</Pic>

由于反应在氯气中进行，我们大胆假设 Z 是 Cl·，再来小心求证。注意题中说Z和C中的硫氰根部分发生化合，进一步限制了可能的反应。既然要成 C<sup>2</sup>-Cl 这根键，现在又需要 S, C, N 中任何一个和 Cl 化合，那此时不待更待何时？

## V.

<Pic src={useBaseUrl("img/./docs/Science/bee/JGibibkelET6ic8fRiawIMic3jFWfS9o4SpMyRktj0EibThaibIPhDJN4oTyKicHDfYSRbhhTU3aIJm94NgfcRLdD0oDrw.png")}>答案同时接受C-Nπ键发生均裂；但这样后续分析反而麻烦</Pic>

接着环化——那便是 S<sup>1</sup>-C<sup>5</sup> 键了。正好 S<sup>1</sup> 现在有未成对电子，可以借这个机会把电子转移走。S 要和 C 成键，一个电子由 S 提供，还有一个从哪来？C 周围能提供电子的只有 C<sup>5</sup>-C<sup>6</sup> π键，所以再次均裂，把未成对电子转移到 C<sup>6</sup> 上。

## W.

<Pic src={useBaseUrl("img/./docs/Science/bee/JGibibkelET6ic8fRiawIMic3jFWfS9o4SpMyggp56mHGxCVwdZibkwhTKjMLTics9EZQxdnxu7nWwwEwYmsiagUmFH9icQ.png")}></Pic>

再检查列表——还需要加上 C<sup>6</sup>-Cl，断掉 C<sup>5</sup>-Cl。Y 到 D 是消去反应，肯定是断键；那只能抓住最后机会，在 W→Y 的时候加 C<sup>6</sup>-Cl 键了。此时，又是正好 C<sup>6</sup> 是反应中心。为了产生 Z (依照我们的假设是 Cl·)，加上氯气再好不过了。典型的链增长过程。

## Y.

<Pic src={useBaseUrl("img/./docs/Science/bee/JGibibkelET6ic8fRiawIMic3jFWfS9o4SpMy6LeOfnnccuc7le8hQYzLOTYsiaiaF02Ike8Iib4exjpJch39AnHqLjOoQ.png")}></Pic>

最后的消除，并在 C<sup>4</sup>-C<sup>5</sup> 上成双键。

到此结束。

花了三千字，解释了一道三页纸的题目……涉及反应极广，主要是胺类和羰基的考察，掌握了大本的第10、14、18章，至少能拿60%、70%的分数；最后的自由基反应那20%（6'/27'），则成败都在于假设是否靠谱。
