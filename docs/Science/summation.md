---
id: summation
title: 把求和符号用出花来
sidebar_label: Fancy summation uses
---

> First published on Nov 3, 2020
>
> Link: https://mp.weixin.qq.com/s/tB2EaRngiu3p5Z4p9gJplA

这是人人都会的求和符号用法，高一便学过的用于数列求和的表达方法：

$$\begin{aligned}
\sum_{i=m}^na_i=a_m+a_{m+1}+\dots+a_n
\end{aligned}$$

但有时候这么写并不方便。比如如果我们需要遍历一个无序的集合：

> $S$ 为所有小于100的质数的集合。求 $S$ 的元素之和。

除了把 $S$ 强行规定成一个数列，还可以用这种方法写求和：

$$\begin{aligned}
\sum_{x\in S}x=x_1+x_2+\dots+x_n,S=\{x_1,x_2,\dots,x_n\}
\end{aligned}$$

集合下标可以是一个判断式（如属于、不等式、等式），只要一个元素符合该判断式，则会被计入求和。

比如求一个多项式所有根的和：

$$\begin{aligned}
\sum_{p(x)=0}x
\end{aligned}$$

求 $n$ 所有因数的和：

$$\begin{aligned}
\sum_{k\mathrel{|}n}k
\end{aligned}$$

我们也可以用不等式的方法求和。比如经典的 Sigma 用法就可以等价为一个不等式：

$$\begin{aligned}
\sum_{i=m}^nf(i)=\sum_{m\le i\le n}f(i)
\end{aligned}$$

不等式中一般默认循环变量（$i$, $j$, $k$等）为整数，不过也可以特别说明。

用不等式做循环的好处是可以添加多个变量，比如：

$$\begin{aligned}
\sum_{1\le i,j\le n}f(i,j)&=f(1,1)+f(1,2)+\dots+f(1,n)+f(2,1)+f(2,2)+\dots+f(2,n)+\dots+f(n,1)+f(n,2)+\dots+f(n,n)\\
&=\sum_{i=1}^n\sum_{j=1}^nf(i,j)
\end{aligned}$$

如果两个变量的遍历规则是互相独立的，则可以把它们拆分成两次求和——比如下面的求和，$i$, $j$, $k$ 就是互相依赖的：

$$\begin{aligned}
\sum_{1\le i< j\le n\atop 0< k< 2j>}f(i,j,k)
\end{aligned}$$

它等效于这样的代码：

```c
for (int i = 1; i <= n; i++) {
  for (int j = i + 1; j <= n; j++) {
    for (int k = 1; k < 2 * j; k++) {
      sum += f(i, j, k);
    }
  }
}
```

那么如果想解出一个通项或值，就需要把三个变量分离。这往往借助于对 $f(i,j,k)$ 做一些变形，这是竞赛中常用的手段，因为我们并不擅长在求和时同时循环两个变量。

除此以外，还有特殊的求和方法，比如轮换求和：

$$\begin{aligned}
\sum_{\text{cyc}}f(a_1,a_2,\dots,a_n)=f(a_1,a_2,\dots,a_n)+f(a_2,a_3,\dots,a_n,a_1)+\dots+f(a_n,a_1,a_2,\dots,a_{n-1})
\end{aligned}$$

穷举所有对 $a_1$, $a_2$, ..., $a_n$ 的轮换（每次把第一个元素放到最后去），然后算出它们对应的 $f$ 的和。一共有 $n$ 个这样的项。

也可以把需要轮换的变量写在下标中：

$$\begin{aligned}
\sum_{a_1,a_2,a_3}f(a_1,a_2,a_3,a_4)=f(a_1,a_2,a_3,a_4)+f(a_2,a_3,a_1,a_4)+f(a_3,a_1,a_2,a_4)
\end{aligned}$$

对称求和：

$$\begin{aligned}
\sum_{\text{sym}}f(a_1,a_2,\dots,a_n)
\end{aligned}$$

穷举所有 $a_1$, $a_2$, $\dots$, $a_n$ 的排列，然后算出它们对应的 $f$ 的和。一共会有 $n!$ 个这样的项，因此一般只讨论两个或三个变量的对称和。

用轮换、对称求和可以非常方便地表示出一些轮换式，比如：

$$\begin{aligned}
(i+j+k)^3=\sum_{i,j,k}i^3+3\sum_{\text{sym}\atop i,j,k}i^2j+6ijk
\end{aligned}$$

有时候也会在不引发歧义的情况下把下标 $i$, $j$, $k$ 省去。

附上一个花式使用求和符号的对拉格朗日恒等式的证明，也就是柯西不等式的加强形式：

$$\begin{aligned}
\sum_{i=1}^na_i^2\sum_{i=1}^nb_i^2-\left(\sum_{i=1}^na_ib_i\right)^2=\sum_{1\le i< j\le n}(a_ib_j-a_jb_i)^2\\
\begin{aligned}
\text{LHS}&=\sum_{1\le i,j\le n}a_i^2b_j^2-\sum_{i=1}^na_i^2b_i^2-\sum_{1\le i< j\le n}2a_ib_ia_jb_j\\
&=\sum_{1\le i\neq j\le n}a_i^2b_j^2-\sum_{1\le i< j\le n}2a_ib_ia_jb_j\\
&=\sum_{1\le i< j\le n}(a_i^2b_j^2+a_j^2b_i^2-2a_ib_ia_jb_j)=\text{RHS}
\end{aligned}
\end{aligned}$$
