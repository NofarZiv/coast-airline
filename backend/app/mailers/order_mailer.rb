class OrderMailer < ApplicationMailer
  default from: 'info@trevor-sullivan.com'

  def order_confirmation(passenger_info, selectedDepartureFlight, selectedReturnFlight)
    @passenger_info = passenger_info
    @selectedDepartureFlight = selectedDepartureFlight
    @selectedReturnFlight = selectedReturnFlight

    mail(to: "trevorjohnsullivan@gmail.com", subject: 'Order Confirmation')
  end
end