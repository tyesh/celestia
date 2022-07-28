# Hints & tips

This sections contains useful tips given by Meuss in the chaper 1 of Astrononical Algorithms. Some of then may be obselete, like precision. In the future this cases can be tested to see the changes in the calculation with modern resources and hardware.

## Trigonometric functions of large angles

It may be necessary to reuce angles to a interval 0-360, because some program languages give incorrect values for then trigonometric functions of large angles. Sine of 36000030 degrees should by 0.5 for example.

## Angle modes

Before perfoming trigonometric functions, angles should by converted to degrees and decimals. Thus, to calculate the cosine of 23º26'49", first convert to 23.44694444 degress, and then use COS function.

There is the added complication that most programming languages can calculate only in radians, not in degrees. To convert and angle for degrees to radians, multiply it by pi/180.

## Right ascensions

Right ascensions are generally expressed in hours, minutes and seconds of time. To calculate the trigonometric function of a right ascension, it is necessary to convert that value to degrees (and radians, if needed).
Remember that one hour corresponds to 15 degrees.

Example: Tan(a), where α = 9h14m55s.8
We first convert α to hours and decimals:
9h14m55s.8 = 9 + 14/60 + 55.8/3600 = 9.248833333 hours
Then multiplying by 15, we obtain α = 138º.7320.
Multipliying by pi/180 = 0.0174532925... gives α in radians. We then find tan α = -0.877517.

## The correct cuadrant

When then sine, cosine or the tangent of an angle is know, the angle itself can be obtained by using the "inverse" function arcsinem, arccosine or arctang.

The inverse trigonometric functions are not single valued. For instance, if sin α = 0.5, then α = 30º, 150º, 390º, etc. For these reaons, programing languages return inverse trigonometric functions over only half the range of 0 to 360. Arcsine and arcttang give and angle liying between -90 and +90 degrees, and arcsine give a value between -90 and +90.

Hence, whenever the inverse of a function is taken, and amibiguity arise wich has to be cleared up by one or others mean when is necesary. Each problem must be examined separately.

## The inpuit of nehative angles

Angles expressed in degrees, minutes and seconds can be input as three different numbers. For instance, the angle 21º44'77" can be entered as 21, 44, 7.

In such a case, care must be taken for negativc angles. If the angle is, for example -13º47'22", then this means -13 and -47 and -22. All three numbers have the same sign.

## Powers of time

Some quantities are calculated by means of a formula containing powers if the time (T. T², T³, ...). It is important to note thay such polynomial expressions are valid pnñy for values of T are not too large. For instance, the formula:

e = 0.04638122 - 0.0000272937T + 0.0000000789T²

This gives the eccentricity e of the orbit of Uranus, T is the time measured in Julian centuries (36525 days) from the beginnig of the year 2000. It is evident that this formula is valid only a limited number of centuries before and after A.D. 2000. For instance for T liying between -30 and +30. For |T| much larger than 30, the above expression is not longer valid. For T = -3307.9 the formula would give e = -1, This will indicate that in the year -328790 the orbit of Uranus was a parabolic and hence that this planet originate fro outside our solar system.

# About Accuracy

## The accuracy needed for a given problem

The accuracy needed in a calculation depends of its aim. For example
