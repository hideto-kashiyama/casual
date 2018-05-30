class RemoveHusenFromMasters < ActiveRecord::Migration
  def up
    remove_column :masters, :husen
      end

  
  def down
    remove_column :masters, :husen, :string
  end
end
