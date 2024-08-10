require 'stripe'

class StripeController < ApplicationController
skip_before_action :verify_authenticity_token, only: [:create]

def create

  total_in_cents = (params[:total].to_f * 100).to_i

  Stripe.api_key = ENV['STRIPE_API_KEY']

  session=Stripe::Checkout::Session.create( { line_items: [{
    price_data: {
      currency: 'cad',
      product_data: {
        name: 'Airfare',
      },
      unit_amount: total_in_cents,
    },
    quantity: 1,
  }],

  ui_mode:'embedded',

  mode: 'payment',
  # These placeholder URLs will be replaced in a following step.
  return_url: 'http://localhost:5173/order-confirmation', 
})

puts session

# @return=Order.last
# @departure=Order.find(@return.id-1)

# @total=params[:total]

# OrderMailer.order_confirmation(@return, @departure, @total).deliver_now

render json: { id:session.client_secret } 

end

end