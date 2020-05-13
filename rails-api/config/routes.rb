Rails.application.routes.draw do
  namespace :api do 
    namespace :v1 do
      resources :users
      resources :decks
      post "/login", to: "sessions#create"
      post "/logout", to: "sessions#destroy"
      get "/get_current_user", to: "sessions#get_current_user"
    end
  end
end
