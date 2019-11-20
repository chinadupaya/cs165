Rails.application.routes.draw do 
  namespace :api do 
    namespace :v1 do 
     resources :conditions, only: [:index, :create, :destroy, :update]
     resources :restrictions, only: [:index, :create, :destroy, :update]
     resources :employees, only: [:index, :create, :destroy, :update]
     resources :licenses, only: [:index, :create, :destroy, :update]
    end 
  end 
  
  root 'home#index'
   # IMPORTANT #
  # This `match` must be the *last* route in routes.rb
  match '*path', to: 'home#index', via: :all
end