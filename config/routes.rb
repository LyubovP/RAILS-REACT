Rails.application.routes.draw do
  devise_for :users
  root 'home#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    namespace :v1 do
      resources :recipes
    end
  end

  get '*path', to: 'home#index', via: :all
end
