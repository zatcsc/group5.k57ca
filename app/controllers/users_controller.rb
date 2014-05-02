class UsersController < ApplicationController
  def new
  	@user = User.new
  end
  def create
  	# @user = User.new(name: params[:name],email: params[:email],password: params[:password],password_confirmation: params)
  end
  def show
  	@user = User.find(params[:id])  	
  end
end
