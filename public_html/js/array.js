document.getElementById('submit').onclick = function () {
    var selected = [];
    for (var option of document.getElementById('genre').options)
    {
        if (option.selected) {
            selected.push(option.value);
        }
    }
    localStorage.setItem("genreStorage", selected);
};