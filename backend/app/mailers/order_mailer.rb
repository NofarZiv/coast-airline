class OrderMailer < ApplicationMailer
  default from: 'info@trevor-sullivan.com'

  def order_confirmation(passenger_info, selectedDepartureFlight, selectedReturnFlight, total)
    @passenger_info = passenger_info
    @selectedDepartureFlight = selectedDepartureFlight
    @selectedReturnFlight = selectedReturnFlight
    @total = total

    mail(to: "trevorjohnsullivan@gmail.com", subject: 'Order Confirmation')
  end
end