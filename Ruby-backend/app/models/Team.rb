class Team < ActiveRecord::Base
    belongs_to :league
    has_many :news

    attribute :league, :string
end