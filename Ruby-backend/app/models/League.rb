class League < ActiveRecord::Base
    belongs_to :sports
    has_many :games
    has_many :teams
    
end