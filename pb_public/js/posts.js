const search = document.getElementById("search");

function updateUrl() {
  const value = search.value.toLowerCase();
  const url = new URL(window.location);
  if (value) {
    url.searchParams.set("q", value);
    window.location.href = url;
  } else {
    url.searchParams.delete("q");
    window.location.href = url;
  }
}

search.addEventListener("change", updateUrl);
