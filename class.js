// Define the Book class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isCheckedOut = false;
        this.dueDate = null;  // Stores the due date if the book is checked out
    }

    checkOut(dueDate) {
        if (!this.isCheckedOut) {
            this.isCheckedOut = true;
            this.dueDate = dueDate;
            return true;
        }
        return false;
    }

    returnBook() {
        if (this.isCheckedOut) {
            this.isCheckedOut = false;
            this.dueDate = null;
            return true;
        }
        return false;
    }

    isOverdue(currentDate) {
        if (this.dueDate && new Date(currentDate) > new Date(this.dueDate)) {
            return true;
        }
        return false;
    }

    toString() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Checked Out: ${this.isCheckedOut}, Due Date: ${this.dueDate ? this.dueDate.toDateString() : 'N/A'}`;
    }
}

// Define the Member class
class Member {
    constructor(name, memberId) {
        this.name = name;
        this.memberId = memberId;
        this.checkedOutBooks = [];
    }

    checkOutBook(book, dueDate) {
        if (book.checkOut(dueDate)) {
            this.checkedOutBooks.push(book);
            return true;
        }
        return false;
    }

    returnBook(book) {
        if (book.returnBook()) {
            this.checkedOutBooks = this.checkedOutBooks.filter(b => b !== book);
            return true;
        }
        return false;
    }

    calculateFines(currentDate) {
        return this.checkedOutBooks.reduce((total, book) => {
            if (book.isOverdue(currentDate)) {
                // Assuming a fine of $3 per overdue day
                const dueDate = new Date(book.dueDate);
                const overdueDays = Math.ceil((new Date(currentDate) - dueDate) / (1000 * 60 * 60 * 24));
                return total + overdueDays;
            }
            return total;
        }, 0);
    }

    toString() {
        const books = this.checkedOutBooks.map(book => book.title).join(', ');
        return `Name: ${this.name}, Member ID: ${this.memberId}, Checked Out Books: ${books}`;
    }
}

// Define the Library class
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    addMember(member) {
        this.members.push(member);
    }

    findBook(title) {
        return this.books.find(book => book.title === title) || null;
    }

    findMember(memberId) {
        return this.members.find(member => member.memberId === memberId) || null;
    }

    toString() {
        const bookList = this.books.map(book => book.toString()).join('\n');
        const memberList = this.members.map(member => member.toString()).join('\n');
        return `Books:\n${bookList}\n\nMembers:\n${memberList}`;
    }
}

// Example Usage

// Create a library
const library = new Library();

// Add books
const book1 = new Book("1984", "George Orwell", "9780451524935");
console.log("\n");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "0987654321");
console.log("\n");
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565");
console.log("\n");
const book4 = new Book("Moby Dick", "Herman Melville", "9780142437247");
console.log("\n");
const book5 = new Book("Pride and Prejudice", "Jane Austen", "9780141439518");
console.log("\n");
const book6 = new Book("The Catcher in the Rye", "J.D. Salinger", "9780316769488");
console.log("\n");
const book7 = new Book("Brave New World", "Aldous Huxley", "9780060850524");
console.log("\n");const book8 = new Book("The Hobbit", "J.R.R. Tolkien", "9780261102217");

const book9 = new Book("Fahrenheit 451", "Ray Bradbury", "9781451673319");

const book10 = new Book("Wuthering Heights", "Emily Brontë", "9780141439556");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.addBook(book6);
library.addBook(book7);
library.addBook(book8);
library.addBook(book9);
library.addBook(book10);

// Add members
const member1 = new Member("ALUCARD", "A001");
const member2 = new Member("ZILONG", "B002");
const member3 = new Member("LAYLA", "C003");
const member4 = new Member("MOSKOV", "D003");
const member5 = new Member("HYLOS", "E003");
const member6 = new Member("NANA", "F003");

library.addMember(member1);
library.addMember(member2);
library.addMember(member3);
library.addMember(member4);
library.addMember(member5);
library.addMember(member6);

// Check out a book with a due date

const dueDate = new Date();
dueDate.setDate(dueDate.getDate() + 7); // 2 week from today
console.log(  "Checking out  '1984': " );
if (member1.checkOutBook(book1, dueDate)) {
    console.log(`${member1.name} successfully checked out '${book1.title}' with due date ${dueDate.toDateString()}`);
} else {
    console.log(`Failed to check out '${book1.title}'`);
}

dueDate.setDate(dueDate.getDate() + 7); // 2 week from today
console.log(  "Checking out  'To Kill a Mockingbird': " );
if (member2.checkOutBook(book2, dueDate)) {
     console.log(`${member2.name} successfully checked out '${book2.title}' with due date ${dueDate.toDateString()}`);
} else {
    console.log(`Failed to check out '${book2.title}'`);
}

dueDate.setDate(dueDate.getDate() + 7); // 2 week from today
      console.log(  "Checking out  'Pride and Prejudice:' " );
if (member3.checkOutBook(book5, dueDate)) {
    console.log(`${member3.name} successfully checked out '${book5.title}' with due date ${dueDate.toDateString()}`);
} else {
    console.log(`Failed to check out '${book5.title}'`);
}

dueDate.setDate(dueDate.getDate() + 7); // 2 week from today
    console.log(  "Checking out 'The Catcher in the Rye:' " );
    if (member4.checkOutBook(book6, dueDate)) {
        console.log(`${member4.name} successfully checked out '${book6.title}' with due date ${dueDate.toDateString()}`);
    } else {
        console.log(`Failed to check out '${book6.title}'`);    
    }

dueDate.setDate(dueDate.getDate() + 7); // 1 week from today
 console.log(  "Checking out 'The Hobbit:' " );
 if (member5.checkOutBook(book8, dueDate)) {
      console.log(`${member5.name} successfully checked out '${book8.title}' with due date ${dueDate.toDateString()}`);
    } else {
            console.log(`Failed to check out '${book8.title}'`);   
    }     

    dueDate.setDate(dueDate.getDate() + 7); // 1 week from today
    console.log(  "Wuthering Heights:" );
    if (member6.checkOutBook(book10, dueDate)) {
         console.log(`${member6.name} successfully checked out '${book10.title}' with due date ${dueDate.toDateString()}`);
       } else {
               console.log(`Failed to check out '${book10.title}'`);   
       }      

// Display library status
console.log("\nLibrary status:");
console.log(library.toString());

// Simulate overdue situation
const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 0); 
console.log("\n");


// Check overdue status
console.log("\nChecking overdue status and fines:");
console.log(`Overdue: ${book1.isOverdue(currentDate) ? 'Yes' : 'No'}`);
console.log(`Fines for ${member1.name}: $${member1.calculateFines(currentDate)}`);

console.log("\nChecking overdue status and fines:");
console.log(`Overdue: ${book2.isOverdue(currentDate) ? 'Yes' : 'No'}`);
console.log(`Fines for ${member2.name}: $${member2.calculateFines(currentDate)}`);

console.log("\nChecking overdue status and fines:");
console.log(`Overdue: ${book5.isOverdue(currentDate) ? 'Yes' : 'No'}`);
console.log(`Fines for ${member3.name}: $${member3.calculateFines(currentDate)}`);

console.log("\nChecking overdue status and fines:");
console.log(`Overdue: ${book6.isOverdue(currentDate) ? 'Yes' : 'No'}`);
console.log(`Fines for ${member4.name}: $${member4.calculateFines(currentDate)}`);

console.log("\nChecking overdue status and fines:");
console.log(`Overdue: ${book8.isOverdue(currentDate) ? 'Yes' : 'No'}`);
console.log(`Fines for ${member5.name}: $${member5.calculateFines(currentDate)}`);

console.log("\nChecking overdue status and fines:");
console.log(`Overdue: ${book10.isOverdue(currentDate) ? 'Yes' : 'No'}`);
console.log(`Fines for ${member6.name}: $${member6.calculateFines(currentDate)}`);

console.log("\n");
// Return a book

console.log("\nReturning '1984':");
     if (member1.returnBook(book1)) {
        console.log(`${member1.name} successfully returned '${book1.title}'`);
} else {
    console.log(`Failed to return '${book1.title}'`);
}

console.log("\nReturning 'To Kill a Mockingbird':");
     if (member2.returnBook(book2)) {
        console.log(`${member2.name} successfully returned '${book2.title}'`);
  } else {
        console.log(`Failed to return '${book2.title}'`);
  }
 
  console.log("\nReturning 'Pride and Prejudice':");
     if (member3.returnBook(book5)) {
        console.log(`${member3.name} successfully returned '${book5.title}'`);
  } else {
        console.log(`Failed to return '${book5.title}'`);
  }
  
  console.log("\nReturning 'The Catcher in the Rye':");
  if (member4.returnBook(book6)) {
     console.log(`${member4.name} successfully returned '${book6.title}'`);
} else {
     console.log(`Failed to return '${book6.title}'`);
}

console.log("\nReturning 'The Hobbit':");
     if (member5.returnBook(book8)) {
        console.log(`${member5.name} successfully returned '${book8.title}'`);
  } else {
        console.log(`Failed to return '${book8.title}'`);
  }

  console.log("\nReturning 'Wuthering Heights':");
     if (member6.returnBook(book10)) {
        console.log(`${member6.name} successfully returned '${book10.title}'`);
  } else {
        console.log(`Failed to return '${book10.title}'`);
  }
  
// Display library status again
console.log("\nLibrary status:");
console.log(library.toString());