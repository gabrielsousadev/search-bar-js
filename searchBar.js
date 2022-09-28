const icon = document.querySelector('.icon');
const search = document.querySelector('.search-container');
const clear = document.getElementById('my-search');

function searchBarClick() 
{
    search.classList.toggle('active');
}

function clearSearchBar() 
{
    clear.value = '';
}