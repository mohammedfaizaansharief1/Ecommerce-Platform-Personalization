const bar = document.getElementById('bar');
const nav = document.getElementById('navbar')
const close = document.getElementById('close');

if(bar)
{
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}

close.addEventListener('click', ()=>{
    nav.classList.remove('active');
})

function searchProducts() {
    // Get the search input value
    var searchQuery = document.getElementById('searchInput').value;

    // You can implement your search logic here
    // For simplicity, we'll just log the search query to the console
    console.log('Search Query: ' + searchQuery);

    // You can also perform actions like fetching search results and updating the UI
    // Example: Fetch search results from the server and display them on the page
    // fetchResultsFromServer(searchQuery);
}