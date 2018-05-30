class SCategoriesController < ApplicationController
  before_action :set_s_category, only: [:show, :edit, :update, :destroy]

  # GET /s_categories
  # GET /s_categories.json
  def index
    @s_categories = SCategory.all
  end

  # GET /s_categories/1
  # GET /s_categories/1.json
  def show
  end

  # GET /s_categories/new
  def new
    @s_category = SCategory.new
  end

  # GET /s_categories/1/edit
  def edit
  end

  # POST /s_categories
  # POST /s_categories.json
  def create
    @s_category = SCategory.new(s_category_params)

    respond_to do |format|
      if @s_category.save
        format.html { redirect_to @s_category, notice: 'S category was successfully created.' }
        format.json { render :show, status: :created, location: @s_category }
      else
        format.html { render :new }
        format.json { render json: @s_category.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /s_categories/1
  # PATCH/PUT /s_categories/1.json
  def update
    respond_to do |format|
      if @s_category.update(s_category_params)
        format.html { redirect_to @s_category, notice: 'S category was successfully updated.' }
        format.json { render :show, status: :ok, location: @s_category }
      else
        format.html { render :edit }
        format.json { render json: @s_category.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /s_categories/1
  # DELETE /s_categories/1.json
  def destroy
    @s_category.destroy
    respond_to do |format|
      format.html { redirect_to s_categories_url, notice: 'S category was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_s_category
      @s_category = SCategory.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def s_category_params
      params.require(:s_category).permit(:s_ctg, :category_id)
    end
end
