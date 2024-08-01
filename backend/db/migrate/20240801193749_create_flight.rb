class CreateFlight < ActiveRecord::Migration[7.0]
  def change
    create_table :flights do |t|
      t.references :aircraft, null: false, foreign_key: true
      t.string :flight_number
      t.string :pilot_name
      t.date :departure_date
      t.string :departure_terminal
      t.time :departure_time
      t.string :origin_airport
      t.string :destination_airport
      t.date :arrival_date
      t.string :arrival_terminal
      t.time :arrival_time
      t.integer :flight_duration
      t.float :flight_price
      t.boolean :wifi_available

      t.timestamps
    end
  end
end
