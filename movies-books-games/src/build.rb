#!/usr/bin/env ruby

require 'erb'
require 'yaml'

class MakeThatPage
  def initialize
    @template = ERB.new(File.open('src/template.html.erb').read)
    @entries_by_month = entries_by_month
  end

  def render
    @template.result(binding)
  end

  def icon_for_a(type)
    case type
    when 'book'
      '📖'
    when 'movie'
      '🎬'
    when 'game'
      '🎮'
    else
      '🌈'
    end
  end

  def unique_id_for(entry)
    entry['title'].downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
  end

  private

  def entries_by_month
    entries = YAML.load_file('src/mbg_data.yml')
    grouped = entries.group_by { |entry| entry['completion_date'].month }
  end
end

maker = MakeThatPage.new
puts maker.render
