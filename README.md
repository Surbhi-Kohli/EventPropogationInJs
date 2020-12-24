# EventPropogationInJs

##Bubbling and Capturing

Capturing and bubbling happen in a cycle where 1st phase is capturing and second phase is bubbling and these happen for all events.You might stop part of this cycle as 
bubbling or capturing(also known as trickling) have performance impact.

#Bubbling:Event propogation in bubbling is from me  to my parents where i am the element where event was triggered (ie event.target)

#Capturing(Trickling):Event propogation in capturing is from my parents to me where i am the element where event was triggered(ie event.target).

## Difference between event.target and event.currentTarget

