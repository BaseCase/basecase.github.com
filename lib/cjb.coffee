$ ->
  generate_year_labels()

generate_year_labels = ->
  dl = new DateLabeler
  all_rows = get_all_dates()
  rows_to_label = dl.first_instance_of_each_year all_rows
  rows_to_label.map write_label

get_all_dates = ->
  ($ 'td.date').map ->
    datestring: ($ this).html()
    element: this

write_label = (row) ->
  element = row.element
  ($ element).parent().before make_year_label(row.label_before)

make_year_label = (year) ->
  "<div class=\"year_label\">#{year}</div>"


class DateLabeler
  first_instance_of_each_year: (rows) ->
    newest_label = ""
    labeled_rows = []
    for row in rows
      date = @parse(row.datestring)
      if date isnt newest_label
        newest_label = date
        labeled_rows.push(@labeled row)
    labeled_rows

  labeled: (row) ->
    year = @parse row.datestring
    {
      element: row.element
      label_before: year
    }

  parse: (date) ->
    date.split(",").pop().trim()

#exports.DateLabeler = DateLabeler