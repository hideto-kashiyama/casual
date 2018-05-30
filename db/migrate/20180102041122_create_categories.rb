class CreateCategories < ActiveRecord::Migration
  def change
    create_table :categories do |t|
      t.string :ctg
      t.integer :product_id

      t.timestamps null: false
    end
  end
end
