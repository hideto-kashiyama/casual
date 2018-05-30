require 'test_helper'

class SCategoriesControllerTest < ActionController::TestCase
  setup do
    @s_category = s_categories(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:s_categories)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create s_category" do
    assert_difference('SCategory.count') do
      post :create, s_category: { category_id: @s_category.category_id, s_ctg: @s_category.s_ctg }
    end

    assert_redirected_to s_category_path(assigns(:s_category))
  end

  test "should show s_category" do
    get :show, id: @s_category
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @s_category
    assert_response :success
  end

  test "should update s_category" do
    patch :update, id: @s_category, s_category: { category_id: @s_category.category_id, s_ctg: @s_category.s_ctg }
    assert_redirected_to s_category_path(assigns(:s_category))
  end

  test "should destroy s_category" do
    assert_difference('SCategory.count', -1) do
      delete :destroy, id: @s_category
    end

    assert_redirected_to s_categories_path
  end
end
