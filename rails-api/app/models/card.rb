class Card < ApplicationRecord
  belongs_to :deck

  def user
    self.deck.user
  end
end
