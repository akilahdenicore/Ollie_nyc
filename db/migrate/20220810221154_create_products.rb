class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :product
      t.string :description
      t.float :price
      
      t.timestamps
    end
  end
end
