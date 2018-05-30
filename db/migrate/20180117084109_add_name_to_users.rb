class AddNameToUsers < ActiveRecord::Migration
  def change
    remove_column :titles, :place, :string
  end
end
