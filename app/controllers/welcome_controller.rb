class WelcomeController < ApplicationController
  def about
  	render "about"
  end
  def contact
  	render "contact"
  end  

  def map    
  	render "map"
  end
  
  def routedirection
  	render "routedirection"
  end

end
