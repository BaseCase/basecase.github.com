DateLabeler = require('./cjb').DateLabeler

describe "a date labeler", ->
  beforeEach ->
    @dl = new DateLabeler

  it "parses the year from a formatted date string", ->
    date = "January 18, 2009"
    expect(@dl.parse(date)).toEqual "2009"

  it "gets a list of DOM elements with dates in them", ->
