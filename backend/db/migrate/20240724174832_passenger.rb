class Passenger < ActiveRecord::Migration[7.0]
  def change
    create_table :passengers do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :passport_number, null: false
      t.date :date_of_birth, null: false

      t.timestamps
    end
  end
end
