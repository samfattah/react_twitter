class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name
      t.posts :has_many

      t.timestamps
    end
  end
end
