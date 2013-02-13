DateLabeler = require('../lib/cjb').DateLabeler

describe "a date labeler", ->
  beforeEach ->
    @dl = new DateLabeler

  it "parses the year from a formatted date string", ->
    date = "January 18, 2009"
    expect(@dl.parse(date)).toEqual "2009"

  it "can mark a row for labeling with given year", ->
    row = {datestring: "January 18, 2009", element: {}}
    @dl.mark(row)
    expect(row.label_before).toBe "2009"

  it "marks the first row in a list of rows", ->
    rows = [ {datestring: "January 18, 2009", element: {}} ]
    @dl.markFirstInstanceOfEachYear rows
    expect(rows[0].label_before).toBeDefined()

  it "marks the first mention of a new year", ->
    rows = [
      {datestring: "January 18, 2009", element: {}},
      {datestring: "January 18, 2009", element: {}},
      {datestring: "January 18, 2008", element: {}}]
    @dl.markFirstInstanceOfEachYear rows
    expect(rows[2].label_before).toBe "2008"

  it "doesn't mark a row after its year was already marked", ->
    rows = [
      {datestring: "January 18, 2009", element: {}},
      {datestring: "January 18, 2009", element: {}},
      {datestring: "January 18, 2009", element: {}},
      {datestring: "January 18, 2008", element: {}}]
    @dl.markFirstInstanceOfEachYear rows
    expect(rows[2].label_before).toBeUndefined()
