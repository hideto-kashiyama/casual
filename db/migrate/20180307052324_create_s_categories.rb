class CreateSCategories < ActiveRecord::Migration
  def change
    create_table :s_categories do |t|
      t.string :s_ctg
      t.integer :category_id

      t.timestamps null: false
    end
  end
end
