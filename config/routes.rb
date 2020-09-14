Rails.application.routes.draw do
  get 'brands/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :homes, only: [:index, :show]
  resources :keywords, only: [:index, :show, :new, :create, :edit, :update, :destroy]
  resources :tweets, only: [:index]
  resources :brands, only: [:index]
  resources :google_analytics, only: [:index, :show, :new, :create, :edit, :update, :destroy]

  root to: 'pages#home'
  # get '/search' => 'keyword#search'

end
