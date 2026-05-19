let givenbookmark = [];

/* ================= ADD BOOKMARK ================= */

function addBookmark() {
  const urlInput = document.getElementById("bookmark");

  const url = urlInput.value.trim();

  if (url === "") {
    alert("Please enter a valid URL");

    return;
  }

  const storebookmark = {
    id: Date.now(),

    url: url,
  };

  givenbookmark.push(storebookmark);

  urlInput.value = "";

  renderBookmark();
}

/* ================= RENDER BOOKMARK ================= */

function renderBookmark() {
  const bookmarkList = document.getElementById("bookmarkList");

  bookmarkList.innerHTML = "";

  givenbookmark.forEach((storebookmark) => {
    const bookmarkDiv = document.createElement("div");

    bookmarkDiv.className = "bookmark-item";

    let domainName;

    try {
      domainName = new URL(storebookmark.url).hostname;
    } catch {
      domainName = storebookmark.url;
    }

    bookmarkDiv.innerHTML = `

                    <div class="bookmark-info">

                        <div class="bookmark-icon">

                            <i class='bx bx-globe'></i>

                        </div>

                        <div>

                            <h3>
                                ${domainName}
                            </h3>

                            <a href="${storebookmark.url}"
                                target="_blank">

                                Visit Website →

                            </a>

                        </div>

                    </div>

                    <div class="bookmark-actions">

                        <button class="edit-btn"
                            onclick="editBookmark(${storebookmark.id})">

                            Edit

                        </button>

                        <button class="delete-btn"
                            onclick="deleteBookmark(${storebookmark.id})">

                            Delete

                        </button>

                    </div>

                `;

    bookmarkList.appendChild(bookmarkDiv);
  });
}

/* ================= EDIT BOOKMARK ================= */

function editBookmark(id) {
  const currentBookmark = givenbookmark.find(
    (storebookmark) => storebookmark.id === id,
  );

  const newUrl = prompt("Enter the new URL:", currentBookmark.url);

  if (newUrl && newUrl.trim() !== "") {
    givenbookmark = givenbookmark.map((storebookmark) =>
      storebookmark.id === id
        ? {
            ...storebookmark,
            url: newUrl.trim(),
          }
        : storebookmark,
    );

    renderBookmark();
  }
}

/* ================= DELETE SINGLE ================= */

function deleteBookmark(id) {
  const confirmDelete = confirm(
    "Are you sure you want to delete this bookmark?",
  );

  if (confirmDelete) {
    givenbookmark = givenbookmark.filter(
      (storebookmark) => storebookmark.id !== id,
    );

    renderBookmark();
  }
}

/* ================= DELETE ALL ================= */

function deleteAllBookmarks() {
  if (givenbookmark.length === 0) {
    alert("No bookmarks available");

    return;
  }

  const confirmDeleteAll = confirm("Delete all bookmarks?");

  if (confirmDeleteAll) {
    givenbookmark = [];

    renderBookmark();
  }
}