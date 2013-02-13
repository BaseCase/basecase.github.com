class DateLabeler
  parse: (date)->
    date.split(",").pop().trim()

exports.DateLabeler = DateLabeler
