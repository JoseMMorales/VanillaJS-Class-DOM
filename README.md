# VanillaJS-Class-DOM

The Document Object Model[(DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) is an interface to webpages, represented in an HTML document created by the browser when the page is loaded. using JavaScript we may modify the structure, style and content of the web. 

It is based on Object-Oriented-Programming[(OOP)](https://en.wikipedia.org/wiki/Object-oriented_programming), so that's why I have built the books' list in this repo using [CLASSES](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), they act like templates to create the objects, initiated by [constructors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor) adding functionalities dinamically in each function. 

### Functionalities in this project

The user can search alphabetically in book's list, the books' total price will be updated automatically at the bottom of the list, and the user will be able to sort the list by clicking the toggle button at the top of the list.

### CLASS Folder Structure

    /JS/
    |
    |_ _ _ book.js (Individual book CLASS)
    |
    |_ _ _ bookTable.js (Table CLASS and functionalities)
    |
    |_ _ _ main.js (Books instances and page's elements)

[@import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) statement have been applied to [export](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export) values in each [module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).

### DOM Events 
* [KeyUp](https://developer.mozilla.org/en-US/docs/Web/API/Document/keyup_event) - Trigger a search when key is released on search bar.
* [Click](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event) - When button is pressed sort the books' list.

### DOM Nodes Created 

TR(Table Rows) and TD(Table Cells) to display all features of the books (Price, title, Sales, Author, etc...)

### Screenshots books' list
*Full list view
![Screenshot 2021-01-02 at 14 23 43](https://user-images.githubusercontent.com/43299285/103458205-202e9b80-4d06-11eb-919d-f1e58bb1381c.png)
*List sorted
![Screenshot 2021-01-02 at 14 25 24](https://user-images.githubusercontent.com/43299285/103458233-5c61fc00-4d06-11eb-8640-f419b29b332a.png)

## Installing
* Clone the project to your local directory.
* $git clone https://github.com/JoseMMorales/VanillaJS-Class-DOM.git
* $cd VanillaJS-Class-DOM.
* Right click on index.html file and select "Copy path".
* Open window browser and paste URL.

## Technology:
* HTML5
* Bootstrap 4.3.1 (Just styling the table)
* VanillaJS

## Author
Jose MMorales