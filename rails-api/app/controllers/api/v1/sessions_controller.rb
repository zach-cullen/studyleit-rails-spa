class Api::V1::SessionsController < ApplicationController

  # handles route post /login
  def create
    user = User.find_by(email: params[:user][:email])
    if user && user.authenticate(params[:user][:password])
      #create new session on rails side
      session[:user_id] = user.id
      render json: {
        user: user.as_json(except: [:password_digest, :created_at, :updated_at]),
        logged_in: true
      }
      #send credentials to JavaScript
    else 
      #return error object
      render json: {
        error: "invalid credentials"
      }
    end
  end

  def destroy
    # handles route post /logout
    # delete user info from session cookie

  end

end