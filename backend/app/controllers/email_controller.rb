class EmailController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:delivery]

  def delivery
    @passenger_info = params[:formData]
    @selectedDepartureFlight = params[:selectedDepartureFlight]
    @selectedReturnFlight = params[:selectedReturnFlight]
    @total = params[:total]
    @seatDeparture = params[:seatDeparture]
    @seatReturn = params[:seatReturn]


    # Send the email after setting the variables
    OrderMailer.order_confirmation(@passenger_info, @selectedDepartureFlight, @selectedReturnFlight, @total, @seatDeparture, @seatReturn).deliver_now

    # Return JSON response after sending the email
    render json: { success: true }
  end
end
