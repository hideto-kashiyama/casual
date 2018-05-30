class TdatesController < ApplicationController
  before_action :set_tdate, only: [:show, :edit, :update, :destroy]

  # GET /tdates
  # GET /tdates.json
  def index
    @tdates = Tdate.all
  end

  # GET /tdates/1
  # GET /tdates/1.json
  def show
  end

  # GET /tdates/new
  def new
    @tdate = Tdate.new
  end

  # GET /tdates/1/edit
  def edit
  end

  # POST /tdates
  # POST /tdates.json
  def create
    @tdate = Tdate.new(tdate_params)

    respond_to do |format|
      if @tdate.save
        format.html { redirect_to @tdate, notice: 'Tdate was successfully created.' }
        format.json { render :show, status: :created, location: @tdate }
      else
        format.html { render :new }
        format.json { render json: @tdate.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /tdates/1
  # PATCH/PUT /tdates/1.json
  def update
    respond_to do |format|
      if @tdate.update(tdate_params)
        format.html { redirect_to @tdate, notice: 'Tdate was successfully updated.' }
        format.json { render :show, status: :ok, location: @tdate }
      else
        format.html { render :edit }
        format.json { render json: @tdate.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /tdates/1
  # DELETE /tdates/1.json
  def destroy
    @tdate.destroy
    respond_to do |format|
      format.html { redirect_to tdates_url, notice: 'Tdate was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tdate
      @tdate = Tdate.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def tdate_params
      params.require(:tdate).permit(:dt, :cap, :par, :category_id, :product_id, :customer_id)
    end
end
