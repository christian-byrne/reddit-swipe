# Chapter 7 

<!-- TOC -->

- [Chapter 7](#chapter-7)
    - [Integration by Substitution](#integration-by-substitution)
        - [When it is Applicable](#when-it-is-applicable)
        - [Formal Proof](#formal-proof)
    - [Integration by Parts](#integration-by-parts)
        - [General Formula](#general-formula)
            - [Proof](#proof)
            - [Use Case](#use-case)
        - [How to Choose u and v](#how-to-choose-u-and-v)
        - [Uses and Strategies](#uses-and-strategies)
            - [Integrating by Parts Twice to Solve](#integrating-by-parts-twice-to-solve)
            - [Simplifying with Integration by Parts, then Using another Method](#simplifying-with-integration-by-parts-then-using-another-method)
            - [Applying to Single-Term Log](#applying-to-single-term-log)
        - [With Riemmen Sums](#with-riemmen-sums)
        - [Example Problems](#example-problems)
            - [Example with lnx](#example-with-lnx)
            - [Example with e^2x * sin3x](#example-with-e%5E2x--sin3x)
    - [Definite Integral using Riemann Sums](#definite-integral-using-riemann-sums)
    - [Tables of Integrals](#tables-of-integrals)
        - [Table Sections](#table-sections)
            - [Part I](#part-i)
            - [Part II](#part-ii)
            - [Part III](#part-iii)
            - [Part VI](#part-vi)
            - [Part V and VI](#part-v-and-vi)
        - [Transforming to Fit the Form](#transforming-to-fit-the-form)
            - [Factoring](#factoring)
            - [Long Division](#long-division)
                - [Polynomial Long Division Process](#polynomial-long-division-process)
                - [Synthetic Division Process](#synthetic-division-process)
            - [Completing the Square](#completing-the-square)
            - [Substitution](#substitution)
    - [Algebraic Identities and Trigonometric Substitutions](#algebraic-identities-and-trigonometric-substitutions)
        - [Elementary Antiderivatives Definition](#elementary-antiderivatives-definition)
        - [Functions without Elementary Antiderivatives](#functions-without-elementary-antiderivatives)
            - [Non-Elementary Functions List](#non-elementary-functions-list)
    - [Method of Partial Fractions](#method-of-partial-fractions)
        - [Rules](#rules)
    - [Trigonometric Substitutions](#trigonometric-substitutions)
        - [Sine Substitutions](#sine-substitutions)
            - [Fitting the Form](#fitting-the-form)
            - [Ellipse Example](#ellipse-example)
        - [Tangent Substitutions](#tangent-substitutions)
            - [Fitting the Form](#fitting-the-form)
        - [Completing the Square to Use a Trigonometric Substitution](#completing-the-square-to-use-a-trigonometric-substitution)
    - [Numerical Methods for Definite Integrals](#numerical-methods-for-definite-integrals)
        - [Riemann Sums](#riemann-sums)
            - [Left vs Right Hand Sums](#left-vs-right-hand-sums)
            - [Trapezoid Rule](#trapezoid-rule)
            - [Over or Under Estimates Rules and Relationships](#over-or-under-estimates-rules-and-relationships)
            - [Signs of Functions](#signs-of-functions)
                - [Negative Functions](#negative-functions)
                - [Mixed Functions](#mixed-functions)
        - [Error](#error)
            - [Simpsons Rule](#simpsons-rule)
        - [Approximating by Lines and Parabolas](#approximating-by-lines-and-parabolas)
    - [](#)

<!-- /TOC -->

## Integration by Substitution


### When it is Applicable
- outer function looks like u' (u prime)


### Formal Proof

![formal proof](sub-formal.jpg)

![annotated proof](sub-annotated.png)


## Integration by Parts

**Substitution** = Reversing Chain Rule

**By Parts** = Reversing Product Rule


### General Formula


![general-formula.png](./info-pics/general-formula.png)

#### Proof


![integration-by-parts-formula.png](./info-pics/integration-by-parts-formula.png)


![rewrite-formula.png](./info-pics/rewrite-formula.png)

#### Use Case

![use-case.png](./info-pics/use-case.png)

### How to Choose `u` and `v`

![choose-u-v.png](./info-pics/choose-u-v.png)

### Uses and Strategies

#### Integrating by Parts Twice to Solve


![repeat-1.png](./info-pics/repeat-1.png)


![repeat-2.png](./info-pics/repeat-2.png)

#### Simplifying with Integration by Parts, then Using another Method

![simplify-first.png](./info-pics/simplify-first.png)

#### Applying to Single-Term Log

![example-with-x6.png](./info-pics/example-with-x6.png)

### With Riemmen Sums

![riemmen-by-parts.png](./info-pics/riemmen-by-parts.png)


### Example Problems

#### Example with `ln(x)`

![example-with-ln.png](./info-pics/example-with-ln.png)



#### Example with `e^2x * sin(3x)`

![example-e2x.png](./info-pics/example-e2x.png)

![example-e2x2.png](./info-pics/example-e2x2.png)



## Definite Integral using Riemann Sums


![riemann-definittttttttttttion.png](./info-pics/riemann-definittttttttttttion.png)



![rieman-dd.png](./info-pics/rieman-dd.png)

![rieman-ddd.png](./info-pics/rieman-ddd.png)





![rieman-dddddddddd.png](./info-pics/rieman-dddddddddd.png)


![summation.png](./info-pics/summation.png)


![summ.png](./info-pics/summ.png)

-----------


## Tables of Integrals


### Table Sections

#### Part I

- Antiderivatives of basic functions x^n, a^x, ln x, sin x, cos x, and tan x.

![table-1.png](./info-pics/table-1.png)



---------------

#### Part II

- Antierivatives of functinos involving products of e^x, sin x, and cos x. 
- All obtained using integration by parts


![table-2.png](./info-pics/table-2.png)

--------------------

#### Part III

- Antiderivatives for products of a polynomial and e^x, sin x, or cos x. 
- Antierivative for x^n ln x, which can be used to find the antierivatives of the product of a general polynomial and ln x
- Each *Reductino Formula* is used repeatedly to reduce the degree of the polynomail

![table-3.png](./info-pics/table-3.png)

`Example`

![table-3-example.png](./info-pics/table-3-example.png)


-------------------

#### Part VI

- Antiderivatives of cos^n x and sin^n x
  - Obtained by integration by parts
- When n is a positive integer, formulas 17 and 18 can be used repeatedly to reduce the power n until it is 0 or 1.

![table-4.png](./info-pics/table-4.png)

![table-4-example.png](./info-pics/table-4-example.png)



--------------------


#### Part V and VI

- Quadratic denominators in Part V 
- Square roots of quadratics in Part VI
- The quadratics that appear in these formulas are of the form x2 ±a2 or a2 −x2, or in factored form (x−a)(x−b), where a and b are different constants. Quadratics can be converted to these forms by factoring or completing the square.


![table-5.png](./info-pics/table-5.png)

------------------


### Transforming to Fit the Form

- Factoring
- Long Divison
  - numerator >= denom (degree)
- Completing the Square
  - lone quadratics
- Substitution


#### Factoring

- For a factored form, can set w so that it gets form of (x-a)(x+a) which transforms to x^2 - a^2
  - For example: (x+4)(x+6); w = (x+5) -> (w-1)(w+1) = w^2 - 1^2
- If you get the form (x + a)(x + b) but need (x- a)(x - b), just make a and b the opposite of their current values

#### Long Division

- A rational function whose numerator has a degree >= denominator -> start with long division
  - Results in a polynomial plus a simpler rational function as a remainder

##### Polynomial Long Division Process
![long division 2](./info-pics/polynomial-long-division2.png)

##### Synthetic Division Process
![long divsion](./info-pics/polynomail-long-divsion.jpg)


#### Completing the Square

- Subtract c from both sides, add (b/2)^2 to both sides, factor perfect square on left, then recombine right term after summing
- Then substitute `w` for the perfect square `(a + b)^2` (the left term before recombining)


#### Substitution

![table substitution](./info-pics/table-substitution.png)






------------


## Algebraic Identities and Trigonometric Substitutions


### Elementary Antiderivatives Definition

An elementary function is a real function built from basic building blocks: constants, sums, differences, roots, quotients, powers, exponential functions, logarithmic functions, polynomial functions, trigonometric functions and inverse trigonometric functions.
Elementary functions are those familiar functions commonly used throughout algebra and calculus, and in most scientific and economic applications. Whether or not a function is “elementary” is usually arrived at by consensus, so now and then you may come across a function that is described as “elementary” by an author, but it might not be universally agreed upon.

### Functions without Elementary Antiderivatives

In calculus, every single-variable function composed of elementary functions has a derivative, but not every such function can be integrated exactly over any arbitrary integral, i.e., you cannot express the antiderivative in terms of elementary functions to find the exact integral for any interval. Exact integrals forms are also called closed-form expressions.

Elementary functions include polynomials, rational functions, radical expressions, exponential functions, logarithms, trig functions, and inverse trig functions. For example, consider the complicated function

`f(x) = [Ln(x)*e^sqrt(x)]/[Ln(1 +e^x) + x^3]`

The derivative of f(x) can be found by applying the product, quotient, and chain rules for differentiation. The expression for f'(x) is shown in the image below. As you can see it is rather complicated, but nevertheless it can be expressed in terms of elementary functions.

However, the antiderivative of f(x) cannot be expressed in this way. This is an example of a function that cannot be integrated in the usual way; it has no closed form expression in terms of elementary functions. To find the integral of this function over the interval x = 9 to x = 4π you have to use numerical methods such as Reimann sums or approximate antiderivatives. Graphing calculators use Reimann sums. Taylor series and asymptotic series for functions can be manipulated to produce approximate antiderivatives.

There are infinitely many functions without antiderivatives in terms of elementary functions. If you are able to recognize them by sight, it can save you a lot of grief when solving challenging integral calculus problems. The following is not an exhaustive list, but covers many of the simplest examples of non-integrable functions that you may encounter in Calc II.



#### Non-Elementary Functions List

<details>
    <summary>Click to Expand</summary>

**Exponential Functions**
Here is a list of basic exponential forms that have no antiderivatives

e^(x^2) and e^(-x^2)
e^(x^3) and e^(-x^3)
More generally, e^(x^n) and e^(-x^n) are non-integrable for all integers n greater than 1.
e^(1/x) and e^(-1/x) (See link for approximate integration technique.)
e^(1/x^2) and e^(-1/x^2)
More generally, e^(1/x^n) and e^(-1/x^n) are non integrable for all positive integers n.
Here are other more complicated examples exponential functions that cannot be integrated. In general, the more complicated f(x) is, the less likely e^f(x) is integrable.

e^(e^x), e^(-e^x), and e^(e^-x) (See link for approximate integral with series.)
(e^x)/x
(e^x)/x^2
More generally, any function of the form (e^x)/p(x), where p(x) is a polynomial, cannot be integrated.
x/(1 + e^x)
x/(x + e^x)
1/(x + e^x)
More generally, any function of the form [p(x) + e^x]/[q(x) + e^x], where p(x) and q(x) are polynomials, cannot be integrated, except in the rare case when p(x) is the derivative of q(x). In that case, use the substitution u = q(x) + e^x.
e^[p(x)/q(x)]
Ln(x)*e^x
(e^x)/Ln(x)
Ln(x)/e^x
e^sqrt(Ln(x))
e^sin(x), e^cos(x), and e^tan(x)
e^arcsin(Ln(x)), e^arccos(Ln(x))
e^arctan(x)


**Radical Functions**

The square roots, cube roots, fourth roots, etc. of certain functions often have antiderivatives that cannot be expressed in terms of elementary functions. The most notable belong to the family of functions known as Lamé curves:

L(x) = (1 ± x^m)^(1/n)

where m and n are numbers greater than 1. The notable exception is m = n = 2, which produces a circle, a curve that is integrable. Non-integrable examples in this family include

(1 - x^3)^(1/3)
(1 - x^4)^(1/2)
(1 + x^2)^(1/4)
Other radical expressions that are not integrable are

sqrt(1 ± Ln(x)) = (1 ± Ln(x))^(1/2)
sqrt(x ± Ln(x))
sqrt(x ± e^x)
sqrt(p(x)), where p(x) is a polynomial of degree greater than 2.
More generally, p(x)^(1/n) is not integrable for any integer n greater than 2 and any polynomial with a degree greater than 2, except in some cases where p(x) is a perfect power or the radical can be reduced to a simpler form.
any function of the form 1/(1 ± x^m)^(1/n) = (1 ± x^m)^(-1/n) where m and n are greater than 1, except the case where m = n = 2.
sqrt(cos(x))
sqrt(sin(x))
sqrt(a ± sin(x)), except when a = 1
sqrt(a ± cos(x)), except when a = 1
sqrt(x)e^x = (x^(1/2))e^x
More generally, the function (x^c)e^x is not integrable unless c is a non-negative integer.
sqrt(x)*sin(x)
sqrt(x)*cos(x)
More generally, any function of the form (x^b)sin(x) or (x^b)cos(x) is non-integrable unless b is a non-negative integer.


**Logarithm Functions**
Although functions of the form q(x)*Ln(p(x)) -- where p(x) and q(x) are polynomials -- are integrable, most other compositions of log functions are not. Some of the most basic non-integrable forms are

Ln(1 ± e^x) (See link for approximate integral with series.)
Ln(p(x) ± e^x), where p(x) is any polynomial
Ln(sin(x))
Ln(cos(x))
Ln(tan(x))
1/Ln(x)
1/[Ln(x) + x]
Ln(Ln(x))
x/Ln(x)
More generally if p(x) is a polynomial, then p(x)/Ln(x) is non-integrable.
(e^x)/Ln(x)
Ln(x)*e^x
x*Ln(x)*e^x
Ln(x)/(x ± 1)
More generally, any function of the form Ln(x)/p(x) is non-integrable unless p(x) is a pure power function x^n.
Functions of the form Ln(p(x))*Ln(q(x)) are non-integrable, unless p(x) and q(x) are pure powers of the same linear function. For example, p(x) = (2x-5)^3 and q(x) = (2x-5)^7.
Functions of the form Ln(p(x))/Ln(q(x)) are non-integrable except in the trivial case when p(x) and q(x) are pure powers of the same polynomial. For example, p(x) = (x^2 + 3)^2 and q(x) = (x^2 + 3)^9.
If a function with logarithm base-e (natural logarithm) "Ln" is not integrable in the usual way, then replacing it with a logarithm of a different base won't change that fact.
Curious exceptions: Although the functions g(x) = Ln(x)*e^x and h(x) = x*Ln(x)*e^x are both non-integrable in the usual way, their sum

g(x) + h(x) = (x+1)*Ln(x)*e^x

does in fact have an antiderivative:

∫ (x+1)*Ln(x)*e^x dx = [x*Ln(x) - 1]e^x + c

This illustrates that the sum (or difference, product, or quotient) of two functions without elementary antiderivatives may yet have a surprisingly simple antiderivative.



**Trig Functions**
Trigonometric functions have many of the same properties of exponential functions because they can be defined in terms of e^x extended to complex numbers. The identities are

sin(x) = [e^(ix) - e^(-ix)] / [2i]
cos(x) = [e^(ix) + e^(-ix)] / 2
tan(x) = -i*[e^(ix) - e^(-ix)] / [e^(ix) + e^(-ix)]

Forms of exponential functions that are non-integrable are similar to forms of trig functions that are non-integrable. Some basic examples include

sin(x^2), cos(x^2), and tan(x^2)
tan(sqrt(x))
sin(1/x), cos(1/x), and tan(1/x)
More generally, sin(x^d), cos(x^d) and tan(x^d) are non-integrable unless d is the reciprocal of a positive integer (or trivially, d = 0).
sin(x)/x, cos(x)/x, and tan(x)/x (See link for approximate integral.)
1/(sin(x) + x), 1/(cos(x) + x), and 1/(tan(x) + x)
x*tan(x)
More generally, the function (x^p)*tan(x) is non-integrable except in the trivial case where p = 0.
sqrt(sin(x)) and sqrt(cos(x)) (See link for approximate integral.)
sin(sin(x)), cos(cos(x)), tan(tan(x))
sin(cos(x)), cos(sin(x), tan(sin(x)), tan(cos(x)), sin(tan(x)), and cos(tan(x))
sin(e^x), cos(e^x), and tan(e^x)
x/sin(x), x/cos(x), and x/tan(x)


**Trig Functions**
Just as trig functions are related to exponential functions, so are inverse trig functions related to logarithmic functions. This means many non-integrable inverse trig functions are similar to logarithmic functions that have no antiderivatives. Some examples of non-integrable inverse trig functions include

1/arcsin(x), 1/arccos(x), and 1/arctan(x)
arcsin(x^2) and arccos(x^2)
arcsin(x)/x, arccos(x)/x, and arctan(x)/x
x/arcsin(x), x/arccos(x), and x/arctan(x)
arcsin(e^x), arccos(e^x), and arctan(e^x)
arcsin(Ln(x)), arccos(Ln(x)), and arctan(Ln(x))


**Notable Exceptions with Definite Integrals**
Although some functions cannot be integrated with elementary antiderivatives, many of them can be evaluated in terms of well-known mathematical constants for certain definite integrals. Perhaps the most famous example is the integral

∫ e^(-x^2) dx

evaluated from x = -infinity to x = infinity, which is equal to exactly sqrt(π). This was proven by Gauss using a clever change of variables for the three-dimensional version of the function. Here are some more definite integrals that have surprising definite integrals.

∫ Ln(x)*Ln(1-x) dx, [0, 1] = (12 - π^2)/6 (shown in graph below)

∫ Ln(x)*e^(-x) dx, [0, ∞) = -γ, where γ is the Euler-Mascheroni constant.

∫ sqrt(x)*e^(-x) dx, [0, ∞) = sqrt(π)/2

∫ Ln(1 + e^(-x)) dx, [0, ∞) = (π^2)/12

</details>


## Method of Partial Fractions

![partial-1.png](./info-pics/partial-1.png)

- After multiplying through, you get a polynomial. For this arbitrary equation to hold for all `x`, the shape of the polynomial must be true for all x
  - Therefore, the coefficients must relate to the paramters in such a way thtat the value will always be equivalent to the original denominator
- In the above problem, the polynomial `A(x-1)(x+3) + B(x+3) + C(x-1)^` must always be equal to `10x-2x^2`
  - To asseert this, the coefficients of the terms with the same power must be equal
    - Therefore, `A + C` = -2 (2 power term), and so on.

### Rules

![partial-rules.png](./info-pics/partial-rules.png)

- We can integrate terms of the form `A/(x-c)^n` using the power rule (if n > 1) and logarithms (if n = 1).

## Trigonometric Substitutions

- Substitution of `sin theta` or `tan theta` can be used for integrands invovling square roots of qaudratics of unfactorable quadratics

### Sine Substitutions

![partial-rules.png](./info-pics/partial-rules.png)

#### Fitting the Form

![partial-rules-fit.png](./info-pics/partial-rules-fit.png)


#### Ellipse Example

![partial-ellipse-example.png](./info-pics/partial-ellipse-example.png)

![partial-ellipse-example-2.png](./info-pics/partial-ellipse-example-2.png)


### Tangent Substitutions

- Integrals involving `a^2 + x^2` may be simplified by a substitution involving `tan theta` and the trigonometric identities tan `theta` = sin `theta` / cos `theta` and cos^2 theta + sin^2 theta = 1.

![partial-example-3.png](./info-pics/partial-example-3.png)



#### Fitting the Form

![partial-rule-fit-2.png](./info-pics/partial-rule-fit-2.png)

### Completing the Square to Use a Trigonometric Substitution

![complete-square-trig-sub.png](./info-pics/complete-square-trig-sub.png)

![complete-square-trig-sub-2.png](./info-pics/complete-square-trig-sub-2.png)






--------------





## Numerical Methods for Definite Integrals

***7.5***

- Many functions do not have elementary antiderivatives
- To evaluate the definite integrals of such functions, we cannot use the FTC
  - We must use numerical methods instead


### Riemann Sums

See: [Riemann Sum Grapher and Explanation - WolframMathWorld](https://mathworld.wolfram.com/RiemannSum.html)

See: [Riemann Sum Calculator for Mid/Trap/Right/Left](https://www.emathhelp.net/calculators/calculus-2/riemann-sum-calculator/?f=%282+-+x%5E2%29%5E%281%2F2%29&a=0&b=1&n=5&type=mid)

#### Left vs Right Hand Sums


`Δx` = (b-a)/b

Left: `Δx * f(x0) + f(xn-1)`

Right: `Δx * f(x1) + f(xn)`

Sum the values, then multiply by Δx to get the sum.

#### Trapezoid Rule


- While the midpoint rule uses the midpoint between each sub-interval, the trapezoid just averages the left and right results
  - `TRAP(n) = (LEFT(n) + RIGHT(n)) / 2`

![trapezoid-1.png](./info-pics/trapezoid-1.png)



> The trapzeoid rule averages the value of *f* at the left and right endpoints of each subinterval and multiplies by Δx. This is the same as approsximating the area under the graph of *f* in each subinterval by a trapezoid



#### Over or Under Estimates Rules and Relationships

How to Use Rules:
- *f* negative AND integral is `a -> b` where `a` < `b`
  - reverse each of the below rules 
  - because values of sums will be negative
- right is always opposite of left
- midpoints is always opposite of trapezoid
- Left and Right will always be more of an over or under estimate than midpoint and trapezoid
  - TODO
Rules:
- *f* increasing
  - right = over
- *f* decreasing
  - right = under
- *f* concave down (looks like an `n` - `n` is in word "down")
  - trapezoial = under
- *f* concave up (looks up a `u`, `u` is in word "up")
  - trapezoidal = over



#### Signs of Functions

##### Negative Functions
- To get the area under the curve value, swap the lower and upper bound (turn negative to positive)
  - In this case, the overestimate/underestimate rule still applies
  - If bounds are not swapped `Integrate[f(x), {x, a, b}] where a < b`, then the left-hand rule becomes the over-estimate and right-hand rule becomes under-estaimte, because the result will always be a negative value

##### Mixed Functions
- If the function takes on both positive and negative values, then the Riemann sum is the sum of the areas of the rectangles that lie above the x-axis and the negative of the areas of the recatangles that lie blow the x-axis
  - I.e., the areas of the rectangles where *f* is positive minus the areas of the rectangles where *f* is negative


### Error

`Error = Actual Value - Approximate Value`

- The error in both the left and right rules decreases by afactor of about 5 as n increases by a factor of 5
  - 10 times work for every digit
- The error for the midpoint rule, in absolute value, seems to be about half the error of the trapezoid rule
- The error in trapezoid and midpoint decreases by a factor of about 25 as n increases by a factor of 5.
  - This squaring relationship holds for any factor
  - 10 times work for every 2 digits

#### Simpsons Rule

- As n increases by a factor of 5, the errors decrease by a factor of about 600, or 5^4
  - This behavior holds for any factor
- In Simpson's rule, each extra 4 digits of accuracy requires about 10 times the work
![simpsons-rule.png](./info-pics/simpsons-rule.png)


### Approximating by Lines and Parabolas 

***Alternate Appraoch to Numerical Integration***

These rules for numerical integration can be obtained by approximating `f(x)` on subintervals by a function:
 - The left and right rules use constant functions
 - The trapezoid and midpoint rules use linear functions
 - Simpson's rule use quadratic functions






--------------------








## Improper Integrals

**7.6**