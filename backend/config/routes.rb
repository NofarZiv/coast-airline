Rails.application.routes.draw do

  get 'flights', to: 'flights#index'

  post 'forms', to: 'forms#create'

  post 'seats', to: 'seats#create'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  post 'checkoutsessions', to: 'stripe#create'

  post 'bookings', to: 'orders#booking'

  post 'send_email', to: 'email#delivery'

end
