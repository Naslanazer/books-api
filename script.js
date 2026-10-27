$(document).ready(function () {


    let books = [

        {
            title: "Harry Potter and the Philosopher's Stone",

            author: "J. K. Rowling",

            description:
                "Harry Potter discovers that he is a wizard and begins his journey at Hogwarts School of Witchcraft and Wizardry.",

            year: 1997,

            genre: "Fantasy",

            cover:
                "https://covers.openlibrary.org/b/isbn/9780747532699-M.jpg",

            link:
                "https://www.goodreads.com/book/show/72193.Harry_Potter_and_the_Philosopher_s_Stone"
        },


        {
            title: "The Kite Runner",

            author: "Khaled Hosseini",

            description:
                "A powerful story about friendship, family, guilt and redemption set against the changing history of Afghanistan.",

            year: 2003,

            genre: "Historical Fiction",

            cover:
                "https://covers.openlibrary.org/b/isbn/9781594631931-M.jpg",

            link:
                "https://www.goodreads.com/book/show/77203.The_Kite_Runner"
        },


        {
            title: "Pride and Prejudice",

            author: "Jane Austen",

            description:
                "A classic novel following Elizabeth Bennet and her relationship with Mr. Darcy.",

            year: 1813,

            genre: "Romance",

            cover:
                "https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg",

            link:
                "https://www.gutenberg.org/ebooks/1342"
        },


        {
            title: "Alice's Adventures in Wonderland",

            author: "Lewis Carroll",

            description:
                "Alice falls down a rabbit hole and enters a strange and wonderful world filled with unusual characters.",

            year: 1865,

            genre: "Fantasy",

            cover:
                "https://www.gutenberg.org/cache/epub/11/pg11.cover.medium.jpg",

            link:
                "https://www.gutenberg.org/ebooks/11"
        },


        {
            title: "The Adventures of Sherlock Holmes",

            author: "Arthur Conan Doyle",

            description:
                "A collection of Sherlock Holmes mysteries featuring some of his most famous investigations.",

            year: 1892,

            genre: "Mystery",

            cover:
                "https://www.gutenberg.org/cache/epub/1661/pg1661.cover.medium.jpg",

            link:
                "https://www.gutenberg.org/ebooks/1661"
        }

    ];



    displayBooks(books);



    $("#searchBtn").click(function () {

        searchBooks();

    });



    $("#searchInput").keypress(function (event) {

        if (event.which === 13) {

            searchBooks();

        }

    });


    function searchBooks() {

        let query =
            $("#searchInput")
            .val()
            .toLowerCase()
            .trim();


        

        if (query === "") {

            displayBooks(books);

            return;
        }



        let results = books.filter(function (book) {

            return (

                book.title
                    .toLowerCase()
                    .includes(query)

                ||

                book.author
                    .toLowerCase()
                    .includes(query)

                ||

                book.genre
                    .toLowerCase()
                    .includes(query)

            );

        });


        displayBooks(results);

    }



    function displayBooks(bookList) {

        $("#bookResults").html("");


        if (bookList.length === 0) {

            $("#message").text(
                "No books found."
            );

            return;
        }


        $("#message").text(
            "Showing " +
            bookList.length +
            " book(s)"
        );


        $.each(
            bookList,
            function (index, book) {


                let bookHTML = `

                    <div class="book">

                        <img
                            class="book-cover"
                            src="${book.cover}"
                            alt="${book.title}"
                        >


                        <h2>
                            ${book.title}
                        </h2>


                        <h3>
                            ✍️ ${book.author}
                        </h3>


                        <p>
                            <strong>Genre:</strong>
                            ${book.genre}
                        </p>


                        <p>
                            <strong>Published:</strong>
                            ${book.year}
                        </p>


                        <p>
                            ${book.description}
                        </p>


                        <a
                            class="read-btn"
                            href="${book.link}"
                            target="_blank"
                        >
                            View Book
                        </a>

                    </div>

                `;


                $("#bookResults")
                    .append(bookHTML);

            }
        );

    }

});
