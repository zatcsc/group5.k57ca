class WelcomeController < ApplicationController
  def home
    render 'home'
  end
  def about
  	render "about"
  end
  def contact
  	render "contact"
  end  

  def map    
  	render "map"
  end  
end
