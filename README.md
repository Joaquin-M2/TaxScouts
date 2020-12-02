# TaxScouts task - Create a real-time search component

In this repository you can find the code of a real-time search component connected to the [Penguin Random House API](http://www.penguinrandomhouse.biz/webservices/rest/).

It is made using the _React_ + _Redux_ + _styled-components_ libraries, as well as design wireframes and the following requirements:

* Search results update in real-time as user types;
  * The "real-time" feature has been made considering the restraints of performing multiple HTTP Requests (the search is performed when the user stopped typing, not while he/she is still writing);
* The component is mindful of situations where each request can take up to few seconds;
  * It shows a spinner when the HTTP Request is being performed;
* Each result has links to Google and Amazon;
  * The links bring directly to result pages considering the title and author of the result/book;
  * The author name is also a link. It takes the user to the Google page of that author.

The component also includes some breakpoints (550px, 420px and 330px) to show it is adapted to small screen sizes.

Finally, I just want to point out that the component was made using the "Creape React App" package. If you want to test it, just download this repository, install the npm packages ("npm install") and run the "npm start" command in your terminal.

If you need any clarification, feel free to contact me.
