class CreateTdates < ActiveRecord::Migration
  def change
    create_table :tdates do |t|
      t.datetime :dt
      t.string :cap
      t.integer :par
      t.integer :category_id
      t.integer :product_id
      t.integer :customer_id

      t.timestamps null: false
    end
  end
end
