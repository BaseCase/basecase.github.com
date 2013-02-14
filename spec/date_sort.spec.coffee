# This is gross, and I'll try to fix it when I learn how
# To run these specs, you have to comment out the jQuery
# code in cjb.coffee, and add an exports line. Yuck!

DateLabeler = require('../lib/cjb').DateLabeler

describe "a date labeler", ->
  beforeEach ->
    @dl = new DateLabeler

  it "parses the year from a formatted date string", ->
    date = "January 18, 2009"
    expect(@dl.parse(date)).toEqual "2009"

  it "makes a labeled object from a row object", ->
    row = {datestring: "January 18, 2009", element: {}}
    labeled = @dl.labeled row
    expect(labeled.label_before).toBe "2009"

  describe "first instance of each year", ->
    beforeEach ->
      rows = [
        {datestring: "January 18, 2009", element: {}},
        {datestring: "January 18, 2009", element: {}},
        {datestring: "January 18, 2008", element: {}},
        {datestring: "January 18, 2008", element: {}}]
      @labeled = @dl.first_instance_of_each_year rows

    it "labels the first row in a list of rows", ->
      expect(@labeled[0].label_before).toBe "2009"

    it "finds the first mention of a new year", ->
      expect(@labeled[1].label_before).toBe "2008"

    it "marks only one instance of each year", ->
      expect(@labeled.length).toBe 2
