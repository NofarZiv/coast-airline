class Flight < ApplicationRecord
  belongs_to :aircraft
  has_many :seats
  has_many :outbound_orders, class_name: 'Order', foreign_key: 'outbound_flight_id'
  has_many :return_orders, class_name: 'Order', foreign_key: 'return_flight_id'
end
