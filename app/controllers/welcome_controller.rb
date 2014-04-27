class WelcomeController < ApplicationController
  def about
  	render "about"
  end
  
  def map    
  	render "map"
  end

  def routedirection
  	render "routedirection"
  end
  
  def submitData
    @jam_places = Jam.all
  end
  
  def add
    new_jam = Jam.create(:latitude => params[:jam_lat], :longtitude => params[:jam_lgn])
    if !new_jam.valid?
      flash[:error] = new_jam.errors.full_messages.join(" ").html_safe
    end  
    redirect_to :action => 'submitData'
  end

end
