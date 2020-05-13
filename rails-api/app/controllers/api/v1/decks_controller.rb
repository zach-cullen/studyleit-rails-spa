class Api::V1::DecksController < ApplicationController
  
  def index
    decks = Deck.all
    render json: decks, except: [:created_at, :updated_at]
  end 

  def show

  end

  def create

  end

  def destroy

  end

end
