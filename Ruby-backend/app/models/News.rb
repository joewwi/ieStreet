class News < ActiveRecord::Base
    belongs_to :teams
    belongs_to :games
    belongs_to :sports

    attribute :game, :string
    attribute :team, :string
end