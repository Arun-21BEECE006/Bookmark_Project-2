let givenbookmark = [];

function addBookmark() {
    var url = document.getElementById('bookmark').value;
    if (url) {
        const storebookmark = { id: Date.now(), url };
        givenbookmark.push(storebookmark);
        document.getElementById('bookmark').value = '';
        renderBookmark();
    }
}

function renderBookmark() {
    const bookmarkList = document.getElementById('bookmarkList');
    bookmarkList.innerHTML = '';
    givenbookmark.forEach(storebookmark => {
        const bookmarkDiv = document.createElement('div');
        bookmarkDiv.className = 'storebookmark';
        bookmarkDiv.innerHTML = `
            <a href="${storebookmark.url}" target="_blank">${storebookmark.url}</a>
            <button onclick="editBookmark(${storebookmark.id})">Edit</button>
            <button onclick="deleteBookmark(${storebookmark.id})">Delete</button>
        `;
        bookmarkList.appendChild(bookmarkDiv);
    });
}

function editBookmark(id) {
    const url = prompt('Enter the new URL:');
    if (url) {
        givenbookmark = givenbookmark.map(storebookmark =>
            storebookmark.id === id ? { ...storebookmark, url } : storebookmark
        );
        renderBookmark();
    }
}

function deleteBookmark(id) { 
    const fdel = prompt("Confirm Delete (Yes/No) : ");
    if(fdel == 'Yes' || fdel=='yes' || fdel == 'YES'){
    givenbookmark = givenbookmark.filter(storebookmark => storebookmark.id !== id);
    renderBookmark();
    }
    else if(fdel == 'NO' || fdel=='no' || fdel == 'No'){
        givenbookmark = givenbookmark.map(storebookmark =>
            storebookmark.id === id ? { ...storebookmark, url } : storebookmark
        );
        renderBookmark();
    }
}

function deleteAllBookmarks() {
    const fgdel = prompt("Confirm Delete All (Yes/No) : ");
    if(fgdel == 'Yes' || fgdel=='yes' || fgdel == 'YES'){
        givenbookmark = [];
    renderBookmark();
    }
    else if(fgdel=='NO' ||fgdel=='No' || fgdel=='no'){
        givenbookmark = givenbookmark.filter(storebookmark => storebookmark.id !== id);
    renderBookmark();
    }
}