class FlightPassenger < ActiveRecord::Migration[7.0]
  def change
    create_table :flight_passengers do |t|
      t.references :flight, null: false, foreign_key: true
      t.references :passenger, null: false, foreign_key: true
      t.references :seat, null: false, foreign_key: true

      t.timestamps
    end
    add_index :flight_passengers, [:flight_id, :passenger_id], unique: true
  end
end
