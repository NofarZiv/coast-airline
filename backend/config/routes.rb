Rails.application.routes.draw do
  get 'flights', to: 'flights#index'

  post 'forms', to: 'forms#create'

  post 'checkoutsessions', to: 'stripe#create'


end
