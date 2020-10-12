---
Categories:
- Programming
Description: A real life example of the benefits of memoization
Tags:
- Programming
date: 2017-06-07T18:18:32-05:00
draft: false
title: Memoization in the wild
---

Memoization isn't just for fibonacci numbers.

<!-- more -->

### Time-weighted returns

Let's consider a portfolio's [time-weighted return](http://www.investopedia.com/terms/t/time-weightedror.asp), or TWR. 

Each day the value of a portfolio can either rise or drop a certain percentage. Now, 
let's say you have a list of the daily returns since the inception of the 
portfolio and you want to find out what the portfolio's returns over several 
date-ranges are. Most likely you'll want to know the daily return, the 
week-to-date return, month-to-date return, and so on, up to the 
inception-to-date return.

To calculate the time-weighted return from inception to a certain end-date, 
one would need to do the following:

R<sub>twr</sub> = ((1+R<sub>1</sub>) x ... x (1+R<sub>n</sub>)) - 1

where R<sub>1</sub> is the daily return after the inception date, and R<sub>n
</sub> is end-date's daily return. So we have to iterate over this list of daily 
returns multiple times in order to calculate all our returns, right? 
No. You see, the above formula doesn't just work for daily returns, but rather 
returns over any arbitrary, consecutive periods. So if you have a return for the 
month of  April and one for the month of May, you could do the following:

R<sub>twr</sub> = ((1+R<sub>apr</sub>) x (1+R<sub>may</sub>)) - 1 

and you would end up with the return over both months. You see where I'm going 
with this? 

### Devising our plan
First things first, we need to get our dates straight. We need our end-date that
we are getting returns for, we need the inception date, the last day of the
previous year/quarter/month/week (in regards to the end-date), and the day 
before the end-date. We'll call these dates our breakpoints. 

Okay, so we will store our daily returns in an array, sorted by date, ascending.
We will translate our date breakpoints into indexes into that array by 
subtracting the inception date from those dates. 

We'll have a function `GetReturnOverDates(startDate, endDate)` that calculates 
the total return from `startDate` to `endDate`. Now this is where the 
memoization comes in. The first thing `GetReturnOverDates` does is check a map 
to see if this date range has already had a return calculated for it; if it 
does, it returns that. It then iterates from `startDate` to `endDate`, adding 
each daily return to the formula at the top. Once we iterate to a breakpoint, 
we then call `GetReturnOverDates(breakpoint, endDate)` and add that to our 
formula. Essentially making the formula:

R<sub>twr</sub> = ((1+R<sub>startDate</sub>) x ... x (1+R<sub>breakpoint</sub>) 
x R<sub>trw2</sub>) - 1

where R<sub>twr2</sub> is the result of 
`GetReturnOverDates(breakpoint, endDate)`.

### The payoff
So, lets say we already calculated the daily and week-to-date return and we want 
to  get the month-to-date return. We start by calling `GetReturnOverDates`. It 
will iterate from the last day of the previous month until it hits a breakpoint, 
which will most likely be the last day of the previous week (if we aren't in 
the first week of the month). It will then call 
`GetReturnOverDates(breakpoint, endDate)` and that call will find that we 
already calculated that return and won't have to do any more calculations! We 
then keep doing this for quarter-to-date, year-to-date, and finally,
inception-to-date, all without iterating over the same daily return more than 
once!

### Closing thoughts
It should be noted that if the inception date is more than a year prior to the
end-date, its return is probably most useful if it is annualized. This doesn't
really change our method above, it just tacks on an extra calculation at the 
end.