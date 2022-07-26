Rails.application.routes.draw do
  resources :menu_items
  resources :carts
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get '*path',
  to: 'fallback#index', 
  constraints: ->(req) { !req.xhr? && req.format.html? }



end
