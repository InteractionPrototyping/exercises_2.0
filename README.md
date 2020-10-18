# IPP Exercises 2.0

## Elements to change each semester
* Update various elements within function `variables()` in `js/script.js`
* Update schedule manually in `index.html`
* Make sure feedback form in footer is still active and accessible
* Check each link to see if it's still active
* If a task changes, make sure the ToDo list is updated as well

## Search with lunr.js
* If a new html page is created, add it to the array ***filenames*** in `buildsearchindex.py`
* If new content is added to an existing html page or an entire new html page is created, run `buildsearchindex.py`
* The python script will extract html content until the marker `id=bottom_navigation` (excluding the todo list) and delete html tags
* The script will then create a json object array in a `search_index.js` file
* Each element of the array will contain the **url**, **title** and **stripped content of html pages**

## First intro session
* Website is supposed to be looked at throughout the semester
* The three sections ***General***, ***Basics*** and ***Tasks*** are supposed to be read through in that order
* ***General*** is all about planning and setting up your gear for the course
* ***Basics*** are covering the fundamentals needed to bring your interdisciplinary team on the same page, building one common knowledge base
* ***Tasks*** describe deliverables and details about practical methods you will (in part) apply in this course
* Discover extra features like the search function on the left, the dark/light theme and ToDo list for each milestone on the right.
* Feel free to leave feedback about the content or the website itself in the form linked at the bottom of each page.

## Outlook: possible new features to add
* Quicklink to current iteration (with current tasks) on Overview page
* Delete one searchbar on search.html without breaking the search
* Animating spiral picture on Overview when hovering
* Collect feedback on placement of ToDo list and theme setting and change if necessary
