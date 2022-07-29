Rails.application.routes.draw do
  resources :cart_items
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
  resources :users, only: [:create, :show]
  resources :orders
  resources :menu_items
  resources :carts
  resources :cart_items

  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  
  get "/me", to: "users#show"
  delete "logout", to: "sessions#destroy"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

end
