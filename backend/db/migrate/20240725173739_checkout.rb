class Checkout < ActiveRecord::Migration[7.0]
  def change
    create_table :checkouts do |t|
      t.integer :no_of_persons, null: false
      t.decimal :price_per_person, precision: 8, scale: 2, null: false
      t.decimal :total_price, precision: 10, scale: 2, null: false

      t.timestamps
    end
  end
end
