class CreateFlightsTable < ActiveRecord::Migration[7.0]
  def change
    create_table :flights do |t|
      t.string :flight_number, null: false
      t.string :pilot_name, null: false
      t.date :departure_date, null: false
      t.string :departure_terminal, null: false
      t.time :departure_time, null: false
      t.string :origin_airport, null: false
      t.string :destination_airport, null: false
      t.date :arrival_date, null: false
      t.string :arrival_terminal, null: false
      t.time :arrival_time, null: false
      t.integer :flight_duration, null: false # duration in minutes
      t.float :flight_price, null: false
      t.boolean :wifi_available, default: false, null: false

      t.timestamps
    end

    add_index :flights, :flight_number, unique: true
  end
end
