class CreateAircraft < ActiveRecord::Migration[7.0]
  def change
    create_table :aircrafts do |t|
      t.integer :number_of_seats
      t.string :aircraft_number, unique: true

      t.timestamps
    end
  end
end
