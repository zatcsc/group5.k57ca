class WelcomeController < ApplicationController
  def home
  end
  def about
  	render "about"
  end
  def contact
  	render "contact"
  end  

  def map    
    if signed_in?
      render 'map'
    else
      redirect_to signin_path
    end
  end  
end
