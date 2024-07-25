class Order < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.references :passenger, null: false, foreign_key: true
      t.references :outbound_flight, null: false, foreign_key: { to_table: :flights }
      t.references :return_flight, foreign_key: { to_table: :flights }
      t.references :seat, null: false, foreign_key: true
      t.references :checkout, null: false, foreign_key: true
      t.decimal :price, precision: 10, scale: 2, null: false

      t.timestamps
    end
  end
end
