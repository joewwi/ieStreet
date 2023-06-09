class CreateLeagues < ActiveRecord::Migration[6.1]
  def change
    create_table :leagues do |t|
      t.string :name, null: false
      t.string :region, null: false
      t.integer :news_id, null: false
    end
  end
end
