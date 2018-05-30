require 'test_helper'

class DynamicPagesControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get help" do
    get :help
    assert_response :success
  end

  test "should get ctg" do
    get :ctg
    assert_response :success
  end

  test "should get e100" do
    get :e100
    assert_response :success
  end

  test "should get e100_test" do
    get :e100_test
    assert_response :success
  end

end
