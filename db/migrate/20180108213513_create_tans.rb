class CreateTans < ActiveRecord::Migration
  def change
    create_table :tans do |t|
      t.integer :master_id
      t.string :etan
      t.string :jtan

      t.timestamps null: false
    end
  end
end
