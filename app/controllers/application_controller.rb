class ApplicationController < ActionController::Base
  protect_from_forgery
  def create_guest_if_needed
    return if session[:user_id] # already logged in, don't need to create another one
    @user = User.new_guest
    @user.save
    session[:user_id] = @user.id
    # do anything else you need here...
  end
end
