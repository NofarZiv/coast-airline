class Pet < ApplicationRecord
  belongs_to :passenger
  has_many :orders

  validates :name, :gender, :species, presence: true
end