class AddPageFromMasters < ActiveRecord::Migration
  def change
    add_column :masters, :page, :integer
  end
end
