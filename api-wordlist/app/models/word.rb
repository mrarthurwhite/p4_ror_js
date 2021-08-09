class Word < ApplicationRecord
  belongs_to :category
  validates :word, presence: true
  validates :definition, presence: true

end
