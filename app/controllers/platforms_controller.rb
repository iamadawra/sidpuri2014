class PlatformsController < ApplicationController
  http_basic_authenticate_with name: "sid2014admin", password: "siduction2014", except: [:index, :new, :create, :vote]
  before_filter :create_guest_if_needed
  # GET /platforms
  # GET /platforms.json
  def index
    @topics = Platform.search(params[:search]).find_with_reputation(:votes, :all, order: "votes desc")
    @platforms = Kaminari.paginate_array(@topics).page(params[:page]).per(10)

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @platforms }
    end
  end

  def admin
    @topics = Platform.search(params[:search]).find_with_reputation(:votes, :all, order: "votes desc")
    @platforms = Kaminari.paginate_array(@topics).page(params[:page]).per(10)

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @platforms }
    end
  end

  def vote
    value = params[:type] == "up" ? 1 : -1
    @platform = Platform.find(params[:id])
    #Replicate this line in console to update votes
    @platform.add_or_update_evaluation(:votes, value, current_user)
    redirect_to :back, notice: "Thank you for voting"
  end

  # GET /platforms/1
  # GET /platforms/1.json
  def show
    @platform = Platform.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @platform }
    end
  end

  # GET /platforms/new
  # GET /platforms/new.json
  def new
    @platform = Platform.new

    respond_to do |format|
      format.html # new.html.erb
      format.js
      format.json { render json: @platform }
    end
  end

  # GET /platforms/1/edit
  def edit
    @platform = Platform.find(params[:id])
  end

  # POST /platforms
  # POST /platforms.json
  def create
    @platform = Platform.new(params[:platform])
    @topics = Platform.search(params[:search]).find_with_reputation(:votes, :all, order: "votes desc")
    @platforms = Kaminari.paginate_array(@topics).page(params[:page]).per(5)

    respond_to do |format|
      if @platform.save
        format.html { 
          flash[:success] = "Congratulations! Your Platform was successfully created!"
          redirect_to action: "index"
        }
        format.json { render json: @platform, status: :created, location: @platform }
      else
        format.html{
          if @platform.errors.any?
            @platform_errors = @platform.errors.full_messages
          end
          flash[:error] = @platform_errors
          @platform.destroy
          render "index"
        }
        
        #format.html { render action: "new" }
        #format.json { render json: @platform.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /platforms/1
  # PUT /platforms/1.json
  def update
    @platform = Platform.find(params[:id])

    respond_to do |format|
      if @platform.update_attributes(params[:platform])
        format.html { redirect_to @platform, notice: 'Platform was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @platform.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /platforms/1
  # DELETE /platforms/1.json
  def destroy
    @platform = Platform.find(params[:id])
    @platform.destroy

    respond_to do |format|
      format.html { redirect_to platforms_url }
      format.json { head :no_content }
    end
  end

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end 
end
