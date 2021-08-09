Rails.application.routes.draw do
  resources :feedbacks
  resources :categories
  resources :words
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
