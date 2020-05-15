class Api::V1::CardsController < ApplicationController
  #expect nested routes with user_id an deck_id
  before_action :valid_user

  def create
    @deck = @user.decks.find_by(id: params[:deck_id])
    @card = @deck.cards.build(card_params)
    if @card.save
      render json: {
        card: @card, except: [:created_at, :updated_at]
    }
    else 
      render json: { errors: @card.errors.full_messages }
    end

  end

  def destroy
    @card = @user.cards.find_by(id: params[:id])
    if @card
      @card.destroy 
      render json: {
        deleted: true,
        deck: @card, except: [:created_at, :updated_at]
      }
    else 
      render json: {
        deleted: false,
        errors: "You must log in to perform this action"
      }
    end
  end

  # copy of method in decks controller since card is only accessed as a NESTED resource
  # refactor to helper module later
  # protect deck actions by validating that user in params is same as logged in user
  # returns a user instance variable for the controller to use in memory
  def valid_user
    @user = User.find_by(id: params[:user_id])
    if @user && @user == current_user
      @user
    else
      render json: {error: "You must be logged in to perform this action."}
    end
  end

  private

  def card_params
    params.require(:card).permit(:question, :answer)
  end

end
