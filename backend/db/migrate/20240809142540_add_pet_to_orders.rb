class AddPetToOrders < ActiveRecord::Migration[7.0]
  def change
    add_reference :orders, :pet, null: true, foreign_key: true
  end
end
