require "test_helper"

class EmailControllerTest < ActionDispatch::IntegrationTest
  test "should get send" do
    get email_send_url
    assert_response :success
  end
end
