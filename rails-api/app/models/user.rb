class User < ApplicationRecord
  has_secure_password
  has_many :decks
  has_many :cards, through: :decks
  validates :email, presence: true, uniqueness: true

end
