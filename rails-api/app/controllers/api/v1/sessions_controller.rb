class Api::V1::SessionsController < ApplicationController

  # handles route post /login
  def create
    #validate that user exists and authenticate password, else user is nil
    user = User
            .find_by(email: params[:user][:email])
            .try(:authenticate, params[:user][:password])

    if user
      #create new session on rails side
      session[:user_id] = user.id
      #send json response with user data
      render json: {
        user: user.as_json(except: [:password_digest, :created_at, :updated_at]),
        logged_in: true
      }
    else 
      #return error object
      render json: { 
        logged_in: false,
        error: "Invalid credentials" 
      }
    end
  end

  def get_current_user
    render json: {
      user: User.find_by(id: session[:user_id])
    }
  end

  def destroy
    # handles route post /logout
    # delete user info from session cookie

  end

end