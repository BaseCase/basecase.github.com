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

exports.DateLabeler = DateLabeler



# This jQuery makes a list of objects that are
# {"date string":"corresponding DOM Element"} pairs, in order
# $('td.date').map(function() {
#   return {
#     datestring: $(this).html(),
#     element: this}});
