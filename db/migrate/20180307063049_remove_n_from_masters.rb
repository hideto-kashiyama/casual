class RemoveNFromMasters < ActiveRecord::Migration
   def up
    remove_column :masters, :n
      end

  
  def down
    remove_column :masters, :n, :integer
  end
end
