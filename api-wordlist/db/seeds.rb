# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.create(name: '3,500 Basic')
Category.create(name: 'Hot Prospect')
Category.create(name: 'High Frequency')

=begin
Part.create(name: 'Noun')
Part.create(name: 'Verb')
Part.create(name: 'Adjective')
Part.create(name: 'Adverb')
Part.create(name: 'Preposition')
=end

Feedback.create(description: 'What a trillion $ website',
                email: 'everyone@everywhere.com'
)

Word.create(word: 'abase',
            #part: Part.second,
            definition:'Lower ; humiliate.',
            sentence: 'Defeated, Queen Zenobia was forced to abase herself before the conquering Romans, who made her march in chains before the emperor in the procession celebrating his triumph.',
            category: Category.first
)

Word.create(word: 'abash',
            #part: Part.second,
            definition:'embarrass.',
            sentence: 'He was not at all abashed by her open admiration.',
            category: Category.first
)

Word.create(word: 'abate',
            #part: Part.second,
            definition:'subside; decrease, lessen.',
            sentence: 'Rather than leaving immediately, they waited for the storm to abate.',
            category: Category.second
)

Word.create(word: 'abridge',
            #part: Part.second,
            definition:'condense or shorten.',
            sentence: 'Because the publishers felt the public wanted a shorter version of War and Peace, they proceeded to abridge the novel.',
            category: Category.third
)
