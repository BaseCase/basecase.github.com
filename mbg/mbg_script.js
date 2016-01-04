document.addEventListener('DOMContentLoaded', function() {
  var forEach = Array.prototype.forEach;
  var map = Array.prototype.map;

  var mbg_data = grab_mbg_data_from_table();
  add_header_click_listeners();

  function sort_mbg_by(category) {
    mbg_data.sort(function(a, b) {
      return a[category] < b[category] ? -1
             : a[category] > b[category] ? +1
             : 0;
    });

    var new_mbg_el = render_mbg_data(mbg_data);
    new_mbg_el.getElementsByClassName(category)[0].className += " sort-by";
    document.getElementById('mbg-list').innerHTML = new_mbg_el.innerHTML;
    add_header_click_listeners();
  }


  function render_mbg_data(mbg_data) {
    var new_table = document.createElement('div');

    new_table.appendChild(header_html_template());

    mbg_data.forEach(function(row) {
      var entry = document.createElement('div');
      entry.className = "mbg-entry";
      entry.innerHTML = row_html_template(row);
      new_table.appendChild(entry);
    });

    return new_table;
  }


  function header_html_template() {
    var header_el = document.createElement('div');
    header_el.id = "mbg-header";
    header_el.innerHTML = '' +
      '<div class="mbg-cell title">Title</div>' +
      '<div class="mbg-cell type">Type</div>' +
      '<div class="mbg-cell date-completed">Date</div>' +
      '<div class="mbg-cell thoughts">Thoughts</div>';

    return header_el;
  }


  function row_html_template(row) {
    return '' +
      '<div class="mbg-cell title">' +
        '<a href="' + row.url + '" target="_window">' +
          '<img src="' + row.img_src + '"">' +
          '<span class="title-text">' + row.title + '</span>' +
        '</a>' +
      '</div>' +
      '<div class="mbg-cell type">' + row.type + '</div>' +
      '<div class="mbg-cell date-completed">' + row['date-completed'] + '</div>' +
      '<div class="mbg-cell thoughts">' + row.thoughts + '</div>';
  }


  function grab_mbg_data_from_table() {
    return map.call(document.getElementsByClassName("mbg-entry"), function(row) {
      var title_el = row.getElementsByClassName('title')[0];
      var title = title_el.getElementsByClassName('title-text')[0].innerHTML;
      var url = title_el.getElementsByTagName('a')[0].href;
      var img_src = title_el.getElementsByTagName('img')[0].getAttribute('src');
      var date_completed = new Date(row.getElementsByClassName('date-completed')[0].innerHTML);

      return {
        'title': title,
        'url': url,
        'img_src': img_src,
        'type': row.getElementsByClassName('type')[0].innerHTML,
        'date-completed': date_completed,
        'thoughts': row.getElementsByClassName('thoughts')[0].innerHTML
      };
    });
  }


  function add_header_click_listeners() {
    ["title", "type", "date-completed"].forEach(function(category) {
      var header = document.getElementById('mbg-header')
                           .getElementsByClassName("mbg-cell " + category)[0]
                           .addEventListener("click", function() {
                             sort_mbg_by(category);
                           });
    });
  }
});
