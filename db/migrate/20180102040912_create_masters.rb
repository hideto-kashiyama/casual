class CreateMasters < ActiveRecord::Migration
  def change
    create_table :masters do |t|
      t.integer :n
      t.string :j
      t.string :e
      t.integer :category_id
      t.integer :product_id
      t.string :husen

      t.timestamps null: false
    end
  end
end
