puts 'Creating all the Home Propositions Keywords...'

Keyword.destroy_all

keywords_attributes = [

  {
    name: 'landlord lifeguard',
    position: 0
  },

  {
    name: 'should I sell my rental property',
    position: 0
  },

  {
    name: 'preparing your property for rent',
    position: 0
  },

  {
    name: 'end of tenancy checklist',
    position: 0
  },

  {
    name: 'landlord advice',
    position: 0
  },

  {
    name: 'landlord help',
    position: 0
  },

  {
    name: 'tenant referencing',
    position: 0
  },

  {
    name: 'landlord tax return',
    position: 0
  },

  {
    name: 'nationwide landlord insurance',
    position: 0
  },

  {
    name: 'tenant fee ban',
    position: 0
  },

  {
    name: 'tenant reference check',
    position: 0
  },

  {
    name: 'what is tenant referencing',
    position: 0
  },

  {
    name: 'landlord property management',
    position: 0
  },

  {
    name: 'cost of being a landlord',
    position: 0
  },

  {
    name: 'first time landlord',
    position: 0
  },

  {
    name: 'landlord checklist',
    position: 0
  },

  {
    name: 'tenant management',
    position: 0
  },

  {
    name: 'marketing your property',
    position: 0
  },

  {
    name: 'landlord rights',
    position: 0
  },

  {
    name: 'buy to let london',
    position: 0
  },

  {
    name: 'landlord insurance',
    position: 0
  },

  {
    name: 'managing your rental property',
    position: 0
  },

  {
    name: 'landlord tenant dispute',
    position: 0
  }

]

Keyword.create!(keywords_attributes)

sleep(2)

puts 'Done!'

sleep(1)

puts 'Time to code :)'
