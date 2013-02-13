class DateLabeler
  parse: (date) ->
    date.split(",").pop().trim()

  mark: (element) ->
    date = Object.keys(element)[0]
    year = @parse date
    element.label_before = year

exports.DateLabeler = DateLabeler



# This jQuery makes a list of objects that are
# {"date string":"corresponding DOM Element"} pairs, in order
# $('td.date').map(function() {
#     pair = {};
#     pair[$(this).html()]=this;
#     return pair});
