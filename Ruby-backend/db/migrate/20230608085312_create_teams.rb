class CreateTeams < ActiveRecord::Migration[6.1]
  def change
    create_table :teams do |t|
      t.integer :league_id
      t.string :logo, null: false
      t.string :name, null: false
      t.string :region, null: false
      t.integer :total_points
      t.integer :field_points
      t.integer :three_points
    end
  end
end
