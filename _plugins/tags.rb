module Jekyll

  # helper functions for other tag-related classes
  module TagHelper

    # return the data in the tags file
    def get_tag_heirarchy(site)
      site.data['tags']
    end

    # get tree info
    def walk_tree(root)
      Enumerator.new do |enum|
        enum << root
        if root.has_key? 'children'
          root['children'].each do |child|
            walk_tree(child).each do |descendent|
              enum << descendent
            end
          end
        end
      end
    end

    # get tree leaves (nodes with no children)
    def get_tree_leaves(tree)
      leaves = []
      walk_tree(tree).each do |node|
        leaves.push(node) if !node.has_key? 'children'
      end
      return leaves
    end

    # return the display value for the given tag
    def get_node(tree, tag)
      walk_tree(tree).each do |node|
        return node if (node['tag'] == tag)
      end
      nil
    end

  end # end of mudule TagHelper

  # Define a Tag page
  class TagPage < Page
    def initialize(site, base, dir, page_name, tag)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'list-paginate.html')
      self.data['pagination']['enabled'] = true
      self.data['pagination']['tag'] = tag
      self.data['title'] = page_name
    end
  end

  # Generate each tag page
  class TagPageGenerator < Generator
    safe true
    include TagHelper

    # change the user-defined tag information on posts to include more info
    def modify_page_tags(site)
      tag_tree = get_tag_heirarchy(site)

      # add list of tag/display name pairs
      site.posts.docs.each do |post|
        tag_orig = post.data['tag']
        loc_list = []
        if (tag_orig != nil)
          tag_orig = tag_orig.split(',')
          loc_list = tag_orig.map{ |tag| get_node(tag_tree, tag.strip) }
        end
        post.data['location-links'] = loc_list
      end
    end

    # create a index.html page for each tag and for all-posts
    def generate_tag_lists(site)
      tag_tree = get_tag_heirarchy(site)
      root_tag = tag_tree['tag']

      page_list = [tag_tree].concat(get_tree_leaves(tag_tree))
      dir = ''

      page_list.each do |node|
        page_name = node['display']
        tag = node['tag']
        tag_selector = (tag == root_tag) ? '' : tag
        site.pages << TagPage.new(site, site.source, File.join(dir, tag),
          page_name, tag_selector)
      end
    end

    def generate(site)
      modify_page_tags(site)
      generate_tag_lists(site)
    end

  end
end
