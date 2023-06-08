class Sport < ActiveRecord::Base
    has_many :leagues
    has_many :news
    has_many :teams, through: :leagues
    has_many :games, through: :leagues


end