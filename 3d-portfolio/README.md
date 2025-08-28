[] Give off web3 and backend ,
[x] 3d model vibes
[] Optimizing the website for mobile, etc ... caching , memoizing , etc ...



Notes : 
####1]  return (   , parenthesis should be on the same line.

##2]  Hero section issue solution 
The main issue was that your original layout structure wasn't properly defining a two-column layout.
In your original code, you had a single container (hero-layoout) with the header and figure elements just stacked one after another without any explicit layout system to position them side by side. This meant they were displaying vertically (one below the other) instead of horizontally (left and right).
The fix was adding CSS Grid with grid grid-cols-1 md:grid-cols-2 to the container, which:

Creates a proper two-column grid layout on desktop screens
Automatically positions the first child (header) in the left column
Automatically positions the second child (figure with HeroModel) in the right column

So the HeroModel was always there and working - it just wasn't positioned where you expected it to be! It was probably appearing below your text content instead of beside it.