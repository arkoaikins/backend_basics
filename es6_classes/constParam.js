class Book {
    constructor(_title, _author) {
        this.tile = _title
        this.author = _author
    }
}

/* so understand that _title and _author are parameters for the constructor used for initializing the object.
 They serve as a way to pass information into the object at the time of its creation.
 
 title and author are the properties of the Book instances
  Once the object is created, these properties hold the state of the object and can be interacted with directly.

So they are different, Incase you want to create private properties then
you can do this._title and this._author
so when you use underscore as prefix for the properties they become private and cannot be modified outside the class
*/