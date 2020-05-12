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
        user: current_user.as_json(except: [:password_digest, :created_at, :updated_at]),
        #possibly redundant but need to refactor js on other end to look at user not logged_in
        logged_in: logged_in?
      }
    else 
      #return object with error message
      render json: { 
        error: "Invalid credentials",
        logged_in: logged_in?
      }
    end
  end

  def get_current_user
    render json: {
      logged_in: logged_in?,
      user: current_user.as_json(except: [:password_digest, :created_at, :updated_at])
    }
  end

  def destroy
    # handles route post /logout
    # delete user info from session cookie
    reset_session
    render json: {
      logged_in: logged_in?
    }
  end

end