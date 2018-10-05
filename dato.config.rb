directory "_posts" do
  dato.blogposts.each do |item|
    create_post "#{item.date.to_s.parameterize}-#{item.title.parameterize}.md" do
      frontmatter :yaml, {
        layout: "post",
        title: item.title,
        date: item.date.to_s,
        categories: item.categories
      }
      content item.content
    end
  end
end
