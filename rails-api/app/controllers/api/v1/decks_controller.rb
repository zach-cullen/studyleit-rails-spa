class Api::V1::DecksController < ApplicationController

  #decks protected by before action that also provides @user
  before_action :valid_user

  def index
    @decks = @user.decks
    render json: @decks, except: [:created_at, :updated_at]
  end 

  def create
    @deck = @user.decks.build(deck_params)

    if @deck.save
      render json: @deck, except: [:created_at, :updated_at]
    else 
      render json: { errors: @deck.errors.full_messages }
    end
    
  end

  def destroy

  end

  #protect deck actions by validating that user in params is same as logged in user
  #returns a user instance variable for the controller to use in memory
  def valid_user
    @user = User.find_by(id: params[:user_id])
    if @user && @user == current_user
      @user
    else
      render json: {error: "You must be logged in to perform this action."}
    end
  end

  private 

  def deck_params
    params.require(:deck).permit(:title)
  end
  

end
