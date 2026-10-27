<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <title>Book Finder</title>

    <link rel="stylesheet" href="style.css">

    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

</head>

<body>

    <header>

        <h1>📚 Book Finder</h1>

        <p>
            Explore our collection of books
        </p>

    </header>


    <main class="container">

        <div class="search-box">

            <input
                type="text"
                id="searchInput"
                placeholder="Search by title or author..."
            >

            <button id="searchBtn">
                Search
            </button>

        </div>


        <div id="message"></div>


        <div id="bookResults"></div>

    </main>


    <script src="script.js"></script>

</body>

</html>
