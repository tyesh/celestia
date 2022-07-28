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

This gives the eccentricity e of the orbit of Uranus, T is the time measured in Julian centuries (36525 days) from the beginnig of the year 2000. It is evident that this formula is valid only a limited number of centuries before and after A.D. 2000. For instance for T liying between -30 and +30. For |T| much larger than 30, the above expression is not longer valid. For T = -3307.9 the formula would give e = -1, This will indicate that in the year -328790 the orbit of Uranus was a parabolic and hence that this planet originate for outside our solar system.

# About Accuracy

## The accuracy needed for a given problem

The accuracy needed in a calculation depends of its aim. For example, if one wants to calculate the position of a planet with the goal of obtaining the times of rising and setting for a given place, an accuracy of 0.001 or even 0.01 degree wil be suficient. The apparaent diurnal mition of the celestial sphere corresponds to a rotation over one degree during a time interval of for minutes, and so an error of 0.01 degree in the object's position will result in a error of only 0.04 minute (approximately) in its time of rising or setting.

But if the position of the planet is neededto calculate the ocultation of a star by that planet, them a accuracy of better that 1" will be necessary by the reason of the small planet's disk.

The programmer, who know his formulae and the desired accuracy in a given problem, must himselft consider wich terms, if any, may be omitted in order to keep the program handsome and as short as possible. For instance, the mean geometric longitude of the sun, referred to the mean equinox of the date, is given by

_L_ = 280º27'59",245 + 129602771".380*T* + 1".0915T*T*²

where _T_ is the time in Julian centuries of 36525 ephemeris days from the epoch 2000 January 1.5 TD, In this expression, the last term (secular acceleration of the Sun) is smaller that 1" if |_T_| < 0.95, that is, between the years 1905 and 2095. If an accuracy of 1" is suficient, tthe term in *T*² may thus be dropped- But for the year +100 we have _T_ = -19, so that the last term become 394", wich is larger that 0.1 degree.

## Rounding the final result

Results should be rounded correctly and meaningfully, where it is necessary. Rounding should by made to the _nearest_ vaule. For instace, 15.88 is to be rounded to 15.9, or to 16m not to 15. However, calendar dates and years are exceptions. For example, March 15.88 denotes an instace beloging to March 15, it means 0.88 day after March 15, 0h. So, if we read that an event occurs on March 15.88, it takes place on March 15, not March 16.

Only meaningful digis should by retained. For example visual magnitude with _m_ = -1712514898, gives a false impression of high accuracy.

The rounding should by perfomed **after** the whole calculation has been made, not before the start of before the input of data into the computer,

Trailing zeros **must** be given in the result to indicate the accuracy. A start of magnitude 7 is not the same as a star of magnitude 7.00.
