class Pet < ApplicationRecord
  belongs_to :passenger

  validates :name, :gender, :species, presence: true
end