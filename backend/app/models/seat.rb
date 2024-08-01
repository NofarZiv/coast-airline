class Seat < ApplicationRecord
  belongs_to :aircraft
  has_many :orders

  validates :seat_number, presence: true
  validates :available, inclusion: { in: [true, false] }
end