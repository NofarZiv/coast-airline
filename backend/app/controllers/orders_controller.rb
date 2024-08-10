# app/controllers/orders_controller.rb
class OrdersController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:booking]
  def create
    @order = Order.new(order_params)
    if @order.save
      Rails.logger.info "Order created successfully. Sending confirmation email to #{@order.email}"
      
      # Send the order confirmation email
      OrderMailer.order_confirmation(@order).deliver_now

      raise "email sent"

      # Respond with the order details, including the email, to be used by the frontend
      render json: { order: @order, message: 'Order created and email sent' }, status: :created
    else
      Rails.logger.error "Order creation failed: #{@order.errors.full_messages.join(', ')}"
      render json: { errors: @order.errors.full_messages }, status: :unprocessable_entity
    end
  end

def booking

  departureFlightNumber = params[:departureFlightNumber]

  @booking = Order.last

  @booking.flight_id=departureFlightNumber

  @booking.save

  render json: { booking: @booking, message: 'Flight added to order' }, status: :created

end 

  private

  def order_params
    params.require(:order).permit(:email, :total, :other_params)
  end
end


