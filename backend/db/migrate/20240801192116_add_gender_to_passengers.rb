class AddGenderToPassengers < ActiveRecord::Migration[7.0]
  def change
    add_column :passengers, :gender, :string
  end
end
