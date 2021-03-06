class PlatformsController < ApplicationController
  http_basic_authenticate_with name: "sid2014admin", password: "siduction2014", except: [:index, :new, :create, :vote]
  before_filter :create_guest_if_needed
  # GET /platforms
  # GET /platforms.json
  def index
    # Default sort by platform
    flash[:success] = "Voting is now open, Cal Bears! #{view_context.link_to('Click here to vote now', 'http://vote.berkeley.edu/asucelection')}".html_safe
    @sortedBy = "platform"
    @topics = Platform.search(params[:search]).find_with_reputation(:votes, :all, order: "votes desc")
    @platforms = Kaminari.paginate_array(@topics).page(params[:page]).per(10)
    
    if (params[:sort] == "recent")
      @sortedBy = "recent"
      @topics = Platform.find( :all, :order => "created_at DESC")
      @platforms = Kaminari.paginate_array(@topics).page(params[:page]).per(10)
    end

    respond_to do |format|
      format.html # index.html.erb
      format.js
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
    # @sortedBy = "platform"
    # @topics = Platform.search(params[:search]).find_with_reputation(:votes, :all, order: "votes desc")
    # @platforms = Kaminari.paginate_array(@topics).page(params[:page]).per(10)

    @ipVar = request.remote_ip
    # voterResults = Voters.find(:all, :conditions => ['where ip = ?', "%#{search}%"@ipVar])
    voterResults = Voters.where('ip ILIKE ? AND platform = ?', "%#{@ipVar}%", params[:id].to_i)
    if (voterResults.empty?)
      @newVoter = Voters.new({:ip => @ipVar, :platform => params[:id].to_i}).save
      value = params[:type] == "up" ? 1 : -1
      @platform = Platform.find(params[:id])
      #Replicate this line in console to update votes
      @platform.add_or_update_evaluation(:votes, value, current_user)
      redirect_to platforms_path({:sort => params[:sort], :notice => "Thank you for voting"})
    else
      flash[:error] = "Sorry, you can only vote once!"
      # redirect_to :action => "index"
      redirect_to platforms_path({:sort => params[:sort], :notice => "Sorry, you can only vote once!"})
    end

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
