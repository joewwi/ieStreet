class CreateSpors < ActiveRecord::Migration[6.1]
  def change
    create_table :sports do |t|
      t.string :name, null: false
    end
  end
end
