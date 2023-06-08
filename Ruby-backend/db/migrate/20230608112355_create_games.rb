class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :name, null: false
      t.string :video
      t.integer :team_id 
      t.integer :league_id 
    end
  end
end
