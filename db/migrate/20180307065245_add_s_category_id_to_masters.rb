class AddSCategoryIdToMasters < ActiveRecord::Migration
  def change
    add_column :masters, :s_category_id, :integer
  end
end
