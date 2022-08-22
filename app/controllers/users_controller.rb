class UsersController < ApplicationController
  skip_before_action :authorize, only: :create

  # def create
  #   user = User.create!(user_params)
  #   session[:user_id] = user.id
  #   render json: user, status: :created
  # end

  def create 
    user = User.create!(user_params)
    if user.valid?
        session[:user_id] = user.id
        render json: user, status: :created
   else
        render json: { error: "Invalid user" }, status: 422
   end
end

  def show
    render json: @current_user
  end
  


  private

  def user_params
    params.permit( :username, :password, :email, :password_confirmation, :is_admin)
  end

end
