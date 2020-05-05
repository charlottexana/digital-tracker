puts 'Crawling all the Home Propositions Keywords...'

Keyword.destroy_all

@keyword = Keyword.new(
  name: "landlord lifeguard",
  position: 0
  )
@keyword.save!

@keyword = Keyword.new(
  name: "should I sell my rental property",
  position: 0
  )
@keyword.save!

puts 'Done!'
