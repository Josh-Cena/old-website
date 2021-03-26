---
id: circuitikz
title: 用LaTeX优雅地绘制数字电路
---

export const Pic = ({children, src}) => (
    <div style={{textAlign: 'center'}}>
        <img src={src} />
        <p style={{color: 'gray', fontSize: 'small'}}>{children}</p>
    </div>);

本文主要介绍数字电路的实现方法。使用的包为 $\text{CircuiTi}k\text{Z}$ 。（首次出现，标准拼写以示尊敬）主要信息来自于官方文档以及一些TikZ的使用经验。

注意：circuitikz在2020年4月19日发布了1.1.0版本，提供了IEEE标准的逻辑门。对于数字电路绘制帮助极大，但未包含在TeX Live 2020发行版中，请务必记得更新。具体更新方法因发行版和系统不同而有差异。

## 一、导入Circuitikz

导言区写`\usepackage{circuitikz}`即可。 同时还可以在导言区做一些全局设置，比如：

```tex
\ctikzset{logic ports=ieee}     %所有逻辑门使用IEEE标准
\usetikzlibrary{calc}           %使用TikZ中的计算功能
```

在文档中需要插入电路图的地方，使用环境`circuitikz`：

```tex
\begin{circuitikz}
    %绘制指令
\end{circuitikz}
```

也可以在开始环境时声明一个缩放比例。因为CircuiTikZ提供的逻辑门普遍偏大（个人感觉），所以我会把整个图缩小到0.7倍。

```tex
\begin{circuitikz}[scale=0.7, transform shape] %必须添加transform shape选项才能正常缩放CircuiTikZ
    %绘制指令
\end{circuitikz}
```

## 二、TikZ基础

介绍CircuiTikZ之前，有必要介绍TikZ中的一些基础功能。CircuiTikZ只不过是TikZ的一个包装，所以所有下述的的TikZ指令都可以在CircuiTikZ中使用。

TikZ的图形主要由三部分构成：坐标（coordinate），路径（path），节点（node）。它们大致的关系如下：

- 节点是*位于*一个坐标的二维结构；
- 路径是*连接*若干个坐标的一维结构。

每一条TikZ的指令大概都长这样：

```tex
\command[options] <other information>; %一定要有结尾的分号
```

### 1、坐标

要声明一个坐标很简单，`(x,y)`就表示了这个坐标。但是，我们很少单独使用坐标本身，所以它的声明往往是包含在一个路径或节点的声明中的。我们可以先用坐标生成一个辅助的网格：

```tex
\begin{circuitikz}[scale=0.7, transform shape]
    \draw[step=1,gray,very thin] (0,0) grid (5,5);
\end{circuitikz}
```

<Pic src="https://pic4.zhimg.com/80/v2-911f9f1e0c0988336976d476442e8093_720w.jpg"></Pic>

此处还用了`\draw`指令，但暂时不必在意，只需知道我们生成了一个从`(0,0)`到`(5,5)`，间隔为1的网格即可。注意到这个指令给三个选项赋了值：网格线的间距`step`，以及两个绘制选项`gray`和`very thin`，表示颜色和线的粗细。

声明坐标时，我们实际上做的是把TikZ中的”笔尖“移到了那个位置，从那里开始绘制图形。在笔尖确定的情况下，我们也可以使用相对坐标，根据上一个坐标的偏移量来声明下一个坐标。如果笔尖位于`(x,y)`，那么下一个坐标可以用`+(a,b)`或者`++(a,b)`来表示，意为“将笔尖向右移动`a`，向上移动`b`”，即`(x+a,y+b)`。一个加号和两个加号的区别在于两个加号声明的相对坐标会变成新的“笔尖位置”，而一个加号的坐标不会影响“笔尖位置”，笔尖仍然留在`(x,y)`上——但这只会在声明第二个相对坐标时有区别。下面的代码会生成一样的网格图案：

```tex
\begin{circuitikz}[scale=0.7, transform shape]
    \draw[step=1,gray,very thin] (0,0) grid +(5,5); %或者++(5,5)
\end{circuitikz}
```

### 2、路径

一个路径是连接若干个点的线。最简单的声明路径的方法（也是在CircuiTikZ中少数派得上用场的方法之一）：

```tex
\begin{circuitikz}[scale=0.7, transform shape]
    \draw[step=1,gray,very thin] (0,0) grid (5,5);
    \path (1,1) -- (4,5);
\end{circuitikz}
```

在这个指令中，`\path`表示一个路径，`--`连接了两个坐标`(1,1)`和`(4,5)`。这样，就在这两个点之间连接了一条线段。 但是，现在只是声明了路径，为了让TikZ真的去画它，还需要显式地给一个`draw`：

```tex
\begin{circuitikz}[scale=0.7, transform shape]
    \draw[step=1,gray,very thin] (0,0) grid (5,5);
    \path[draw] (1,1) -- (4,5);
\end{circuitikz}
```

<Pic src="https://pic1.zhimg.com/80/v2-551cdd43dceb37587ce94171f77f7300_720w.jpg"></Pic>

路径一般的声明方式是：

```tex
\path[options] <cord 1> <connection> <cord 2>;
```

除了`--`，还有`|-`和`-|`两种常用连接选项，前者会先垂直，再水平地从第一个点走到第二个点；后者则相反，先水平，再垂直。我们一直使用的`grid`，也是一种路径连接方式。

```tex
\begin{circuitikz}[scale=0.7, transform shape]
    \draw[step=1,gray,very thin] (0,0) grid (5,5);
    \path[draw] (1,1) -- (4,5);
    \path[draw,red] (1,1) -| (4,5);
    \path[draw,blue] (1,1) |- (4,5);
\end{circuitikz}
```

<Pic src="https://pic2.zhimg.com/80/v2-6a005a1eebbe161d1dedb468991e6cf9_720w.jpg"></Pic>

一条路径可以连续连接多个坐标，在最后使用`-- cycle`会使得路径闭合。同时，一直用`\path[draw]`显得太过累赘。我们可以简单地用`\draw`替换。

```tex
\begin{circuitikz}[scale=0.7, transform shape]
    \draw[step=1,gray,very thin] (0,0) grid (5,5);
    \draw (1,1) -- (4,5) -- (3,2) -- cycle;
\end{circuitikz}
```

<Pic src="https://pic4.zhimg.com/80/v2-69a100b9bb6f88e1a5f80e840af94d8f_720w.jpg"></Pic>

为什么要说`(1,1) -- (4,5) -- (3,2) -- cycle`而不说`(1,1) -- (4,5) -- (3,2) -- (1,1)`？可以放大一下两者生成的图片：

<Pic src="https://pic1.zhimg.com/80/v2-830343b2066a7c5fb123903f68deb8a4_720w.jpg"></Pic>

左边是`-- cycle`，右边是简单的“起点=终点”的路径。可以看到，前者闭合得更加优雅。

### 3、节点

一个节点是一个微型的TikZ图形。一般我们用它添加文字，也可以用它画一些小图形。节点是一个二维图形，它会按预先设置好的一个锚点来对齐设定的坐标。

```tex
\begin{circuitikz}[scale=0.7, transform shape]
    \draw[step=1,gray,very thin] (0,0) grid (5,5);
    \node at (2,2) {A};    %锚点默认在节点中央
\end{circuitikz}
```

<Pic src="https://pic1.zhimg.com/80/v2-5f0974bc97741caea660f48266439b48_720w.jpg"></Pic>

每个节点都自带四个锚点：`north`，`south`，`east`，`west`。如果我们在设置节点时，用`south`锚点锚定坐标`(2,2)`，那么节点的下端就会对齐`(2,2)`，这个节点就会出现在`(2,2)`上方。

```tex
\begin{circuitikz}[scale=0.7, transform shape]
    \draw[step=1,gray,very thin] (0,0) grid (5,5);
    \node[anchor=south] at (2,2) {A};
\end{circuitikz}
```

<Pic src="https://pic4.zhimg.com/80/v2-0b95a277a1b216bec907907723ce4593_720w.jpg"></Pic>

当然，`south`表示“上方”实在太反人类，所以有这样的简写方式：

`"above" == "anchor=south", "below" == "anchor=north",`  
`"left" == "anchor=east", "right" == "anchor=west"`

节点的一般声明方式是：

```tex
\node[options] (name) at <cord> {text};
```

除了用`\node`显式声明节点，还可以在路径定义中为涉及的坐标绑定一个节点：

```tex
\begin{circuitikz}[scale=0.7, transform shape]
    \draw[step=1,gray,very thin] (0,0) grid (5,5);
    \draw (1,1) node[below] {A} -- (4,5);
\end{circuitikz}
```

<Pic src="https://pic4.zhimg.com/80/v2-d084be0bfaa5e84f8d814676d9bf5c9f_720w.jpg"></Pic>

设置节点时，还可以为它指定名字，并把它作为一个坐标调用。

```tex
\begin{circuitikz}[scale=0.7, transform shape]
    \draw[step=1,gray,very thin] (0,0) grid (5,5);
    \draw (1,1) node[below] (a) {A} -- (4,5);
    \draw (a.north) -- ++(2,1);
\end{circuitikz}
```

<Pic src="https://pic3.zhimg.com/80/v2-aa67e07c05253cb4f4bb7b69901ca43e_720w.jpg"></Pic>

要注意的是，要用`(a.north)`而不只是`(a)`，因为后者所代表的坐标是在"A"的中央，而前者才是之前声明的`(1,1)`这个点。

利用节点，可以绘制一些我们并不清楚真实坐标的点。但是，如果用相对坐标，就需要我们同时知道横纵坐标的偏移量。如果我们只知道一个偏移量，而知道另一个的绝对坐标，又如何处理？此时需要使用tikz library `calc` 中的`let`语法：

```tex
\draw let \p<数字> = (节点) in ...
```

并在其后用`\x<数字>`和`\y<数字>`调用这个节点的横纵坐标。比如：

```tex
\begin{circuitikz}[scale=0.7, transform shape]
    \draw[step=1,gray,very thin] (0,0) grid (5,5);
    \draw (1,1) node[below] (a) {A} -- (4,5);
    \draw let \p1=(a.north) in (\x1,\y1) -- (4,\y1);
\end{circuitikz}
```

<Pic src="https://pic4.zhimg.com/80/v2-23ad627961a9cd6169424a334eac00cb_720w.jpg"></Pic>

## 三、CircuiTikZ中的元件

CircuiTikZ中有两类元件：“路径类”和“节点类”。基本所有的数字电路元件都属于节点式，所以只举一例路径类的绘制方法。

```tex
\begin{circuitikz}[scale=0.7, transform shape]
    \draw[step=1,gray,very thin] (0,0) grid (5,5);
    \draw (3,3) to[R] (1,3);      %从(3,3)到(1,3)的路径，内容是一个电阻
\end{circuitikz}
```

<Pic src="https://pic3.zhimg.com/80/v2-f8ec5f414b825712e3821b9d45493bbe_720w.jpg"></Pic>

所有的路径类元件都使用`to[]`连接。方括号中的参数除了指定元件（如电阻`R`和导线`short`），还可以指定末端的连接方式。下文中会出现一些例子。

对于节点，我们一般先声明节点本身，再从节点的各个锚点向外绘制。

```tex
\begin{circuitikz}[scale=0.7, transform shape]
    \draw[step=1,gray,very thin] (0,0) grid (5,5);
    \draw (3,3) node[and port] (and1) {};    %或者\node[and port] (and1) at (3,3) {};
\end{circuitikz}
```

<Pic src="https://pic3.zhimg.com/80/v2-a3a937560b9925bf95fc1d55e48defba_720w.jpg"></Pic>

还要注意，每个节点都需要有一个大括号围起的标签，哪怕是空的。接下来，就可以从各个锚点出发，绘制其他导线了。一个逻辑门有`out`和若干`in`锚点；比如下面的例子：

```tex
\begin{circuitikz}[scale=0.7, transform shape]
    \draw[step=1,gray,very thin] (0,0) grid (5,5);
    \draw (3,3) node[and port] (and1) {};
    \draw (and1.out) -- ++(1,0);
    \draw (and1.in 1) -| (1,5);
    \draw (and1.in 2) -| (1,1);
\end{circuitikz}
```

<Pic src="https://pic1.zhimg.com/80/v2-8a82a9dc23c7291c34462051ed1fbc70_720w.jpg"></Pic>

可以设置不止两个接口的逻辑门，只需添加选项`number inputs`，同时也可以通过`inner inputs`指定有多少个位于逻辑门内部：

```tex
\begin{circuitikz}[scale=0.7, transform shape]
    \draw[step=1,gray,very thin] (0,0) grid (5,5);
    \draw (3,3) node[and port, number inputs=10, inner inputs=2] (and1) {};
    \draw (and1.out) -- ++(1,0);
    \draw (and1.in 1) -| (1,5);
    \draw (and1.in 10) -| (1,1);
\end{circuitikz}
```

<Pic src="https://pic3.zhimg.com/80/v2-1b50151ad62b828cf19d9e2f9d14e59a_720w.jpg"></Pic>

对于表示否定的“小圆圈”，如果是输出端，那可以使用`nand`等表示否定的门；不然，就需要手动在接口处添加一个`notcirc`节点。注意，`in`，`out`等锚点在“针脚”的末端，如果要设置在起点，要在前面加`b`，变成`bin`，`bout`：

```tex
\begin{circuitikz}[scale=0.7, transform shape]
    \draw[step=1,gray,very thin] (0,0) grid (5,5);
    \draw (3,3) node[and port, number inputs=10, inner inputs=2] (and1) {};
    \draw (and1.out) -- ++(1,0);
    \draw (and1.in 1) -| (1,5);
    \draw (and1.in 10) -| (1,1);
    \draw (and1.bin 3) node[notcirc,left] {};
\end{circuitikz}
```

<Pic src="https://pic3.zhimg.com/80/v2-8c49959b59b198ff5d71b0cf59cd78da_720w.jpg"></Pic>

以下是所有常用逻辑门的节点名：

- 与门：`and port`；
- 或门：`or port`；
- 非门：`not port`；
- 异或门：`xor port`；
- 同或门：`xnor port`；
- 与非门：`nand port`；
- 或非门：`nor port`；
- 施密特电路：`schmitt port`；
- 反施密特电路：`inv schmitt port`；
- 缓冲门：`buffer port`

更多的关于电路绘制的技术细节可以见CircuiTikZ官方文档：

[CircuiTikZ文档](http://mirrors.sjtug.sjtu.edu.cn/ctan/graphics/pgf/contrib/circuitikz/doc/circuitikzmanual.pdf)
​
## 四、实例

以一位比较器为例：

<Pic src="https://pic3.zhimg.com/80/v2-a7a738c85eec18aa4977264e3b7c1e1e_720w.jpg"></Pic>

首先，确定各个门电路的位置。

```tex
\begin{circuitikz}[scale=0.7, transform shape]
    \draw (3,5.5) node[and port, anchor=out] (and1) {};
    \draw (3.5,4) node[xnor port, anchor=out] (xor1) {};
    \draw (3,2.5) node[and port, anchor=out] (and2) {};
\end{circuitikz}
```

<Pic src="https://pic3.zhimg.com/80/v2-00c157c7dffd242999b8b665bc1f29f6_720w.jpg"></Pic>

坐标是随意设的，只要符合审美即可。使用`anchor=out`也只是因为这样容易设置坐标。

接下来，要为两个与门添加圆圈。

```tex
\begin{circuitikz}[scale=0.7, transform shape]
    \draw (3,5.5) node[and port, anchor=out] (and1) {};
    \draw (3.5,4) node[xnor port, anchor=out] (xor1) {};
    \draw (3,2.5) node[and port, anchor=out] (and2) {};
    \draw (and1.bin 1) node[notcirc,left] {};
    \draw (and2.bin 1) node[notcirc,left] {};
\end{circuitikz}
```

<Pic src="https://pic4.zhimg.com/80/v2-f12d31231c521ed330be605b5587e88f_720w.jpg"></Pic>

然后是最繁琐的接线部分。可以先接连接两个与门的线：

```tex
\begin{circuitikz}[scale=0.7, transform shape]
    \draw (3,5.5) node[and port, anchor=out] (and1) {};
    \draw (3.5,4) node[xnor port, anchor=out] (xor1) {};
    \draw (3,2.5) node[and port, anchor=out] (and2) {};
    \draw (and1.bin 1) node[notcirc,left] {};
    \draw (and2.bin 1) node[notcirc,left] {};
    \draw (and2.in 1) |- (and1.in 2);
    \draw (and1.in 1) -- ++(-0.5,0) |- (and2.in 2);
\end{circuitikz}
```

<Pic src="https://pic2.zhimg.com/80/v2-c9a8f46aebf624a6356df4279e6472d5_720w.jpg"></Pic>

对于同或门向后的两根线，我们知道与它们横纵坐标相同的几个节点，但不知道它们的具体坐标，因此，我们将要使用`let`语法。

```tex
\begin{circuitikz}[scale=0.7, transform shape]
    \draw (3,5.5) node[and port, anchor=out] (and1) {};
    \draw (3.5,4) node[xnor port, anchor=out] (xor1) {};
    \draw (3,2.5) node[and port, anchor=out] (and2) {};
    \draw (and1.bin 1) node[notcirc,left] {};
    \draw (and2.bin 1) node[notcirc,left] {};
    \draw (and2.in 1) |- (and1.in 2);
    \draw (and1.in 1) -- ++(-0.5,0) |- (and2.in 2);
    \draw let \p1=(xor1.in 1),\p2=(and1.in 1) in (\x1,\y1) to[short,-*] (\x2,\y1) node (a) {};
    \draw let \p1=(xor1.in 2),\p2=(and2.in 1) in (\x1,\y1) to[short,-*] ({\x2-0.5cm},\y1) node (b) {};
\end{circuitikz}
```

<Pic src="https://pic1.zhimg.com/80/v2-cd12fd05fd9a277b53527029f7e9fa7c_720w.jpg"></Pic>

其中还用了一个小语法：在大括号之间的内容会被TikZ的数学引擎计算。所以`{\x2-0.5cm}`有类似`(\x2,\y2)+(-0.5,0)`的效果。`to`中包含的`-*`选项会在线路末端生成一个小黑圆表示连接点。这是CircuiTikZ提供的连接方式，而不是TikZ的，所以只有在用`to`时才能使用，如果用`--`则不行。

最后，延长导线，添加输入输出标签。对于文字标签，有一个注意：由于在最前面设置了`scale=0.7`，会导致文字偏小；所以我们要手动再把文字比例调回来。（这是CircuiTikZ中一个不合理的地方，TikZ的缩放不影响文字） 调整方法是再为文字节点添加`scale={1/0.7}`。

```tex
\begin{circuitikz}[scale=0.7, transform shape]
    \draw (3,5.5) node[and port, anchor=out] (and1) {};
    \draw (3.5,4) node[xnor port, anchor=out] (xor1) {};
    \draw (3,2.5) node[and port, anchor=out] (and2) {};
    \draw (and1.bin 1) node[notcirc,left] {};
    \draw (and2.bin 1) node[notcirc,left] {};
    \draw (and2.in 1) |- (and1.in 2);
    \draw (and1.in 1) -- ++(-0.5,0) |- (and2.in 2);
    \draw let \p1=(xor1.in 1),\p2=(and1.in 1) in (\x1,\y1) to[short,-*] (\x2,\y1) node (a) {};
    \draw let \p1=(xor1.in 2),\p2=(and2.in 1) in (\x1,\y1) to[short,-*] ({\x2-0.5cm},\y1) node (b) {};
    \draw let \p1=(a) in (\x1,\y1) -- (-1,\y1) node[left,scale={1/0.7}] {$A$};
    \draw let \p1=(b) in (\x1,\y1) -- (-1,\y1) node[left,scale={1/0.7}] {$B$};
    \draw let \p1=(and1.out) in (\x1,\y1) -- (4,\y1) node[right,scale={1/0.7}] {$Y_{A>B}$};
    \draw let \p1=(xor1.out) in (\x1,\y1) -- (4,\y1) node[right,scale={1/0.7}] {$Y_{A=B}$};
    \draw let \p1=(and2.out) in (\x1,\y1) -- (4,\y1) node[right,scale={1/0.7}] {$Y_{A<B}$};
\end{circuitikz}
```

<Pic src="https://pic4.zhimg.com/80/v2-331d8d5891bfcc838d549d5fd0f574bb_720w.jpg"></Pic>

就这样，我们完成了此图的绘制。
