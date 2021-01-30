# EventPropogationInJs

  ## Bubbling and Capturing

Capturing and bubbling happen in a cycle where 1st phase is capturing and second phase is bubbling and these happen for all events.You might stop part of this cycle as 
bubbling or capturing(also known as trickling) have performance impact.

  # Bubbling:
   Event propogation in bubbling is from me  to my parents where i am the element where event was triggered (ie event.target)

  # Capturing(Trickling):
  Event propogation in capturing is from my parents to me where i am the element where event was triggered(ie event.target).

## Difference between event.target and event.currentTarget

target is the element that triggered the event (e.g., the user clicked on)
currentTarget is the element that the event listener is attached to.

# StopPropagation:
The stopPropagation() method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases.
It does not, however, prevent any default behaviors from occurring.

## Does stopPropagation stop the event from propagating in the capture phase ?
The order of event propagation is:

## i Capture (down)
## ii Target
## iii Bubble (up).

If you call e.stopPropagation() in the capture phase (by setting the addEventListener()'s 3rd argument to true), it stops at 1, so 2 & 3 cannot receive it.

If you call e.stopPropagation() in the bubble phase (by setting the addEventListener()'s 3rd argument to false or just not assign it), the 1 & 2 already complete, so it just prevents the event from bubbling up from the level where you call stopPropagation()

## Difference between stopPropagation() and stopImmediatePropagation()

stopPropagation will prevent any parent handlers from being executed 
stopImmediatePropagation will prevent any parent handlers and also any other handlers from executing.

 ## Quick Quizzzzzzzzz
 What would be the output on the button click? (Event Handling)
 <div id="grandfather">
  <div id="father">
    <!-- What would be the output in the console if the following button#child is clicked -->
    <button id="child">Click Me</button>
  </div>
</div>

<script type="text/javascript">
  function bindEvent(id) {
    document
      .getElementById(id)
      .addEventListener(
        "click",
        (e) => console.log(e.target.getAttribute("id")),
        true
      );
  }
  
  bindEvent("grandfather");
  bindEvent("father");
  bindEvent("child");
</script>
option a. child father grandfather   b.grandfather father child    c.child child child    d.undefined undefined undefined
 ### ans-c
 ### Output would always be child because event.target is a reference to the object onto which the event was dispatched. 
  ###  To get the current HTML Element whose handler is being executed, use the property event.currentTarget.
