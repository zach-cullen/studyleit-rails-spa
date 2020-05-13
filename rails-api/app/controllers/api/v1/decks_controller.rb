class Api::V1::DecksController < ApplicationController
  
  def index
    @user = User.find_by(id: params[:user_id])
    binding.pry
    if @user 
      @decks = @user.decks
      render json: @decks, except: [:created_at, :updated_at]
    else
      render json: {
        error: "Invalid request"
      }
    end
  end 

  def create

  end

  def destroy

  end

end
