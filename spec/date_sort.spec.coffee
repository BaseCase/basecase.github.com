DateLabeler = require('../lib/cjb').DateLabeler

describe "a date labeler", ->
  beforeEach ->
    @dl = new DateLabeler

  it "parses the year from a formatted date string", ->
    date = "January 18, 2009"
    expect(@dl.parse(date)).toEqual "2009"

  it "can mark a row for labeling with given year", ->
    row =
      datestring: "January 18, 2009"
      element: {}
    @dl.mark(row)
    expect(row.label_before).toBe "2009"
