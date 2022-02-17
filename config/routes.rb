Rails.application.routes.draw do
  root 'home#home'
  get 'ionut', to: 'home#ionut'
  get 'taimoor', to: 'home#taimoor'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
