class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      # t.string :name
      t.string :username
      t.integer :user_id
      t.string :password_digest
      t.string :email
      t.boolean :is_admin
      t.timestamps
    end
  end
end
