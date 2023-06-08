class CreateNews < ActiveRecord::Migration[6.1]
  def change
    create_table :news do |t|
      t.string :title, null: false
      t.string :news
      t.integer :games_id
      t.integer :teams_id
      t.timestamps
    end 
  end
end
