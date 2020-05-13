class Api::V1::DecksController < ApplicationController
  before_action :valid_user

  def index
    #decks protected by before action that also provides @user
    @decks = @user.decks
    render json: @decks, except: [:created_at, :updated_at]
  end 

  def create

  end

  def destroy

  end


  def valid_user
    @user = User.find_by(id: params[:user_id])
    if @user && @user == current_user
      @user
    else
      render json: {error: "You must be logged in to perform this action."}
    end
  end

  

end
