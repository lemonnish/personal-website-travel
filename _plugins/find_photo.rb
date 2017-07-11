module Jekyll
  class FindPhotoTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @filename = text
    end

    def render(context)
      site = context.registers[:site]
      page = context.registers[:page]
      "#{site.baseurl}/photos/#{page['slug']}/#{@filename}"
    end
  end
end

Liquid::Template.register_tag('photo', Jekyll::FindPhotoTag)
