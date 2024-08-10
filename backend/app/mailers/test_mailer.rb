class TestMailer < ApplicationMailer
  default from: 'info@trevor-sullivan.com'

  def test_email
    mail(to: 'trevorjohnsullivan@gmail.com', subject: 'Test Email', body: 'This is a test email.')
  end
end