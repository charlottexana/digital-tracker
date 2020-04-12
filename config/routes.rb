Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :homes, only: [:index, :show]
  resources :keywords, only: [:index, :show, :new, :create, :edit, :update, :destroy]

  root to: 'pages#home'
  # get '/search' => 'keyword#search'

end
