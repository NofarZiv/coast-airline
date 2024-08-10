class EmailController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:delivery]

  def delivery

    puts params

    render json: { success:true }

    @passenger_info=params[:formData]
    @selectedDepartureFlight=params[:selectedDepartureFlight]
    @selectedReturnFlight=params[:selectedReturnFlight]
  

    OrderMailer.order_confirmation(@passenger_info, @selectedDepartureFlight,  @selectedReturnFlight).deliver_now

  end
end
