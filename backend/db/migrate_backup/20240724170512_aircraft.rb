class Aircraft < ActiveRecord::Migration[7.0]
  def change
    create_table :aircrafts do |t|
      t.integer :number_of_seats, null: false
      t.string :aircraft_number, null: false

      t.timestamps
    end
  end
end