class Comment < ActiveRecord::Base
    belongs_to :new
    attribute :comment, :string
end