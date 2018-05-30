class AddPFromProducts < ActiveRecord::Migration
  def change
    add_column :products, :p, :integer
  end
end
