document.addEventListener('DOMContentLoaded', function() {
    var forms = document.querySelectorAll('.needs-validation');
    
    Array.prototype.slice.call(forms).forEach(function(form) {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
});

document.getElementById('bookForm').addEventListener('submit', function(event) {
    if (!this.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    } else {
        event.preventDefault();
        
        // Get book details
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const pdfLink = 'C:\Users\Student\Desktop\CN_29_AI&DS/AWorldCalledCrimson.pdf'; // Replace with the actual path to the PDF file

        // Create new list item with a link
        const li = document.createElement('li');
        li.className = 'list-group-item';

        // Create a link element for the book title
        const link = document.createElement('a');
        link.href = pdfLink; // Set the link to the PDF file
        link.textContent = title;
        link.className = 'book-link';
        link.target = '_blank'; // Open the PDF in a new tab

        // Add link and author to the list item
        li.appendChild(link);
        li.appendChild(document.createTextNode(` by ${author}`));

        // Add remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'btn btn-danger btn-sm ml-2';
        removeButton.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(removeButton);
        document.getElementById('bookList').appendChild(li);

        // Clear form fields
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
    }
});
