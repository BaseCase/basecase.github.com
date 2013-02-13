$ ->
  generateYearLabels()

generateYearLabels = ->
  dl = new DateLabeler
  rows = getAllDates()
  dl.markFirstInstanceOfEachYear rows
  rows.map writeLabel

getAllDates = ->
  ($ 'td.date').map ->
    datestring: ($ this).html()
    element: this

writeLabel = ->
  element = this.element
  if this.label_before?
    ($ element).parent().before makeYearLabel(this.label_before)

makeYearLabel = (year) ->
  "<div class=\"year_label\">#{year}</div>"


class DateLabeler
  markFirstInstanceOfEachYear: (row_list) ->
    first = row_list[0]
    @mark first
    newest_label = first.label_before
    for row in row_list
      date = @parse(row.datestring)
      if date isnt newest_label
        newest_label = date
        @mark row

  mark: (row) ->
    year = @parse row.datestring
    row.label_before = year

  parse: (date) ->
    date.split(",").pop().trim()
