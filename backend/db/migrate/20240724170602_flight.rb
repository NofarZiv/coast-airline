class Flight < ActiveRecord::Migration[7.0]
  def change
    create_table :flights do |t|
      t.references :aircraft, null: false, foreign_key: true
      t.string :flight_number, null: false
      t.string :pilot_name, null: false
      t.date :departure_date, null: false
      t.time :departure_time, null: false
      t.string :origin_airport, null: false
      t.string :destination_airport, null: false
      t.date :arrival_date, null: false
      t.time :arrival_time, null: false
      t.string :flight_duration, null: false
      t.boolean :wifi_available, default: false

      t.timestamps
    end
  end
end
