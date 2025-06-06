The goal of this project is to create an 'Etch-A-Sketch' web application using HTML, CSS (+ Flexbox), and JavaScript. This project was accomplished using the aforementioned languages.

Challenges:
- I had to review Flexbox after not working with it for 2 weeks. Those 2 weeks were spent studying JavaScript.
- I initially had difficulty implementing the grid. I first attempted to do so by creating a continuous line of divs that wrapped to new lines to form a proper grid using flex and properties such as height and width. However, this did not work so I opted to using for loops that made rows and columns of divs. This method worked as I did not need to worry about potential wrapping issues whenever the grid's size changed.

Learned:
- I learned why the <script></script> tag is added at the end of the HTML body. This placement allows the DOM to fully load before JavaScript code is run. I learned that putting the script tag in the head will not work for the same reason either.
- When struggling to implement the grid, I learned reinforced the fact that flex: 1 allows children elements to take up the horizontal space of their container. This property, coupled with 'aspect-ratio: 1/1,' gave me square divs for the grid.