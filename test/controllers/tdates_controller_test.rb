require 'test_helper'

class TdatesControllerTest < ActionController::TestCase
  setup do
    @tdate = tdates(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:tdates)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create tdate" do
    assert_difference('Tdate.count') do
      post :create, tdate: { cap: @tdate.cap, category_id: @tdate.category_id, customer_id: @tdate.customer_id, dt: @tdate.dt, par: @tdate.par, product_id: @tdate.product_id }
    end

    assert_redirected_to tdate_path(assigns(:tdate))
  end

  test "should show tdate" do
    get :show, id: @tdate
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @tdate
    assert_response :success
  end

  test "should update tdate" do
    patch :update, id: @tdate, tdate: { cap: @tdate.cap, category_id: @tdate.category_id, customer_id: @tdate.customer_id, dt: @tdate.dt, par: @tdate.par, product_id: @tdate.product_id }
    assert_redirected_to tdate_path(assigns(:tdate))
  end

  test "should destroy tdate" do
    assert_difference('Tdate.count', -1) do
      delete :destroy, id: @tdate
    end

    assert_redirected_to tdates_path
  end
end
