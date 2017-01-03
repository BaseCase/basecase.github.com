#!/usr/bin/env ruby

require 'erb'
require 'yaml'

class MakeThatPage
  def initialize
    @template = ERB.new(File.open('src/template.html.erb').read)
    @entries_by_month = YAML.load_file('src/mbg_data.yml')
  end

  def render
    @template.result(binding)
  end
end

maker = MakeThatPage.new
puts maker.render
