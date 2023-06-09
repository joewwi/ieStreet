class News < ActiveRecord::Base
    has_many :comments
    belongs_to :teams
    belongs_to :games
    belongs_to :sports

    attribute :game, :string
    attribute :team, :string
    attribute :likes, :integer, default: 0
end