DateLabeler = require('../lib/cjb').DateLabeler

describe "a date labeler", ->
  beforeEach ->
    @dl = new DateLabeler

  it "parses the year from a formatted date string", ->
    date = "January 18, 2009"
    expect(@dl.parse(date)).toEqual "2009"

  it "can mark an element for labeling with given year", ->
    element = "January 18, 2009":{}
    @dl.mark(element)
    expect(element.label_before).toBe "2009"
