class Feedback < ApplicationRecord
    validates :description, presence: true
end
