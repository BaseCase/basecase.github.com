class DateLabeler
  parse: (date) ->
    date.split(",").pop().trim()

  mark: (element) ->
    year = @parse element.datestring
    element.label_before = year

exports.DateLabeler = DateLabeler



# This jQuery makes a list of objects that are
# {"date string":"corresponding DOM Element"} pairs, in order
# $('td.date').map(function() {
#   return {
#     datestring: $(this).html(),
#     element: this}});
