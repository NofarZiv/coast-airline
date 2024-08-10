class Order < ApplicationRecord
  belongs_to :passenger, optional: true
  belongs_to :flight
  belongs_to :seat
  belongs_to :pet, optional: true  # This line remains the same

end