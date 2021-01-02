# VanillaJS-Class-DOM

The Document Object Model[(DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) is an interface to webpages, represented in a HTML document created by the browser when the page is loaded. using JavaScript we may modify the structure, style and content of the web. 

It is based on Object-Oriented-Programming[(OOP)](https://en.wikipedia.org/wiki/Object-oriented_programming), so that's why I have built the books' list in this repo using [CLASSES](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), they have been like templates to create the objects, initiated by [constructors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor) adding functionalities dinamically in each function. 

### Functionalities in this project

The user can search alphabetically in book's list, total price of the books displayed will be updated automatically at the bottom of the list and the user will be able to sort the list by clicking toggle button on the top of the list.

### CLASS Folder Structure

    /JS/
    |
    |_ _ _ book.js (Individual book CLASS)
    |
    |_ _ _ bookTable.js (Table CLASS and functionalities)
    |
    |_ _ _ main.js (Books instances and page's elements)

### DOM Events 
* [KeyUp](https://developer.mozilla.org/en-US/docs/Web/API/Document/keyup_event) - Fire search when key is released on search bar.
* [Click](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event) - Pointing a button when is pressed to make toggle functionality on the list.

### DOM Nodes Created 

TR(Table Rows) and TD(Table Cells) to display all features of the books (Price, title, Sales, Author, etc...)

## Installing
* Clone the project to your local directory.
* $git clone https://github.com/JoseMMorales/VanillaJS-Class-DOM.git
* $cd VanillaJS-Class-DOM.
* Right click on index.html file and select "Copy path".
* Open window browser and paste URL.

## Technology:
* HTML5
* Bootstrap 4.3.1
* VanillaJS

## Author
Jose MMorales