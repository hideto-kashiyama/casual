class CreateTests < ActiveRecord::Migration
  def change
    create_table :tests do |t|
      t.integer :master_id
      t.integer :tdate_id
      t.integer :ten
      t.string :sh

      t.timestamps null: false
    end
  end
end
