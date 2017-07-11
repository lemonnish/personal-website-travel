require 'nokogiri'
require 'pathname'
require 'fileutils'

def images_for_post (url)
  doc = Nokogiri::HTML(`curl -s #{url}`)

  out = %r{/([^/]*)\.html}.match(url).captures[0]
  puts "WORKING ON #{out}"
  `mkdir #{out}`

  count = 0
  total = 0

  doc.css('img').each do |node|
    filename = File.basename(node['src'])

    next if /icon18/.match filename

    filename.gsub!('%2B', ' ')

    found = `find "#{ENV['HOME']}/Pictures/Photos Library Export" -iname "#{filename}"`.strip
    found = found.split "\n"

    if found.empty?
      puts "failed to find #{filename}"
      total += 1
    elsif found.count > 1
      puts "found two or more matches for #{filename}"
      total += 1
    else
      `cp \"#{found[0]}\" \"#{out}/#{filename}\"`
      count += 1
      total += 1
    end

  end

  puts "successfully found #{count} of #{total} images"
end

sitemap = Nokogiri::XML(`curl -s https://michiye.blogspot.com/sitemap.xml`)

sitemap.css('loc').each do |loc|
  images_for_post loc.text
end
