$ ->
  generateYearLabels()

generateYearLabels = ->
  dl = new DateLabeler
  all_rows = getAllDates()
  rows_to_label = dl.firstInstanceOfEachYear all_rows
  rows_to_label.map writeLabel

getAllDates = ->
  ($ 'td.date').map ->
    datestring: ($ this).html()
    element: this

writeLabel = ->
  element = this.element
  ($ element).parent().before makeYearLabel(this.label_before)

makeYearLabel = (year) ->
  "<div class=\"year_label\">#{year}</div>"


class DateLabeler
  firstInstanceOfEachYear: (rows) ->
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