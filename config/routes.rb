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

  get '/line_items/:id', to: "line_items#show", as: "line_item"
  post '/line_items', to: "line_items#create"
  delete '/line_items/:id', to: "line_items#destroy"
  post '/line_items/:id/add', to: "line_items#add_quantity", as: "line_item_add"
  post '/line_items/:id/reduce', to: "line_items#reduce_quantity", as: "line_item_reduce"

  




  get '*path',
  to: 'fallback#index', 
  constraints: ->(req) { !req.xhr? && req.format.html? }



end
