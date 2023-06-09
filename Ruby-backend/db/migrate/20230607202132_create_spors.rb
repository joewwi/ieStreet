class CreateSpors < ActiveRecord::Migration[6.1]
  def change
    create_table :sports do |t|
      t.string :name, null: false
      t.integer :news_id, null: false
    end
  end
end
