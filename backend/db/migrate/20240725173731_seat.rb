class Seat < ActiveRecord::Migration[7.0]
  def change
    create_table :seats do |t|
      t.references :aircraft, null: false, foreign_key: true
      t.references :flight, null: false, foreign_key: true
      t.string :seat_number, null: false
      t.boolean :available, default: true

      t.timestamps
    end
  end
end
