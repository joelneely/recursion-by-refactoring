# recursion-by-refactoring

_A step-by-step approach to recursion by refactoring from obvious but limited code to a clean recursive version._

I have long believed that the most "complicated" thing about recursion is the explanations offered when it is taught poorly. This represents my attempt to help in that regard. The project takes a couple of basic tasks and incrementally refactors their solutions into recursive form, attempting to make each step as painless as possible.

The project uses Node.js because it is widely used and readily available. No value judgment is expressed or implied about the merits or demerits of JavaScript versus any other language.

## Status

This is a work in process; the next step after initial set up will be documentation of the problems being addressed, the strategies for refactoring, and the thought patterns that are applied.

## Title

Yes, the title is dry and boring. I thought about calling it "Recursing without cursing", but am still kicking around alternatives. I am not in marketing.

## Patterns and Idioms

I have found re-usable patterns and principles to be very helpful in thinking through design, problem-solving, and defect resolution tasks. Below is an informal list of such practices that I will apply throughout this project.

### Use structures to manage data and code

Let's start with two of the basic structures, one for data and one for code.

* Use an array to hold a sequence or collection of values, to avoid the cost of:
	* keeping up with individual variable names and their relationships, or
	* using literal values and having to ensure their consistent use.
* Use a function to represent a collection of activity, rather than writing it over and over or requiring the reader to wade through the details in-line.

Both of these are techniques for consciously organizing (and naming) parts of what we're building. They are so familiar that I won't belabor their description or benefits here.

### Double-crossing and obstacle

An obstacle lies between you and your goal. This is bad. Sometimes the quickest solution is to _double-cross_ the obstacle, as illustrated below.

<img src="images/double-cross.gif">

You're walking along the bank of the river toward the goal, and an obstacle comes into view. Maybe it's a steep gully, or quicksand, or a briar patch, or a moat filled with sharks with laser beams strapped to their heads. But the opposite bank of the river offers smooth, easy walking. So...

* Cross to the opposite bank;
* Walk on that side until near the goal; and then
* Cross back to the original side to reach the goal.

That's why I called it a "double-cross". But what does that look like in practice?

Stay tuned for the next update to these notes!
