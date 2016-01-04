document.addEventListener('DOMContentLoaded', function() {

  // extract data from initial HTML just once on page load so sorting and re-rendering is easy
  var mbg_data = [].map.call(document.getElementsByClassName("mbg-entry"), function(row) {
    var title_el = row.getElementsByClassName('title')[0];
    return {
      'title': title_el.getElementsByClassName('title-text')[0].innerHTML,
      'url': title_el.getElementsByTagName('a')[0].href,
      'img_src': title_el.getElementsByTagName('img')[0].getAttribute('src'),
      'type': row.getElementsByClassName('type')[0].innerHTML,
      'date-completed': new Date(row.getElementsByClassName('date-completed')[0].innerHTML),
      'thoughts': row.getElementsByClassName('thoughts')[0].innerHTML
    };
  });

  // add click listeners to header cells
  ["title", "type", "date-completed"].forEach(function(category) {
    document.getElementById('mbg-header')
            .getElementsByClassName(category)[0]
            .addEventListener("click", function() {
              sort_mbg_by(category);
            });
  });


  function sort_mbg_by(category) {
    // sort the data we collected on page load by the selected category
    mbg_data.sort(function(a, b) {
      return a[category] < b[category] ? -1
             : a[category] > b[category] ? +1
             : 0;
    });

    // replace the entries in the table with new ones rendered in the chosen order
    document.getElementById('mbg-entries').innerHTML = render_mbg_data().innerHTML;

    // set the 'sort-by' class on the correct header cell
    var header_row = document.getElementById('mbg-header');
    var current = header_row.getElementsByClassName('sort-by')[0];
    current.classList.remove('sort-by');
    var new_sort_by = header_row.getElementsByClassName(category)[0];
    new_sort_by.classList.add('sort-by');
  }


  function render_mbg_data() {
    var new_table = document.createElement('div');

    mbg_data.forEach(function(row) {
      var entry = document.createElement('div');
      entry.className = "mbg-entry";
      entry.innerHTML = row_html_template(row);
      new_table.appendChild(entry);
    });

    return new_table;
  }


  function row_html_template(row) {
    function format_date(date) {
      var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      return months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
    }

    return '' +
      '<div class="mbg-cell title">' +
        '<a href="' + row.url + '" target="_window">' +
          '<img src="' + row.img_src + '"">' +
          '<span class="title-text">' + row.title + '</span>' +
        '</a>' +
      '</div>' +
      '<div class="mbg-cell type">' + row.type + '</div>' +
      '<div class="mbg-cell date-completed">' + format_date(row['date-completed']) + '</div>' +
      '<div class="mbg-cell thoughts">' + row.thoughts + '</div>';
  }
});
