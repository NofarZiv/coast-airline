class CreatePetsTable < ActiveRecord::Migration[7.0]
  def change
    create_table :pets do |t|
      t.references :passenger, null: false, foreign_key: true
      t.string :name
      t.string :gender
      t.string :species

      t.timestamps
    end
  end
end
