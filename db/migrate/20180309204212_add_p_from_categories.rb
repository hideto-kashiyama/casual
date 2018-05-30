class AddPFromCategories < ActiveRecord::Migration
  def change
    add_column :categories, :p, :integer
  end
end
