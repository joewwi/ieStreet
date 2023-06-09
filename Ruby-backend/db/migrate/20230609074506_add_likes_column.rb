class AddLikesColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :news, :likes, :integer, default: 0
  end
end
