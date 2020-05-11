class Api::V1::SessionsController < ApplicationController
  def create
    binding.pry
    # handles route post /login
    # validate login credentials then add to session cookie for use by helper methods in ApplicationController
  end

  def destroy
    # handles route post /logout
    # delete user info from session cookie

  end

end