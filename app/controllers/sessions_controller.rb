class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(email: params[:session][:email])
    if user && user.authenticate(params[:session][:password])
      signin(user)
      redirect_to home_path
    else
      flash[:error] = 'Invaild email/password'
      render 'new'
    end
  end

  def destroy
    sign_out
    redirect_to root_url
  end
end
