class Deck < ApplicationRecord
  belongs_to :user
  has_many :cards, dependent: :destroy
  validates :title, presence: true
  validates_uniqueness_of :title, scope: :user_id

end
