class Order < ApplicationRecord
  belongs_to :passenger
  belongs_to :outbound_flight, class_name: 'Flight'
  belongs_to :return_flight, class_name: 'Flight', optional: true
  belongs_to :seat
  belongs_to :checkout
end