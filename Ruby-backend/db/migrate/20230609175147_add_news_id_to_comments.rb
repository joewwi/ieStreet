class AddNewsIdToComments < ActiveRecord::Migration[6.1]
  def change
    add_column :comments, :news_id, :integer
  end
end
