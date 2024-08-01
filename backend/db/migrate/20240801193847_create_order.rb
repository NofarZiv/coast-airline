class CreateOrder < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.references :seat, null: false, foreign_key: true
      t.references :flight, null: false, foreign_key: true
      t.references :passenger, null: false, foreign_key: true
      t.string :flight_type
      t.timestamps
    end
  end
end
