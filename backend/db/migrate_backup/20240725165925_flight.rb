class Flight < ActiveRecord::Migration[7.0]
  def change
    create_table :flights do |t|
      t.references :aircraft, null: false, foreign_key: true
      t.string :flight_number, null: false, unique: true
      t.string :pilot_name
      t.date :departure_date
      t.time :departure_time
      t.string :origin_airport
      t.string :destination_airport
      t.date :arrival_date
      t.time :arrival_time
      t.integer :flight_duration
      t.boolean :wifi_available, default: false

      t.timestamps
    end
  end
end
